import icons from 'url:../../img/icons.svg';
export default class View {
  _data;
  render(data) {
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.renderError();
    this._data = data;
    const markup = this._generateMarkup();
    this._clear();
    this._ParentEl.insertAdjacentHTML('afterbegin', markup);
  }
  _clear() {
    this._ParentEl.innerHTML = '';
  }

  renderSppiner() {
    const markup = `
        <div class="spinner">
          <svg>
            <use href="${icons}svg#icon-loader"></use>
          </svg>
        </div>
      `;

    this._clear();
    this._ParentEl.insertAdjacentHTML('afterbegin', markup);
  }

  renderError(msg = this._errorMessage) {
    const markup = `
       <div class="error">
            <div>
              <svg>
                <use href="${icons}#icon-alert-triangle"></use>
              </svg>
            </div>
            <p>${msg}</p>
      </div>
    `;

    this._clear();
    this._ParentEl.insertAdjacentHTML('afterbegin', markup);
  }
  renderMessage(msg = this._message) {
    const markup = `
       <div class="error">
            <div>
              <svg>
                <use href="${icons}#icon-smile"></use>
              </svg>
            </div>
            <p>${msg}</p>
      </div>
    `;

    this._clear();
    this._ParentEl.insertAdjacentHTML('afterbegin', markup);
  }
}
