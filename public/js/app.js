// console.log("Client side JS file is loaded");



const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const messageOne = document.querySelector("#message-1");
const messageTwo = document.querySelector("#message-2");


weatherForm.addEventListener("submit", (e) => {
    
    const location = search.value;

    fetch("/weather?address="  + location )
        .then(response => response.json())
        .then(data => {
            if(data.error){
                messageOne.textContent = data.error
            }else{
                messageTwo.textContent = data.location + " -- " + data.forecast;
            }  
        });
    

    e.preventDefault();
});
