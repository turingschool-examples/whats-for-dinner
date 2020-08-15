# What's For Dinner?
### FE1 Solo Challenge

## Background
What's for dinner? The ultimate question.

You will be building an app that helps users choose a recipe and put together meals! 


## Purpose
This Solo Challenge gives students and instructors the opportunity to get a pulse on where you are with the foundational concepts of Module 1 curriculum.

- Students should use this as an opportunity to challenge themselves and work completely independently. Google can (and probably should!) be used, but peers or mentors should not be consulted and any other code base should not be referenced.
- Instructors will be able to use your work, both completion of functionality and code quality, to determine where you stand and if you are behind for this point in the module, provide supports to intervene.

## Setup

- Clone this repo down to your machine
- `cd` into the repository
- Run `git remote remove origin`
- On GitHub, create a new repository and connect to this local repository
- Read this README thoroughly, then begin working!

## Deliverable

Provide the link to **your** repo in the submission form.

## Workflow

Commit at the end of each iteration (if not more frequently) for good habits! 

**Iteration 0:** Build Out Comp

- Images of comp below
- An assets directory is provided in the repo, and colors are provided in the CSS file. 

**Iteration 1:** Add Random Side, Main and Dessert Functionality

- When a user selects a dish option (don't worry about "Entire Meal" yet) and then clicks the "Let's Cook!" button, the user sees a random dish from the list of possible dishes for that category
- When the dish name appears, the cookpot icon disappears

**Iteration 2:** Entire Meal Funcitonality
- When the user selects the "Entire Meal" option and then clicks the "Let's Cook!" button, the user sees a message with a side, main and dessert option from the lists of possible dishes for all categories
- When the meal items appear, the cookpot icon disappears


**Iteration 3:** Clear Functionality, Error Handling

- The user can click a clear button, which clears the page of any message. User should only be able to click the clear button if a food is visible. When the clear button is clicked and the food is removed, the image of the cookpot should re-appear.
- User should not be able to click the "Let's Cook" button for a recipe unless they have selected an option.

_Note: You can disable these buttons, hide them, or display a message to the user for error handling. The choice is yours!_

**Iteration 4:** Adding a Recipe
- The user can clear a "Add a Recipe" button, which will display a form to add a new recipe at the bottom of the page
- The user can add a type and a name, click the "Add New" recipe and that recipe will be added to the appropriate list
- *NOTE: None of this needs to persist on page refresh*

**Iteration 5:** BONUS ROUND (Ideas for Extensions)
- *NOTE: This round is not required, and you should absolutely not be working on this unless your UI is solid and you are 100% sure that all of Iterations 1-4 are fully functional and bug free.*
- Add a loading animation when a user clicks the "Let's Cook" button to simulate searching for a recipe. Hint - You will need to use CSS Keyframes, and a Javascript timeout function for this. 
- When a user tries to add to a recipe type that does not exist, we see an error message


### Possible Foods (Feel Free to Add Your Own!)

**Sides**
- Miso Glazed Carrots
- Coleslaw
- Garden Salad
- Crispy Potatoes
- Sweet Potato Tots
- Coconut Rice
- Caeser Salad
- Shrimp Summer Rolls
- Garlic Butter Mushrooms
- Hush Puppies

**Mains**
- Spaghetti and Meatballs
- Pineapple Chicken
- Shakshuka
- Thai Yellow Curry
- Bibimbap
- Chicken Parmesean
- Butternut Squash Soup
- BBQ Chicken Burgers
- Ramen
- Empanadas
- Chicken Fried Rice
- Sheet Pan Fajitas
- Margarita Pizza

**Desserts**
- Apple Pie
- Lemon Meringue Pie
- Black Forest Cake
- Banana Bread
- Peach Cobbler
- Cheesecake
- Funfetti Cake
- Baklava
- Flan
- Macarons
- Macaroons
- Chocolate Cupcakes
- Pavlova
- Pumpkin Pie
- Key Lime Pie
- Tart Tatin
- Croissants
- Eclairs


### Comps

<img width="973" alt="" src="Screen Shot 2020-08-15 at 2.42.58 PM.png">
<img width="973" alt="" src="Screen Shot 2020-08-15 at 2.27.04 PM.png">
