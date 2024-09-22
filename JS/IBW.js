function calculateIdealBodyWeight() {
    const height = parseFloat(document.getElementById('height').value);
    const age = parseInt(document.getElementById('age').value);
    
    
    var gender = "";
if (m.checked) {
  gender = "male"; 
} else if (f.checked) {
  gender = "female"; 
}

    
    if (isNaN(height) || height <= 0) {
        alert('Please enter a valid height.');
        return;
    }

    if (isNaN(age) || age <= 0) {
        alert('Please enter a valid age.');
        return;
    }

    
   

    let ibw;

    
    if (gender === 'male') {
       
        ibw = 50 + 2.3 * ((height / 2.54) - 60);
    } else if (gender === 'female') {
       
        ibw = 45.5 + 2.3 * ((height / 2.54) - 60);
    }

  
    document.getElementById('result').innerHTML = `Your ideal body weight is approximately ${ibw.toFixed(2)} kg.`;
}