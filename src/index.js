function generateRecipe(event) {
  event.preventDefault();

  new Typewriter("#recipe", {
    strings: "Enter recipe here",
    autoStart: true,
    delay: 50,
    cursor: null,
  });
}

let recipeFormElement = document.querySelector("#recipe-generator");
recipeFormElement.addEventListener("submit", generateRecipe);
