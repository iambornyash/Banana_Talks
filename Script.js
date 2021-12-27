var btn = document.querySelector("#Translate_Button");
var inputtxt = document.querySelector("#inputtext");
var outputdisplay = document.querySelector("#output");


var serverurl = "https://api.funtranslations.com/translate/minion.json" //connect for translation to this server

function converting_translation_url(input){                      //function functionname(value)
    return serverurl + "?" + "text=" + input                //serverurl gets the translated version 
                                                            //"text=" key; input is value      
}

function errorHandler(error){                               //When error occurs
   console.log("Error Occured", error);
   alert("ERROR OCCURED, PLEASE TRY AFTER SOMETIME!") 
}

function clickEventHandler(){                               //When click happens
    var input_Text = inputtxt.value                         //Read the input text
   
   //Connecting/calling server for processing

    fetch(converting_translation_url(input_Text))             //Fetch to serverurl to get the response got through inputtext      
    .then(response => response.json())                      //Convert the response to json response
    .then(json => {                                         //Then from json response

           var translatedText = json.contents.translated;   //Get the translated text
           outputdisplay.innerText = translatedText;     //Display the translatedText

    })
    .catch(errorHandler)
};
btn.addEventListener("click", clickEventHandler)