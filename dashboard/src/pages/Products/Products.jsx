// import React, { useState } from 'react';

// function Products() {
//   const [filters, setFilters] = useState({
//     category: '',
//     minPrice: 0,
//     maxPrice: 1000,
//     rating: 0,
//   });

//   const [products] = useState([
//     {
//       id: 1,
//       name: 'Product 1',
//       category: 'Electronics',
//       price: 150,
//       rating: 4,
//       image: 'https://via.placeholder.com/150',
//       description: 'A great product for your tech needs.',
//     },
//     {
//       id: 2,
//       name: 'Product 2',
//       category: 'Clothing',
//       price: 50,
//       rating: 3,
//       image: 'https://via.placeholder.com/150',
//       description: 'A comfortable and stylish clothing item.',
//     },
//     {
//       id: 3,
//       name: 'Product 3',
//       category: 'Electronics',
//       price: 200,
//       rating: 5,
//       image: 'https://via.placeholder.com/150',
//       description: 'Top-notch electronics for daily use.',
//     },
//     {
//       id: 4,
//       name: 'Product 4',
//       category: 'Furniture',
//       price: 300,
//       rating: 4,
//       image: 'https://via.placeholder.com/150',
//       description: 'Durable and elegant furniture piece.',
//     },
//     {
//       id: 5,
//       name: 'Product 5',
//       category: 'Furniture',
//       price: 300,
//       rating: 4,
//       image: 'https://via.placeholder.com/150',
//       description: 'Durable and elegant furniture piece.',
//     },
//     {
//       id: 6,
//       name: 'Product 6',
//       category: 'Furniture',
//       price: 300,
//       rating: 4,
//       image: 'https://via.placeholder.com/150',
//       description: 'Durable and elegant furniture piece.',
//     },
//     {
//       id: 7,
//       name: 'Product 7',
//       category: 'Furniture',
//       price: 300,
//       rating: 4,
//       image: 'https://via.placeholder.com/150',
//       description: 'Durable and elegant furniture piece.',
//     },
//   ]);

//   // Filter products based on category, price, and rating
//   const filteredProducts = products.filter((product) => {
//     return (
//       (filters.category === '' || product.category === filters.category) &&
//       product.price >= filters.minPrice &&
//       product.price <= filters.maxPrice &&
//       product.rating >= filters.rating
//     );
//   });

//   return (
//     <div className="right-contentDashboard w-98">
//       <div className="container-fluid">
//         <div className="d-md-flex d-block align-items-center justify-content-between page-header-breadcrumb">
//           <div>
//             <h2 className="main-content-title fs-24 mb-1 text-dark">Product-Details</h2>
//             <nav aria-label="breadcrumb" className="my-0">
//               <ol className="breadcrumb mb-0">
//                 <li className="breadcrumb-item">
//                   <a href="#" role="button" tabIndex="0">
//                     Products
//                   </a>
//                 </li>
//                 <li className="breadcrumb-item active" aria-current="page">
//                   Product-Details
//                 </li>
//               </ol>
//             </nav>
//           </div>
//           <div className="d-flex">
//             <div className="justify-content-center">
//               <button
//                 type="button"
//                 className="btn btn-white btn-icon-text my-2 me-3 d-inline-flex align-items-center"
//               >
//                 <i className="fe fe-download me-2 fs-14"></i> Import
//               </button>
//               <button
//                 type="button"
//                 className="btn btn-white btn-icon-text my-2 me-3 d-inline-flex align-items-center"
//               >
//                 <i className="fe fe-filter me-2 fs-14"></i> Filter
//               </button>
//               <button
//                 type="button"
//                 className="btn btn-primary my-2 btn-icon-text d-inline-flex align-items-center"
//               >
//                 <i className="fe fe-download-cloud me-2 fs-14"></i> Download Report
//               </button>
//             </div>
//           </div>
//         </div>
        

//         {/* Filter Section */}
//         <div className="filters mt-4 mb-4">
//           <div className="row">
//             <div className="col-md-3">
//               <select
//                 className="form-control"
//                 onChange={(e) => setFilters({ ...filters, category: e.target.value })}
//                 value={filters.category}
//               >
//                 <option value="">All Categories</option>
//                 <option value="Electronics">Electronics</option>
//                 <option value="Clothing">Clothing</option>
//                 <option value="Furniture">Furniture</option>
//               </select>
//             </div>
//             <div className="col-md-3">
//               <input
//                 type="number"
//                 className="form-control"
//                 placeholder="Min Price"
//                 onChange={(e) => setFilters({ ...filters, minPrice: e.target.value })}
//                 value={filters.minPrice}
//               />
//             </div>
//             <div className="col-md-3">
//               <input
//                 type="number"
//                 className="form-control"
//                 placeholder="Max Price"
//                 onChange={(e) => setFilters({ ...filters, maxPrice: e.target.value })}
//                 value={filters.maxPrice}
//               />
//             </div>
//             <div className="col-md-3">
//               <select
//                 className="form-control"
//                 onChange={(e) => setFilters({ ...filters, rating: e.target.value })}
//                 value={filters.rating}
//               >
//                 <option value="0">All Ratings</option>
//                 <option value="1">1 Star & Up</option>
//                 <option value="2">2 Stars & Up</option>
//                 <option value="3">3 Stars & Up</option>
//                 <option value="4">4 Stars & Up</option>
//                 <option value="5">5 Stars</option>
//               </select>
//             </div>
//           </div>
//         </div>

//         {/* Product List */}
//         <div className="row">
//           {filteredProducts.map((product) => (
//             <div key={product.id} className="col-md-3 mb-4">
//               <div className="card">
//                 <img
//                   src={product.image}
//                   className="card-img-top"
//                   alt={product.name}
//                   style={{ height: '200px', objectFit: 'cover' }}
//                 />
//                 <div className="card-body">
//                   <h5 className="card-title">{product.name}</h5>
//                   <p className="card-text">{product.description}</p>
//                   <div className="d-flex justify-content-between">
//                     <span>${product.price}</span>
//                     <span>{'★'.repeat(product.rating)}</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Products;



import React, { useState } from 'react';

function Products() {
  const [filters, setFilters] = useState({
    category: '',
    minPrice: 0,
    maxPrice: 1000,
    rating: 0,
    searchQuery: '', // New state for search query
  });

  const [products] = useState([
    {
      id: 1,
      name: 'Product 1',
      category: 'Electronics',
      price: 150,
      rating: 4,
      image: "https://w7.pngwing.com/pngs/570/751/png-transparent-apple-watch-series-3-apple-watch-series-2-smartwatch-apple.png",
      description: 'A great product for your tech needs.',
    },
    {
      id: 2,
      name: 'Product 2',
      category: 'Clothing',
      price: 50,
      rating: 3,
      image: 'https://via.placeholder.com/150',
      description: 'A comfortable and stylish clothing item.',
    },
    {
      id: 3,
      name: 'Product 3',
      category: 'Electronics',
      price: 200,
      rating: 5,
      image: 'https://via.placeholder.com/150',
      description: 'Top-notch electronics for daily use.',
    },
    {
      id: 4,
      name: 'Product 4',
      category: 'Furniture',
      price: 300,
      rating: 4,
      image: 'https://via.placeholder.com/150',
      description: 'Durable and elegant furniture piece.',
    },
    {
      id: 5,
      name: 'Product 5',
      category: 'Furniture',
      price: 300,
      rating: 4,
      image: 'https://via.placeholder.com/150',
      description: 'Durable and elegant furniture piece.',
    },
    {
      id: 6,
      name: 'Product 6',
      category: 'Furniture',
      price: 300,
      rating: 4,
      image: 'https://via.placeholder.com/150',
      description: 'Durable and elegant furniture piece.',
    },
    {
      id: 7,
      name: 'Product 7',
      category: 'Furniture',
      price: 300,
      rating: 4,
      image: 'https://via.placeholder.com/150',
      description: 'Durable and elegant furniture piece.',
    },
  ]);

  // Filter products based on category, price, rating, and search query
  const filteredProducts = products.filter((product) => {
    const searchMatch =
      product.name.toLowerCase().includes(filters.searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(filters.searchQuery.toLowerCase());

    return (
      searchMatch &&
      (filters.category === '' || product.category === filters.category) &&
      product.price >= filters.minPrice &&
      product.price <= filters.maxPrice &&
      product.rating >= filters.rating
    );
  });

  return (
    <div className="right-contentDashboard w-98">
      <div className="container-fluid">
        <div className="d-md-flex d-block align-items-center justify-content-between page-header-breadcrumb">
          <div>
            <h2 className="main-content-title fs-24 mb-1 text-dark">Product-Details</h2>
            <nav aria-label="breadcrumb" className="my-0">
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <a href="#" role="button" tabIndex="0">
                    Products
                  </a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Product-Details
                </li>
              </ol>
            </nav>
          </div>
          <div className="d-flex">
            <div className="justify-content-center">
              <button
                type="button"
                className="btn btn-white btn-icon-text my-2 me-3 d-inline-flex align-items-center"
              >
                <i className="fe fe-download me-2 fs-14"></i> Import
              </button>
              <button
                type="button"
                className="btn btn-white btn-icon-text my-2 me-3 d-inline-flex align-items-center"
              >
                <i className="fe fe-filter me-2 fs-14"></i> Filter
              </button>
              <button
                type="button"
                className="btn btn-primary my-2 btn-icon-text d-inline-flex align-items-center"
              >
                <i className="fe fe-download-cloud me-2 fs-14"></i> Download Report
              </button>
            </div>
          </div>
        </div>

        {/* Search Section */}
        <div className="search-bar mt-4 mb-4">
          <input
            type="text"
            className="form-control"
            placeholder="Search products by name or description..."
            onChange={(e) => setFilters({ ...filters, searchQuery: e.target.value })}
            value={filters.searchQuery}
          />
        </div>

        {/* Filter Section */}
        <div className="filters mt-4 mb-4">
          <div className="row">
            <div className="col-md-3">
              <select
                className="form-control"
                onChange={(e) => setFilters({ ...filters, category: e.target.value })}
                value={filters.category}
              >
                <option value="">All Categories</option>
                <option value="Electronics">Electronics</option>
                <option value="Clothing">Clothing</option>
                <option value="Furniture">Furniture</option>
              </select>
            </div>
            <div className="col-md-3">
              <input
                type="number"
                className="form-control"
                placeholder="Min Price"
                onChange={(e) => setFilters({ ...filters, minPrice: e.target.value })}
                value={filters.minPrice}
              />
            </div>
            <div className="col-md-3">
              <input
                type="number"
                className="form-control"
                placeholder="Max Price"
                onChange={(e) => setFilters({ ...filters, maxPrice: e.target.value })}
                value={filters.maxPrice}
              />
            </div>
            <div className="col-md-3">
              <select
                className="form-control"
                onChange={(e) => setFilters({ ...filters, rating: e.target.value })}
                value={filters.rating}
              >
                <option value="0">All Ratings</option>
                <option value="1">1 Star & Up</option>
                <option value="2">2 Stars & Up</option>
                <option value="3">3 Stars & Up</option>
                <option value="4">4 Stars & Up</option>
                <option value="5">5 Stars</option>
              </select>
            </div>
          </div>
        </div>

        {/* Product List */}
        <div className="row">
          {filteredProducts.map((product) => (
            <div key={product.id} className="col-md-3 mb-4">
              <div className="card">
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.name}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.description}</p>
                  <div className="d-flex justify-content-between">
                    <span>${product.price}</span>
                    <span>{'★'.repeat(product.rating)}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
