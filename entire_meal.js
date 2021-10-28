function randomEntireMeal(mealProperties) {
  return Math.floor(Math.random() * mealProperties.length);
}

function createEntireMeal() {
  suggestionMessage()
  recipeDisplayBox.innerHTML += `${mains[randomEntireMeal(mains)]} with a side of ${sides[randomMeal(sides)]},
  and ${desserts[randomEntireMeal(desserts)]} for dessert!`;
  recipeDisplayBox.classList.add('meal-text');
}
