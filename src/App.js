import './App.css';
import 
{ ResponsiveContainer, 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Legend, 
  Tooltip, 
  BarChart, 
  Bar,
  AreaChart,
  Area } 
from 'recharts';

const data = [
  {
    name: 'Python',
    student: 13,
    fees: 10
  },
  {
    name: 'NodeJs',
    student: 25,
    fees: 15
  },
  {
    name: 'TypeScript',
    student: 30,
    fees: 23
  },
  {
    name: 'Java',
    student: 10,
    fees: 30
  },
  {
    name: 'Rust',
    student: 5,
    fees: 10
  },
  {
    name: 'C#',
    student: 9,
    fees: 10
  },
  
]

function App() {
  return (
    <>
    <h1 className='chart-heading'>Line Chart</h1>
    <ResponsiveContainer width="100%" aspect={3}>
      <LineChart 
        data={data} width={500} height={300} 
        margin={ {
          top:5, right:300, left:20, bottom:5 
        }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" interval={'preserveStartEnd'} 
        tickFormatter={(value) => value + " " + "Programming"} />
        <YAxis dataKey= "student" tickFormatter={(value) => value + ".0"} />
        <Tooltip contentStyle={{
          backgroundColor: 'white'
        }}
        itemStyle={{
          textDecoration: "underline"
        }}/>
        <Legend />
        <Line type ="monotone" dataKey= "student" stroke='red' activeDot= { {r: 8}}/>
        <Line dataKey= "fees" stroke='green' activeDot= {{r: 8}}/>
      </LineChart>
    </ResponsiveContainer>

    <h1 className='chart-heading'>Bar Chart</h1>
    <ResponsiveContainer width="100%" aspect={3}>
      <BarChart 
        data={data} width={500} height={300} 
        margin={ {
          top:5, right:300, left:20, bottom:5 
        }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" interval={'preserveStartEnd'}  />
        <YAxis  />
        <Tooltip/>
        <Legend />
        <Bar dataKey= "student" fill='#8884d8'/>
        <Bar dataKey= "fees" fill='#82ca9d'/>
      </BarChart>
    </ResponsiveContainer>

    <h1 className='chart-heading'>Area Chart</h1>
    <ResponsiveContainer width="100%" aspect={3}>
      <AreaChart 
        data={data} width={500} height={300} 
        margin={ {
          top:5, right:300, left:20, bottom:5 
        }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" interval={'preserveStartEnd'}  />
        <YAxis  />
        <Tooltip/>
        <Legend />
        <Area dataKey= "student" fill='#8884d8'/>
        <Area dataKey= "fees" fill='#82ca9d'/>
      </AreaChart>
    </ResponsiveContainer>
    </>
  );
}

export default App;
