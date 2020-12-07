// referencing all textareas and btns
var txtInput = document.querySelector("#inputText")
var btnTranslate = document.querySelector("#translateBtn")
var txtOutput = document.querySelector("#outputBox")

//api url
// var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

var serverURL = "https://api.funtranslations.com/translate/vulcan.json"

// changing url by adding input text
function getNewURL(text) {
    return serverURL + "?" + "text=" + text
}

//click button wiring
function onBtnClick() {
    var textInput = txtInput.value
    fetch(getNewURL(textInput))
    .then(res => res.json())
    .then(translation => {
        var translatedTxt = translation.contents.translated
        txtOutput.innerText = translatedTxt
    })
}

btnTranslate.addEventListener("click", onBtnClick)