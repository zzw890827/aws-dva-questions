option = {
  title: {
    left: 'center',
    text: 'Set 01 wrong questions',
  },
  dataset: [
    {
      dimensions: ['number', 'frequent'],
      source: [
        ['02', 1],
        ['06', 1],
        ['07', 1],
        ['11', 1],
        ['14', 1],
        ['18', 1],
        ['19', 1],
        ['20', 2],
        ['22', 1],
        ['24', 2],
        ['26', 1],
        ['27', 1],
        ['29', 1],
        ['30', 1],
        ['36', 2],
        ['37', 1],
        ['40', 2],
        ['41', 1],
        ['45', 1],
        ['49', 1],
        ['51', 1],
        ['52', 1],
        ['53', 2],
        ['57', 1],
        ['58', 1],
        ['59', 1],
        ['64', 1],
        ['65', 1],
      ],
    },
    {
      transform: {
        type: 'sort',
        config: { dimension: 'frequent', order: 'desc' },
      },
    },
  ],
  xAxis: {
    type: 'category',
    axisLabel: { interval: 0, rotate: 30 },
  },
  yAxis: {},
  series: {
    type: 'bar',
    encode: { x: 'number', y: 'frequent' },
    datasetIndex: 1,
  },
};

/////////////////////////////////////////////////////

option = {
  title: {
    left: 'center',
    text: 'Set 02 wrong answers',
  },
  dataset: [
    {
      dimensions: ['number', 'frequent'],
      source: [
        ['03', 2],
        ['05', 1],
        ['09', 1],
        ['13', 1],
        ['15', 2],
        ['16', 1],
        ['19', 1],
        ['20', 1],
        ['29', 2],
        ['31', 1],
        ['35', 2],
        ['37', 1],
        ['40', 1],
        ['41', 2],
        ['45', 1],
        ['46', 1],
        ['49', 1],
        ['51', 1],
        ['52', 1],
        ['53', 1],
        ['58', 1],
        ['59', 1],
        ['60', 1],
        ['64', 1],
        ['65', 1],
        ['67', 1],
        ['68', 1],
      ],
    },
    {
      transform: {
        type: 'sort',
        config: { dimension: 'frequent', order: 'desc' },
      },
    },
  ],
  xAxis: {
    type: 'category',
    axisLabel: { interval: 0, rotate: 30 },
  },
  yAxis: {},
  series: {
    type: 'bar',
    encode: { x: 'number', y: 'frequent' },
    datasetIndex: 1,
  },
};

/////////////////////////////////////////////////////

/////////////////////////////////////////////////////

option = {
  title: {
    left: 'center',
    text: 'Set 03 wrong answers',
  },
  dataset: [
    {
      dimensions: ['number', 'frequent'],
      source: [
        ['01', 1],
        ['05', 2],
        ['07', 1],
        ['09', 2],
        ['10', 1],
        ['12', 2],
        ['13', 2],
        ['14', 1],
        ['16', 1],
        ['21', 1],
        ['24', 1],
        ['25', 2],
        ['26', 1],
        ['29', 1],
        ['30', 1],
        ['33', 1],
        ['35', 1],
        ['39', 1],
        ['40', 1],
        ['41', 2],
        ['42', 2],
        ['43', 1],
        ['45', 1],
        ['48', 1],
        ['47', 1],
        ['49', 1],
        ['50', 1],
        ['59', 2],
        ['61', 1],
        ['62', 1],
        ['65', 1],
        ['66', 1],
        ['70', 1],
      ],
    },
    {
      transform: {
        type: 'sort',
        config: { dimension: 'frequent', order: 'desc' },
      },
    },
  ],
  xAxis: {
    type: 'category',
    axisLabel: { interval: 0, rotate: 30 },
  },
  yAxis: {},
  series: {
    type: 'bar',
    encode: { x: 'number', y: 'frequent' },
    datasetIndex: 1,
  },
};

/////////////////////////////////////////////////////