import "./Featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total Revenue</h1>
        <MoreVertIcon fontSize="small" style={{ cursor: "pointer" }} />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={70} text="70%" strokeWidth={5} />
        </div>
        <p className="title">Total sales today</p>
        <p className="amount">400</p>
        <p className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Daily Target</div>
            <div className="itemResult negative">
              <ArrowDropDownIcon fontSize="small"/>
              <div className="resultAmount">12.4k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Weekly Target</div>
            <div className="itemResult positive">
              <ArrowDropUpIcon fontSize="small"/>
              <div className="resultAmount">21.4k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Monthly Target</div>
            <div className="itemResult positive">
              <ArrowDropUpIcon fontSize="small"/>
              <div className="resultAmount">120.4k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
