    // JavaScript code for form validation
	// Prevent form from submitting
  document.getElementById("inputField").addEventListener("change", function(x) {
    let input = document.getElementById("inputField");
    let regex = /^[a-zA-Z0-9]*$/;
  
    if (!regex.test(input.value)) {
      alert("Invalid!");
      x.preventDefault();
    }
    else {
      alert("Valid!");
    }
  });
      // Retrieve the input field value
    
      // Regular expression pattern for alphanumeric input

      // Check if the input value matches the pattern

        // Valid input: display confirmation and submit the form

        // Invalid input: display error message