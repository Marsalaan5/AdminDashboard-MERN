


// import apple1 from "../../assets/apple1.png";
// import apple2 from '../../assets/apple2.jpg';
// import apple3 from "../../assets/apple3.jpg";
// import apple4 from "../../assets/apple4.jpg";
// import userPlaceholder from "../../assets/userr.jpg";

// import { LuImport } from "react-icons/lu";
// import { FaFilter } from "react-icons/fa";
// import { MdDownloadForOffline } from "react-icons/md";
// import { FaCartArrowDown } from "react-icons/fa";
// import { MdCreditCard } from "react-icons/md";
// import { FaStar } from "react-icons/fa";

// function ProductDetail() {
//   // Price formatting function
//   const formattedPrice = new Intl.NumberFormat('en-US', {
//     style: 'currency',
//     currency: 'USD',
//   }).format(299);

//   // Reviews data
//   const reviews = [
//     { name: 'Arsalaan Rashid', rating: 4, comment: 'Great product!', date: '2 days ago' },
//     { name: 'Nabiha Khan', rating: 5, comment: 'Excellent quality!', date: '1 week ago' },
//   ];

//   // Related products data
//   const relatedProducts = [
//     { name: 'Smartwatch Model 2', price: 199, image: apple1 },
//     { name: 'Smartwatch Model 3', price: 249, image: apple2 },
//   ];

//   return (
//     <div className="right-contentDashboard w-98">
//       <div className="container-fluid">
//         <div className="d-md-flex d-block align-items-center justify-content-between page-header-breadcrumb">
//           <div>
//             <h2 className="main-content-title fs-24 mb-1 text-dark">Product-Details</h2>
//             <nav aria-label="breadcrumb" className="my-0">
//               <ol className="breadcrumb mb-0">
//                 <li className="breadcrumb-item"><a href="#" role="button" tabIndex="0">Products</a></li>
//                 <li className="breadcrumb-item active" aria-current="page">Product-Details</li>
//               </ol>
//             </nav>
//           </div>
//           <div className="header_svg d-flex">
//             <div className="justify-content-center">
//               <button type="button" className="btn btn-white btn-icon-text my-2 me-3 d-inline-flex align-items-center">
//                 <LuImport /> Import
//               </button>
//               <button type="button" className="btn btn-white btn-icon-text m-2 my-2 me-3 d-inline-flex align-items-center">
//                 <FaFilter />  Filter
//               </button>
//               <button type="button" className="btn btn-primary m-4 my-2 btn-icon-text d-inline-flex align-items-center">
//                 <MdDownloadForOffline /> Download Report
//               </button>
//             </div>
//           </div>
//         </div>

//         <div className="row-sm row">
//           <div className="col-lg-12 col-md-12">
//             <div className="custom-card productdesc card">
//               <div className="h-100 card-body">
//                 <div className="row">
//                   <div className="col-xl-6 col-lg-12 col-md-12">
//                     <div className="row">
//                       {/* Product Images Carousel */}
//                       <div className="col-4">
//                         <div className="clearfix carousel-slider">
//                           <div className="carousel slide" id="carousel" data-bs-ride="carousel">
//                             <div className="carousel-inner">
//                               {[apple1, apple2, apple3, apple4].map((image, index) => (
//                                 <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
//                                   <img src={image} alt={`Product image ${index + 1}`} className="img-fluid" />
//                                 </div>
//                               ))}
//                             </div>
//                             <button className="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
//                               <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//                               <span className="visually-hidden">Previous</span>
//                             </button>
//                             <button className="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
//                               <span className="carousel-control-next-icon" aria-hidden="true"></span>
//                               <span className="visually-hidden">Next</span>
//                             </button>
//                           </div>
//                         </div>
//                       </div>

//                       {/* Product Image */}
//                       <div className="col-md-7 offset-md-1 col-sm-9 col-8">
//                         <img src={apple1} alt="Product image" className="img-fluid mx-auto d-block" />
//                         <div className="text-center mt-4 mb-4 btn-list header_svg">
//                           <button className="btn ripple btn-primary d-inline-flex align-items-center">
//                             <FaCartArrowDown /> Add to cart
//                           </button>
//                           <button className="btn ripple btn-secondary d-inline-flex align-items-center">
//                             <MdCreditCard /> Buy Now
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Product Description */}
//                   <div className="col-xl-6 col-lg-12 col-md-12">
//                     <div className="mt-4 mb-4">
//                       <h4 className="mt-1 mb-3">Touch Screen Waterproof Smartwatch</h4>
//                       <p className="text-muted float-start me-3">
//                         {[...Array(4)].map((_, index) => <FaStar key={index} className="text-warning" />)}
//                         <FaStar className="me-1" />
//                       </p>
//                       <p className="text-muted mb-4">(135 Customers Review)</p>
//                       <h6 className="text-success text-uppercase">20 % Off</h6>
//                       <h5 className="mb-2">
//                         Price: <span className="text-muted me-2"><del>{formattedPrice}</del></span>
//                         <b>{formattedPrice}</b>
//                       </h5>
//                       <p className="fs-13 text-muted">FREE SHIPPING on purchase above <b>$359</b></p>

//                       <h6 className="mt-4 fs-16">Description</h6>
//                       <p>
//                         At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
//                       </p>
//                       <p>
//                         On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized.
//                       </p>
//                       <p>
//                         But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.
//                       </p>
//                     </div>

//                     {/* Product Quantity */}
//                     <div className="d-flex mt-2">
//                       <div className="mt-2 sizes">Quantity:</div>
//                       <select className="form-select ms-2" aria-label="Product Quantity">
//                         {[...Array(10).keys()].map((qty) => (
//                           <option key={qty} value={qty + 1}>{qty + 1}</option>
//                         ))}
//                       </select>
//                     </div>

//                     {/* Product Colors */}
//                     <div className="colors d-flex me-3 mt-3">
//                       <span className="mt-2">Colors:</span>
//                       <div className="d-flex gutters-xs ms-4">
//                         {['info', 'secondary', 'danger', 'pink'].map((color, index) => (
//                           <div key={index} className="me-2">
//                             <label className="colorinput">
//                               <input name="color" type="radio" className="colorinput-input" value={color} checked={index === 0} />
//                               <span className={`colorinput-color bg-${color}`}></span>
//                             </label>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Product Specifications */}
//                 <div className="mt-4">
//                   <h5 className="mb-3">Specifications:</h5>
//                   <div className="row">
//                     <div className="col-xl-12">
//                       <div className="table-responsive">
//                         <table className="mb-0 border-top table-bordered text-nowrap table">
//                           <tbody>
//                             <tr><th scope="row">Category</th><td>Watches</td></tr>
//                             <tr><th scope="row">Brand</th><td>Willful</td></tr>
//                             <tr><th scope="row">Model</th><td>WF-080</td></tr>
//                             <tr><th scope="row">Screen size</th><td>1.3 Inches</td></tr>
//                             <tr><th scope="row">Waterproof</th><td>IP68</td></tr>
//                             <tr><th scope="row">Battery</th><td>220mAh</td></tr>
//                           </tbody>
//                         </table>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Related Products Section */}
//                 <div className="mt-4">
//                   <h5 className="mb-3">Related Products</h5>
//                   <div className="row">
//                     {relatedProducts.map((product, index) => (
//                       <div key={index} className="col-md-4">
//                         <div className="card">
//                           <img src={product.image} className="card-img-top" alt="Product" />
//                           <div className="card-body">
//                             <h5 className="card-title">{product.name}</h5>
//                             <p className="card-text">${product.price} USD</p>
//                             <a href="#" className="btn btn-primary">View Details</a>
//                           </div>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Ratings and Reviews */}
//                 <div className="mt-4 col-xl-12">
//                   <div className="card">
//                     <div className="p-0 card-body">
//                       <div className="d-flex p-3">
//                         <h5 className="float-start main-content-label mb-0 mt-2">All Ratings and Reviews</h5>
//                         <a className="btn btn-outline-primary btn-sm float-end ms-auto" href="/">Top Rated</a>
//                       </div>

//                       {/* Review List */}
//                       {reviews.map((review, index) => (
//                         <div key={index} className="media mt-4">
//                           <img alt="avatar" className="me-3 rounded-circle" width="50" src={userPlaceholder} />
//                           <div className="media-body">
//                             <h6 className="media-heading">{review.name}</h6>
//                             <div className="rating-star">
//                               {[...Array(review.rating)].map((_, idx) => <FaStar key={idx} className="text-warning" />)}
//                             </div>
//                             <p className="mt-2">{review.comment}</p>
//                             <span className="text-muted">{review.date}</span>
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>

//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ProductDetail;
