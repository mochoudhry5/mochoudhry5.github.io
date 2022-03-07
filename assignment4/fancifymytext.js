function bigger() {
    let words = document.getElementById("textarea");
    words.style.fontSize="24pt";
}

function fancy() {
    let check = document.getElementById("fancy");
    let words = document.getElementById("textarea");
    if(check.checked) {
        words.style.fontWeight = "bold";
        words.style.color = "blue";
        words.style.textDecoration = "underline blink";
    } else {
        words.style.fontWeight = "normal";
        words.style.color = "black";
        words.style.textDecoration = "none";
    }
}

function moo() {
    let words = document.getElementById("textarea");
    let per = words.value.split(".");
    words.value = per.join("-Moo.");
}

