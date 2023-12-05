import "./featured.scss";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useEffect } from "react";
import { useState } from "react";

const Featured = () => {
  const [data, setData] = useState({amount: 0, percentage:0});
  const [amount, setAmount] = useState(0);
  const [lastWeek, setLastWeek] = useState(0);
  const [lastMonth, setLastMonth] = useState(0);

  useEffect(() => {
    const target = 1000000;

    Promise.all([
        fetch('/order/today').then(response => response.json()),
        fetch('/order/last-week').then(response => response.json()),
        fetch('/order/last-month').then(response => response.json())
    ]).then(([todayData, lastWeekData, lastMonthData]) => {
        const amount = todayData.totalToday;
        let percentage = 0;
        if (amount !== 0) {
          percentage = (amount / target) * 100;
        }
        console.log(percentage);
        setAmount(amount);
        setData({
          amount: amount,
          percentage: percentage,
        });
        setLastWeek(lastWeekData.totalLastWeek);
        setLastMonth(lastMonthData.totalLastMonth);
    }).catch(error => console.error(error));
}, []);


  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total Revenue</h1>
      </div>
      <div className="bottom">
        <div className="featuredChart">
         <CircularProgressbar value={data.percentage} text={`${data.percentage}%`} strokeWidth={5} />
        </div>
        <p className="title">Total sales made today</p>
        <p className="amount">{amount.toLocaleString()} VND</p>
        <p className="desc">
          Previous transactions processing. Last payments may not be included.
        </p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Target Month</div>
            <div className="itemResult negative">
              <div className="resultAmount">1,000K VND</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Week</div>
            <div className="itemResult positive">
              <div className="resultAmount">{lastWeek.toLocaleString()} VND</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Month</div>
            <div className="itemResult positive">
              <div className="resultAmount">{lastMonth.toLocaleString()} VND</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
