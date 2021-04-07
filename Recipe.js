class Recipe {
  constructor(meal) {
    this.id = Date.now();
    this.sides = meal.sides;
    this.mains = meal.mains;
    this.desserts = meal.desserts;
  }
}