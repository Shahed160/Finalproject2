
function calculateBMR() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const age = parseInt(document.getElementById('age').value);
    const activity = parseFloat(document.getElementById('activity').value);
    

    
    if (isNaN(weight) || weight <= 0 || isNaN(height) || height <= 0 || isNaN(age) || age <= 0) {
        alert('Please enter valid numbers for weight, height, and age.');
        return;
    }

var gender = "";
if (m.checked) {
  gender = "male"; 
} else if (f.checked) {
  gender = "female"; 
}
    let bmr;

   
    if (gender === 'male') {
        
        bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else if (gender === 'female') {
        
        bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    }

    const dailyCalories=bmr*activity;
    
    document.getElementById('result').innerHTML = `Your BMR is ${dailyCalories.toFixed(2)} calories/day.`;
}
