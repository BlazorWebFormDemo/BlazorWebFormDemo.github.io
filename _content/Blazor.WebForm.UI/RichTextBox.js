function RichTextBox_InputHandler(event) {
    event.target.__hasInput = true;
    return true;
}
function RichTextBox_BlurHandler(event) {
    var hasInput = event.target.__hasInput ?? false;
    event.target.__hasInput = false;
    return hasInput;
}