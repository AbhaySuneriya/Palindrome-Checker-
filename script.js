///start JS code//

const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const result = document.getElementById("result");

checkButton.addEventListener("click", () => {
    const lowerReplaced = textInput.value.toLowerCase().replace(/[^a-z0-9]/g, "")

    if (textInput.value === "") {
        alert("Please input a value")
    } else if (textInput.value.length === 1) {
        result.innerText = `${textInput.value} is a palindrome`
        let span = document.createElement("Span");
        span.innerHTML = "\u00d7";
        result.appendChild(span);
    } else if (lowerReplaced === [...lowerReplaced].reverse().join("")) {
        result.innerText = `${textInput.value} is a palindrome`
        let span = document.createElement("Span");
        span.innerHTML = "\u00d7";
        result.appendChild(span);
    } else {
        result.innerText = `${textInput.value} is not a palindrome`
        let span = document.createElement("Span");
        span.innerHTML = "\u00d7";
        result.appendChild(span);
    }


});


///end JS code///