"use strict";

function myConsole(state, status=''){
    let message, alertClass
    switch (state) {
        case 1:
            message = "State 1: Prepare";
            alertClass = "alert-primary";
            break;
        case 2:
            message = "State 2: Sending";
            alertClass = "alert-primary";
            break;
        case 3:
            message = "State 3: Changing";
            alertClass = "alert-warning";
            break;
        case 4:
            message = "State 4: Success";
            alertClass = "alert-success";
            break;
        case 5:
            message = "State 5: Not found";
            alertClass = "alert-danger";
            break;
        case 6:
            message = "State 6: Error"+status;
            alertClass = "alert-danger";
            break;
        default:
            break;
    }

    let text = `<div class="alert ${alertClass}">${message}</div>`;
    document.getElementById('console').innerHTML+=text;
}

function createXHR(){
    let xhr = false;

    if (window.XMLHttpRequest){
        xhr = new XMLHttpRequest();
        xhr.overrideMimeType("text/plain; charset=x-user-defined");
    } else if(windiw.ActiveXObject){
        try {
            xhr = new ActiveXObject("Microsoft.XMLHTTP");
        }catch(CatchException){
            xhr = new ActiveXObject("Msxml2.XMLHTTP");
        }
    }

    return xhr;

}

function sendRequest(){
    const request = createXHR();
    const url = "https://reqres.in/api/products";

    if(!request){
        console.error("No request yet");
    }else{
        request.onreadystatechange = function(){
            switch (request.readyState) {
                case 1:
                    myConsole(1);
                    break;
                case 2:
                    myConsole(2);
                    break;
                case 3:
                    myConsole(3);
                    break;
                case 4:
                    if(request.status == 200){
                    myConsole(4);
                    document.querySelector('#result').innerHTML=`<h3>${request.responseText}</h3>`
                }else if(request.status==404){
                    myConsole(5);
                }else{
                    myConsole(6, request.status);
                }
                    break;
                default:
                    break;
            }
        }
    request.open("GET", url, true);
    request.send();
    }
}

const sendHR = (method, url, data) => {
    const promise = new Promise((resolve, reject)=>{
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        if(data){
            xhr.setRequestHeader('Content-Type', 'application/json');
        }
        xhr.onload = () =>{
            if(xhr.status>=400){
                reject(xhr.response);
            } else{
                resolve(xhr.response);
            }
        }
        xhr.onerror = () => {
            reject("Something went wrong!");
        }
        xhr.send(JSON.stringify(data));
    });
    return promise;
}

const getData = () => {
    sendHR('GET', "https://reqres.in/api/products/2").then(response=>{
        myConsole(4);
    document.getElementById('result').innerHTML=`<h3>${JSON.stringify(response)}</h3>`;
    });
}

(function(){
    document.querySelector('.runScript').addEventListener('click', getData);
})()