var sides = [
    "Miso Glazed Carrots",
    "Coleslaw",
    "Garden Salad",
    "Crispy Potatoes",
    "Sweet Potato Tots",
    "Coconut Rice",
    "Caeser Salad",
    "Shrimp Summer Rolls",
    "Garlic Butter Mushrooms",
    "Hush Puppies"]
    
    var main = [
    "Spaghetti and Meatballs",
    "Pineapple Chicken",
    "Shakshuka",
    "Thai Yellow Curry",
    "Bibimbap",
    "Chicken Parmesean",
    "Butternut Squash Soup",
    "BBQ Chicken Burgers",
    "Ramen",
    "Empanadas",
    "Chicken Fried Rice",
    "Sheet Pan Fajitas",
    "Margarita Pizza"]
    
    var desserts = [
    "Apple Pie",
    "Lemon Meringue Pie",
    "Black Forest Cake",
    "Banana Bread",
    "Peach Cobbler",
    "Cheesecake",
    "Funfetti Cake",
    "Baklava",
    "Flan",
    "Macarons",
    "Macaroons",
    "Chocolate Cupcakes",
    "Pavlova",
    "Pumpkin Pie",
    "Key Lime Pie",
    "Tart Tatin",
    "Croissants",
    "Eclairs"]
    
    
    
    // Elements 
    var selectedItems = document.querySelector('#selectedItem');
    var cookpotSvgContainer = document.querySelector('.overlay-svg');
    var cookpotSvg = cookpotSvgContainer.querySelector('svg');
    var option1 = document.querySelector('#option1');
    var option2 = document.querySelector('#option2');
    var option3 = document.querySelector('#option3');
    var option4 = document.querySelector('#option4');
    var letsCookButton = document.querySelector('.select-button');
    var clearButton = document.querySelector('.clear-button');
    var suggestionHeader = document.querySelector('.right-box h2');
    
    
    
    
    // Event Listeners
    option1.addEventListener('click', function() {
        letsCookButton.onclick = function() {
            selectedItems.innerText = getRandomItem(sides) + '! ';
            displayResults();
        }
    });
    
    
    
    option2.addEventListener('click', function() {
        letsCookButton.onclick = function() {
            selectedItems.innerText = getRandomItem(main) + '! ';
            displayResults();
        }
    });
    
    option3.addEventListener('click', function() {
        letsCookButton.onclick = function() {
            selectedItems.innerText = getRandomItem(desserts) + '! ';
            displayResults();
        }
    });
    
    option4.addEventListener('click', function() {
        letsCookButton.onclick = function() {
            selectedItems.innerText = getRandomItem(sides) + ', ' + getRandomItem(main) + ', and ' + getRandomItem(desserts) + '! ';
            displayResults();
        }
    });
    
    function displayResults() {
        selectedItems.style.display = 'block';
        cookpotSvg.style.display = 'none';
        suggestionHeader.style.display = 'block';
         
    }
    
    
    clearButton.addEventListener('click', function() {
        selectedItems.innerText = '';
        cookpotSvg.style.display = 'block';
        selectedItems.style.display = 'none';
        suggestionHeader.style.display = 'none';
    });
    
    function getRandomItem(array) {
        return array[Math.floor(Math.random() * array.length)];
    }
    























