import { useState, useEffect, useContext } from "react";
// import PerfectScrollbar from "perfect-scrollbar";
import DashboardBox from "./components/DashboardBox";
import ApexCharts from "react-apexcharts";
import userr from "../../assets/userr.jpg";
import { FaEnvelopeOpen } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { MyContext } from "../../context/Context.jsx";
import axios from "axios";
import Addstocks from "../Stocks/Addstocks.jsx";
import ActivityFeed from "../ActivityFeed/ActivityFeed.jsx";
import RoleChart from "./RoleChart.jsx";

// import {
//   FaShoppingCart,
//   FaBox,
//   FaClipboardList,
//   FaTimesCircle,
// } from "react-icons/fa";

function Dashboard() {
  const { token, user } = useContext(MyContext);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activities, setActivities] = useState([]);

  const fetchUsers = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/users", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUsers(res.data.users);
      setLoading(false);
    } catch (err) {
      console.error("Failed to load users", err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [token]);

  useEffect(() => {
    const storedActivities = JSON.parse(localStorage.getItem("activities"));
    if (storedActivities) {
      setActivities(storedActivities);
    }
  }, []);

  const handleStockAdded = (stock) => {
    const newActivity = {
      type: "file",
      user: user?.name,
      message: `Added new stock : ${stock.stock_name}`,
      time: new Date().toLocaleTimeString(),
    };

    const updatedActivities = [newActivity, ...activities];

    setActivities((prev) => [newActivity, ...prev]);
    localStorage.setItem("activities", JSON.stringify(updatedActivities));
  };

  if (loading) {
    return (
      <div className="container-fluid mt-5" style={{ paddingTop: "60px" }}>
        <div className="row">
          <div className="col-12 text-center">
            <h3>Loading data...</h3>
          </div>
        </div>
      </div>
    );
  }

  const areaChartData = {
    series: [
      {
        name: "Order Received",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
      {
        name: "New Order",
        data: [11, 32, 45, 32, 34, 52, 41],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "area",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z",
        ],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
    },
  };

  //   useEffect(() => {
  //     const ps = new PerfectScrollbar(".scrollbar-container");
  //     return () => ps.destroy();
  //   }, []);

  // const context = useContext(MyContext)

  //   useEffect(() => {
  //    context.setIsHideSidebarAndHeader(false)
  //   },)

  return (
    <div className="right-contentDashboard w-98">
      <div className="row">
        <div className="col-md-3">
          <DashboardBox
            title="Total Users"
            orders={users.length}
            // completed="351"
            icon={FaUsers}
            color={["#4099ff", "#73b4ff"]}
          />
        </div>

        <div className="col-md-3">
          <DashboardBox
            title="Active Users"
            orders={users.filter((user) => user.status === "active").length}
            icon={FaUser}
            color={["#2ed8b6", "#59e0c5"]}
          />
        </div>

        <div className="col-md-3">
          <DashboardBox
            title="Inactive Users"
            orders={users.filter((user) => user.status === "inactive").length}
            icon={FaUser}
            color={["#ffb64d", "#ffcb80"]}
          />
        </div>

        <div className="col-md-3">
          <DashboardBox
            // title="Admin & Users"
            orders={
              <div className="d-flex flex-column">
                <span>
                  Admins:{users.filter((user) => user.role === "admin").length}
                </span>
                <span>
                  Users:{users.filter((user) => user.role === "user").length}
                </span>
              </div>
            }
            icon={FaUsers}
            color={["#ff5370", "#ff869a"]}
          />
        </div>
      </div>

      <div className="charts d-flex gap-3">
        {/* <div className="col-xl-6 col-md-12">
          <div className="card">
            <div className="card-header">
              <h5>Total Sales</h5>
            </div>
            <div className="ps-2 pb-2 card-body">
              <ApexCharts
                options={areaChartData.options}
                series={areaChartData.series}
                type="area"
                height={350}
              />
            </div>
          </div>
        </div> */}

        <div className="col-xl-6 col-md-12">
       
            <div className="card-stats card">
              <div className="card-body">
                <RoleChart users={users} />
              </div>
            </div>
          
        </div>
        <div className="col-xl-6 col-md-12">
       
            <div className="card-stats card">
              <div className="card-body">
                <RoleChart users={users} />
              </div>
            </div>
          
        </div>
      </div>

      <div className="feedback d-flex gap-2">
        <div className="col-lg-4 col-md-12">
          <div className="card">
            <div className="text-center card-body">
              {/* <i className="d-block f-40 text-c-blue fa fa-envelope-open"></i> */}
              <FaEnvelopeOpen className="envelope" />

              <h4 className="m-t-20">
                <span className="font">8.62k</span> Subscribers
              </h4>
              <p className="m-b-20">Your main list is growing</p>
              <button
                type="button"
                className="btn-primary btn-sm btn btn-primary"
              >
                Manage List
              </button>
            </div>
          </div>
          <div className="card">
            <div className="text-center card-body">
              {/* <i className="d-block f-40 text-c-green fab fa-twitter"></i> */}

              <FaTwitter className="twitter" />
              <h4 className="m-t-20">
                <span className="font">+40</span> Followers
              </h4>
              <p className="m-b-20">Your main list is growing</p>
              <button
                type="button"
                className="btn-primary btn-sm btn btn-success"
              >
                Check them out
              </button>
            </div>
          </div>
        </div>

        <div className="col-lg-8 col-md-12">
          {user?.role === "admin" && (
            <Addstocks onStockAdded={handleStockAdded} />
          )}
          <ActivityFeed activities={activities} />
        </div>
      </div>

      <div className="col-sm-12">
        <div className="card">
          <div className="card-header">
            <h5 className="card-title">Campaign Monitor</h5>
          </div>
          <div className="card-body">
            <div className="table-card pt-4" style={{ height: "362px" }}>
              <div className="scrollbar-container ps ps--active-y">
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>
                          <span>UID</span>
                        </th>
                        <th>
                          <span>Product</span>
                        </th>
                        <th>
                          <span>Category</span>
                        </th>
                        <th>
                          <span>Brand</span>
                        </th>
                        <th>
                          <span>Price</span>
                        </th>
                        <th>
                          <span>Stock</span>
                        </th>
                        <th>
                          <span>Rating</span>
                        </th>
                        <th>
                          <span>Order</span>
                        </th>
                        <th>
                          <span>Sales</span>
                        </th>
                        <th>
                          <span>Action</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* Your rows go here */}

                      <tr>
                        <td>08-11-2016</td>
                        <td>786</td>
                        <td>485</td>
                        <td>769</td>
                        <td>45,3%</td>
                        <td>6,7%</td>
                        <td>8,56</td>
                        <td>10:55</td>
                        <td>33.8%</td>
                        <td>33.8%</td>
                      </tr>
                      <tr>
                        <td>15-10-2016</td>
                        <td>786</td>
                        <td>523</td>
                        <td>736</td>
                        <td>78,3%</td>
                        <td>6,6%</td>
                        <td>7,56</td>
                        <td>4:30</td>
                        <td>76.8%</td>
                        <td>76.8%</td>
                      </tr>
                      <tr>
                        <td>08-08-2017</td>
                        <td>624</td>
                        <td>436</td>
                        <td>756</td>
                        <td>78,3%</td>
                        <td>6,4%</td>
                        <td>9,45</td>
                        <td>9:05</td>
                        <td>8.63%</td>
                        <td>8.63%</td>
                      </tr>
                      <tr>
                        <td>11-12-2017</td>
                        <td>423</td>
                        <td>123</td>
                        <td>756</td>
                        <td>78,6%</td>
                        <td>45,6%</td>
                        <td>6,85</td>
                        <td>7:45</td>
                        <td>33.8%</td>
                        <td>33.8%</td>
                      </tr>
                      <tr>
                        <td>05-06-2015</td>
                        <td>465</td>
                        <td>463</td>
                        <td>456</td>
                        <td>68,6%</td>
                        <td>76,6%</td>
                        <td>7,56</td>
                        <td>8:45</td>
                        <td>39.8%</td>
                        <td>39.8%</td>
                      </tr>
                      <tr>
                        <td>08-11-2016</td>
                        <td>786</td>
                        <td>485</td>
                        <td>769</td>
                        <td>45,3%</td>
                        <td>6,7%</td>
                        <td>8,56</td>
                        <td>10:55</td>
                        <td>33.8%</td>
                        <td>33.8%</td>
                      </tr>
                      <tr>
                        <td>15-10-2016</td>
                        <td>786</td>
                        <td>523</td>
                        <td>736</td>
                        <td>78,3%</td>
                        <td>6,6%</td>
                        <td>7,56</td>
                        <td>4:30</td>
                        <td>76.8%</td>
                        <td>76.8%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
