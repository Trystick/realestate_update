import './jobandadvise.scss'
import WorkIcon from '@mui/icons-material/Work';
import BadgeIcon from '@mui/icons-material/Badge';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import { useEffect, useState } from 'react';

const JobAndAdvise = ({ type }) => {
    const [data, setData] = useState(null);
    const [amount, setAmount] = useState(0);
   
    useEffect(() => {
      let url;
      switch (type) {
        case "job":
          url = '/job';
          break;
        case "jobApply":
          url = '/jobApply';
          break;
        case "advise":
          url = '/advise';
          break;
        default:
          break;
      }
  
        if (Array.isArray(url)) {
            Promise.all(url.map(u => fetch(u).then(res => res.json())))
            .then(dataArr => {
                const total = dataArr.reduce((sum, curr) => sum + curr.length, 0);
                setAmount(total);
            })
            .catch(error => console.error(error));
        } else {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    setAmount(data.length);
                })
                .catch(error => console.error(error));
        }
    
    switch (type) {
      case "job":
        setData({
          title: "JOBS",
          link: "See all jobs",
          linkUrl : "/job",
          icon: (
            <WorkIcon
              className="icon"
              style={{
                color: "crimson",
                backgroundColor: "rgba(255, 0, 0, 0.2)",
              }}
            />
          ),
        });
        break;
      case "jobApply":
        setData({
          title: "JOBAPPLIES",
          link: "See all jobApplies",
          linkUrl : "/jobApply",
          icon: (
            <BadgeIcon
              className="icon"
              style={{
                backgroundColor: "rgba(218, 165, 32, 0.2)",
                color: "goldenrod",
              }}
            />
          ),
        });
        break;
      case "advise":
        setData({
          title: "ADVISES",
          link: "See all advises",
          linkUrl : "/advise",
          icon: (
            <ContactPhoneIcon
              className="icon"
              style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
            />
          ),
        });
        break;
      default:
        break;
    }
  }, [type]);
  
    if (!data) {
      return <div>Loading...</div>;
    }
  
  return (
      <div className="widget">
        <div className="left">
          <span className="title">{data.title}</span>
          <span className="counter">
            {amount}
          </span>
          <a href={data.linkUrl} className="link">{data.link}</a>
        </div>
        <div className="right">
          {data.icon}
        </div>
      </div>
    );
  };

export default JobAndAdvise
