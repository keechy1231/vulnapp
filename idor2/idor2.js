// Set Id to 5
let userId;

if (localStorage.getItem('Id') === null) {
    userId = 5;
    localStorage.setItem('Id', userId);
} else {
    userId = localStorage.getItem('Id');
}

// Parse the query parameters from the URL
const params = new URLSearchParams(window.location.search);

// Function to load the page based on the ID
function loadPageById(userId) {
    if (!userId || isNaN(userId)) {
        alert('Invalid ID provided');
        return;
    }

    // Construct the file path
    const filePath = `${userId}.html`;

    // Fetch the content of the HTML file and handle it
    fetch(filePath)
        .then((response) => {
            if (!response.ok) {
                throw new Error('User not found');
            }
            return response.text();
        })
        .then((html) => {
            // Insert the HTML content into the page
            document.getElementById('content').innerHTML = html;
        })
        .catch((error) => {
            alert(error.message);
        });
}

// Call the function with the ID (defaulted to 5 if missing)
loadPageById(userId);