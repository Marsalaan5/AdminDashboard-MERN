import PropTypes from "prop-types";
import userr from "../../assets/userr.jpg";


function ActivityFeed({ activities = [] }) {
  return (
    <div className="card mt-1">
      <div className="card-header">
        <h5>Activity Feed</h5>
      </div>
      <div className="card-body pt-4">
        <ul className="feed-blog ps-0">
          {activities.length === 0 ? (
            <p className="text-muted">No activity yet.</p>
          ) : (
            activities.map((activity, idx) => (
              <li key={idx} className="active-feed mb-3">
                <div className="feed-user-img">
                  <span className="rounded-circle">
                    <img
                      src={userr}
                      alt="avatar"
                      style={{ width: 40, height: 40 }}
                    />
                  </span>
                </div>
                <h6>
                  <span className={`badge bg-${getBadgeColor(activity.type)}`}>
                    {activity.type}
                  </span>{" "}
                  {activity.user}
                  <small className="text-muted ms-2">{activity.time}</small>
                </h6>
                <p className="m-b-15 m-t-15">{activity.message}</p>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}

function getBadgeColor(type) {
  switch (type) {
    case "file":
      return "danger";
    case "task":
      return "success";
    case "comment":
      return "primary";
    case "update":
      return "info";
    case "delete":
      return "dark";
    default:
      return "secondary";
  }
}



ActivityFeed.propTypes = {
  
    activities: PropTypes.arrayOf(
        PropTypes.shape({
          type: PropTypes.string.isRequired,
          user: PropTypes.string.isRequired,
          time: PropTypes.string.isRequired,
          message: PropTypes.string.isRequired,
        })
      ).isRequired,

};

export default ActivityFeed;
