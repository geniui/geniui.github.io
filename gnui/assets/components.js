/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const components = {
  Alert: function () {
    Gn.create('button', {
      target: '.new-alert',
      onClick: function () {
        Gn.create('alert', {
          textSets: { alertText: 'alert이 생성됩니다.' },
          hasClose: false,
          hasConfirm: true,
          hasCancel: true,
          onConfirm: function () {
            console.log('확인 되었습니다.');
          },
          onClose: function () {
            console.log('취소 되었습니다.');
          }
        });
      }
    });
  },
  Button: function () {
    Gn.create('button', {
      target: 'button[name=new-button]',
      size: 'medium',
      icon: 'home',
      onClick: function () {
        console.log('버튼을 클릭했습니다.');
      }
    });
  },
  Calendar: function () {
    Gn.create('calendar', {
      target: '.new-calendar',
      value: '2021-04-01',
      onSelect: function (v) {
        console.log('선택한 날짜: ' + v);
      },
      max: '2021-04-30',
      min: '2021-03-01'
    });
    Gn.create('calendar', {
      target: '.new-calendar1',
      onSelect: function (v) {
        console.log('선택한 날짜: ' + v);
      },
      dateType: 'datetime',
      max: '1M',
      min: '-1M'
    });
  },
  Chart: function () {
    const clickEvt = {
      dataPointSelection: function (event, chartContext, { seriesIndex, dataPointIndex, w }) {
        console.log(w.config.series);
        event && console.log('data', seriesIndex, dataPointIndex);
      },
      markerClick: function (event, chartContext, { seriesIndex, dataPointIndex, w }) {
        console.log(w.config.series[seriesIndex]);
        console.log('marker', seriesIndex, dataPointIndex);
      }
    };
    Gn.create('chart', {
      target: '.lineChart',
      type: 'line',
      chart: {
        events: clickEvt
      },
      series: [
        {
          name: 'data1',
          data: [30, 200, 100, 400, 150, 250]
        },
        {
          name: 'data2',
          data: [50, 20, 10, 40, 15, 25]
        }
      ],
      xaxis: {
        type: 'datetime',
        categories: ['2018-09-19T00:00:00.000Z', '2018-09-19T01:30:00.000Z', '2018-09-19T02:30:00.000Z', '2018-09-19T03:30:00.000Z', '2018-09-19T04:30:00.000Z', '2018-09-19T05:30:00.000Z']
      },
      width: '45%'
    });
    Gn.create('chart', {
      target: '.splineChart',
      type: 'spline',
      chart: {
        events: clickEvt
      },
      series: [
        {
          name: 'data1',
          data: [30, 200, 100, 400, 150, 250]
        }
      ],
      xaxis: {
        type: 'datetime',
        categories: ['2018-09-19T00:00:00.000Z', '2018-09-19T01:30:00.000Z', '2018-09-19T02:30:00.000Z', '2018-09-19T03:30:00.000Z', '2018-09-19T04:30:00.000Z', '2018-09-19T05:30:00.000Z']
      },
      width: '45%'
    });
    Gn.create('chart', {
      target: '.columnChart',
      type: 'column',
      chart: {
        stacked: true,
        events: clickEvt
      },
      series: [
        {
          name: 'data1',
          data: [30, 200, 100, 400, 150, 250]
        },
        {
          name: 'data2',
          data: [50, 20, 10, 40, 15, 25]
        }
      ],
      width: '45%'
    });
    Gn.create('chart', {
      target: '.barChart',
      type: 'bar',
      chart: {
        events: clickEvt
      },
      series: [
        {
          data: [30, 200, 100, 400, 150, 250]
        }
      ],
      xaxis: {
        categories: ['data1', 'data2', 'data3', 'data4', 'data5', 'data6']
      },
      width: '45%'
    });
    Gn.create('chart', {
      target: '.pieChart',
      type: 'pie',
      chart: {
        events: clickEvt
      },
      series: [30, 200, 100, 400],
      labels: ['data1', 'data2', 'data3', 'data4']
    });
    Gn.create('chart', {
      target: '.donutChart',
      type: 'donut',
      chart: {
        events: clickEvt
      },
      series: [30, 200, 100, 400, 150, 250],
      labels: ['data1', 'data2', 'data3', 'data4', 'data5', 'data6']
    });
    Gn.create('chart', {
      target: '.gaugeChart',
      type: 'gauge',
      chart: {
        events: clickEvt
      },
      series: [30],
      labels: ['data1']
    });
    Gn.create('chart', {
      target: '.radialChart',
      type: 'radial',
      chart: {
        events: clickEvt
      },
      series: [30],
      labels: ['data1']
    });
    Gn.util.each(Gn.util.$$('.aigis-module > p'), function (_blank) {
      Gn.util.remove(_blank);
    });
  },
  Colorpicker: function () {
    Gn.create('colorpicker', {
      target: '.colorPicker',
      size: 'large',
      editable: true,
      onChange: color => {
        console.log('color', color);
      }
    });
    Gn.create('colorpicker', {
      target: '.colorPicker2',
      value: '#27005d',
      size: 'medium'
    });
    Gn.create('colorpicker', {
      target: '.colorPicker3',
      readonly: false,
      value: '#aed2ff',
      onChange: color => {
        console.log('color', color);
      }
    });
    Gn.create('colorpicker', {
      target: '.colorPicker4',
      value: '#e4f1ff',
      size: 'small'
    });
  },
  Datepicker: function () {
    Gn.create('datepicker', {
      target: '.new-datepicker',
      value: '',
      dateFormat: 'yyyy-MM-DD',
      min: '-1M',
      max: '1M',
      type: 'date'
    });
    Gn.create('datepicker', {
      target: '.new-datetimepicker-without-icon',
      type: 'datetime',
      value: '2021-10-10 10:01:11',
      hasIcon: false
    });
    Gn.create('datepicker', {
      target: '.new-datetimepicker',
      type: 'datetime',
      textSets: {
        placeholder: 'pick a date'
      }
    });
  },
  Dropdown: function () {
    Gn.create('dropdown', {
      target: '.new-dropdown0',
      onChange: function (val, txt, values) {
        console.log('선택된 값은 [ ' + val + ' ]입니다.');
      },
      width: '150px',
      data: [
        { value: '1', text: '옵션 1' },
        { value: '2', text: '옵션 2' },
        { value: '3', text: '옵션 3' },
        { value: '4', text: '옵션 4' },
        { value: '5', text: '옵션 5' }
      ]
    });
    Gn.create('dropdown', {
      target: '.new-dropdown1',
      onChange: function (val, txt, values) {
        console.log('선택된 값은 [ ' + val + ' ]입니다.');
      },
      width: '150px',
      value: 'item2,item5',
      multiple: true,
      data: [
        { value: 'item1', text: '항목1' },
        { value: 'item2', text: '항목2' },
        { value: 'item3', text: '항목3' },
        { value: 'item4', text: '항목4' },
        { value: 'item5', text: '항목5' },
        { value: 'item6', text: '항목6' },
        { value: 'item7', text: '항목7' }
      ]
    });
    Gn.create('dropdown', {
      target: '.new-dropdown2',
      data: [
        [
          { value: 'item1', text: 'Group1-항목1' },
          { value: 'item2', text: 'Group1-항목2' },
          { value: 'item3', text: 'Group1-항목3' }
        ],
        [
          { value: 'item4', text: 'Group2-항목4' },
          { value: 'item5', text: 'Group2-항목5' }
        ]
      ]
    });
    Gn.create('dropdown', {
      target: '.new-dropdown3',
      data: [
        { value: '', text: '&lt;선택안함&gt;' },
        { value: 'item1', icon: 'home', text: '항목1' },
        { value: 'item2', icon: 'star', text: '항목2' },
        { value: 'item3', icon: 'heart', text: '항목3' },
        { value: 'item4', icon: 'apple', text: 'apple' },
        { value: 'item5', icon: 'linux', text: 'linux' },
        { value: 'item6', icon: 'windows', text: 'windows' },
        { value: 'item7', text: '&lt;항목5&gt;', html: '<p><strong>text</strong>가 있는 항목은 선택 시 <u>text</u>로 대체됩니다.</p>' },
        { value: 'item8', html: '<p><strong>text</strong>가 없는 항목은 <u>선택</u>할 수 없습니다.</p>' }
      ],
      width: 150,
      scrollHeight: 200
    });
    Gn.create('dropdown', {
      target: '.new-dropdown4',
      onChange: function (val, txt) {
        console.log('선택된 항목은 [ ' + txt + ' ]입니다.');
      },
      textSets: {
        selectText: '골라라'
      },
      value: 'item2',
      hasSearch: true,
      color: 'danger'
    });
  },
  Datagrid: function () {
    Gn.create('datagrid', {
      target: '.new-grid',
      headers: [
        {
          label: 'no',
          key: 'number',
          onSelect: function () {
            // eslint-disable-next-line prefer-rest-params
            console.log(arguments);
          },
          template: function (k, d) {
            return '<span>' + d[k] + '</span>';
          },
          draggable: true,
          sortable: true,
          sort: 'asc'
        },
        {
          label: '제목',
          key: 'title',
          style: {
            width: '250px'
          },
          className: 'has-text-right',
          draggable: true,
          bodyClass: 'has-text-left',
          sortable: true
        },
        {
          label: '날짜',
          key: 'date',
          style: {
            width: '150px'
          },
          className: 'has-text-center',
          bodyClass: 'has-text-left'
        }
      ],
      data: [
        {
          number: '1',
          title: '하나',
          date: '2020-09-19',
          desc: 'hello, world',
          child: [
            {
              number: '1-1',
              title: '1-하나',
              date: '2020-09-19'
            },
            {
              number: '1-2',
              title: '1-둘',
              date: '2020-09-19',
              desc: 'hello, world',
              child: [
                {
                  number: '1-2-1',
                  title: '1-둘-1',
                  date: '2020-09-19',
                  desc: 'hello, world',
                  child: [
                    {
                      number: '1-2-1-1',
                      title: '1-둘-1-1',
                      desc: 'hello, world',
                      date: '2020-09-19'
                    }
                  ]
                }
              ]
            }
          ],
          color: 'is-danger-light'
        },
        {
          number: '2',
          title: '둘',
          date: '2020-09-19',
          desc: 'hello, world'
        }
      ],
      onSort: function (column) {
        console.log('column', column);
      },
      onDragEnd: function (col, position) {
        console.log(col, position);
      },
      onToggle: function (type, row, n) {
        /* console.log(type, row, n)
        // 이렇게 하면 펼쳐질때마다 해당 로우에 2개의 자식을 바인딩한다.
        type === 'expanded' && this.addChild(n, [{
          number: '000',
          title: '추가된 자식1',
          date: '2020-02-02'
        },{
          number: '001',
          title: '추가된 자식2',
          date: '2020-02-02'
        }]) */
      },
      onCheckAll: function (ggg) {
        console.log('ggg', ggg);
      },
      onDoubleClick: function (e) {
        console.log('dbclick', e);
      },
      hasCheck: true,
      hasDelete: true
    });
    Gn.create('datagrid', {
      target: '.new-grid2',
      headers: [
        {
          label: 'row data numbers',
          key: 'number',
          style: { width: '50px' },
          sortable: true,
          draggable: true,
          template: function (k, d) {
            return '<span>' + d[k] + '</span>';
          }
        },
        {
          label: '제목',
          key: 'title',
          sortable: true,
          draggable: true,
          template: function (k, d) {
            return '<span>' + d[k] + '</span>';
          }
        },
        {
          label: '날짜를 표시하는 컬럼입니다',
          key: 'date',
          style: {
            width: '100px'
          },
          tipField: 'desc'
        },
        {
          label: '헤더명도길어집니다',
          key: 'desc',
          style: { width: '50px' }
        }
      ],
      data: (callback, ui) => {
        console.log('ui', ui);
        ui.paginator.total = 40;

        return callback([
          {
            number: '1',
            title: '하나',
            date: '2020-09-19'
          },
          {
            number: '232342333',
            title: 'Lorem labore culpa voluptate proident ad et id nostrud excepteur incididunt ut officia et ullamco.',
            date: '2020-09-19',
            desc: 'Voluptate enim culpa anim dolor magna excepteur ullamco id aliquip consequat ullamco voluptate consectetur.',
            ordered: false,
            limited: 0,
            one: 'one',
            two: 2,
            three: {
              hello: 'p',
              ordered: false,
              limited: 0,
              one: 'one',
              two: 2,
              desc: 'hhhhhhh'
            },
            checked: true
          }
        ]);
      },
      sort: function (column) {
        console.log('column', column);
      },
      onSelect: function (row, index) {
        console.log('row', row, index);
        this.showDetail(index, null, ['number', 'title', 'date', 'desc', 'ordered', 'limited', 'one', 'two', 'three', 'checked']);
      },
      onDoubleClick: function (e) {
        console.log('dbclick', e);
      },
      isEllipsis: true,
      hasCheck: true,
      hasOrder: true,
      textSets: {
        orderLabel: '이동'
      },
      paginator: {
        rows: 10
      },
      // hasDelete: true,
      // fixHeader: true,
      onChange: updatedData => {
        console.log(updatedData);
      }
    });
  },
  Datalist: function () {
    Gn.create('datalist', {
      target: '.new-list',
      headers: [
        {
          label: 'no',
          key: 'number',
          bodyClass: 'has-text-left',
          style: {
            width: '50px',
            'text-align': 'center'
          }
        },
        {
          label: '제목',
          key: 'title',
          className: 'main-title'
        },
        {
          label: '날짜',
          key: 'date'
        },
        {
          label: '설명',
          key: 'desc'
        },
        {
          label: '기타',
          key: 'etc'
        }
      ],
      data: [
        {
          number: '1',
          title: '오늘',
          date: '2023-07-28',
          desc: 'hellojj'
        },
        {
          number: '2',
          title: '내일',
          date: '2023-07-29',
          desc: 'chaaaaaa'
        }
      ],
      onChange: updatedData => {
        console.log('updatedData', updatedData);
      }
    });
    Gn.create('datalist', {
      target: '.new-list2',
      headers: [
        {
          label: 'row-number',
          key: 'number'
        },
        {
          label: '제목',
          key: 'title'
        },
        {
          label: '날짜',
          key: 'date'
        },
        {
          label: '상세설명',
          key: 'desc'
        },
        {
          label: '숨김',
          key: 'ishidden',
          isHidden: true
        }
      ],
      data: [
        { number: 1, title: '첫 번째', date: '2023-07-28', desc: '이것은 첫 번째 요소입니다.', ishidden: 'datalist에 표시되지 않습니다.' },
        { number: 2, title: '두 번째', date: '2023-07-29', desc: '이것은 두 번째 요소입니다.', ishidden: 'datalist에 표시되지 않습니다.' },
        { number: 3, title: '세 번째', date: '2023-07-30', desc: '', ishidden: 'datalist에 표시되지 않습니다.' },
        { number: 4, title: '', date: '2023-07-31', desc: '이것은 네 번째 요소입니다.', ishidden: 'datalist에 표시되지 않습니다.' },
        { number: 5, title: '다섯 번째', date: '2023-08-01', desc: '이것은 다섯 번째 요소입니다.' },
        { number: 6, title: '여섯 번째', date: '2023-08-02 ~ 2023-11-02', desc: '이것은 여섯 번째 요소입니다.' },
        { number: 7, title: '일곱 번째 일곱 번째 일곱 번째', date: '2023-08-03', desc: '이것은 일곱 번째 요소입니다.' },
        {
          number: 8,
          title: '여덟 번째',
          date: '2023-08-08',
          desc: '이것은 여덟 번째 요소입니다.이것은 여덟 번째 요소입니다.이것은 여덟 번째 요소입니다.이것은 여덟 번째 요소입니다.이것은 여덟 번째 요소입니다.이것은 여덟 번째 요소입니다.이것은 여덟 번째 요소입니다.이것은 여덟 번째 요소입니다.이것은 여덟 번째 요소입니다.이것은 여덟 번째 요소입니다.이것은 여덟 번째 요소입니다.이것은 여덟 번째 요소입니다.'
        }
      ],
      hasUpdate: true,
      hasDelete: true,
      onUpdate: function (row, index) {
        console.log('row', row);
        console.log('index', index);
      },
      onChange: updatedData => {
        console.log('updatedData', updatedData);
      },
      isHiddenEmpty: true
    });
  },
  Growl: function () {
    Gn.create('button', {
      target: '.new-growl1',
      onClick: function () {
        Gn.create('growl', {
          textSets: { message: '메세지가 생성됩니다!' },
          duration: 3000,
          positionX: 'right',
          positionY: 'top',
          color: 'danger'
        });
      }
    });
    Gn.create('button', {
      target: '.new-growl2',
      onClick: function () {
        Gn.create('growl', {
          textSets: { message: '메세지가 생성됩니다!' },
          duration: 3000,
          type: 'info'
        });
      }
    });
  },
  JsonView: function () {
    Gn.create('jsonview', {
      target: '.new-jsonview',
      schema: {
        Type: 'array',
        Disp: 'aws sample 정보',
        Description: 'aws sample 정보 설명',
        Items: {
          Type: 'object',
          Properties: {
            index: {
              Type: 'checkbox',
              Disp: ''
            },
            _id: {
              Type: 'string',
              Disp: '인스턴스ID',
              Description: '인스턴스ID입니다.'
            },
            _type: {
              Type: 'string',
              Disp: '수집기타입'
            },
            test1: {
              Type: 'number',
              Disp: 'Test1 Value'
            },
            test2: {
              Type: 'number',
              Disp: 'Test2 Value'
            },
            updated: {
              Type: 'datetime',
              Disp: '마지막 업데이트',
              $ref: '#/$defs/Datas'
            },
            nodes: {
              Type: 'object',
              Disp: '노드정보',
              Properties: {
                obj1: {
                  Type: 'string',
                  Disp: 'obj1'
                },
                obj2: {
                  Type: 'integer',
                  Disp: 'obj2'
                }
              }
            }
          },
          Required: ['_type'],
          Hidden: ['test1', 'test2'],
          SortItems: ['_id']
        },
        $defs: {
          Datas: {
            Type: 'array',
            Disp: '추가 데이터 정보',
            Items: {
              Type: 'object',
              Properties: {
                field1: {
                  Type: 'string',
                  Disp: '필드 1'
                },
                field2: {
                  Type: 'number'
                },
                datas: {
                  Type: ['array', 'string'],
                  Items: {
                    Type: 'object',
                    Properties: {
                      id: {
                        Type: 'number',
                        Disp: null
                      },
                      text: {
                        Type: 'string',
                        Disp: null
                      }
                    }
                  }
                }
              }
            }
          }
        }
      },
      data: [
        {
          index: 0,
          _id: 'd3185f78-7221-103a-8002-0272452c0706',
          _type: 'aws',
          test1: 1234,
          test2: 1231.23,
          updated: 1603427314109,
          nodes: {
            obj1: 'value',
            obj2: 123
          },
          Datas: [
            {
              field1: 'test1',
              field2: 123,
              datas: [
                {
                  id: 1,
                  text: 'data1'
                },
                {
                  id: 2,
                  text: 'data2'
                }
              ]
            },
            {
              field1: 'test2',
              field2: 321,
              datas: [
                {
                  id: 1,
                  text: 'data3'
                },
                {
                  id: 2,
                  text: 'data4'
                }
              ]
            },
            {
              field1: 'test2',
              field2: 321,
              datas: 'just text'
            }
          ]
        },
        {
          index: 1,
          _id: 'd3185f78-7221-103a-8002-0125213c0706',
          _type: 'aws',
          test1: 1234,
          test2: 1231.23,
          updated: 1603427314109,
          nodes: {
            obj1: 'value',
            obj2: 123
          },
          Datas: [
            {
              field1: 'test1',
              field2: 123,
              datas: [
                {
                  id: 1,
                  text: 'data1'
                },
                {
                  id: 2,
                  text: 'data2'
                }
              ]
            },
            {
              field1: 'test2',
              field2: 321,
              datas: [
                {
                  id: 1,
                  text: 'data3'
                },
                {
                  id: 2,
                  text: 'data4'
                }
              ]
            },
            {
              field1: 'test2',
              field2: 321,
              datas: 'just text'
            }
          ]
        }
      ]
    });
    Gn.create('jsonview', {
      target: '.new-rawview',
      data: '{"_id": "d3185f78-7221-103a-8002-0272452c0706","_type": "aws","test1": 1234,"test2": 1231.23,"nodes" : {"obj1":"value","obj2":123},"datas": [{"field1":"test1","field2":123,"datas":["data1","data2"]},{"field1":"test2","field2":321,"datas":["data3","data4"]}]}'
    });
    Gn.create('jsonview', {
      target: '.add-jsonview',
      schema: {
        Type: 'array',
        Items: {
          Type: 'object',
          Properties: {
            bignum: {
              Type: 'bignumber'
            }
          }
        }
      },
      data: [
        {
          bignum: {
            CPU: 23.34,
            RAM: {
              value: 26,
              data: [0, 23, 33, 0]
            }
          }
        }
      ]
    });
    Gn.create('jsonview', {
      target: '.type-string',
      schema: {
        Type: 'string',
        RefURL: 'http://www.genians.com',
        Target: '_blank'
      },
      data: '다람쥐 헌 쳇바퀴'
    });
    Gn.create('jsonview', {
      target: '.type-number',
      schema: {
        Type: 'number'
      },
      data: 10001
    });
    Gn.create('jsonview', {
      target: '.type-byte',
      schema: {
        Type: 'byte'
      },
      data: 100000000
    });
    Gn.create('jsonview', {
      target: '.type-datetime',
      schema: {
        Type: 'datetime'
      },
      data: 1603427314109
    });
    Gn.create('jsonview', {
      target: '.type-checkbox',
      schema: {
        Type: 'checkbox'
      },
      data: {
        value: '100',
        checked: true
      }
    });
    Gn.create('jsonview', {
      target: '.type-checkbox2',
      schema: {
        Type: 'checkbox'
      },
      data: 100
    });
    Gn.create('jsonview', {
      target: '.type-html',
      schema: {
        Type: 'html'
      },
      data: '<img src="/styleguide/assets/image.png" alt="asset">'
    });
    Gn.create('jsonview', {
      target: '.type-array1',
      schema: {
        Type: 'array',
        Items: {
          Type: ['string', 'number'],
          RefURL: 'https://search.naver.com/search.naver?query={{data}}'
        }
      },
      data: ['빨강', '주황', '노랑', '초록', '파랑']
    });
    Gn.create('jsonview', {
      target: '.type-percent',
      schema: {
        Type: 'percent'
      },
      data: 52
    });
    Gn.create('jsonview', {
      target: '.type-bignumber',
      schema: {
        Type: 'bignumber'
      },
      data: {
        온도: 24,
        습도: {
          value: 60,
          data: [0, 10, 21, 5, 18]
        }
      }
    });
    Gn.create('jsonview', {
      target: '.type-chart',
      schema: {
        Type: 'chart'
      },
      data: {
        type: 'donut',
        series: [30, 200, 100],
        labels: ['data1', 'data2', 'data3']
      }
    });
    Gn.create('jsonview', {
      target: '.type-object',
      schema: {
        Type: 'object',
        Disp: '',
        Description: '',
        Properties: {
          'data-string': {
            Type: 'string',
            Disp: '물품명',
            Description: 'product name'
          },
          'data-number': {
            Type: 'number',
            Disp: '재고'
          },
          'data-reorder': {
            Type: 'string',
            Disp: '재주문가능'
          }
        },
        Hidden: ['data-reorder']
      },
      data: {
        'data-string': '부뚜막',
        'data-number': 1489,
        'data-reorder': 'false'
      }
    });
    Gn.create('jsonview', {
      target: '.type-array2',
      schema: {
        Type: 'array',
        Items: {
          Type: 'object',
          Properties: {
            '$["data-string"]': {
              Type: 'string',
              Disp: '물품명',
              Description: 'product name'
            },
            '$["data-number"]': {
              Type: 'number',
              Disp: '재고'
            }
          }
        }
      },
      data: [
        {
          'data-string': '부뚜막',
          'data-number': 1489
        },
        {
          'data-string': '솥뚜껑',
          'data-number': 34
        }
      ]
    });
    Gn.create('jsonview', {
      target: '.path-key',
      schema: {
        Type: 'array',
        Items: {
          Type: 'object',
          Properties: {
            '$.COLLECTOR._id': {
              Type: 'string',
              Disp: '인스턴스ID'
            },
            '$.COLLECTOR._type': {
              Type: 'string',
              Disp: '타입',
              $ref: '#/$defs/Datas'
            },
            '$.COLLECTOR.nodes.obj2': {
              Type: 'number',
              Disp: 'No'
            }
          }
        },
        $defs: {
          Datas: {
            Type: 'array',
            Disp: 'Datas',
            Items: {
              Type: 'object',
              Properties: {
                field1: {
                  Type: 'string',
                  Disp: '필드1'
                },
                field2: {
                  Type: 'number',
                  Disp: '필드2'
                },
                field3: {
                  Type: 'string',
                  Disp: '필드3'
                }
              }
            }
          }
        }
      },
      data: [
        {
          COLLECTOR: {
            _id: 'data-1-id',
            _type: 'collector',
            test1: 0,
            test2: 0,
            nodes: {
              obj1: '',
              obj2: 0
            },
            datas: {
              field1: 'data-1',
              field2: 0,
              datas: [
                {
                  field1: 'data-1',
                  field2: 0,
                  field3: 'data-1'
                },
                {
                  field1: 'data-1',
                  field2: 0,
                  field3: 'data-1'
                }
              ]
            }
          }
        },
        {
          COLLECTOR: {
            _id: 'data-2-id',
            _type: 'collector',
            test1: 1,
            test2: 1,
            nodes: {
              obj1: '',
              obj2: 1
            },
            datas: {
              field1: 'data-2',
              field2: 1,
              datas: [
                {
                  field1: 'data-2',
                  field2: 1,
                  field3: 'data-2'
                },
                {
                  field1: 'data-2',
                  field2: 1,
                  field3: 'data-2'
                }
              ]
            }
          }
        }
      ]
    });
    Gn.create('jsonview', {
      target: '.converter-view',
      schema: {
        Type: 'array',
        Items: {
          Type: 'object',
          Properties: {
            name: {
              Type: 'string',
              Disp: '스위치명'
            },
            status: {
              Type: 'number',
              Disp: '동작상태',
              Converter: ['CodeImageConverter', 'OperStatus']
            }
          }
        }
      },
      data: [
        {
          name: '부뚜막',
          status: 1
        },
        {
          name: '솥뚜껑',
          status: 0
        }
      ],
      convert: (name, type, value) => {
        if (value === '1') {
          return '미동작';
        } else {
          return '동작';
        }
      }
    });
  },
  Loader: function () {
    Gn.create('button', {
      target: '.new-loader1',
      onClick: function () {
        Gn.create('loader', {
          duration: 3000,
          size: 'large',
          positionX: 'right',
          positionY: 'center',
          color: 'secondary'
        });
      }
    });
    Gn.create('button', {
      target: '.new-loader2',
      onClick: function () {
        Gn.create('loader', {
          duration: 3000
        });
      }
    });
  },
  Message: function () {
    Gn.create('button', {
      target: '.new-message',
      onClick: function () {
        Gn.create('message', {
          target: '.page-message',
          textSets: { message: '메세지가 생성됩니다!<br>잠시만 기다려주세요.' }
        });
      }
    });
  },
  MenuButton: function () {
    Gn.create('menubutton', {
      target: 'button[name=new-button]',
      size: 'normal',
      textSets: {
        buttonText: '메뉴버튼'
      },
      onSelect: function (menu) {
        console.log('선택된 메뉴는 ' + menu);
      },
      data: [
        [
          {
            text: 'menu1',
            value: 'menu1'
          },
          {
            text: 'menu2',
            value: 'menu2'
          }
        ],
        [
          {
            text: '환경설정',
            html: '<span class="gn-icon is-small"><i class="fas fa-cogs"></i>설정</span>',
            value: 'menu1'
          },
          {
            text: 'Exit',
            value: 'exit'
          }
        ]
      ]
    });
    Gn.create('menubutton', {
      target: 'button[name=new-button2]',
      style: 'simple',
      icon: 'list',
      data: [
        {
          text: 'menu1',
          value: 'menu1'
        },
        {
          text: 'menu2',
          value: 'menu2'
        }
      ]
    });
  },
  Modal: function () {
    Gn.create('button', {
      target: '.new-modal',
      onClick: function () {
        Gn.create('modal', {
          textSets: { title: '새로운 모달' },
          hasConfirm: true,
          hasCancel: true,
          height: 600,
          onConfirm: function () {
            console.log('확인하였습니다.');
          },
          contents: '<ul class="gn-list is-medium"><li>Ad nisi excepteur nostrud in.</li><li>Commodo duis anim excepteur qui.</li><li>Centered Text</li></ul>'
        });
      }
    });
    Gn.create('button', {
      target: '.new-popup',
      onClick: function () {
        Gn.create('modal', {
          textSets: { title: '새로운 팝업' },
          contents:
            '<table class="gn-table is-full"><tr><td>1</td><td>2</td><td>3</td><td>4</td></tr><tr class="is-primary-light"><td>5</td><td>6</td><td class="is-primary">7</td><td>8</td></tr><tr><td>9</td><td>10</td><td>11</td><td>12</td></tr><tr><td>13</td><td>14</td><td>15</td><td>16</td></tr></table>',
          isModal: false,
          draggable: true,
          minimized: true,
          resizable: true
        });
      }
    });
  },
  Pagination: function () {
    Gn.create('pagination', {
      target: '.new-pagination',
      total: 12000,
      onChange: p => {
        console.log(p);
      }
    });
  },
  MultiText: function () {
    Gn.create('multitext', {
      target: '.default-multitext'
    });
    Gn.create('multitext', {
      target: '.new-multitext',
      lang: ['en', 'ko', 'cn'],
      value: {
        en: 'hello',
        ko: '안녕하세요',
        cn: 'HELLO'
      },
      rows: 1,
      maxlength: 300
    });
  },
  Picklist: function () {
    Gn.create('picklist', {
      target: '.new-picklist',
      data: {
        source: [
          { value: 'item1', text: '항목1' },
          { value: 'item2', text: '항목2' },
          { value: 'item5', text: '항목3' },
          { value: 'item4', text: '항목4' },
          { value: 'item5', text: '항목5' },
          { value: 'item6', text: '항목6' },
          { value: 'item7', text: '항목7' },
          { value: 'item8', text: '항목8' }
        ],
        target: []
      },
      hasSourceSearch: true,
      hasTargetSearch: true,
      width: '80%',
      height: 180,
      onChange: function (s, t) {
        console.log(s, t);
      },
      orderable: 'target'
    });
    Gn.create('picklist', {
      target: '.new-picklist-v',
      data: {
        source: [
          { value: '항목1', text: 'item1' },
          { value: '항목2', text: 'item2' },
          { value: '항목3', text: 'item3' },
          { value: '항목4', text: 'item4' },
          { value: '항목5', text: 'item5' }
        ],
        target: []
      },
      direction: 'vertical',
      width: '500px',
      height: 150,
      textSets: {
        sourceCaption: '할당가능',
        targetCaption: '할당됨'
      }
    });
  },
  Progressbar: function () {
    Gn.create('progressbar', {
      target: '.new-progress-indeterminate',
      color: 'info',
      size: 'medium',
      indeterminate: true
    });
    const progress = Gn.create('progressbar', {
      target: '.new-progress',
      color: 'primary',
      size: 'medium',
      value: 30,
      hasFigure: true
    });
    Gn.create('button', {
      target: '.btn0',
      size: 'small',
      onClick: function () {
        progress.setValue(0);
      }
    });
    Gn.create('button', {
      target: '.btn20',
      size: 'small',
      onClick: function () {
        progress.setValue(20);
      }
    });
    Gn.create('button', {
      target: '.btn50',
      size: 'small',
      onClick: function () {
        progress.setValue(50);
      }
    });
    Gn.create('button', {
      target: '.btn70',
      size: 'small',
      onClick: function () {
        progress.setValue(70);
      }
    });
    Gn.create('button', {
      target: '.btn100',
      size: 'small',
      onClick: function () {
        progress.setValue(100);
      }
    });
  },
  SelectButton: function () {
    Gn.create('selectbutton', {
      target: '.new-selectButtons',
      size: 'normal',
      value: 'menu2',
      onChange: function (option) {
        console.log('선택된 옵션은 ' + option);
      },
      data: [
        {
          text: 'menu1',
          value: 'menu1'
        },
        {
          text: 'menu2',
          value: 'menu2'
        },
        {
          text: 'menu3',
          value: 'menu3'
        },
        {
          text: 'menu4',
          value: 'menu4'
        }
      ]
    });
    Gn.create('selectbutton', {
      target: '.new-selectButtons-v',
      size: 'normal',
      value: 'menu1,menu2',
      multiple: true,
      align: 'vertical',
      onChange: function (option) {
        console.log('선택된 옵션은 ' + option);
      },
      data: [
        {
          text: 'menu1',
          value: 'menu1'
        },
        {
          text: 'menu2',
          value: 'menu2'
        },
        {
          text: 'menu3',
          value: 'menu3'
        },
        {
          text: 'menu4',
          value: 'menu4'
        }
      ]
    });
  },
  Splitter: function () {
    Gn.create('splitter', {
      target: '#horizontal-splitter',
      panel: ['#frame1', '#frame2'],
      position: '30%',
      onDrag: function (e) {
        console.log('dragging');
      },
      onDragStart: function (e) {
        console.log('drag start');
      },
      onDragEnd: function (e) {
        console.log(e, 'drag End');
      },
      orientation: 'horizontal'
    });
    Gn.create('splitter', {
      target: '#vertical-splitter',
      panel: ['#frame3', '#frame4'],
      space: 20,
      minPosition: 40,
      position: '30%',
      orientation: 'vertical'
    });
  },
  Switch: function () {
    Gn.create('switch', {
      target: '.new-switch',
      size: 'large',
      color: 'info',
      checked: true,
      onToggle: function (e) {
        console.log('toggle 이벤트');
      }
    });
  },
  SyntaxInput: function () {
    Gn.create('syntaxinput', {
      target: '.syntaxInput'
    });
    Gn.create('syntaxinput', {
      target: '.syntaxInput2',
      multiple: true,
      usetab: true
    });
    Gn.create('syntaxinput', {
      target: '.syntaxInput3',
      type: 'custom',
      patterns: {
        constant: {
          pattern: /\w+:?(?=\/)/gm
        },
        keyword: {
          pattern: /[^/]*$/gm
        }
      }
    });
  },
  Tab: function () {
    Gn.create('tab', {
      target: '#newTab',
      align: 'center',
      contents: '#newContents',
      onChange: function (idx, tab) {
        console.log(idx + '번 탭이 활성화 되었습니다.');
      }
    });
  },
  Tagcloud: function () {
    Gn.create('tagcloud', {
      target: '.new-tagcloud',
      width: '250px',
      data: [
        {
          text: 'Genians',
          value: 50
        },
        {
          text: 'NAC',
          value: 33
        },
        {
          text: 'Typescript',
          value: 12
        },
        {
          text: 'Insights',
          value: 26
        },
        {
          text: 'Network',
          value: 3
        },
        {
          text: 'sass',
          value: 1
        },
        {
          text: 'EDR',
          value: 19
        },
        {
          text: 'Front-end',
          value: 6
        },
        {
          text: 'GNUI',
          value: 42
        },
        {
          text: 'Framework',
          value: 1
        }
      ]
    });
  },
  Tooltip: function () {
    Gn.create('tooltip', {
      target: '.has-tooltip1',
      contents: '.new-contents',
      direction: 'left',
      type: 'click'
    });
    Gn.create('tooltip', {
      target: '.has-tooltip2',
      contents: '기본값 bottom 툴팁'
    });
    Gn.create('tooltip', {
      target: '.has-tooltip3',
      contents: 'top 툴팁',
      direction: 'top'
    });
    Gn.create('tooltip', {
      target: '.has-tooltip4',
      contents: 'right 툴팁',
      direction: 'right'
    });
    Gn.create('tooltip', {
      target: '.has-tooltip5',
      contents: 'left top 툴팁',
      direction: 'left-top',
      width: '200px'
    });
    Gn.create('tooltip', {
      target: '.has-tooltip6',
      contents: 'left bottom 툴팁',
      direction: 'left-bottom'
    });
    Gn.create('tooltip', {
      target: '.has-tooltip7',
      contents:
        '</b>자주 사용되는 정규식 특수문자</b><br/><br/>. 임의의 한 문자 예) .* 모든문자열<br/>^ 문자열 시작 예) ^Genians Genians으로 시작하는 문자열<br/>$ 문자열 끝 예) Genians$ Genians로 끝나는 문자열<br/>[ 문자집합 시작 표시 예) [ab] a 또는 b문자가 포함되는 문자열<br/>] 문자집합 끝 표시<br/>( 문자열 집합 시작 예) a(b)|(c)d abd 또는 acd를 의미<br/> 문자열 집합 끝<br/>| 또는(OR)<br/> 특수한 기능을 하는 다음 문자표시 예) . Period 문자표시<br/>n* 0개 이상의 n문자<br/>n+ 1개 이상의 n문자<br/>&#123;n&#125; 앞문자가 n개 예) ab&#123;2&#125;c abbc를 의미<br/>&#123;n,&#125; 앞문자가 n개 이상<br/>&#123;,m&#125; 앞문자가 m개 이하<br/>&#123;n,m&#125; 앞문자가 n개 이상 m개 이하<br/>',
      direction: 'right-top'
    });
    Gn.create('tooltip', {
      target: '.has-tooltip8',
      contents: '<br/>right bottom 툴팁<br/>',
      direction: 'right-bottom'
    });
  },
  Time: function () {
    Gn.create('time', {
      target: '.new-time',
      onChange: function (time) {
        console.log(time);
      },
      value: '22:33:44'
    });
    Gn.create('time', {
      target: '.new-time2',
      timeFormat: 'hh:mm',
      onChange: function (time) {
        console.log(time);
      },
      value: '6:2',
      hasControls: false
    });
  },
  Tree: function () {
    Gn.create('tree', {
      target: '.new-tree1',
      data: [
        {
          text: 'Genians',
          child: [
            {
              text: 'GNUI'
            },
            {
              text: 'GNUI core'
            },
            {
              text: 'GNConfEngine'
            }
          ]
        },
        {
          text: 'R&D Center',
          child: [
            {
              text: 'GNUI'
            },
            {
              text: 'GNUI core'
            },
            {
              text: 'GNConfEngine'
            }
          ]
        },
        {
          text: 'Front-end'
        }
      ],
      type: 'borderless'
    });
    Gn.create('tree', {
      target: '.new-tree2',
      data: [
        {
          text: 'Genians',
          child: [
            {
              text: 'GNUI'
            },
            {
              text: 'GNUI core'
            },
            {
              text: 'GNConfEngine'
            }
          ]
        },
        {
          text: 'R&D Center',
          child: [
            {
              text: 'GNUI'
            },
            {
              text: 'GNUI core'
            },
            {
              text: 'GNConfEngine'
            }
          ]
        },
        {
          text: 'Front-end'
        }
      ],
      color: 'success',
      multiple: true
    });
    Gn.create('tree', {
      target: '.new-tree3',
      data: [
        {
          text: 'Genians',
          actived: true,
          opened: true,
          child: [
            {
              text: 'GNUI'
            },
            {
              text: 'GNUI core',
              opened: true,
              child: [
                {
                  text: 'GNUI'
                },
                {
                  text: 'GNUI core'
                },
                {
                  text: 'GNConfEngine',
                  selected: true
                }
              ]
            },
            {
              text: 'GNConfEngine'
            }
          ]
        },
        {
          text: 'R&D Center',
          child: [
            {
              text: 'GNUI'
            },
            {
              text: 'GNUI core'
            },
            {
              text: 'GNConfEngine'
            }
          ]
        },
        {
          text: 'Front-end'
        }
      ],
      hasCheck: true
    });
  }
};
