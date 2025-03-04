import PropTypes from 'prop-types'

function DashboardBox(props) {
  return (
    <div className="dashboardBox" style=
    {{backgroundImage:`linear-gradient(to right,${props.color?.[0]},${props.color?.[1]})`
}}>
  </div>

  )
}

DashboardBox.propTypes ={
    color: PropTypes.arrayOf(PropTypes.string).isRequired, 
}

export default DashboardBox