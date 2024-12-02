// Get references to the input field and the output paragraph
const inputField = document.getElementById('userInput');
const output = document.getElementById('output');

// Add an event listener for the input event
inputField.addEventListener('keydown', (event) => {
    if (event.key === 'Enter'){
        const newMessage = document.createElement('p');
        newMessage.innerHTML = inputField.value;
    // Set the text of the output paragraph to the input value
        output.appendChild(newMessage);
        inputField.value = '';
    }
});