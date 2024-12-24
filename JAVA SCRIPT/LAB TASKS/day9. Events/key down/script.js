/*que 2 :
--------
	Write a 'JavaScript' program 
    to add the keydown event to the input field.

	-> create a function keyDown() and on click 
    of the input print "enter key pressed" on the console. */

    function keydownEvent(event) {
    // Check if the pressed key is the Enter key
    if (event.key == "Enter") {
        console.log("Enter key pressed");
    } else {
        console.log("Key pressed: ", event.key);
    }
}

function keyupEvent() {

    console.log("Key up event detected!");
}
