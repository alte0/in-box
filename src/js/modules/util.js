/**
 * Отрисовка template
 * @param {String} template
 * @param {Element} el
 */
const renderTemplate = (template, el = document.body) => {
  el.appendChild(template);
};
/**
 * Удаление ребенка в родителе
 * @param {HTMLElement} parent
 * @param {HTMLElement} deleteElement
 */
const deleteEl = (parent, deleteElement) => {
  parent.removeChild(deleteElement);
};
/**
 * Создание элемента
 * @param {String} template
 * @return {ChildNode}
 */
const createElement = (template) => {
  const wrapperTemplate = document.createElement('template');
  wrapperTemplate.innerHTML = template;
  return wrapperTemplate.content.cloneNode(true).firstChild;
};
/**
 * Блокировка элемента
 * @param {HTMLElement} el
 */
const setBlockElem = (el) => {
  el.disabled = true;
};
/**
 * Снятие блокировки
 * @param {HTMLElement} el
 */
const setUnBlockElem = (el) => {
  el.disabled = false;
};
/**
 * Делает у строки первый символ с большой буквы
 * @param {String} str
 * @return {String}
 */
const toUpperCaseFirstSymbolInWords = (str) => {
  const length = str.length;
  const firstSymbol = str.slice(0, 1).toUpperCase();
  const otherSymbol = str.slice(1, length);

  return firstSymbol + otherSymbol;
};
/**
 * Очищает в localStorage классы связанные с таблицей.
 * @return void
 */
const clearLocalStorageClassesTable = () => {
  for (const key in localStorage) {
    if (!localStorage.hasOwnProperty(key)) {
      continue;
    }

    const str = localStorage.getItem(key);

    if (str.indexOf('table', 0) !== -1) {
      localStorage.removeItem(key);
    }
  }
};
/**
 * Записывает значение и класс в localStorage для таблицы
 * @param {String} str
 * @param {String} addClass
 * @return void
 */
const setItemLocalStorage = (str, addClass) => {
  localStorage.setItem(str, addClass);
};
/**
 * Получаем классы для таблицы из localStorage
 * @return {String}
 */
const getClassesForTable = () => {
  let classesTable = '';

  for (const key in localStorage) {
    if (!localStorage.hasOwnProperty(key)) {
      continue;
    }

    const str = localStorage.getItem(key);

    if (str.indexOf('table', 0) !== -1) {
      classesTable += ' ' + str;
    }
  }

  return classesTable;
};

export {
  createElement,
  deleteEl,
  renderTemplate,
  setBlockElem,
  setUnBlockElem,
  toUpperCaseFirstSymbolInWords,
  setItemLocalStorage,
  clearLocalStorageClassesTable,
  getClassesForTable
};
