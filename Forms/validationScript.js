// JavaScript code for form validation
// By Collin Belik

// Retrieve the input field  & form value
const inputField = document.getElementById('inputField');
const form = document.getElementById('myForm');

// form event listener that submits an event
form.addEventListener('submit', function(event){
    
    // Prevent form from submitting
    event.preventDefault();

    // Regular expression pattern for alphanumeric input
    function validatAlpha(value) {
        const regex = /^[a-zA-Z0-9]+$/;
        return regex.test(value);
    }

    // clear message
    const existingErrorMessage = document.getElementById('errorMessage');
    const existingSucessMessage = document.getElementById('sucessMessage');

    if(existingErrorMessage) {
        existingErrorMessage.remove();
    }
    if(existingSucessMessage) {
        existingSucessMessage.remove();
    }


    if(!validatAlpha(inputField.value)) {
        const errorMessage = document.createElement('p');
        errorMessage.id = 'errorMessage';
        errorMessage.style.color = 'red';
        errorMessage.textContent = 'Input must be Alphanumerical!';
        
        // display error message
        form.appendChild(errorMessage);

    } else {
        const sucessMessage = document.createElement('p');
        sucessMessage.id = 'sucessMessage';
        sucessMessage.style.color = 'green';
        sucessMessage.textContent = 'Form Sucessfully submitted!';

        // success message
        form.appendChild(sucessMessage);
    }

});


