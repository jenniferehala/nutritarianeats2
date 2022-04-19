const RecipeController = require("../controllers/recipe.controller");


module.exports = app => {
    app.get("/api/test", RecipeController.testResponse);
    app.get("/api/recipes/findAll", RecipeController.findAllRecipe);
    app.get("/api/recipes/latest", RecipeController.latestRecipe);
    app.get("/api/recipes/explore/latestRecipes", RecipeController.allLatestRecipes);
    app.post("/api/recipes/create", RecipeController.createRecipe);
    app.get("/api/recipes/:_id", RecipeController.findOneRecipe);
    app.delete("/api/recipes/:_id/delete", RecipeController.deleteRecipe);
    app.patch("/api/recipes/:_id/edit", RecipeController.updateOneRecipe);
    app.patch("/api/recipes/:_id/upvote", RecipeController.upvoteRecipe);
    app.post("/api/recipes/search", RecipeController.searchRecipe);
    // Cuisine Routes
    app.get("/api/recipes/cuisine/findMainCuisine", RecipeController.findMainCuisine);
    app.get("/api/recipes/cuisine/findAllCuisine", RecipeController.findAllCuisine);
    app.get("/api/recipes/cuisine/:name", RecipeController.findOneCuisine);
    // app.get("/api/recipes/cuisine/findCuisine", RecipeController.findCuisine);
    // app.post("/api/recipes/create/cuisine", RecipeController.createCuisine);
    // app.patch("/api/recipes/cuisine/:_id/update", RecipeController.updateOneCuisine);
    // app.delete("/api/recipes/cuisine/:_id/delete", RecipeController.deleteCuisine);
}
