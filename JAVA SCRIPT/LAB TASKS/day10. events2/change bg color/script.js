/*Que 1 :
--------
	Change Body Color with Random Colors on Button Click

You are creating a webpage where users can click a button to 
change the background color of the entire page to a random color. 
This can be useful for creating interactive and visually appealing web applications.

Steps:

	-> Create an HTML file with a button.

	-> Add a JavaScript function that generates a random color.

	-> Attach an event listener to the button to change the background color when clicked. */


        // Function to generate a random color in hexadecimal format
        
        function getRandomColor() {
            const letters = '0123456789abcdef';
            let color = '#';
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() *16)];
            }
            return color;
        }


        // Event listener to change background color on button click
        document.getElementById('changeColorButton').addEventListener('click', () => {
            document.body.style.backgroundColor = getRandomColor();
        });
    