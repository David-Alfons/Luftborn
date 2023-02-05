import img from "../img/logo192.png";
const ReportForCard = () => {
  return (
    <div className="report-for-container">
      <div className="report-for-id">
        <div className="report-for-img-container">
          <img src={img} alt="user" />
        </div>
        <div className="report-for-title">
          <p className="report-for-title-item1">Report for</p>
          <p className="report-for-title-item2">Best Sales</p>
        </div>
      </div>
      <div className="report-for-details">
        <span className="report-for-details-item">Daily</span>
        <span className="report-for-details-item active">Weekly</span>
        <span className="report-for-details-item">Monthly</span>
      </div>
    </div>
  );
};
export default ReportForCard;
