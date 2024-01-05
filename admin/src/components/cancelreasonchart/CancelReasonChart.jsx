import './cancelReasonChart.scss'
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, LabelList } from 'recharts';
import { useEffect, useState } from 'react';


const CancelReasonChart = () => {

    const [data, setData] = useState([]);
    
    useEffect(() => {
        fetch('/order/cancelReason')
        .then(response => response.json())
        .then(data => setData(data))
        .catch(error => console.error(error));
    }, []);
    
    const renderCustomBarLabel = (dataKey) => (props) => {
      const { x, y, width, height, value} = props;
  
      if (value === 0) {
          return null;
      }
  
      const rotationAngle = -90;
      return (
          <text
              x={x + width / 2}
              y={y + height / 2}
              fill="#ffffff"
              textAnchor="middle"
              alignmentBaseline="middle"
              transform={`rotate(${rotationAngle}, ${x + width / 2}, ${y + height / 2})`}
              style={{ fontSize: '8px' }}
          >
              {`${dataKey}: ${value}`}
          </text>
      );
  };

  return (
    <div>
        <BarChart width={1000} height={400} data={data}>
            <XAxis dataKey="name" />
            <YAxis tickCount={3}/>
            <Tooltip />
            <CartesianGrid stroke="#f5f5f5" />
            <Bar dataKey="count" fill="#8884d8" barSize={30}>
                    <LabelList dataKey="count" content={renderCustomBarLabel('Số lượng')} />
            </Bar>
            {/* <Bar dataKey="count" fill="#8884d8" barSize={30} /> */}
        </BarChart>
    </div>
  )
}

export default CancelReasonChart
