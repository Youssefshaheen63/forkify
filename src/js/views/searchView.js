class SearchView {
  _ParentEl = document.querySelector('.search');

  getQuery() {
    const value = this._ParentEl.querySelector('.search__field').value;
    this._clearInput();
    return value;
  }
  _clearInput() {
    return (this._ParentEl.querySelector('.search__field').value = '');
  }
  addHandlerSearch(handler) {
    // this._ParentEl
    //   .querySelector('.search__btn')
    //   .addEventListener('click', handler);
    this._ParentEl.addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
    });
  }
}

export default new SearchView();
