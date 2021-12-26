var btn = document.querySelector("#Translate_Button");
var inputtxt = document.querySelector("#inputtext");
var outputdisplay = document.querySelector("#output");



function clickEventHandler(){
    outputdisplay.innerText="Bajasayakala"+ " " + inputtxt.value;
};
btn.addEventListener("click", clickEventHandler)