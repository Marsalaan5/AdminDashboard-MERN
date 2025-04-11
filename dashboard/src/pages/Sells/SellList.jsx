import React, { useEffect, useState } from 'react';

function SellList() {
  const [sellData, setSellData] = useState({
    totalSell: 0,
    totalPaid: 0,
    totalDue: 0,
  });
  const [invoiceData, setInvoiceData] = useState([]);

  // Fetch data when the component mounts
  useEffect(() => {
    // Fetch the totals from the server
    fetch('/api/sell-stats')
      .then((response) => response.json())
      .then((data) => setSellData(data))
      .catch((error) => console.error('Error fetching sell stats:', error));

    // Fetch invoice data
    fetch('/api/invoices')
      .then((response) => response.json())
      .then((data) => setInvoiceData(data))
      .catch((error) => console.error('Error fetching invoices:', error));
  }, []);

  return (
    <div className="right-contentDashboard w-98">
      <section>
        <div className="container-fluid">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title"><b>Total sell List</b></h3>
              <a href="index.php?page=quick_sell" target="_blank" className="btn btn-primary btn-sm float-right rounded-0" style={{ margin: '8px' }}>
                <i className="fas fa-plus"></i> New sell
              </a>
            </div>

            <div className="card-body">
              <div className="calculation-area">
                <div className="row">
                  <div className="col-12 col-sm-6 col-md-4">
                    <div className="info-box bg-danger">
                      <div className="info-box-content">
                        <span className="info-box-text">Total Sell</span>
                        <span className="info-box-number">{sellData.totalSell}</span>
                      </div>
                    
                    </div>
                  </div>

                  <div className="col-12 col-sm-6 col-md-4">
                    <div className="info-box bg-secondary">
                      <div className="info-box-content">
                        <span className="info-box-text">Total Paid Amount</span>
                        <span className="info-box-number">{sellData.totalPaid}</span>
                      </div>
                    
                    </div>
                  </div>

                  <div className="col-12 col-sm-6 col-md-4">
                    <div className="info-box bg-info">
                      <div className="info-box-content">
                        <span className="info-box-text">Total Due Amount</span>
                        <span className="info-box-number">{sellData.totalDue}</span>
                      </div>
                     
                    </div>
                  </div>
                </div>
              </div>

              <div className="table-responsive">
                <table id="sellTable" className="display dataTable text-center">
                  <thead>
                    <tr>
                      <th>Invoice no</th>
                      <th>Customer</th>
                      <th>Order Date</th>
                      <th>Sub Total</th>
                      <th>Previous Due</th>
                      <th>Net Total</th>
                      <th>Paid</th>
                      <th>Due</th>
                      <th>Status</th>
                      <th>Payment Type</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {invoiceData.map((invoice) => (
                      <tr key={invoice.id}>
                        <td>{invoice.invoiceNo}</td>
                        <td>{invoice.customer}</td>
                        <td>{invoice.orderDate}</td>
                        <td>{invoice.subTotal}</td>
                        <td>{invoice.previousDue}</td>
                        <td>{invoice.netTotal}</td>
                        <td>{invoice.paid}</td>
                        <td>{invoice.due}</td>
                        <td>{invoice.status}</td>
                        <td>{invoice.paymentType}</td>
                        <td><button>Action</button></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SellList;
