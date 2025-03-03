// 加入 Cookies
function setCookie(key, value, exdays) {
    let d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = key + "=" + value + ";" + expires + ";path=/";
}

function getCookie(key) {
    let name = key + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1); // strim heading space of cookie parts
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length); // get the value part of cookie
        }
    }
    return "";
}