import icons from 'url:../../img/icons.svg';
import View from './View';
import previewView from './previewView';
class ResultsView extends View {
  _ParentEl = document.querySelector('.results');
  _errorMessage = 'No recipes found for your query. Please try another one!';
  _message = '';

  _generateMarkup() {
    return this._data
      .map(results => previewView.render(results, false))
      .join('');
  }
}

export default new ResultsView();
