var socket = io();

document.addEventListener("DOMContentLoaded", () => {
    var status = document.getElementById("status");
    var online = document.getElementById("online");
    var sendForm = document.getElementById("send-form");

    // initialize name field with cookie
    let name = getCookie("name");
    if (name) {
        document.getElementById("input-user").value = name;
    }

    //...
    // Listener: submit message
    sendForm.addEventListener("submit", function (e) {
        e.preventDefault();
    
        let valid = true;
        let current_time = new Date();
        let formData = {"timestamp" : `${current_time.getFullYear()}-${String(current_time.getMonth()+1).padStart(2, '0')}-${String(current_time.getDate()).padStart(2, '0')}  ${String(current_time.getHours()).padStart(2, '0')}:${String(current_time.getMinutes()).padStart(2, '0')}`};
        let formChild = sendForm.children;

        for (let i = 0; i < sendForm.childElementCount; i++) {
            let child = formChild[i];
            if (child.name !== "") {
                let val = child.value.trim();
                if (val === "" || !val) { // submit string is invalid if empty after trimmed. (for both name and msg)
                    valid = false;
                    child.classList.add("error");
                } else { 
                    child.classList.remove("error");
                    formData[child.name] = val;
                }
            }
        }

        // ok 為真才能送出
        if (valid) {
            socket.emit("send", formData);
            setCookie("user", document.getElementById('input-user').value.trim());
            document.getElementById('input-msg').value = "";
        }
    
    });

    // Action: Add message entry and scroll to bottom
    socket.on("msg", function (d) {
        let msgBox = document.createElement("span");
            msgBox.className = "msg";
        let nameBox = document.createElement("span");
            nameBox.className = "name";
        let timeBox = document.createElement("span");
            timeBox.className = "time";
        
        let msgEntry = document.createElement("div")
            msgEntry.className = "msg-entry";
            
        let name = document.createTextNode(d.user);
        let msg = document.createTextNode(d.msg);
        let time = document.createTextNode(d.timestamp);

        nameBox.appendChild(name);
        msgBox.appendChild(msg);
        timeBox.appendChild(time);
        msgEntry.appendChild(nameBox);
        msgEntry.appendChild(msgBox);
        msgEntry.appendChild(timeBox);
        content.appendChild(msgEntry);
        // - content
        //     - msgEntry
        //         - nameBox
        //         - msgBox
        //         - timeBox

        // scroll
        content.scrollTop = content.scrollHeight - content.clientHeight;
    });

    socket.on("connect", function () {
        status.innerText = "Connected.";
    });

    socket.on("disconnect", function () {
        status.innerText = "Disconnected.";
    });

    socket.on("online", function (amount) {
        online.innerText = amount;
    });

});
