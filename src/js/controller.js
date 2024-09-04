import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
import paginationView from './views/paginationView.js';
import bookmarkView from './views/bookmarkView.js';
import addRecipeView from './views/addRecipeView.js';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

// if (module.hot) {
//   module.hot.accept();
// }
const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;

    recipeView.renderSppiner();

    // Update results view to mark selected search result
    resultsView.update(model.getSearchResultsPage());
    bookmarkView.update(model.state.bookmark);

    // Loading recipe
    await model.loadRecipe(id);

    // Rendering recipe
    recipeView.render(model.state.recipe);
  } catch (error) {
    recipeView.renderError();
    console.error(error);
  }
};

const controlSearchRecipes = async function () {
  try {
    resultsView.renderSppiner();

    const query = searchView.getQuery();
    if (!query) return;

    await model.loadSearchRecipe(query);

    // resultsView.render(model.state.search.results);
    resultsView.render(model.getSearchResultsPage());

    // Render the initial pagination buttons
    paginationView.render(model.state.search);
  } catch (error) {
    console.log(error);
  }
};

const controlPagination = function (gotoPage) {
  resultsView.render(model.getSearchResultsPage(gotoPage));

  // Render the New pagination buttons
  paginationView.render(model.state.search);
};

const controlServings = function (newServings) {
  // Update the recipe servings (in state)
  model.updateServings(newServings);

  // Update the recipe view
  // recipeView.render(model.state.recipe);
  recipeView.update(model.state.recipe);
};

const controlAddBookmark = function () {
  if (!model.state.recipe.bookmarked) model.addBookmark(model.state.recipe);
  else model.deleteBookmark(model.state.recipe.id);
  recipeView.update(model.state.recipe);

  bookmarkView.render(model.state.bookmark);
};

const controlBookmark = function () {
  bookmarkView.render(model.state.bookmark);
};

const controlAddRecipe = function (newRecipe) {
  console.log(newRecipe);

  // Upload the new Recipe
};

const init = function () {
  bookmarkView.addHandlerRender(controlBookmark);
  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHandlerUpdateServings(controlServings);
  recipeView.addHandlerAddBookmark(controlAddBookmark);
  searchView.addHandlerSearch(controlSearchRecipes);
  paginationView.addHandlerClick(controlPagination);
  addRecipeView.addHandlerUpload(controlAddRecipe);
};
init();
