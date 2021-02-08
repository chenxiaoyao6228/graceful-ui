export default [
  {
    name: '广东',
    children: [
      {
        name: '广州',
        key: 'guangzhou',
        children: [
          { name: '越秀', key: 'yuexiu' },
          { name: '天河', key: 'tianhe' },
          { name: '荔湾', key: 'liwan' }
        ]
      },
      {
        name: '湛江',
        key: 'zhanjiang',
        children: [
          { name: '霞山', key: 'xiashan' },
          { name: '遂溪', key: 'suixi' },
          { name: '赤坎', key: 'chikan' }
        ]
      },
      { name: '茂名', key: 'maoming' }
    ]
  }, {
    name: '浙江',
    key: 'zhejiang',
    children: [
      {
        name: '杭州',
        key: 'hangzhou',
        children: [
          { name: '上城', key: 'shangcheng' },
          { name: '下城', key: 'xiacheng' },
          { name: '嘉善', key: 'jiashan' }
        ]
      },
      {
        name: '嘉兴',
        key: 'jiaxing',
        children: [
          { name: '南湖', key: 'nanhu' },
          { name: '秀洲', key: 'xiuzhou' },
          { name: '沧江', key: 'changjiang' }
        ]
      }
    ]
  }];
