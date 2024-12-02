   // Function to load the header HTML content into the page
   window.onload = function() {
    // Fetch the header file and insert it into the 'header-container' div
        fetch('../header.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('header-container').innerHTML = data;
            })
            .catch(error => console.error('Error loading the header:', error));
    };