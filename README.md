# What's for Dinner?

## Overview

This app is a useful tool for choosing what to cook for dinner! You can generate randomized sides, main dishes, desserts, or a combination of all three. You can visit the application [here](https://philalewis.github.io/whats-for-dinner/).

## How Does It Work?

1) When the page loads, the user is presented with a header and two boxes. The "Add a Recipe" button in the header is not functional. The box on the left asks what you are looking for. Below this are four radio buttons. Below these is a "Let's Cook!" button. When the page loads, the button is disabled and displays partially opaque, to let the user know that they are unable to click the button. The box on the right displays an image of a cook pot.

<img width="1440" alt="Screen Shot 2021-10-31 at 3 08 52 PM" src="https://user-images.githubusercontent.com/65195952/139601402-bfe9df0a-95a9-45db-b821-12f6a96ac822.png">

2) When the user clicks on one of the radio buttons, the "Let's Cook!" button is enabled and changes to a darker, less opaque shade to let the user know that they may now click the button.

<img width="1440" alt="Screen Shot 2021-10-31 at 3 09 13 PM" src="https://user-images.githubusercontent.com/65195952/139601403-45fa3ba6-c4ca-4867-a5bf-02114d028b49.png">

3) When the user clicks the button, the cook pot on the right side disappears and a loading image appears for 1.5 seconds, to simulate searching for a recipe. The loading image then disappears and the recommendation fades in. A "Clear" button also appears at the bottom right side of the box.

<img width="1439" alt="Screen Shot 2021-10-31 at 3 09 27 PM" src="https://user-images.githubusercontent.com/65195952/139601404-044f0549-872b-4a1c-ade4-069d96f05a8f.png">

4) When the "Clear" button is clicked, the selection on the radio button is removed, the recommendation disappears, the cook pot fades in, and the "Let's Cook!" button is disabled.

<img width="1440" alt="Screen Shot 2021-10-31 at 3 09 40 PM" src="https://user-images.githubusercontent.com/65195952/139601407-8fbbc4fa-9405-469f-90c0-03424d549c6c.png">

5) The page is responsive to various screen sizes and orientations. When the user views the app on a screen in portrait layout, the boxes are stacked vertically, instead of horizontally.

<img width="379" alt="Screen Shot 2021-10-31 at 3 12 24 PM" src="https://user-images.githubusercontent.com/65195952/139601409-47d9cf4d-8c62-40d2-906a-bcf6bfe0eab1.png">

## Contributors

- Turing School of Software & Design Frontend Students
   - Phil Lewis

## Future Feature Additions

- Add section for user to add their own recipes
- Make "Add a Recipe" button functional
- "Save" or "favorite" feature, where the user can click a button to save the recipe
- All recipes interface, where the user can view all saved recipes and delete ones they no longer want

## Technologies Used

-HTML, CSS, Javascript

The spec for this project can be found [here](https://frontend.turing.io/projects/module-1/dinner.html).

## Installation Instructions

- Fork this project to your own Github account
- Clone the repository to your local machine
- `cd` into the project
- Run open `index.html` to see the app
