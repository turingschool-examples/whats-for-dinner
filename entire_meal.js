function randomEntireMeal(mealProperties) {
  return Math.floor(Math.random() * mealProperties.length);
}

function createEntireMeal() {
  suggestionMessage()
  recipeDisplayBox.innerHTML += `<span class="meal-text">${mains[randomEntireMeal(mains)]} with a side of ${sides[randomMeal(sides)]}
  and ${desserts[randomEntireMeal(desserts)]} for dessert!</span>`;
  recipeDisplayBox.classList.add('meal-text');
}
