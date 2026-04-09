function sliceString(text, start, end) {
    return text.slice(start, end);
}

function sliceFromStart(text, length) {
    return text.substring(0, length);
}

function sliceFromEnd(text, length) {
    return text.slice(-length);
}

const text = "Hello, World!";
console.log(sliceString(text, 0, 5));
console.log(sliceFromStart(text, 5));
console.log(sliceFromEnd(text, 6));
