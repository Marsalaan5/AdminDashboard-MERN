// import DashboardBox from "./components/DashboardBox";
// import { FaShoppingCart, FaBox, FaClipboardList, FaTimesCircle } from "react-icons/fa";
// import ApexCharts from "react-apexcharts";

// function Dashboard() {
//   // Chart data and options
//   const chartData = {
//     series: [
//       {
//         name: "series1",
//         data: [31, 40, 28, 51, 42, 109, 100],
//       },
//       {
//         name: "series2",
//         data: [11, 32, 45, 32, 34, 52, 41],
//       },
//     ],
//     options: {
//       chart: {
//         height: 350,
//         type: "area",
//       },
//       dataLabels: {
//         enabled: false,
//       },
//       stroke: {
//         curve: "smooth",
//       },
//       xaxis: {
//         type: "datetime",
//         categories: [
//           "2018-09-19T00:00:00.000Z",
//           "2018-09-19T01:30:00.000Z",
//           "2018-09-19T02:30:00.000Z",
//           "2018-09-19T03:30:00.000Z",
//           "2018-09-19T04:30:00.000Z",
//           "2018-09-19T05:30:00.000Z",
//           "2018-09-19T06:30:00.000Z",
//         ],
//       },
//       tooltip: {
//         x: {
//           format: "dd/MM/yy HH:mm",
//         },
//       },
//     },
//   };

//   return (
//     <div className="right-contentDashboard">
//       <div className="row">
//         {/* Orders Dashboard Boxes */}
//         <div className="col-md-3">
//           <DashboardBox
//             title="Orders Received"
//             orders="486"
//             completed="351"
//             icon={FaShoppingCart}
//             color={["#4099ff", "#73b4ff"]}
//           />
//         </div>

//         <div className="col-md-3">
//           <DashboardBox
//             title="New Orders"
//             orders="120"
//             completed="98"
//             icon={FaClipboardList}
//             color={["#2ed8b6", "#59e0c5"]}
//           />
//         </div>

//         <div className="col-md-3">
//           <DashboardBox
//             title="Pending Orders"
//             orders="25"
//             completed="12"
//             icon={FaBox}
//             color={["#ffb64d", "#ffcb80"]}
//           />
//         </div>

//         <div className="col-md-3">
//           <DashboardBox
//             title="Cancelled Orders"
//             orders="8"
//             completed="5"
//             icon={FaTimesCircle}
//             color={["#ff5370", "#ff869a"]}
//           />
//         </div>
//       </div>

// <div className="col-xl-6 col-md-12">

//       <div className="card">
//         <div className="card-header">
//           <h5>Total Sales</h5>
//         </div>
//         <div className="ps-2 pb-2 card-body">
//           {/* Render ApexCharts */}
//           <ApexCharts
//             options={chartData.options}
//             series={chartData.series}
//             type="area"
//             height={350}
//             />
//         </div>
//       </div>

//             </div>
//             <div className="col-xl-6 col-md-12">
//               <div className="row">
// <div className="col-sm-6">
//   <div className="card">
//     <div className="card-body">
//       <div className="row">
//         <div className="col-sm-auto">
//           <span>Customer</span>
//         </div>
//         <div className="text-end-col">
//           <h2 className="mb-0">826</h2>
//           <span className="text-c-green">8.2%
//           <i className="feather ms-1">
//             ::before
//           </i>
//           </span>
//         </div>
//       </div>
//       var options = {
//           series: [44, 55, 41, 17, 15],
//           chart: {
//           width: 380,
//           type: 'donut',
//         },
//         plotOptions: {
//           pie: {
//             startAngle: -90,
//             endAngle: 270
//           }
//         },
//         dataLabels: {
//           enabled: false
//         },
//         fill: {
//           type: 'gradient',
//         },
//         legend: {
//           formatter: function(val, opts) {
//             return val + " - " + opts.w.globals.series[opts.seriesIndex]
//           }
//         },
//         title: {
//           text: 'Gradient Donut with custom Start-angle'
//         },
//         responsive: [{
//           breakpoint: 480,
//           options: {
//             chart: {
//               width: 200
//             },
//             legend: {
//               position: 'bottom'
//             }
//           }
//         }]
//         };

//         var chart = new ApexCharts(document.querySelector("#chart"), options);
//         chart.render();

//     </div>
//   </div>
// </div>

//               </div>
//             </div>
//     </div>
//   );
// }

// export default Dashboard;

// import DashboardBox from "./components/DashboardBox";

// // import DashboardCard from "./components/DashboardCard";

// function Dashboard() {
//   return (
//     <div className="right-contentDashboard w-100">
//       <div className="row dashboardBocWrapperRow">
//         <div className="col-xl-10 col-md-8">
//           <div className="row">
//             <DashboardBox title="Orders Received" orders="486" completed="351" />
//             <DashboardBox title="New Orders" orders="120" completed="98" />
//             <DashboardBox title="Pending Orders" orders="25" completed="12" />
//             <DashboardBox title="Cancelled Orders" orders="8" completed="5" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Dashboard;

// import DashboardBox from "./components/DashboardBox";
// import PerfectScrollbar from 'perfect-scrollbar';

// import {
//   FaShoppingCart,
//   FaBox,
//   FaClipboardList,
//   FaTimesCircle,
// } from "react-icons/fa";
// import ApexCharts from "react-apexcharts";

// function Dashboard() {
//   const areaChartData = {
//     series: [
//       {
//         name: "Order Received",
//         data: [31, 40, 28, 51, 42, 109, 100],
//       },
//       {
//         name: "New Order",
//         data: [11, 32, 45, 32, 34, 52, 41],
//       },
//     ],
//     options: {
//       chart: {
//         height: 350,
//         type: "area",
//       },
//       dataLabels: {
//         enabled: false,
//       },
//       stroke: {
//         curve: "smooth",
//       },
//       xaxis: {
//         type: "datetime",
//         categories: [
//           "2018-09-19T00:00:00.000Z",
//           "2018-09-19T01:30:00.000Z",
//           "2018-09-19T02:30:00.000Z",
//           "2018-09-19T03:30:00.000Z",
//           "2018-09-19T04:30:00.000Z",
//           "2018-09-19T05:30:00.000Z",
//           "2018-09-19T06:30:00.000Z",
//         ],
//       },
//       tooltip: {
//         x: {
//           format: "dd/MM/yy HH:mm",
//         },
//       },
//     },
//   };

//   const donutChartData = {
//     series: [44, 55, 41, 17],
//     options: {
//       chart: {
//         width: 380,
//         type: "donut",
//       },
//       plotOptions: {
//         pie: {
//           startAngle: -90,
//           endAngle: 270,
//         },
//       },
//       dataLabels: {
//         enabled: false,
//       },
//       fill: {
//         type: "gradient",
//       },
//       legend: {
//         formatter: function (val, opts) {
//           return val + " - " + opts.w.globals.series[opts.seriesIndex];
//         },
//       },
//       title: {
//         text: "Gradient Donut with custom Start-angle",
//       },
//       responsive: [
//         {
//           breakpoint: 480,
//           options: {
//             chart: {
//               width: 200,
//             },
//             legend: {
//               position: "bottom",
//             },
//           },
//         },
//       ],
//     },
//   };

//   return (
//     <div className="right-contentDashboard">
//       <div className="row">
//         <div className="col-md-3">
//           <DashboardBox
//             title="Orders Received"
//             orders="486"
//             completed="351"
//             icon={FaShoppingCart}
//             color={["#4099ff", "#73b4ff"]}
//           />
//         </div>

//         <div className="col-md-3">
//           <DashboardBox
//             title="New Orders"
//             orders="120"
//             completed="98"
//             icon={FaClipboardList}
//             color={["#2ed8b6", "#59e0c5"]}
//           />
//         </div>

//         <div className="col-md-3">
//           <DashboardBox
//             title="Pending Orders"
//             orders="25"
//             completed="12"
//             icon={FaBox}
//             color={["#ffb64d", "#ffcb80"]}
//           />
//         </div>

//         <div className="col-md-3">
//           <DashboardBox
//             title="Cancelled Orders"
//             orders="8"
//             completed="5"
//             icon={FaTimesCircle}
//             color={["#ff5370", "#ff869a"]}
//           />
//         </div>
//       </div>

//       <div className="charts d-flex gap-3">
//         <div className="col-xl-6 col-md-12">
//           <div className="card">
//             <div className="card-header">
//               <h5>Total Sales</h5>
//             </div>
//             <div className="ps-2 pb-2 card-body">
//               <ApexCharts
//                 options={areaChartData.options}
//                 series={areaChartData.series}
//                 type="area"
//                 height={350}
//               />
//             </div>
//           </div>
//         </div>

//         <div className="col-xl-6 col-md-12">
//           <div className="row">
//             <div className="col-sm-6">
//               <div className="card">
//                 <div className="card-body">
//                   <div className="row">
//                     <div className="col-sm-auto">
//                       <span>Customer</span>
//                     </div>
//                     <div className="text-end">
//                       <h2 className="mb-0">826</h2>
//                       <span className="text-c-green">
//                         8.2%
//                         <i className="feather ms-1"></i>
//                       </span>
//                     </div>
//                   </div>

//                   <ApexCharts
//                     options={donutChartData.options}
//                     series={donutChartData.series}
//                     type="donut"
//                     height={350}
//                   />
//                 </div>
//               </div>
//             </div>
//             <div className="col-sm-6">
//               <div className="card">
//                 <div className="card-body">
//                   <div className="row">
//                     <div className="col-sm-auto">
//                       <span>Customer</span>
//                     </div>
//                     <div className="text-end">
//                       <h2 className="mb-0">116</h2>
//                       <span className="text-c-green">
//                         3.99%
//                         <i className="feather ms-1"></i>
//                       </span>
//                     </div>
//                   </div>

//                   <ApexCharts
//                     options={donutChartData.options}
//                     series={donutChartData.series}
//                     type="donut"
//                     height={350}
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* <div className="cardCart shadow p-3 mt-4">
// <h3 className=""> Best Selling Products</h3>
//       </div> */}

// <div className="col-sm-12">
//       <div className="card">
//         <div className="card-header">
//           <h5 className="card-title">Campaign Monitor</h5>
//         </div>
//         <div className="card-body">
//           <div className="table-card pt-4" style={{ height: "362px" }}>
//             <div className="scrollbar-container ps ps--active-y">
//               <div className="table-responsive">
//                 <table className="table">
//                   <thead>
//                     <tr>
//                       <th><span>Campaign date</span></th>
//                       <th><span>Click</span></th>
//                       <th><span>Cost</span></th>
//                       <th><span>CTR</span></th>
//                       <th><span>ARPU</span></th>
//                       <th><span>ECPI</span></th>
//                       <th><span>ROI</span></th>
//                       <th><span>Revenue</span></th>
//                       <th><span>Conversions</span></th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     <tr>
//                       <td>08-11-2016</td>
//                       <td>786</td>
//                       <td>485</td>
//                       <td>769</td>
//                       <td>45.3%</td>
//                       <td>6.7%</td>
//                       <td>8.56</td>
//                       <td>10:55</td>
//                       <td>33.8%</td>
//                     </tr>
//                     <tr>
//                       <td>15-10-2016</td>
//                       <td>786</td>
//                       <td>523</td>
//                       <td>736</td>
//                       <td>78.3%</td>
//                       <td>6.6%</td>
//                       <td>7.56</td>
//                       <td>4:30</td>
//                       <td>76.8%</td>
//                     </tr>
//                     <tr>
//                       <td>08-08-2017</td>
//                       <td>624</td>
//                       <td>436</td>
//                       <td>756</td>
//                       <td>78.3%</td>
//                       <td>6.4%</td>
//                       <td>9.45</td>
//                       <td>9:05</td>
//                       <td>8.63%</td>
//                     </tr>
//                     <tr>
//                       <td>11-12-2017</td>
//                       <td>423</td>
//                       <td>123</td>
//                       <td>756</td>
//                       <td>78.6%</td>
//                       <td>45.6%</td>
//                       <td>6.85</td>
//                       <td>7:45</td>
//                       <td>33.8%</td>
//                     </tr>
//                     <tr>
//                       <td>05-06-2015</td>
//                       <td>465</td>
//                       <td>463</td>
//                       <td>456</td>
//                       <td>68.6%</td>
//                       <td>76.6%</td>
//                       <td>7.56</td>
//                       <td>8:45</td>
//                       <td>39.8%</td>
//                     </tr>
//                     <tr>
//                       <td>08-11-2016</td>
//                       <td>786</td>
//                       <td>485</td>
//                       <td>769</td>
//                       <td>45.3%</td>
//                       <td>6.7%</td>
//                       <td>8.56</td>
//                       <td>10:55</td>
//                       <td>33.8%</td>
//                     </tr>
//                     <tr>
//                       <td>15-10-2016</td>
//                       <td>786</td>
//                       <td>523</td>
//                       <td>736</td>
//                       <td>78.3%</td>
//                       <td>6.6%</td>
//                       <td>7.56</td>
//                       <td>4:30</td>
//                       <td>76.8%</td>
//                     </tr>
//                   </tbody>
//                 </table>
//               </div>
//               <div className="ps__rail-x" style={{ left: "0px", bottom: "0px" }}>
//                 <div className="ps__thumb-x" tabIndex="0" style={{ left: "0px", width: "0px" }}></div>
//               </div>
//               <div className="ps__rail-y" style={{ top: "0px", right: "0px", height: "338px" }}>
//                 <div className="ps__thumb-y" tabIndex="0" style={{ top: "0px", height: "248px" }}></div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     </div>

//   );
// }

// export default Dashboard;

import { useEffect } from "react";
import PerfectScrollbar from "perfect-scrollbar";
import DashboardBox from "./components/DashboardBox";
import ApexCharts from "react-apexcharts";
import user from "../../assets/user.jpg";
import { FaEnvelopeOpen } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

import {
  FaShoppingCart,
  FaBox,
  FaClipboardList,
  FaTimesCircle,
} from "react-icons/fa";

function Dashboard() {
  // Area chart data
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

  // Donut chart data
  const donutChartData = {
    series: [44, 55, 41, 17],
    options: {
      chart: {
        width: 380,
        type: "donut",
      },
      plotOptions: {
        pie: {
          startAngle: -90,
          endAngle: 270,
        },
      },
      dataLabels: {
        enabled: false,
      },
      fill: {
        type: "gradient",
      },
      legend: {
        formatter: function (val, opts) {
          return val + " - " + opts.w.globals.series[opts.seriesIndex];
        },
      },
      title: {
        text: "Gradient Donut with custom Start-angle",
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  };

  // Initialize PerfectScrollbar
  useEffect(() => {
    const ps = new PerfectScrollbar(".scrollbar-container");
    return () => ps.destroy(); // Clean up on component unmount
  }, []);

  return (
    <div className="right-contentDashboard">
      <div className="row">
        <div className="col-md-3">
          <DashboardBox
            title="Orders Received"
            orders="486"
            completed="351"
            icon={FaShoppingCart}
            color={["#4099ff", "#73b4ff"]}
          />
        </div>

        <div className="col-md-3">
          <DashboardBox
            title="New Orders"
            orders="120"
            completed="98"
            icon={FaClipboardList}
            color={["#2ed8b6", "#59e0c5"]}
          />
        </div>

        <div className="col-md-3">
          <DashboardBox
            title="Pending Orders"
            orders="25"
            completed="12"
            icon={FaBox}
            color={["#ffb64d", "#ffcb80"]}
          />
        </div>

        <div className="col-md-3">
          <DashboardBox
            title="Cancelled Orders"
            orders="8"
            completed="5"
            icon={FaTimesCircle}
            color={["#ff5370", "#ff869a"]}
          />
        </div>
      </div>

      <div className="charts d-flex gap-3">
        <div className="col-xl-6 col-md-12">
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
        </div>

        <div className="col-xl-6 col-md-12">
          <div className="row">
            <div className="col-sm-6">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-auto">
                      <span>Customer</span>
                    </div>
                    <div className="text-end">
                      <h2 className="mb-0">826</h2>
                      <span className="text-c-green">
                        8.2%
                        <i className="feather ms-1"></i>
                      </span>
                    </div>
                  </div>
                  <ApexCharts
                    options={donutChartData.options}
                    series={donutChartData.series}
                    type="donut"
                    height={350}
                  />
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-auto">
                      <span>Customer</span>
                    </div>
                    <div className="text-end">
                      <h2 className="mb-0">116</h2>
                      <span className="text-c-green">
                        3.99%
                        <i className="feather ms-1"></i>
                      </span>
                    </div>
                  </div>
                  <ApexCharts
                    options={donutChartData.options}
                    series={donutChartData.series}
                    type="donut"
                    height={350}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="feedback d-flex gap-2">
        <div className="col-lg-4 col-md-12">
          <div className="card">
            <div className="text-center card-body">
              {/* <i className="d-block f-40 text-c-blue fa fa-envelope-open"></i> */}
              <FaEnvelopeOpen className="envelope"/>
              
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
          <div className="card">
            <div className="card-header">
              <h5>Activity Feed</h5>
            </div>
            <div className="card-body pt-4 card-body">
              <ul className="feed-blog ps-0  ">
                <li className="active-feed  ">
                  <div className="feed-user-img">
                    {/* <img src="/demos/admin-templates/gradient-able/react/default/assets/avatar-1-BPGuQDYC.jpg" className="img-radius " alt="User-Profile"> */}

                    <span className="rounded-circle">
                      <img src={user} alt="avatar" />
                    </span>
                  </div>
                  <h6>
                    <span className="badge bg-danger">File</span> Nabiha
                    uploaded new files:{" "}
                    <small className="text-muted">2 hours ago</small>
                  </h6>
                  <p className="m-b-15 m-t-15">
                    hii <b> @everone</b> Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry. Lorem Ipsum has been the
                    industry&apos;s standard dummy text ever since the 1500s.
                  </p>
                  <div className="row">
                    <div className="text-center col-sm-auto">
                      {/* <img src="/demos/admin-templates/gradient-able/react/default/assets/img-grd-gal-1-BeL9yKfW.jpg" alt="img" className="img-fluid wid-100"> */}
                      <h6 className="m-t-15 m-b-0">Old Scooter</h6>
                      <p className="text-muted m-b-0">
                        <small>PNG-100KB</small>
                      </p>
                    </div>
                    <div className="text-center col-sm-auto">
                      {/* <img src="/demos/admin-templates/gradient-able/react/default/assets/img-grd-gal-2-CQEOvmYx.jpg" alt="img" className="img-fluid wid-100"> */}
                      <h6 className="m-t-15 m-b-0">Wall Art</h6>
                      <p className="text-muted m-b-0">
                        <small>PNG-150KB</small>
                      </p>
                    </div>
                    <div className="text-center col-sm-auto">
                      {/* <img src="/demos/admin-templates/gradient-able/react/default/assets/img-grd-gal-3-0vRBEM5Y.jpg" alt="img" className="img-fluid wid-100"> */}

                      <h6 className="m-t-15 m-b-0">Microphone</h6>
                      <p className="text-muted m-b-0">
                        <small>PNG-150KB</small>
                      </p>
                    </div>
                  </div>
                </li>
                <li className="diactive-feed  ">
                  <div className="feed-user-img">
                    {/* <img src="/demos/admin-templates/gradient-able/react/default/assets/avatar-1-BPGuQDYC.jpg" className="img-radius " alt="User-Profile"> */}

                    <span className="rounded-circle">
                      <img src={user} alt="avatar" />
                    </span>
                  </div>
                  <h6>
                    <span className="badge bg-success">Task</span> Nabiha marked
                    the Pending Review:{" "}
                    <span className="text-c-green"> Trash Can Icon Design</span>
                    <small className="text-muted"> 2 hours ago</small>
                  </h6>
                </li>
                <li className="diactive-feed  ">
                  <div className="feed-user-img">
                    {/* <img src="/demos/admin-templates/gradient-able/react/default/assets/avatar-1-BPGuQDYC.jpg" className="img-radius " alt="User-Profile"> */}

                    <span className="rounded-circle">
                      <img src={user} alt="avatar" />
                    </span>
                  </div>
                  <h6>
                    <span className="badge bg-primary">comment</span>Nabiha
                    posted a task:{" "}
                    <span className="text-c-green">Design a new Homepage</span>{" "}
                    <small className="text-muted">6 hours ago</small>
                  </h6>
                  <p className="m-b-15 m-t-15">
                    hii <b> @everone</b> Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry. Lorem Ipsum has been the
                    industry&apos;s standard dummy text ever since the 1500s.
                  </p>
                </li>
              </ul>
            </div>
          </div>
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
