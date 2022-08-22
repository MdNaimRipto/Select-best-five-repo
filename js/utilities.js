function getInputValueById(inputId) {
    const inputField = document.getElementById(inputId);
    const inputString = inputField.value;
    const inputValue = parseInt(inputString);
    inputField.value = "";
    return inputValue;
}

function getTextValueById(textId) {
    const textField = document.getElementById(textId);
    const textString = textField.innerText;
    const textValue = parseInt(textString);
    return textValue;
}

function arrayLength() {
    const Length = document.getElementsByClassName("single-list");
    return Length;
}

function setTextValueById(textId, textValue) {
    const textElementId = document.getElementById(textId);
    textElementId.innerText = textValue;
    return textElementId;
}