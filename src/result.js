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
        ['51', 1]
        ['52', 1],
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
