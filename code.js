document.addEventListener('DOMContentLoaded', () => {
    const rangeSlider = document.getElementById('huzka');
    const form = document.querySelector('form');
    const resultDisplay = document.getElementById('haketto');
  
    // Display current slider value next to the slider
    const rangeValueDisplay = document.createElement('span');
    rangeValueDisplay.textContent = rangeSlider.value;
    rangeValueDisplay.style.marginLeft = '10px';
    rangeValueDisplay.style.fontWeight = 'bold';
    rangeSlider.insertAdjacentElement('afterend', rangeValueDisplay);
  
    // Update displayed value when slider changes
    rangeSlider.addEventListener('input', () => {
      rangeValueDisplay.textContent = rangeSlider.value;
    });
  
    // Handle form submission
    form.addEventListener('submit', (e) => {
      e.preventDefault();
  
      const selectedTransport = document.querySelector('input[name="ker"]:checked');
      
      if (!selectedTransport) {
        resultDisplay.textContent = 'Kérjük válasszon közlekedési eszközt!';
        return;
      }
  
      const transportValue = parseFloat(selectedTransport.value);
      const distance = parseFloat(rangeSlider.value);
      
      // Calculate divider (divide by 10 for every 100 km)
      const divider = 10 ** Math.floor(distance / 10);
      const carbonFootprint = (transportValue * distance) / divider;
  
      resultDisplay.textContent = 
        `Te ${distance} km utat teszel meg, és a carbon lábnyom ${carbonFootprint.toFixed(2)} egység.`;
    });
  });