
//The purpose of this Lab is to get a solid understanding of the .filter() and .map() advanced array methods.
//These methods will be used extensively on future projects


//Dataset
let dishes = [
    {
        "id": 1,
        "name": "Pizza",
        "cuisine": "Italian",
        "servings": 8,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 2,
        "name": "Spaghetti",
        "cuisine": "Italian",
        "servings": 2,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 3,
        "name": "Ravioli",
        "cuisine": "Italian",
        "servings": 2,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 4,
        "name": "Enchiladas",
        "cuisine": "Mexican",
        "servings": 6,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 5,
        "name": "Tacos",
        "cuisine": "Mexican",
        "servings": 4,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 6,
        "name": "Burrito Supreme",
        "cuisine": "Mexican",
        "servings": 1,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 7,
        "name": "Elote",
        "cuisine": "Mexican",
        "servings": 4,
        "ingredients": ["corn", "cheese"]
    },
    {
        "id": 8,
        "name": "Crepes",
        "cuisine": "French",
        "servings": 1,
        "ingredients": ["flour", "sugar"]
    },
    {
        "id": 9,
        "name": "Corned Beef & Cabbage",
        "cuisine": "Irish",
        "servings": 10,
        "ingredients": ["beef", "cabbage"]
    },
    {
        "id": 10,
        "name": "Beef Stew",
        "cuisine": "Irish",
        "servings": 8,
        "ingredients": ["beef", "tomato"]
    },
    {
        "id": 11,
        "name": "Lasagna",
        "cuisine": "Vegetarian",
        "servings": 8,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 12,
        "name": "Falafel",
        "cuisine": "Vegetarian",
        "servings": 1,
        "ingredients": ["chickpea", "parsley"]
    },
    {
        "id": 13,
        "name": "Chili",
        "cuisine": "Vegetarian",
        "servings": 13,
        "ingredients": ["tomato", "chickpea"]
    },
    {
        "id": 14,
        "name": "Goulash",
        "cuisine": "Hungarian",
        "servings": 15,
        "ingredients": ["beef", "tomato"]
    },
    {
        "id": 15,
        "name": "Pho",
        "cuisine": "Vietnamese",
        "servings": 4,
        "ingredients": ["beef", "ginger"]
    },
]

//Example function
//IMPORTANT: Take the time to step through this example function with a breakpoint until you could explain what is going on to someone else before starting this lab.

function filterExample(){
    //Debug tip: Use a console.log(el) inside the filter function to get a visualization of what el represents and see all its properties! This helps you to know what you can access with dot notation inside the filter. Do this every time you use a .filter or else you are working in the dark!
    let results;
    results = dishes.filter(function(el){
        console.log("el inside filterExample's filter: ", el)
        if(el.cuisine === "Mexican"){
            return true;
        }
        else{
            return false;
        }})

    return results;
}

let mexicanFood = filterExample();
console.log('mexicanFood from filterExample', mexicanFood)



//Reminder: Do not move on to problem one until understand the example completely!!
//1. Create a function that will return all dishes with the cuisine type of "vegetarian"
//Filter

function problemOne(){

    let results;

    results = dishes.filter(function(el){
        if (el.cuisine == "Vegetarian"){
            console.log(el);
            return true;
        }
        else{
            return false; 
        }
    })
    return results;
}
let vegetarianFood = problemOne();
console.log('problem 1:', vegetarianFood);

//2. Create a function that will prompt the user to enter a cuisine type and then return all dishes that match that type
//Filter

function problemTwo(){
    let results;
    input = prompt("Please enter a type of cuisine to see options matching that type (Vegetarian, Mexican, Hungarian, Vietnamese, Irish, French, or Italian)")

    results = dishes.filter(function(el){
        if (el.cuisine == input){
            console.log(el);
            return true;
        }
        else{
            return false;
        }
    })
    return results;

}

let chosenCuisine = problemTwo();
console.log('problem 2:', chosenCuisine);

//3. Create a function that will return all dishes with the cuisine type of "Italian" and a serving size greater than 5.
//Filter

function problemThree(){    
    let results;
    results = dishes.filter(function(el){
        if (el.cuisine == 'Italian' && el.servings > 5){
            console.log(el);
            return true;
        }
        else{
            return false;
        }
    })
    return results;

}
let italianCuisine = problemThree();
console.log('problem 3:', italianCuisine);


//4. Create a function that will return only dishes whose id number matches their serving count.
//Filter

function problemFour(){
   let results; 
    results = dishes.filter(function(el){
        if (el.id == el.servings){
            console.log(el);
            return true;
        }
        else{
            return false; 
        }
    })
    return results;
}

let idServings = problemFour();
console.log('problem 4:', idServings)

//5. Create a function that will return only dishes whose serving count is even.
//Filter

function problemFive(){
    let results; 
    results = dishes.filter(function(el){
        if (el.servings % 2 == 0){
            console.log(el);
            return true;
        }
        else{
            return false; 
        }
    })
    return results; 
}

let evenServings = problemFive();
console.log("problem 5", evenServings);



//6. Create a function that will return dishes whose ingredients array INCLUDES "chickpea".
//Hint: You do not want to check the array's indexes to find out what the array INCLUDES.
//Double Hint: Research 'javascript does array include item'
//Filter

function problemSix(){
    let results;
    results = dishes.filter(function(el){
        if (el.ingredients.includes('chickpea')){
            console.log(el);
            return true; 
        }
        else{
            return false; 
        }
    })
    return results;
}

let ingredientChickpea = problemSix();
console.log('problem 6:', ingredientChickpea);


//7. Create a function that will prompt the user to type the name of one ingredient. Then use a filter to find all the dishes whose ingredients array INCLUDES that ingredient. Return the new array.
//Filter

function problemSeven(){
    let results; 
    input = prompt('Please enter the name of an ingredient.')
    results = dishes.filter(function(el){
        if (el.ingredients.includes(input)){
            console.log(el);
            return true; 
        }    
        else{
            return false; 
        }
    })
    return results;
}

let ingredientInput = problemSeven();
console.log("problem 7:", ingredientInput);

//8a. Create a function that will return an array of the string cuisine types. Ie, ["Italian", "Italian", "Mexican", ...]
//Map

function problemEight(){
    let results; 
    results = dishes.map(function(el){
        return el.cuisine;
    })
    return results; 
}

let cuisineTypes = problemEight();
console.log('problem 8', cuisineTypes);

//9. Create a function that will return an array of strings, with the cuisine type appended to the start of the dish's name. Ie, ["Italian Pizza", "Italian Spaghetti", ...]
//Map 

function problemNine(){
    let results; 
    results = dishes.map(function(el){
        outputCuisine = el.cuisine;
        outputName = el.name;
        return outputCuisine + " " + outputName;

    })
    return results; 
}

let cuisineName = problemNine();
console.log('problem 9:', cuisineName);

//10. Create a function that will use advanced array methods on the 'dishes' array and return the result ["Vegetarian Lasagna", "Vegetarian Falafel", "Vegetarian Chili"]

function problemTen(){
    let results; 
    results = dishes.filter(function(el){
        if (el.cuisine == "Vegetarian"){
            return true;
        }
        else{
            return false; 
        }
    })
    let filterVeg; 
    filterVeg = results.map(function(el){
        outputCuisine = el.cuisine;
        outputName = el.name;
        return outputCuisine + " " + outputName;

    })
    return filterVeg;

}

let filteredVeg = problemTen();
console.log('problem 10:', filteredVeg);



//BONUS

//8b. Use the filter method to eliminate duplicates from problem 8a.


function problemEightb(){
    let results; 
    results = dishes.map(function(el){
        return el.cuisine;
    })
    let toReturn = []; 
    toReturn = results.filter(function(el){
        if (toReturn.includes(el)){
            return false; 
        }
        else{
            return toReturn.push(el);        
        }
    })
    return toReturn;

    
}

let cuisineTypesb = problemEightb();
console.log('problem 8b', cuisineTypesb);



//11. Create a function that will return dishes whose ingredients array INCLUDES "tomato" OR "cheese".
//Hint: You do not want to check the array's indexes to find out what the array INCLUDES.
//Filter

function problemEleven(){
    let results; 
    results = dishes.filter(function(el){
        tomOrCh = el.ingredients.includes('tomato') || el.ingredients.includes('cheese');
        return tomOrCh;
    })

    return results; 
}

let tomatoOrCheese = problemEleven();
console.log('problem 11:', tomatoOrCheese);


//12. Create a function that will return the total serving count of all dishes.
//Must use Reduce, not a loop.


function totalServings(){
    let results;
    let resultsSum; 

    results = dishes.map(function(el){
        return el.servings;
    })
        
    resultsSum = results.reduce(function(total, el){
        return total + el; 
    })

    return resultsSum; 
}

let sumServings = totalServings();
console.log('problem 12:', sumServings);

//13. Create a function that will return an array of any objects that do not share a cuisine type with any other objects.


function uniqueCuisine(){
    let results; 
    let toReturn = [];
    results = dishes.map(function(el){
        return el.cuisine;
    })
    
    toReturn = results.reduce(function(total, el){
        if (toReturn.includes(el) != true){
            total = el;
            return el;
        }
        
    })
    return toReturn;

}

let uniqueAnswer = uniqueCuisine();
console.log('problem 13: ', uniqueAnswer);


