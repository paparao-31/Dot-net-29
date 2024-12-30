/*Que 1 :
--------
	Coffee Machine Simulator


Simulate a coffee machine that:

	-> Prepares coffee in 3 seconds.
	-> Serves the coffee after preparation.
	-> Cancels the process if the user decides not to wait.
Requirements:
	-> Use setTimeout to simulate the coffee preparation time.
	-> Pass a callback function to serve the coffee after preparation.
	-> Allow the user to cancel the coffee preparation using clearTimeout.

====================================================================================================*/
const startButton = document.getElementById('startButton');
const cancelButton = document.getElementById('cancelButton');
const statusDiv = document.getElementById('status');

let coffeeTimeout;

const serveCoffee = () => {
    statusDiv.textContent = "Your coffee is ready! Enjoy! ☕";
};

startButton.addEventListener('click', () => {
    statusDiv.textContent = "Preparing your coffee...";
    coffeeTimeout = setTimeout(() => {
        serveCoffee();
    }, 5000);
});

cancelButton.addEventListener('click', () => {
    clearTimeout(coffeeTimeout);
    statusDiv.textContent = "Coffee preparation canceled.";
});
