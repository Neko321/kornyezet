document.addEventListener('DOMContentLoaded', () => {
    const rangeSlider = document.getElementById('huzka');
    const form = document.querySelector('form');
    const resultDisplay = document.getElementById('haketto');
    const rangeValueDisplay = document.createElement('span');
    rangeValueDisplay.textContent = rangeSlider.value;
    rangeValueDisplay.style.marginLeft = '10px';
    rangeValueDisplay.style.fontWeight = 'bold';
    rangeSlider.insertAdjacentElement('afterend', rangeValueDisplay);

    rangeSlider.addEventListener('input', () => {
      rangeValueDisplay.textContent = rangeSlider.value;
    });
    form.addEventListener('submit', (e) => {
      e.preventDefault();
  
      const selectedTransport = document.querySelector('input[name="ker"]:checked');
      
      if (!selectedTransport) {
        resultDisplay.textContent = 'Kérjük válasszon közlekedési eszközt!';
        return;
      }
      const transportValue = parseFloat(selectedTransport.value);
      const distance = parseFloat(rangeSlider.value);
      const carbonFootprint = (transportValue * distance) / 10;
      resultDisplay.textContent = 
        `Te ${distance} km utat teszel meg, és a carbon lábnyom ${carbonFootprint.toFixed(2)} egység.`;
    });
  });