// Fetch the JSON data from userData.json
fetch('fech.json')
    .then(response => response.json()) // Convert response to JSON
    .then(data => {
        // Get the result div
        const resultDiv = document.getElementById('result');
        
        // Loop through the data and create a div for each user name
        data.forEach(user => {
            const userDiv = document.createElement('div');
            userDiv.classList.add('user');
            userDiv.textContent = user.name; // Set the user name text
            resultDiv.appendChild(userDiv); // Append to the result div
        });
    })
    .catch(error => {
        console.error('Error fetching the data:', error);
        const resultDiv = document.getElementById('result');
        resultDiv.innerHTML = 'Failed to load data';
    });