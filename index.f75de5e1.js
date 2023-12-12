"use strict";
const body = document.querySelector("body");
const logo = document.querySelector(".logo");
const promise1 = new Promise((resolve, reject)=>{
    logo.addEventListener("click", ()=>{
        resolve();
    });
});
const promise2 = new Promise((resolve, reject)=>{
    setTimeout(()=>reject(new Error()), 3000);
});
promise1.then(()=>{
    const div = document.createElement("div");
    div.className = "message";
    div.innerText = "Promise was resolved!";
    body.appendChild(div);
}).catch(()=>{
    const div = document.createElement("div");
    div.className = "message error-message";
    div.innerText = "Promise was rejected!";
    body.appendChild(div);
});
promise2.then(()=>{
    const div = document.createElement("div");
    div.className = "message";
    div.innerText = "Promise was resolved!";
    body.appendChild(div);
}).catch(()=>{
    const div = document.createElement("div");
    div.className = "message error-message";
    div.innerText = "Promise was rejected!";
    body.appendChild(div);
});

//# sourceMappingURL=index.f75de5e1.js.map