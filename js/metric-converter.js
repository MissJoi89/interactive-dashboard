// Use an event listener (like click) on your button to run the conversion logic.
document.getElementById("convert-btn").addEventListener("click", function(event) {
    event.preventDefault(); // prevent form submission

    // Use document.getElementById() to capture the values from your HTML number field.
    if (input_value === "") {
        document.getElementById("converter-message").innerHTML = "Please enter a valid numeric value.";
        return;
    }

    // Convert to numeric value using parseFloat()
    input_value = parseFloat(input_value);

    let selectElement = document.getElementById("conversionType");

    // Use document.getElementsByTagName() to get the selected index of the conversion type
    let options = document.getElementsByTagName("option");

    // Get selected index from the <select> element
    let selectedIndex = selectElement.selectedIndex;

    // Get the value of the selected <option>
    let selectedOption = options[selectedIndex].value;

    let convertedVal;
    let message = "";

    // Conversion logic
    switch (selectedOption) {
        case "inchesToCentimeters":
            convertedVal = input_value * 2.54;
            message = `${input_value} inches is ${convertedVal.toFixed(2)} centimeters`;
            break;

        case "feetToCentimeters":
            convertedVal = input_value * 30.48;
            message = `${input_value} feet is ${convertedVal.toFixed(2)} centimeters`;
            break;

        case "yardsToMeters":
            convertedVal = input_value * 0.91;
            message = `${input_value} yards is ${convertedVal.toFixed(2)} meters`;
            break;

        case "milesToKilometers":
            convertedVal = input_value * 1.61;
            message = `${input_value} miles is ${convertedVal.toFixed(2)} kilometers`;
            break;

        case "centimetersToInches":
            convertedVal = input_value * 0.39;
            message = `${input_value} centimeters is ${convertedVal.toFixed(2)} inches`;
            break;

        case "centimetersToFeet":
            convertedVal = input_value * 0.0328;
            message = `${input_value} centimeters is ${convertedVal.toFixed(2)} feet`;
            break;

        case "metersToYards":
            convertedVal = input_value * 1.09;
            message = `${input_value} meters is ${convertedVal.toFixed(2)} yards`;
            break;

        case "kilometersToMiles":
            convertedVal = input_value * 0.62;
            message = `${input_value} kilometers is ${convertedVal.toFixed(2)} miles`;
            break;

        default:
            message = "Error: Invalid conversion choice selected.";
    }

    // Use innerHTML to write the final result
    document.getElementById("converter-message").innerHTML = message;
});