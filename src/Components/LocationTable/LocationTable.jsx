import "./locationtable.scss";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
const LocationTable = () => {
  return (
    <div className="locationtable">
      <div className="header">
        <span className="heading">Country</span>
        <span className="heading">Visitors</span>
      </div>
      <div className="rows">
        <div className="left">
          <span className="country">Nigeria</span>
        </div>
        <div className="right">
          <div className="top">
            <span className="amount">5,430</span>
          </div>
          <div className="bottom">
            <ArrowUpwardIcon className="icon" />
            <span className="percentage"> 2.2%</span>
          </div>
        </div>
      </div>
      <div className="rows">
        <div className="left">
          <span className="country">Germany</span>
        </div>
        <div className="right">
          <div className="top">
            <span className="amount">2,610</span>
          </div>
          <div className="bottom">
            <ArrowUpwardIcon className="icon" />
            <span className="percentage"> 1.12%</span>
          </div>
        </div>
      </div>
      <div className="rows">
        <div className="left">
          <span className="country">Switzerland</span>
        </div>
        <div className="right">
          <div className="top">
            <span className="amount">1,925</span>
          </div>
          <div className="bottom">
            <ArrowUpwardIcon className="icon" />
            <span className="percentage"> 1.1%</span>
          </div>
        </div>
      </div>
      <div className="rows">
        <div className="left">
          <span className="country">Iraq</span>
        </div>
        <div className="right">
          <div className="top">
            <span className="amount">1,571</span>
          </div>
          <div className="bottom">
            <ArrowUpwardIcon className="icon" />
            <span className="percentage"> 0.8%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationTable;
