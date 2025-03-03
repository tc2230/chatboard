const redis = require("redis");
const client = redis.createClient();

client.connect();

client.hSet('user-session:123', {
    name: 'John',
    surname: 'Smith',
    company: 'Redis',
    age: 29
})

// let userSession = await client.hGetAll('user-session:123');
// console.log('-----------------------');
// console.log(JSON.stringify(userSession, null, 2));
// console.log('-----------------------');


async function hSet(client, key, data) {
    res = await client.hSet(key, data);
    return res
}

async function s() {
    r = await hSet(client, 'test:tag', {
        a: 1, 
        b: 2,
        c: 3
    })
    return r
}

console.log(s());
console.log(hSet(client, 'test:tag22', {a: 1, b: 2, c: 3}))

// Set a string value
client.set('mystring', 'Hello, Redis!', (err, reply) => {
    if (err) throw err;
    console.log(123);
    console.log(reply); // Should print "OK"
});
// // console.log(r);

client.quit();

console.log('---------- start A ----------')

const myPromise = new Promise((resolve, reject) => {
    // 模擬一個非同步操作
    setTimeout(() => {
      const randomNumber = Math.random();
      console.log('Doing something... A ');
      if (randomNumber > 0.66) {
        resolve('Success! A '); 
      } else if (randomNumber > 0.33) {
        resolve('Failed. A ');
      } else {
        reject('REJECT A ')
      }
    }, 1000);
  });

myPromise
    .then((result) => {
        console.log(result); // 如果 Promise 成功，印出 'Success!'
    })
    .catch((result) => {
        console.error(result); // 如果 Promise 失敗，印出錯誤訊息
    });

console.log('---------- task send.  A ----------')

// Async practice -----------------------------------------------------------------------------------------------------

// function myAsync() {
//     return new Promise((resolve, reject) => {
//         // 模擬一個非同步操作
//         setTimeout(() => {
//           const randomNumber = Math.random();
//           console.log('Doing something... B ');
//           if (randomNumber > 0.5) {
//             resolve('Success! B '); 
//           } else {
//             resolve('Failed. B ');
//           } 
//         }, 1000);
//       })
// }

// async function exec() {
//     console.log('---------- start this Async B ----------');
//     const result = await myAsync();
//     console.log(result);
//     console.log('---------- done Async B ----------');
// }

// // console.log('---------- start B  ----------')
// console.log('---------- start this Sync A ----------');
// console.log('---------- done this Sync A ----------');
// a = exec();
// console.log('---------- start this Sync C ----------');
// console.log('---------- done this Sync C ----------');
// console.log('---------- start this Sync D ----------');
// console.log('---------- done this Sync D ----------');
// // console.log('---------- task send.  B ----------')