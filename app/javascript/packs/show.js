form = document.getElementsByTagName("form")[0];
inputText = document.getElementById("message_content");

backgroundIsColored = false;

form.onsubmit = (event) => {
    errorTags = document.getElementsByClassName("error");

    if (inputText.value.trim() == '') {
        event.preventDefault();
        Array.from(errorTags).forEach((errorTag) => {
            errorTag.style.display = "block";
        });
    }
};

inputText.oninput = () => {
    colorPalette = ["#481E9D", "#8D74C0", "#CA4B57", "#2B2D42", "#1C77C3", "#81B29A", "#E98039"]
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
};