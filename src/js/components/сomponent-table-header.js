import Component from './сomponent';
import { setBlockElem, setUnBlockElem } from '../modules/util';

export default class ComponentTable extends Component {
  constructor () {
    super();

    this._resetDefaultTable = null;

    this._onLinkClick = this._onLinkClick.bind(this);
  }

  get template () {
    return `
        <header class="main__header">
          <h1 class="main__title title">Pantone colors</h1>
          <button type="button" class="btn btn__reset" disabled="">Reset</button>
        </header>
    `.trim();
  }

  set resetDefaultTable (fn) {
    this._resetDefaultTable = fn;
  }

  unblockElement = () => {
    setUnBlockElem(this._element.querySelector('.btn__reset'));
  }

  _onLinkClick (evt) {
    const { target } = evt;

    if (target.tagName === 'BUTTON') {
      setBlockElem(target);

      if (typeof this._resetDefaultTable === 'function') {
        this._resetDefaultTable();
      }
    }
  }

  bind () {
    this._element.querySelector('.btn__reset').addEventListener('click', this._onLinkClick);
  }

  unbind () {
    this._element.querySelector('.btn__reset').removeEventListener('click', this._onLinkClick);
  }
}
