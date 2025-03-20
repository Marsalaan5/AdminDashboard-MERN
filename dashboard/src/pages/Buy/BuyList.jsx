import React, { useState, useEffect } from 'react';

function BuyList() {
  const [data, setData] = useState({
    totalSell: 0,
    totalPaid: 0,
    totalDue: 0,
  });

  // Fetch data from API when the component mounts
  useEffect(() => {
    // Replace with your actual API endpoint
    fetch('http://localhost/path/to/api')
      .then(response => response.json())
      .then(data => {
        setData({
          totalSell: data.totalSell || 0,
          totalPaid: data.totalPaid || 0,
          totalDue: data.totalDue || 0,
        });
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="right-contentDashboard w-98">
      <section className="content">
        <div className="container-fluid">
          <div className="card">
            <div className="card-body">
              <div className="calculation-area">
                <div className="row">
                  {/* Total Sell */}
                  <div className="col-12 col-sm-6 col-md-4">
                    <div className="info-box bg-success">
                      <div className="info-box-content">
                        <span className="info-box-text">Total Total Sell</span>
                        <span className="info-box-number">{data.totalSell}</span>
                      </div>
                      <span className="info-box-icon">
                        <i className="material-symbols-outlined">sell</i>
                      </span>
                    </div>
                  </div>

                  {/* Total Paid Amount */}
                  <div className="col-12 col-sm-6 col-md-4">
                    <div className="info-box bg-danger">
                      <div className="info-box-content">
                        <span className="info-box-text">Total Paid Amount</span>
                        <span className="info-box-number">{data.totalPaid}</span>
                      </div>
                      <span className="info-box-icon">
                        <i className="material-symbols-outlined">paid</i>
                      </span>
                    </div>
                  </div>

                  {/* Total Due Amount */}
                  <div className="col-12 col-sm-6 col-md-4">
                    <div className="info-box bg-info">
                      <div className="info-box-content">
                        <span className="info-box-text">Total Due Amount</span>
                        <span className="info-box-number">{data.totalDue}</span>
                      </div>
                      <span className="info-box-icon">
                        <i className="material-symbols-outlined">money</i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product List */}
          <div className="card">
            <div className="card-body">
              <div className="card-header">
                <h3 className="card-title"><b>Total Product List</b></h3>
                <a href="index.php?page=add_product" target="_blank" className="btn btn-primary btn-sm float-right rounded-0">
                  <i className="fas fa-plus"></i> New Product
                </a>
              </div>

              <div className="table-responsive">
                <table id="purchaseTable" className="display dataTable text-center">
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Product name</th>
                      <th>Purchase date</th>
                      <th>Quantity</th>
                      <th>Purchase price</th>
                      <th>Sell price</th>
                      <th>Purchase total</th>
                      <th>Due bill</th>
                      <th>Return status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  {/* Table data should be added here */}
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BuyList;
