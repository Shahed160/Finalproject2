
// var serving=parseFloat(document.getElementsByClassName('serving').value);
// var inputButton=parseFloat(document.getElementsByClassName('inputButton').value);
// function caloriePerServing(){
//     var calculatedValue=(serving/100)*inputButton;
//     console.log('calculatedValue');
// }
// function calculateCalories() {

//     var serving = document.getElementsByClassName('serving').textContent;
//     var inputButton = document.getElementsByClassName('inputButton').value;
//     var totalCalories = (serving / 100) * inputButton;
//     document.getElementsByClassName('calc').textContent = totalCalories.toFixed(2);
  
//     // Banana calories calculation
//     // var bananaCaloriesPer100g = document.getElementById('caloriesPer100g-banana').textContent;
//     // var bananaWeight = document.getElementById('weight-banana').value;
//     // var totalCaloriesBanana = (bananaCaloriesPer100g / 100) * bananaWeight;
//     // document.getElementsByClassName('totalCalories-banana').textContent = totalCaloriesBanana.toFixed(2);
//   }

function calculateCalories() {
    
    var caloriesPer100gElements = document.querySelectorAll('.serving');
    var weightInputElements = document.querySelectorAll('.inputButton');
    var totalCaloriesElements = document.querySelectorAll('.totalCalories');
  
   
    for (var i = 0; i < caloriesPer100gElements.length; i++) {
      var caloriesPer100g = parseFloat(caloriesPer100gElements[i].textContent);  
      var weight = parseFloat(weightInputElements[i].value);  
        
      if ( isNaN(weight)) {
       console.log(weight); 
        // alert('you should to insert the weight correctly');
        //         return;
        totalCaloriesElements[i].value = 0;  
      } 
      else {
        
        var totalCalories = (caloriesPer100g / 100) * weight;
        totalCaloriesElements[i].textContent = totalCalories.toFixed(2); 
      }
    }
  }
// function calculateCalories() {

//   var caloriesPer100gElements = document.querySelectorAll('.serving');
//   var weightInputElements = document.querySelectorAll('.inputButton');
//   var totalCaloriesElements = document.querySelectorAll('.totalCalories');


//   for (var i = 0; i < caloriesPer100gElements.length; i++) {
//     var caloriesPer100g = Number(caloriesPer100gElements[i].textContent);  
//     var weight = Number(weightInputElements[i].value);  

//      if(!(!weight || isNaN(weight))) {


//       var totalCalories = (caloriesPer100g / 100) * weight;
//       totalCaloriesElements[i].textContent = totalCalories.toFixed(2); 
//     }
//     else {
//          var total= Number(totalCaloriesElements[i].value);
//              total=0;  
//              alert('you should to insert the weight correctly')
//              return;
//     }
//   }
// }





