
import { useEffect } from 'react';
import apple1 from "../../assets/apple1.png";
import apple2 from '../../assets/apple2.jpg';
import apple3 from "../../assets/apple3.jpg";
import apple4 from "../../assets/apple4.jpg";
import feather from 'feather-icons'; 

function ProductDetail() {
  useEffect(() => {
    feather.replace(); 
  }, []);

  return (
    <div className="right-contentDashboard w-98">
      <div className="container-fluid">
        <div className="d-md-flex d-block align-items-center justify-content-between page-header-breadcrumb">
          <div>
            <h2 className="main-content-title fs-24 mb-1 text-dark">Product-Details</h2>
            <nav aria-label="breadcrumb" className="my-0">
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item"><a href="#" role="button" tabIndex="0">Products</a></li>
                <li className="breadcrumb-item active" aria-current="page">Product-Details</li>
              </ol>
            </nav>
          </div>
          <div className="d-flex">
            <div className="justify-content-center">
              <button type="button" className="btn btn-white btn-icon-text my-2 me-3 d-inline-flex align-items-center">
                <i className="fe fe-download me-2 fs-14"></i> Import
              </button>
              <button type="button" className="btn btn-white btn-icon-text my-2 me-3 d-inline-flex align-items-center">
                <i className="fe fe-filter me-2 fs-14"></i> Filter
              </button>
              <button type="button" className="btn btn-primary my-2 btn-icon-text d-inline-flex align-items-center">
                <i className="fe fe-download-cloud me-2 fs-14"></i> Download Report
              </button>
            </div>
          </div>
        </div>

        <div className="row-sm row">
          <div className="col-lg-12 col-md-12">
            <div className="custom-card productdesc card">
              <div className="h-100 card-body">
                <div className="row">
                  <div className="col-xl-6 col-lg-12 col-md-12">
                    <div className="row">
                      <div className="col-4">
                        <div className="clearfix carousel-slider">
                          <div className="carousel slide" id="carousel" data-bs-ride="carousel">
                            <div className="carousel-inner">
                              <div className="carousel-item active">
                                <img src={apple1} alt="Product image" className="img-fluid" />
                              </div>
                              <div className="carousel-item">
                                <img src={apple2} alt="Product image" className="img-fluid" />
                              </div>
                              <div className="carousel-item">
                                <img src={apple3} alt="Product image" className="img-fluid" />
                              </div>
                              <div className="carousel-item">
                                <img src={apple4} alt="Product image" className="img-fluid" />
                              </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
                              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                              <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
                              <span className="carousel-control-next-icon" aria-hidden="true"></span>
                              <span className="visually-hidden">Next</span>
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Product Image and Carousel Thumbnails */}
                      <div className="col-md-7 offset-md-1 col-sm-9 col-8">
                        <div id="carousel" className="carousel slide" data-bs-ride="false">
                          <div className="carousel-inner">
                            <div><img src={apple1} alt="Product image" className="img-fluid mx-auto d-block" /></div>
                            <div className="carousel-item">
                              <img src={apple2} alt="Product image" className="img-fluid mx-auto d-block" />
                            </div>
                            <div className="carousel-item">
                              <img src={apple3} alt="Product image" className="img-fluid mx-auto d-block" />
                            </div>
                            <div className="carousel-item">
                              <img src={apple4} alt="Product image" className="img-fluid mx-auto d-block" />
                            </div>
                          </div>
                        </div>
                        <div className="text-center mt-4 mb-4 btn-list">
                          <button className="btn ripple btn-primary d-inline-flex align-items-center">
                            <i className="fe fe-shopping-cart me-1"></i> Add to cart
                          </button>
                          <button className="btn ripple btn-secondary d-inline-flex align-items-center">
                            <i className="fe fe-credit-card me-1"></i> Buy Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Product Description */}
                  <div className="col-xl-6 col-lg-12 col-md-12">
                    <div className="mt-4 mb-4">
                      <h4 className="mt-1 mb-3">Touch Screen Waterproof Smartwatch</h4>
                      <p className="text-muted float-start me-3">
                        <span className="fe fe-star text-warning me-1"></span>
                        <span className="fe fe-star text-warning me-1"></span>
                        <span className="fe fe-star text-warning me-1"></span>
                        <span className="fe fe-star text-warning me-1"></span>
                        <span className="fe fe-star me-1"></span>
                      </p>
                      <p className="text-muted mb-4">(135 Customers Review)</p>
                      <h6 className="text-success text-uppercase">20 % Off</h6>
                      <h5 className="mb-2">
                        Price: <span className="text-muted me-2"><del>$499 USD</del></span>
                        <b>$299 USD</b>
                      </h5>
                      <p className="fs-13 text-muted">FREE SHIPPING on purchase above <b>$359</b></p>

                      <h6 className="mt-4 fs-16">Description</h6>
                      <p>
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
                      </p>
                      <p>
                        On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized.
                      </p>
                      <p>
                        But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.
                      </p>
                    </div>

                    {/* Product Quantity */}
                    <div className="d-flex mt-2">
                      <div className="mt-2 sizes">Quantity:</div>
                      <div className="d-flex ms-2">
                        <div className="css-b62m3t-container">
                          <span id="react-select-3-live-region" className="css-7pg0cj-a11yText"></span>
                          <div className="Select2__control css-13cymwt-control">
                            <div className="Select2__value-container css-hlgwow">
                              <div className="Select2__placeholder css-1jqq78o-placeholder" id="react-select-3-placeholder">1</div>
                              <div className="Select2__input-container css-19bb58m">
                                <input
                                  className="Select2__input"
                                  autoCapitalize="none"
                                  autoComplete="off"
                                  autoCorrect="off"
                                  id="react-select-3-input"
                                  spellCheck="false"
                                  tabIndex="0"
                                  type="text"
                                  aria-autocomplete="list"
                                  aria-expanded="false"
                                  aria-haspopup="true"
                                  role="combobox"
                                  aria-activedescendant=""
                                  aria-describedby="react-select-3-placeholder"
                                  value=""
                                />
                              </div>
                            </div>
                            <div className="Select2__indicators css-1wy0on6">
                              <span className="Select2__indicator-separator css-1u9des2-indicatorSeparator"></span>
                              <div className="Select2__indicator Select2__dropdown-indicator css-1xc3v61-indicatorContainer" aria-hidden="true">
                                <svg height="20" width="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false" className="css-8mmkcg">
                                  <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Product Colors */}
                    <div className="colors d-flex me-3 mt-3">
                      <span className="mt-2">Colors:</span>
                      <div className="d-flex gutters-xs ms-4">
                        <div className="me-2">
                          <label className="colorinput">
                            <input name="color" type="radio" className="colorinput-input" value="azure" checked />
                            <span className="colorinput-color bg-info"></span>
                          </label>
                        </div>
                        <div className="me-2">
                          <label className="colorinput">
                            <input name="color" type="radio" className="colorinput-input" value="indigo" />
                            <span className="colorinput-color bg-secondary"></span>
                          </label>
                        </div>
                        <div className="me-2">
                          <label className="colorinput">
                            <input name="color" type="radio" className="colorinput-input" value="purple" />
                            <span className="colorinput-color bg-danger"></span>
                          </label>
                        </div>
                        <div className="me-2">
                          <label className="colorinput">
                            <input name="color" type="radio" className="colorinput-input" value="pink" />
                            <span className="colorinput-color bg-pink"></span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Product Specifications */}
                <div className="mt-4">
                  <h5 className="mb-3">Specifications:</h5>
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="table-responsive">
                        <table className="mb-0 border-top table-bordered text-nowrap table">
                          <tbody>
                            <tr>
                              <th scope="row">Category</th>
                              <td>Watches</td>
                            </tr>
                            <tr>
                              <th scope="row">Brand</th>
                              <td>Willful</td>
                            </tr>
                            <tr>
                              <th scope="row">Model</th>
                              <td>WF-080</td>
                            </tr>
                            <tr>
                              <th scope="row">Screen size</th>
                              <td>1.3 Inches</td>
                            </tr>
                            <tr>
                              <th scope="row">Waterproof</th>
                              <td>IP68</td>
                            </tr>
                            <tr>
                              <th scope="row">Battery</th>
                              <td>220mAh</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Related Products Section */}
                <div className="mt-4">
                  <h5 className="mb-3">Related Products</h5>
                  <div className="row">
                    {/* Example of related product */}
                    <div className="col-md-4">
                      <div className="card">
                        <img src={apple1} className="card-img-top" alt="Product" />
                        <div className="card-body">
                          <h5 className="card-title">Smartwatch Model 2</h5>
                          <p className="card-text">$199 USD</p>
                          <a href="#" className="btn btn-primary">View Details</a>
                        </div>
                      </div>
                    </div>
                    {/* Add more related products here */}
                  </div>
                </div>

                {/* Ratings and Reviews */}
                <div className="mt-4 col-xl-12">
                  <div className="card">
                    <div className="p-0 card-body">
                      <div className="d-flex p-3">
                        <h5 className="float-start main-content-label mb-0 mt-2">All Ratings and Reviews</h5>
                        <a className="btn btn-outline-primary btn-sm float-end ms-auto" href="/">Top Rated</a>
                      </div>
                      
                      {/* Review List */}
                      {/* Example Review */}
                      <div className="media mt-4">
                        <img alt="avatar" className="me-3 rounded-circle" width="50" src="path-to-avatar-image" />
                        <div className="media-body">
                          <h6 className="media-heading">John Doe</h6>
                          <div className="rating-star">
                            <i className="fe fe-star text-warning"></i>
                            <i className="fe fe-star text-warning"></i>
                            <i className="fe fe-star text-warning"></i>
                            <i className="fe fe-star text-warning"></i>
                            <i className="fe fe-star"></i>
                          </div>
                          <p className="mt-2">Great product! Loved the features and design.</p>
                          <span className="text-muted">2 days ago</span>
                        </div>
                      </div>

                      {/* Add more reviews as needed */}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
