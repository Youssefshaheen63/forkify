class SearchView {
  #ParentEl = document.querySelector('.search');

  getQuery() {
    const value = this.#ParentEl.querySelector('.search__field').value;
    this.#clearInput();
    return value;
  }
  #clearInput() {
    return (this.#ParentEl.querySelector('.search__field').value = '');
  }
  addHandlerSearch(handler) {
    // this.#ParentEl
    //   .querySelector('.search__btn')
    //   .addEventListener('click', handler);
    this.#ParentEl.addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
    });
  }
}

export default new SearchView();
