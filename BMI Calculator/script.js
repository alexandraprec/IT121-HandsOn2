// Function to convert height from inches to centimeters
function inchesToCentimeters(inches) {
    return inches * 2.54;
}

// Function to convert weight from pounds to kilograms
function poundsToKilograms(pounds) {
    return pounds * 0.453592;
}

// Function to calculate BMI
function calculateBMI(heightInCm, weightInKg) {
    // BMI formula: weight (kg) / (height (m) * height (m))
    const heightInMeters = heightInCm / 100;
    return (weightInKg / (heightInMeters * heightInMeters)).toFixed(2);
}

// Function to handle button click
function handleClick() {
    const heightInput = document.getElementById('heightInput');
    const weightInput = document.getElementById('weightInput');
    const resultsDiv = document.getElementById('results');

    // Get values from inputs
    const heightInches = parseFloat(heightInput.value);
    const weightPounds = parseFloat(weightInput.value);

    // Validate inputs
    if (isNaN(heightInches) || isNaN(weightPounds) || heightInches <= 0 || weightPounds <= 0) {
        resultsDiv.textContent = 'Please enter valid positive numbers.';
        resultsDiv.style.color = 'red';
    } else {
        // Convert height and weight
        const heightCm = inchesToCentimeters(heightInches);
        const weightKg = poundsToKilograms(weightPounds);

        // Calculate BMI
        const bmi = calculateBMI(heightCm, weightKg);

        // Display results
        resultsDiv.textContent = `BMI: ${bmi}`;
        resultsDiv.style.color = 'black';
    }
}

// Add event listener to the calculate button
const calculateBtn = document.getElementById('calculateBtn');
calculateBtn.addEventListener('click', handleClick);
