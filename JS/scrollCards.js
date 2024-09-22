// Array of titles and images

var titles = ['Cake', 
    'Ice Cream',
     'Donut',
     'Sweets', 
     'Chips', 
     'Sauces',
    ];
var images = [
    '/Media/cake10.jpg',
    '/Media/icecream1.jpg',
    '/Media/sweet1.jpg',
    '/Media/cinnabon.jpg',
    '/Media/chips5.jpg',
    '/Media/sauce.jpg',
    
];
var text=['Cake is a popular dessert made with a mix of carbs, fats, and some protein. Its calorie content varies, with high-sugar and high-fat cakes being more calorie-dense. Low-calorie options can be made with ingredients like almond flour or low-fat yogurt. Though not typically high in protein, cakes with nuts or protein powder offer more. While cake provides quick energy from sugars and refined flour, it’s low in nutrients, so moderation is essential for a balanced diet.',
    'Ice cream is a delicious and popular treat made primarily from dairy, sugar, and fat. The calorie content of ice cream varies based on its ingredients, particularly the amount of cream, milk, and sugar used. Full-fat ice creams tend to be higher in calories and fat due to their rich cream base, while light or low-fat versions offer fewer calories by using lower-fat milk or cream alternatives.',
    'Donut is a sweet, fried pastry made primarily from refined flour, sugar, and fat. Its calorie content is high due to deep-frying and sugary toppings or fillings. Donuts are rich in carbohydrates and fats but low in nutrients, offering quick energy with minimal protein or fiber. While delicious as an occasional treat, moderation is important because of their high sugar and fat content.',
    'Sweets are foods high in sugar, often including candies, chocolates, pastries, and desserts. They are typically high in calories, providing quick energy from carbohydrates but offering little nutritional value in terms of vitamins, minerals, or fiber. Many sweets also contain added fats making them more calorie-dense.. Moderation is key when including sweets in a balanced diet.',
    'Chips are thin slices of potatoes or other vegetables, typically fried or baked until crispy. They are high in calories, mainly from fats and carbohydrates, especially when fried. Most chips are low in nutrients and fiber but high in salt, making them a popular but not very nutritious snack. While baked versions may have less fat, they still tend to be calorie-dense. Like other processed snacks, chips should be eaten in moderation as part of a balanced diet.',
    'Sauces are used to enhance the flavor of dishes. Their calorie content varies widely depending on the ingredients, with cream-based or oil-based sauces being higher in fat and calories. Tomato-based or vinegar-based sauces tend to be lower in calories. Many sauces contain added sugars, salt, and fats. While they add flavor, sauces should be used in moderation, especially when trying to maintain a balanced diet.',

];

var links=['/HTML6/cakes.html',
    '/HTML6/icecream.html',
    '/HTML6/sweets.html',
    '/HTML6/sweets2.html',
    '/HTML6/chips.html',
    '/HTML6/sauces.html'
];


var currentIndex = 0;


var cards = document.getElementsByClassName('ca');

function displayCards() {
    for (var i = 0; i < cards.length; i++) {
       
        if (currentIndex + i < titles.length) {
        
            if (cards[i] && cards[i].children[0] && cards[i].children[1]) {
                console.log(cards[i].children[0])
           
            cards[i].children[0].src = images[currentIndex + i];
            cards[i].children[1].children[0].textContent = titles[currentIndex + i]
            cards[i].children[1].children[1].textContent = text[currentIndex + i]
            // cards[i].children[1].children[0].style.display="block";
            cards[i].setAttribute('onclick', `location.href='${links[currentIndex+i]}'`);
            
        }
        } else {
              
            if (cards[i] && cards[i].children[0] && cards[i].children[1]){
          
            cards[i].children[0].src = ".. ";  
            cards[i].children[1].textContent = "...";
            cards[i].onclick=null;
        }
        }
    }
}


function nextItems() {
    
    if (currentIndex + 3 < titles.length) {
        currentIndex += 3; 
        displayCards(); 
    } else {
        alert('No more items');
    }
}


function prevItems() {
    
    if (currentIndex - 3 >= 0) {
        currentIndex -= 3; 
        displayCards(); 
    } else {
        alert('No more previous items');
    }
}
displayCards();

  


// var cardSearch=document.getElementsByClassName('col');
// console.log(cardSearch);
// var searchInput=document.getElementById("searchInput")
// searchInput.addEventListener('input',function(){
//     console.log(searchInput.value);
// for(var i=0;i<cardSearch.length;i++){
//     cardSearch[i].style.display='block';
//     for(var j=0;j<searchInput.value.length;j++){
//         if(cardSearch[i].innerHTML[j]==searchInput.value[j]){
//             console.log(cardSearch[i].innerHTML[j]);
//         }
//         else{
//             cardSearch[i].style.display='none'
//         }

//     }
// }
// })
// var cardSearch = document.getElementsByClassName('col');
// var searchInput = document.getElementById('searchInput').value.toLowerCase();

// searchInput.addEventListener('input', function () {

//     console.log(searchInput.value)
//     for (var i = 0; i < cardSearch.length; i++) {

//         var cardContent = cardSearch[i].innerText.toLowerCase();

//         if (cardContent.includes(searchInput)) {
//             cardSearch[i].style.display = 'flex';  
//         } else {
//             cardSearch[i].style.display = 'none';  
//         }
//     }
// });
// function searchItems() {



//     for (var i = 0; i < items.length; i++) {
//         var item = cardSearch[i];
//         var text = item.textContent || item.innerText; 
        

//         if (text.toLowerCase().indexOf(searchInput) != -1) {
//             item.style.display = 'block'; // Show item
//         } else {
//             item.style.display = 'none'; // Hide item
//         }
//     }
// }
var cardSearch = document.getElementsByClassName('col');
var searchInput = document.getElementById('searchInput');

searchInput.addEventListener('input', function () {
    var searchValue = searchInput.value.toLowerCase();

    for (var i = 0; i < cardSearch.length; i++) {
       
        var cardContent = cardSearch[i].innerText.toLowerCase();

        if (cardContent.includes(searchValue)) {
            cardSearch[i].style.opacity = '1';  
            cardSearch[i].style.visibility = 'visible';  
            cardSearch[i].style.transition = 'opacity 0.5s';  
        } else {
            cardSearch[i].style.opacity = '0';  
            cardSearch[i].style.visibility = 'hidden';  
            cardSearch[i].style.transition = 'opacity 0.5s';  
        }
    }
});