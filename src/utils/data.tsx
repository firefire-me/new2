import type { ColumnsType } from 'antd/es/table';
import {orderBy} from 'lodash' 

// 头部导航内容
const sections = [
    { id:'1', title: '产品', url: '/product' },
    { id: '2', title: '资产组合', url: '/protfolio' },
  ];

// 热门
const hot = [
  {id: '1', title: '大鱼DeFi对冲套利1号', profit: '年化收益18%' ,mold: 'USDT', bgc: 'pink' },
  {id: '2', title: '大鱼期权套利2号', profit: '年化收益28%' ,mold: 'USDC', bgc: 'pink' },
  {id: '3', title: '鲨鱼量化CTA4号', profit: '年化收益35%' ,mold: 'BTC' , bgc: 'pink'},
  {id: '4', title: '泰山多币种轮动5号', profit: '年化收益35%' ,mold: 'BTC', bgc: 'pink' },
  {id: '5', title: '昆仑多空对冲6号', profit: '年化收益15%' ,mold: 'USDT', bgc: 'pink' },
  {id: '6', title: '启明多币种做市8号', profit: '年化收益18%' ,mold: 'ETH', bgc: 'pink' },
  {id: '7', title: '朝阳高频策略10号', profit: '年化收益89%' ,mold: 'USDT', bgc: 'pink' }
]

// 做市
const market = [
  {id: '1', title: '大鱼DeFi对冲套利1号', profit: '年化收益18%' ,mold: 'USDT', bgc: 'skyblue' },
  {id: '2', title: '大鱼期权套利2号', profit: '年化收益28%' ,mold: 'USDC', bgc: 'skyblue' },
  {id: '3', title: '鲨鱼量化CTA4号', profit: '年化收益35%' ,mold: 'BTC', bgc: 'skyblue' },
  {id: '4', title: '泰山多币种轮动5号', profit: '年化收益35%' ,mold: 'BTC', bgc: 'skyblue' },
  {id: '5', title: '昆仑多空对冲6号', profit: '年化收益15%' ,mold: 'USDT', bgc: 'skyblue' },
  {id: '6', title: '启明多币种做市8号', profit: '年化收益18%' ,mold: 'ETH', bgc: 'skyblue' },
  {id: '7', title: '朝阳高频策略10号', profit: '年化收益89%' ,mold: 'USDT', bgc: 'skyblue' }
]

// 套利
const interest = [
  {id: '1', title: '大鱼DeFi对冲套利1号', profit: '年化收益18%' ,mold: 'USDT', bgc: '#99ff99' },
  {id: '2', title: '大鱼期权套利2号', profit: '年化收益28%' ,mold: 'USDC', bgc: '#99ff99' },
  {id: '3', title: '鲨鱼量化CTA4号', profit: '年化收益35%' ,mold: 'BTC', bgc: '#99ff99' },
  {id: '4', title: '泰山多币种轮动5号', profit: '年化收益35%' ,mold: 'BTC', bgc: '#99ff99' },
  {id: '5', title: '昆仑多空对冲6号', profit: '年化收益15%' ,mold: 'USDT', bgc: '#99ff99' },
  {id: '6', title: '启明多币种做市8号', profit: '年化收益18%' ,mold: 'ETH', bgc: '#99ff99' },
  {id: '7', title: '朝阳高频策略10号', profit: '年化收益89%' ,mold: 'USDT', bgc: '#99ff99' }
]

// 期权
const option = [
  {id: '1', title: '大鱼DeFi对冲套利1号', profit: '年化收益18%' ,mold: 'USDT', bgc: '#ffa488' },
  {id: '2', title: '大鱼期权套利2号', profit: '年化收益28%' ,mold: 'USDC', bgc: '#ffa488' },
  {id: '3', title: '鲨鱼量化CTA4号', profit: '年化收益35%' ,mold: 'BTC', bgc: '#ffa488' },
  {id: '4', title: '泰山多币种轮动5号', profit: '年化收益35%' ,mold: 'BTC', bgc: '#ffa488' },
  {id: '5', title: '昆仑多空对冲6号', profit: '年化收益15%' ,mold: 'USDT', bgc: '#ffa488' },
  {id: '6', title: '启明多币种做市8号', profit: '年化收益18%' ,mold: 'ETH', bgc: '#ffa488' },
  {id: '7', title: '朝阳高频策略10号', profit: '年化收益89%' ,mold: 'USDT', bgc: '#ffa488' }
]

// 复合
const reunite = [
  {id: '1', title: '大鱼DeFi对冲套利1号', profit: '年化收益18%' ,mold: 'USDT', bgc: '#ffaa33' },
  {id: '2', title: '大鱼期权套利2号', profit: '年化收益28%' ,mold: 'USDC', bgc: '#ffaa33' },
  {id: '3', title: '鲨鱼量化CTA4号', profit: '年化收益35%' ,mold: 'BTC', bgc: '#ffaa33' },
  {id: '4', title: '泰山多币种轮动5号', profit: '年化收益35%' ,mold: 'BTC', bgc: '#ffaa33' },
  {id: '5', title: '昆仑多空对冲6号', profit: '年化收益15%' ,mold: 'USDT', bgc: '#ffaa33' },
  {id: '6', title: '启明多币种做市8号', profit: '年化收益18%' ,mold: 'ETH', bgc: '#ffaa33' },
  {id: '7', title: '朝阳高频策略10号', profit: '年化收益89%' ,mold: 'USDT', bgc: '#ffaa33' }
]


// 资产组合中表格的表头数据
interface DataType {
  key: string;
  product: string,
  name: string;
  money: string;
  networth: string;
  equity: string
  detail:string
}

const heldColumns: ColumnsType<DataType> = [
  {
    title: '产品代码',
    dataIndex: 'product',
    // render: text => <a>{text}</a>,
  },
  {
    title: '名称',
    dataIndex: 'name',
  },
  {
    title: '持有份额',
    dataIndex: 'money',
  },
  {
    title: '当前净值',
    dataIndex: 'networth',
  },
  {
    title: '权益',
    dataIndex: 'equity',
  },
  {
    title: '',
    dataIndex: 'detail',
    render: text => <a>{text}</a>
  },
];

// 资产组合中表格中的数据
const heldData: DataType[] = [
  {
    key: '1',
    product: '$DYDF01',
    name: '大鱼DeFi对冲套利1号 (USDT本位)',
    money: '1000',
    networth: '1.20',
    equity: '≈ 1200.0 USDT',
    detail:'详情'
  },
  {
    key: '2',
    product: '$TAl05',
    name: '泰山多币种轮动5号 (ETH本位)',
    money: '40',
    networth: '1.25',
    equity: '≈ 50.0 ETH',
    detail:'详情'
  },
  {
    key: '3',
    product: '$DF08',
    name: 'DeFi做市8号 (ETH本位)',
    money: '60',
    networth: '1.05',
    equity: '≈ 60.9 ETH',
    detail:'详情'
  },
];

// 资产组合的历史记录头部数据
type HistoryType = {
  key: string,
  time: string,
  operation: string,
  product: string,
  detail: string
}

const historyColumns: ColumnsType<HistoryType> = [
  {
    title: '日期时间',
    dataIndex: 'time',
    key:'time',
    // render: text => <a>{text}</a>,
    sortDirections: ['ascend']
  },
  {
    title: '操作',
    dataIndex: 'operation',
  },
  {
    title: '产品',
    dataIndex: 'product',
  },
  {
    title: '详情',
    dataIndex: 'detail',
  }
];

// 资产组合的历史记录表格中的数据
let historyData: HistoryType[] = [
  {
    key: '1',
    time: '2022/09/23 15:23',
    operation: '申购',
    product: '$DYDF01 大鱼对冲套利1号',
    detail:'份额 2100 金额 2200 USDT'
  },
  {
    key: '2',
    time: '2022/09/21 14:20',
    operation: '赎回',
    product: '$DYDF002 大鱼对冲套利2号',
    detail:'份额 1100 金额 1100 USDT'
  },
  {
    key: '3',
    time: '2022/09/20 09:32',
    operation: '申购',
    product: '$DYDF002 大鱼对冲套利2号',
    detail:'份额 2100 金额 2200 USDT'
  },
  {
    key: '4',
    time: '2022/09/18 09:32',
    operation: '充值',
    product: '资金账户',
    detail:'20000 USDT'
  },
];

// 7日内的图表
// 日期横轴
const wend = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

// 数量纵轴
const wendQuantity = [820, 932, 901, 934, 1290, 1330, 1320]

// 30日内的图表
// 日期横轴
const moth = ['10/1', '10/2', '10/3', '10/4', '10/5', '10/6', '10/7', '10/8', '10/9', '10/10', '10/11', '10/12', '10/13', '10/14', '10/15', '10/16', '10/17', '10/18', '10/19', '10/20', '10/21', '10/22', '10/23', '10/24', '10/25', '10/26', '10/27', '10/28', '10/29', '10/30', '10/31']

// 数量纵轴
const mothQuantity = [820, 932, 901, 934, 1290, 1330, 1320, 820, 932, 901, 934, 1290, 1330, 1320,820, 932, 901, 934, 1290, 1330, 1320,820, 932, 901, 934, 1290, 1330, 1320,220,290,280]

// 全部时间内的图表
// 日期横轴
const both = ['10/1', '10/2', '10/3', '10/4', '10/5', '10/6', '10/7', '10/8', '10/9', '10/10', '10/11', '10/12', '10/13', '10/14', '10/15', '10/16', '10/17', '10/18', '10/19', '10/20', '10/21', '10/22', '10/23', '10/24', '10/25', '10/26', '10/27', '10/28', '10/29', '10/30', '10/31','10/1', '10/2', '10/3', '10/4', '10/5', '10/6', '10/7', '10/8', '10/9', '10/10', '10/11', '10/12', '10/13', '10/14', '10/15', '10/16', '10/17', '10/18', '10/19', '10/20', '10/21', '10/22', '10/23', '10/24', '10/25', '10/26', '10/27', '10/28', '10/29', '10/30', '10/31']

// 数量纵轴
const bothQuantity = [820, 932, 901, 934, 1290, 1330, 1320, 820, 932, 901, 934, 1290, 1330, 1320,820, 932, 901, 934, 1290, 1330, 1320,820, 932, 901, 934, 1290, 1330, 1320,220,290,280,820, 932, 901, 934, 1290, 1330, 1320, 820, 932, 901, 934, 1290, 1330, 1320,820, 932, 901, 934, 1290, 1330, 1320,820, 932, 901, 934, 1290, 1330, 1320,220,290,280]




export { mothQuantity, both, bothQuantity, moth, wendQuantity, wend, HistoryType, historyData, historyColumns, hot, market, interest, option, reunite, sections, heldColumns, heldData}
