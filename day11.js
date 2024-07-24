//Task 1: Create a promise that resolves with a message after a 2-second timeout and log the message to the console.
// const promise1 = new Promise((res, rej) => {
//     setTimeout(() => res('Resolved message'), 2000)
// })
//promise1.then(console.log)
//Task 2: Create a promise that rejects with an error message after a 2-second timeout and handle the error
// const promise2 = new Promise((res, rej) => {
//     setTimeout(() => rej('Rejection message'), 2000)
// })
// promise2.catch(console.log)
//Task 3: Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order.
// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         new Promise((res, rej) => {
//             setTimeout(() => res('response'), 2000)
//         }).then(res => {
//             console.log(res);
//             resolve('data')
//         })
//     }, 2000)
// })
// promise3.then(console.log)


// function fetchData(url, id) {
//     return new Promise((res, rej) => {
//         setTimeout(() => res(`data from server ${id}`), 2000)
//     })
// }

// fetchData('url1', 1)
//     .then(data => {
//         console.log(data);
//         return fetchData('url2', 2)
//     })
//     .then(data => {
//         console.log(data);
//         return fetchData('url3', 3)
//     })
//     .then(console.log)

//Task 4: Write an async function that waits for a promise to resolve and then logs the resolved value.
// async function task4() {
//     try {
//         const data = await new Promise((res, rej) => {
//             setTimeout(() => res(1), 1000)
//         })
//         console.log(data)
//     }
//     catch (err) {
//         console.log(err)
//     }
// }
// task4();

//Task 5: Write an async function that handles a rejected promise using try-catch and logs the error.

// async function task5() {
//     try {
//         const data = await new Promise((res, rej) => {
//             setTimeout(() => rej('promise rejected'), 1000)
//         })

//     }
//     catch (err) {
//         console.log(err)
//     }
// }
// task5();

//Task 6: Use the fetch API  to get data from a public API  and log the response data to the console using promises.
// const p = fetch('https://dummyjson.com/products')
// p.then(res => res.json()).then(data => { console.log(data.products) }).catch(console.log)

//Task 7: Use the fetch API  to get data from a public API and log the response data to console using async/await
// async function fetchData() {
//     const data = await (await fetch('https://dummyjson.com/products')).json();

//     console.log(data.products);
// }
// fetchData()

// //Task 8: Use Promise.all to wait for multiple promises to resolve and then log all their values.
// const p1 = new Promise((res, rej) => {
//     setTimeout(() => res('p1'), 1000)
// })
// const p2 = Promise.resolve('p2');
// const p3 = Promise.resolve('p3');
// Promise.all([p1, p2, p3]).then(console.log).catch(console.log)

//Task 9: Use Promise.race to log the value of the first promise that settles among multiple promises
const p1 = new Promise((res, rej) => {
    setTimeout(() => res('p1'), 1000)
})
const p2 = Promise.reject('p2');
const p3 = Promise.reject('p3');
Promise.race([p1, p2, p3]).then(console.log).catch(console.log)
