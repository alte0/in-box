import Component from './сomponent';
import {
  toUpperCaseFirstSymbolInWords,
  setItemLocalStorage,
  clearLocalStorageClassesTable,
  getClassesForTable
} from '../modules/util';

export default class ComponentTable extends Component {
  constructor (data) {
    super();

    this._colors = data.data;

    this._activeBtnReset = null;

    this._onLinkClick = this._onLinkClick.bind(this);
  }

  get template () {
    return `
        <table class="table${getClassesForTable()}">
          <caption class="table__caption visually-hidden">Variables Pantone colors</caption>
          <tbody class="table__tbody">
            <tr class="table__tr">
              <th class="table__id table__th">
                <button type="button" class="btn btn__hidden-column" data-column="id">id</button>
              </th>
              <th class="table__name table__th">
                <button type="button" class="btn btn__hidden-column" data-column="name">name</button>
              </th>
              <th class="table__year table__th">
                <button type="button" class="btn btn__hidden-column" data-column="year">year</button>
              </th>
              <th class="table__color table__th">
                <button type="button" class="btn btn__hidden-column" data-column="color">color</button>
              </th>
              <th class="table__pantone table__th">
                <button type="button" class="btn btn__hidden-column" data-column="pantone">pantone value</button>
              </th>
            </tr>
            ${Array.from(this._colors)
              .map((item) => `
                <tr class="table__tr">
                  <td class="table__id table__td">${item.id}</td>
                  <td class="table__name table__td">${toUpperCaseFirstSymbolInWords(item.name)}</td>
                  <td class="table__year table__td">${item.year}</td>
                  <td class="table__color table__td">
                    <span class="table__color-box" style="background-color: ${item.color}"></span>
                    ${item.color}
                  </td>
                  <td class="table__pantone table__td">${item.pantone_value}</td>
                </tr>
              `.trim())
            .join('')}
          </tbody>
        </table>
    `.trim();
  }

  set activeBtnReset (fn) {
    this._activeBtnReset = fn;
  }

  showTable = () => {
    this._element.setAttribute('class', 'table');

    clearLocalStorageClassesTable();
  }

  _addClassHiddenColumn (str) {
    const addClass = `table--${str}-hidden`;
    setItemLocalStorage(str, addClass);

    if (!this._element.matches(addClass)) {
      this._element.classList.add(addClass);
    }
  }

  _onLinkClick (evt) {
    const { target } = evt;

    if (target.tagName === 'BUTTON') {
      const typeColumn = target.dataset.column;
      this._addClassHiddenColumn(typeColumn);

      if (typeof this._activeBtnReset === 'function') {
        this._activeBtnReset();
      }
    }
  }

  bind () {
    this._element.addEventListener('click', this._onLinkClick);
  }

  unbind () {
    this._element.removeEventListener('click', this._onLinkClick);
  }
}
