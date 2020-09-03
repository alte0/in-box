import svg4everybody from 'svg4everybody';
import { ApiFetch } from './components/api';
import { renderTemplate } from './modules/util';
import Table from './components/сomponent-table';
import TableHeader from './components/сomponent-table-header';

const mainContainer = document.querySelector('.main__container');

svg4everybody();

if (mainContainer) {
  const tableHeader = new TableHeader();
  const apiFetch = new ApiFetch();

  renderTemplate(tableHeader.render(), mainContainer);

  apiFetch
    .getColor()
    .then((data) => {
      const table = new Table(data);
      renderTemplate(table.render(), mainContainer);
      table.activeBtnReset = tableHeader.unblockElement;
      tableHeader.resetDefaultTable = table.showTable;
    });
}
