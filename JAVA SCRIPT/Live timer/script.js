    let timerInterval; // To hold the interval ID
    let initialDuration = 300; // Default duration (5 minutes)
    let timeRemaining = initialDuration; // Time remaining

    // Function to update live time
    function updateLiveTime() {
      const now = new Date();
      const timeString = now.toLocaleTimeString();
      document.getElementById('liveTime').textContent = `Live Time: ${timeString}`;
    }

    // Function to start the reverse timer
    function startReverseTimer() {
      clearInterval(timerInterval); // Clear any existing interval
      document.body.style.backgroundColor = "#4caf50"; // Change background color to green
      timerInterval = setInterval(() => {
        const minutes = Math.floor(timeRemaining / 60);
        const seconds = timeRemaining % 60;

        document.getElementById('reverseTimer').textContent =
          `Reverse Timer: ${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

        if (timeRemaining <= 0) {
          clearInterval(timerInterval);
          document.getElementById('reverseTimer').textContent = "Time's up!";
        }

        timeRemaining--;
      }, 1000);
    }

    // Function to stop the timer
    function stopReverseTimer() {
      clearInterval(timerInterval); // Pause the timer
      document.body.style.background = "linear-gradient(135deg, #ff9a9e, #fad0c4)"; // Animated gradient background
    }

    // Function to reset the timer
    function resetReverseTimer() {
      clearInterval(timerInterval); // Stop the timer
      timeRemaining = initialDuration; // Reset the time
      const minutes = Math.floor(timeRemaining / 60);
      const seconds = timeRemaining % 60;

      document.getElementById('reverseTimer').textContent =
        `Reverse Timer: ${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

      // Change the text color randomly
      const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
      document.querySelectorAll('.timer').forEach(element => {
        element.style.color = randomColor;
      });
    }

    // Function to display the current date
    function displayCurrentDate() {
      const now = new Date();
      const dateString = now.toLocaleDateString();
      document.getElementById('currentDate').textContent = `Current Date: ${dateString}`;
    }

    // Initialize
    function init() {
      updateLiveTime();
      setInterval(updateLiveTime, 1000); // Update live time every second

      resetReverseTimer(); // Initialize reverse timer
      displayCurrentDate(); // Display the current date

      // Add event listeners for buttons
      document.getElementById('startButton').addEventListener('click', startReverseTimer);
      document.getElementById('stopButton').addEventListener('click', stopReverseTimer);
      document.getElementById('resetButton').addEventListener('click', resetReverseTimer);
    }

    // Run the init function when the page loads
    window.onload = init;