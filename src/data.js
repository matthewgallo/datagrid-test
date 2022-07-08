function randomDate(start, end) {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
}

export const data = [
  {
    id: 'a',
    name: 'Framingham Heart Study 10 year',
    type: 'CSV',
    source: 'Industry Accelerator',
    last_modified: randomDate(new Date(2020, 1, 1), new Date()).toUTCString(),
  },
  {
    id: 'b',
    name: 'iKure WHIMS cases',
    type: 'CSV',
    source: 'Industry Accelerator',
    last_modified: randomDate(new Date(2020, 1, 1), new Date()).toUTCString(),
  },
  {
    id: 'c',
    name: '7 lead ECG training dataset',
    type: 'CSV',
    source: 'Industry Accelerator',
    last_modified: randomDate(new Date(2020, 1, 1), new Date()).toUTCString(),
  },
  {
    id: 'd',
    name: '1 lead ECG training dataset',
    type: 'CSV',
    source: 'Industry Accelerator',
    last_modified: randomDate(new Date(2020, 1, 1), new Date()).toUTCString(),
  },
  {
    id: 'e',
    name: 'Patient-Rank-Case-Model',
    type: 'CSV',
    source: 'Industry Accelerator',
    last_modified: randomDate(new Date(2020, 1, 1), new Date()).toUTCString(),
  },
  {
    id: 'f',
    name: '3 lead ECG model',
    type: 'CSV',
    source: 'Industry Accelerator',
    last_modified: randomDate(new Date(2020, 1, 1), new Date()).toUTCString(),
  },
  {
    id: 'g',
    name: 'Patient Cancer study',
    type: 'CSV',
    source: 'Industry Accelerator',
    last_modified: randomDate(new Date(2020, 1, 1), new Date()).toUTCString(),
  },
  {
    id: 'h',
    name: 'Patient Billing data',
    type: 'CSV',
    source: 'Industry Accelerator',
    last_modified: randomDate(new Date(2020, 1, 1), new Date()).toUTCString(),
  },
  {
    id: 'i',
    name: 'AA_dan_CSV',
    type: 'CSV',
    source: 'Industry Accelerator',
    last_modified: randomDate(new Date(2020, 1, 1), new Date()).toUTCString(),
  },
  {
    id: 'j',
    name: 'Radiation data_2018',
    type: 'CSV',
    source: 'Industry Accelerator',
    last_modified: randomDate(new Date(2020, 1, 1), new Date()).toUTCString(),
  },
];
