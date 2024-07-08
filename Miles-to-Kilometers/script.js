// Conversion function from miles to kilometers
function convertMilesToKm(miles) {
    const kilometers = miles * 1.60934;
    return kilometers.toFixed(4); // Round to 4 decimal places
  }
  
  // Function to handle button click
  function handleConvertClick() {
    const milesInput = document.getElementById('milesInput');
    const resultElement = document.getElementById('result');
  
    // Get value from input and convert it
    const miles = parseFloat(milesInput.value);
    if (!isNaN(miles)) {
      const kilometers = convertMilesToKm(miles);
      resultElement.textContent = `The distance of ${miles} miles is equal to ${kilometers} kilometers.`;
    } else {
      resultElement.textContent = 'Please enter a valid number of miles.';
    }
  }
  
  // Event listener for button click
  const convertBtn = document.getElementById('convertBtn');
  convertBtn.addEventListener('click', handleConvertClick);
  