// Get references to the input field and the output paragraph
const inputField = document.getElementById('userInput');
const output = document.getElementById('output');

// Add an event listener for the input event
inputField.addEventListener('keydown', (event) => {
    if (event.key === 'Enter'){
        const newMessage = document.createElement('textarea')
        newMessage.innerHTML = inputField.value;
    // Set the text of the output paragraph to the input value
        const vulnerableDiv = document.createElement('div')
        vulnerableDiv.innerHTML = `<textarea>${inputField.value}`
        output.appendChild(vulnerableDiv);
        inputField.value = '';
    }
});