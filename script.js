document.getElementById('generate-btn').addEventListener('click', function() {
    const min = parseInt(document.getElementById('min').value, 10);
    const max = parseInt(document.getElementById('max').value, 10);
  
    if (!isNaN(min) && !isNaN(max) && min <= max) {
      const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      document.getElementById('result').innerHTML = `Random Number: <strong>${randomNumber}</strong>`;
    } else {
      document.getElementById('result').innerHTML = `Please enter valid min and max values.`;
    }
  });
  