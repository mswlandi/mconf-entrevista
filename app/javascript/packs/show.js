colorPalette = ["#481E9D", "#8D74C0", "#CA4B57", "#2B2D42", "#1C77C3", "#81B29A", "#E98039"]

formSubmit = document.querySelector('input[type="submit"]')
inputText = document.getElementById("message_content");

backgroundIsColored = false;

// Client-side form validation
formSubmit.onclick = (event) => {
    errorTags = document.getElementsByClassName("error");

    if (inputText.value.trim() == '') {
        event.preventDefault();
        Array.from(errorTags).forEach((errorTag) => {
            errorTag.style.display = "block";
        });
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

    // If the input is not empty, remove empty error message
    errorTags = document.getElementsByClassName("error");
    
    Array.from(errorTags).forEach((errorTag) => {
        errorTag.style.display = "none";
    });
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