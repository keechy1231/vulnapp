           // Parse the query parameters from the URL
           const params = new URLSearchParams(window.location.search);
           let id = params.get('id'); // Retrieve the 'id' parameter from the URL
       
           // Default to ID 5 if no ID is provided
           if (!id) {
               id = 5; // Set the default ID
               // Update the URL to include ?id=5
               const newUrl = `${window.location.origin}${window.location.pathname}?id=${id}`;
               history.replaceState(null, '', newUrl); // Updates the URL without reloading
           }

           // Function to load the page based on the ID
           function loadPageById(id) {
               if (!id || isNaN(id)) {
                   alert('Invalid ID provided');
                   return;
               }
       
               // Construct the file path
               const filePath = `${id}.html`;
       
       
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
           loadPageById(id);