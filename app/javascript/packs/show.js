colorPalette = ["#481E9D", "#8D74C0", "#CA4B57", "#2B2D42", "#1C77C3", "#81B29A", "#E98039"]

formSubmit = document.querySelector('input[type="submit"]')
inputText = document.getElementById("message_content");

backgroundIsColored = false;

// Toggle error, if there's an error, colors the input's border red and shows error message below
function setError(thereIsError, message) {
    errorTag = document.getElementById("error");

    if (thereIsError) {
        errorTag.innerHTML = message;
        errorTag.style.opacity = 1;
        inputText.classList.add("invalid");
    }
    else {
        errorTag.style.opacity = 0;
        inputText.classList.remove("invalid");
    }
}

// Client-side form validation
formSubmit.onclick = (event) => {
    if (inputText.value.trim() == '') {
        event.preventDefault();
        setError(true, "Write something!");
    }
}

inputText.oninput = () => {
    // Checks wether there's a Mconf (case insensitive) and toggles the background color accordingly
    body = document.getElementsByTagName("body")[0];

    if (inputText.value.toLowerCase().includes("mconf")) {
        if (!backgroundIsColored) {
            backgroundIsColored = true;
            randomColor = colorPalette[Math.floor(Math.random() * colorPalette.length)];
            body.style.background = randomColor;
        }
    }
    else if (backgroundIsColored){
        backgroundIsColored = false;
        body.style.background = 'white';
    }

    // If the input is not empty, remove error message
    if (inputText.value.trim() != '') {
        setError(false);
    }
};

// Stylize occurences of "Mconf" in the messages
window.onload = () => {
    messages = document.getElementsByClassName("content");
    mconfString = '<span style="color: randomColor">Mconf</span>'

    Array.from(messages).forEach((tag) => {
        randomColor = colorPalette[Math.floor(Math.random() * colorPalette.length)];
        tag.innerHTML = tag.innerHTML.replace(/Mconf/g, mconfString.replace("randomColor", randomColor));
    });
}