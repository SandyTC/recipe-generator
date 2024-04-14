function displayRecipe(response) {
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 50,
    cursor: null,
  });
}

function generateRecipe(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "cb77c04d96ad2oba3t437155800bf4f6";
  let prompt = `Please generate a simple recipe using ${instructionsInput.value} and give instructions, and provide the name of the recipe`;
  let context =
    "You are an expert chef. Use no more than 6 ingredients, and the recipe must feed 2 people. Provide all weights and measurements in metric and temperatures in celsius. Your mission is to present the recipe in basic HTML with a <br /> between lines";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayRecipe);
}

let recipeFormElement = document.querySelector("#recipe-generator");
recipeFormElement.addEventListener("submit", generateRecipe);
