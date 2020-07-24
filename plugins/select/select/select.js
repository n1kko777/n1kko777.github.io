const getTemplate = (data = [], placeholder = "", selectedId) => `
<div class="select__backdrop" data-type="backdrop"></div>
  <div class="select__input" data-type="input">
      <span data-type="value">${placeholder}</span>
      <i class="fa fa-chevron-down" data-type="arrow"></i>
  </div>
  <div class="select__dropdown">
      <ul class="select__list">
          ${data
            .map(
              (el) =>
                `<li class="select__item${
                  selectedId === el.id ? " selected" : ""
                }" data-type="item" data-id="${el.id}">${el.value}</li>`
            )
            .join("")}
      </ul>
  </div>
`;

export class Select {
  constructor(selector, options) {
    this.$el = document.querySelector(selector);
    this.options = options;
    this.selectedId = this.options.selectedId;

    this.#render();
    this.#setup();
  }

  get isOpen() {
    return this.$el.classList.contains("open");
  }

  #render() {
    const { placeholder, data } = this.options;
    this.$el.classList.add("select");
    this.$el.innerHTML = getTemplate(
      data,
      this.selectedId !== undefined
        ? data !== undefined &&
          data.find((el) => el.id === this.selectedId) !== undefined
          ? data.find((el) => el.id === this.selectedId).value
          : ""
        : placeholder,
      this.selectedId
    );
  }

  #setup() {
    this.clickHandler = this.clickHandler.bind(this);
    this.$el.addEventListener("click", this.clickHandler);

    this.$arrow = this.$el.querySelector('[data-type="arrow"]');
    this.$value = this.$el.querySelector('[data-type="value"]');
  }

  toggle() {
    this.isOpen ? this.close() : this.open();
  }

  get current() {
    return this.options.data.find((el) => el.id === this.selectedId);
  }

  select(id) {
    this.selectedId = id;
    this.$value.textContent = this.current.value;

    this.$el.querySelector(".selected") !== null &&
      this.$el.querySelector(".selected").classList.remove("selected");

    this.$el.querySelector(`[data-id="${id}"]`).classList.add("selected");

    this.options.onSelect && this.options.onSelect(this.current);
    this.close();
  }

  clickHandler(event) {
    const { type } = event.target.dataset;

    switch (type) {
      case "input":
      case "value":
      case "arrow":
        this.toggle();
        break;
      case "item":
        const id = event.target.dataset.id;
        this.select(id);
        break;
      case "backdrop":
        this.close();
        break;

      default:
        break;
    }
  }

  open() {
    this.$el.classList.add("open");
    this.$arrow.classList.remove("fa-chevron-down");
    this.$arrow.classList.add("fa-chevron-up");
  }

  close() {
    this.$el.classList.remove("open");
    this.$arrow.classList.add("fa-chevron-down");
    this.$arrow.classList.remove("fa-chevron-up");
  }

  destroy() {
    this.$el.removeEventListener("click", this.clickHandler);
    this.$el.innerHTML = "";
  }
}
