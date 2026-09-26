# Sarina's Interactive Productivity Dashboard

*This project is a web-based dashboard built for WEB-115 to demonstrate interactive JavaScript features.*

## TODO: Future Enhancements
- [ ] Add a metric conversion tool.
- [ ] Integrate a task list with array storage.
- [ ] Add JavaScript logic for a live clock.
- [X] Add a weekly task goal calculator

## Imperial/Metric Converter

The purpose of this app is to perform both "Imperial to Metric" and "Metric to Imperial" conversions.

The units this app will convert are inches, feet, yards, miles, centimeters, meters, and kilometers.

### Logic and Psuedocode

BEGIN
    // Declare local variables
    DECLARE Real userVal
    DECLARE Real convertedVal
    DECLARE Integer userNum

    // Display a menu of conversion options
    DISPLAY "--- US Imperial to Metric ---"
    DISPLAY "1. Inches to Centimeters"
    DISPLAY "2. Feet to Centimeters"
    DISPLAY "3. Yards to Meters"
    DISPLAY "4. Miles to Kilometers"

    DISPLAY "--- Metric to US Imperial ---"
    DISPLAY "5. Centimeters to Inches"
    DISPLAY "6. Centimeters to Feet"
    DISPLAY "7. Meters to Yards"
    DISPLAY "8. Kilometers to Miles"
    
    // Accept user selections
    DISPLAY "Enter the number option that corresponds to the conversion you wish to make: "
    INPUT userNum
    
    DISPLAY "Enter the numeric value you want to convert: "
    INPUT userVal

    // Process conversion based on user choice
    IF userNum == 1 THEN
        SET convertedVal = userVal * 2.54
        OUTPUT userVal, " inches = ", convertedVal, " centimeters"
        
    ELSE IF userNum == 2 THEN
        SET convertedVal = userVal * 30.48
        OUTPUT userVal, " feet = ", convertedVal, " centimeters"
        
    ELSE IF userNum == 3 THEN
        SET convertedVal = userVal * 0.91
        OUTPUT userVal, " yards = ", convertedVal, " meters"
        
    ELSE IF userNum == 4 THEN
        SET convertedVal = userVal * 1.61
        OUTPUT userVal, " miles = ", convertedVal, " kilometers"
        
    ELSE IF userNum == 5 THEN
        SET convertedValue = userVal * 0.39
        OUTPUT userVal, " centimeters = ", convertedVal, " inches"
        
    ELSE IF userNum == 6 THEN
        SET convertedVal = userVal * 0.0328
        OUTPUT userVal, " centimeters = ", convertedVal, " feet"
        
    ELSE IF userNum == 7 THEN
        SET convertedValue = userVal * 1.09
        OUTPUT userVal, " meters = ", convertedVal, " yards"
        
    ELSE IF userNum == 8 THEN
        SET convertedVal = userVal * 0.62
        OUTPUT userVal, " kilometers = ", convertedVal, " miles"        
    
    ELSE
        OUTPUT "Error: Invalid conversion choice selected."
    ENDIF

END

## Magic Eight Ball
 
The Magic Eight Ball is an interactive game that allows users to type a yes/no question and receive a randomly generated response when clicking on the Magic Eight Ball image.
 
### Features
- Uses an array to store possible responses for the Magic Eight Ball.
- Randomly selects an answer
- Validates user input and will prompt for a question if nothing is entered.
- Displays the selected answer inside the Magic Eight Ball.
- Allows users to reset the game and ask a new question.
- Includes an option to add custom responses
- Logs newly added responses and the current number of available responses to the browser console.

### Weekly Task Goals

*This feature will calculate a user’s task targets based on daily goals and weekly bonuses.*
