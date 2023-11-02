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
    text: 'Set 02 wrong questions',
  },
  dataset: [
    {
      dimensions: ['number', 'frequent'],
      source: [
        ['03', 1],
        ['13', 1],
        ['15', 1],
        ['16', 1],
        ['19', 1],
        ['29', 1],
        ['31', 1],
        ['35', 1],
        ['37', 1],
        ['41', 1],
        ['49', 1],
        ['51', 1][('52', 1)],
        ['58', 1],
        ['65', 1],
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
        ['05', 1],
        ['07', 1],
        ['09', 1],
        ['10', 1],
        ['12', 1],
        ['13', 1],
        ['21', 1],
        ['24', 1],
        ['25', 1],
        ['26', 1],
        ['30', 1],
        ['33', 1][('35', 1)],
        ['41', 1],
        ['42', 1],
        ['43', 1],
        ['45', 1],
        ['47', 1],
        ['49', 1],
        ['50', 1],
        ['59', 1],
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
