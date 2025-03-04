import DashboardBox from "./components/DashboardBox";

function Dashboard() {
  return (
    <div className="right-contentDashboard w-100">
     <div className="row dashboardBocWrapperRow">
      <div className="col-md-8">
      <div className="dashboardBoxWrapper d-flex">
       <DashboardBox color={['#4099ff',' #73b4ff']}/>
       <DashboardBox color={['#2ed8b6', '#59e0c5']}/>
       <DashboardBox color={['#ffb64d', '#ffcb80']}/>
       <DashboardBox color={['#ff5370',' #ff869a']} />
      </div>
      </div>

      <div className="col-md-4 pl-0">
        <div className="box ">

        </div>
        </div>
     </div>
    </div>
  );
}

export default Dashboard;
