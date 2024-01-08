const newRun = {
  id: '',
  date: '',
  chain: '',
  energy: '',
  gmt: '',
  gst: '',
};

const runData = [
  {
    id: 0,
    date: '',
    chain: '',
    energy: '',
    gmt: '',
    gst: '',
    gmtE: function () {
      const gmtE = this.gmt / this.energy;
      return gmtE;
    },
    gstE: function () {
      const gstE = this.gst / this.energy;
      return gstE;
    },
  },
];

const $ = document.querySelector.bind(document);

const createNewRun = () => {
  const newRunRow = document.createElement('div');
  $('.content-container').appendChild(newRunRow);
  newRunRow.classList.add('new-run-row');

  Object.keys(newRun).forEach((item) => {
    const newRunItemContainer = document.createElement('div');
    $('.new-run-row').appendChild(newRunItemContainer);
    newRunItemContainer.classList.add('new-run-cell', `${item}`);

    const newRunCell = document.createElement('input');
    newRunItemContainer.appendChild(newRunCell);
    newRunCell.classList.add('new-run-input', `${item}`);
    const cellText = document.createTextNode(`${item}`);
    newRunCell.appendChild(cellText);
  });
};

console.log();

createNewRun();
