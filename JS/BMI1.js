function countBmi() {
    
    var ageValue = age.value;
    var heightValue = height.value;
    var weightValue = weight.value;
  
    
    var gender = "";
    if (m.checked) {
      gender = "male"; 
    } else if (f.checked) {
      gender = "female"; 
    }
  
    
    var bmi = Number(weightValue) / ((Number(heightValue) / 100) * (Number(heightValue) / 100));
  
    if (isNaN(weightValue) || weightValue <= 0 || isNaN(heightValue) || heightValue <= 0 || isNaN(ageValue) || ageValue <= 0) {
        alert('Please enter valid numbers for weight, height, and age.');
        return;
    }
    
    var result = "";  
    if (bmi < 18.5) {
      result = "Underweight";
    } else if (18.5 <= bmi && bmi <= 24.9) {
      result = "Healthy";
    } else if (25 <= bmi && bmi <= 29.9) {
      result = "Overweight";
    } else if (30 <= bmi && bmi <= 34.9) {
      result = "Obese";
    } else if (35 <= bmi) {
      result = "Extremely obese";
    }
  
    
    document.querySelector("#comment").innerHTML = `You are<span id="comment">${result}</span>`;  // Display BMI status
    document.querySelector("#result").innerHTML = bmi.toFixed(2);  // Display BMI value, rounded to two decimal places
  }
  
  

