import icons from 'url:../../img/icons.svg';
import View from './View';
class ResultsView extends View {
  _ParentEl = document.querySelector('.results');
  _errorMessage = 'No recipes found for your query. Please try another one!';
  _message = '';
  _data;

  _generateMarkup() {
    return this._data
      .map(data => {
        return `
           <li class="preview">
            <a class="preview__link " href="#${data.id}">
            <figure class="preview__fig">
                <img src="${data.image}" alt="${data.title}" />
            </figure>
            <div class="preview__data">
                <h4 class="preview__title">${data.title}</h4>
               <p class="preview__publisher">${data.publisher}</p>
            </div>
            </a>
        </li>
        `;
      })
      .join('');
  }
}

export default new ResultsView();
