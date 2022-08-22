function getInputValueById(inputId) {
    const inputField = document.getElementById(inputId);
    const inputString = inputField.value;
    const inputValue = parseFloat(inputString);
    inputField.value = "";
    return inputValue;
}

function getTextValueById(textId) {
    const textField = document.getElementById(textId);
    const textString = textField.innerText;
    const textValue = parseFloat(textString);
    return textValue;
}

function arrayLength() {
    const liLength = document.getElementsByClassName("single-list");
    return liLength;
}

function setTextValueById(textId, textValue) {
    const textElementId = document.getElementById(textId);
    textElementId.innerText = textValue;
    return textElementId;
}