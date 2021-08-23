form = document.getElementsByTagName("form")[0];

error_tags = document.getElementsByClassName("error");

form.onsubmit = (event) => {
    inputText = document.getElementById("message_content");
    if (inputText.value.trim() == '') {
        event.preventDefault();
        Array.from(error_tags).forEach((error_tag) => {
            error_tag.style.display = "block";
        });
    }
};