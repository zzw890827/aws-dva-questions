  option = {
    title: {
      left: 'center',
      text: '测试1错题直方图',
    },
    dataset: [
      {
        dimensions: ['number', 'frequent'],
        source: [
          ['02', 1],
          ['06', 1],
          ['07', 1],
          ['14', 1],
          ['19', 1],
          ['20', 1],
          ['22', 1],
          ['24', 1],
          ['27', 1],
          ['29', 1],
          ['30', 1],
          ['36', 1],
          ['37', 1],
          ['40', 1],
          ['45', 1],
          ['52', 1],
          ['53', 1],
          ['57', 1],
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
    text: '测试1错题直方图',
  },
  dataset: [
    {
      dimensions: ['number', 'frequent'],
      source: [
        ['01', 3],
        ['05', 1],
        ['07', 2],
        ['09', 2],
        ['10', 1],
        ['16', 1],
        ['17', 2],
        ['18', 2],
        ['21', 3],
        ['22', 3],
        ['23', 1],
        ['24', 2],
        ['25', 1],
        ['28', 1],
        ['30', 1],
        ['31', 1],
        ['32', 1],
        ['33', 1],
        ['34', 1],
        ['36', 2],
        ['38', 3],
        ['40', 1],
        ['41', 2],
        ['42', 2],
        ['43', 1],
        ['45', 2],
        ['46', 3],
        ['47', 1],
        ['48', 2],
        ['49', 2],
        ['50', 3]
        ['52', 1],
        ['54', 1],
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
