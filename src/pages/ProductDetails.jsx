import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getOneProduct } from "../services/ProductService";
const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    async function fetchData() {
      try {const res = await getOneProduct(id);
        setProduct(res);
      } catch (error) {
      }
    }
    fetchData();
  }, [id]);
  return (
    <div className="container py-4">
      {product && ( <><h1 className="text-center text-success mb-4"> { product.title} page</h1>
          <div className=" mx-auto overflow-hidden" style={{ maxWidth: "800px" }}>
            <div className="row g-0 align-items-center">
              <div className="col-md-5 bg-light d-flex align-items-center justify-content-center p-3">
                <img src={product.image} className="img-fluid rounded object-fit-cover"  style={{ maxHeight: "320px", width: "100%" }}/>
              </div>
              <div className="col-md-7">
                <div className="card-body p-4 d-flex flex-column justify-content-between h-100">
                  <div> <span className="badge bg-light text-success border border-success mb-2 px-2 py-1"> {product.category}</span>
                    <h3 className="card-title fw-bold text-success mb-2">  {product.title} </h3>
                    <div className="fs-4 fw-bold text-dark mb-3"> {product.price}<span className="fs-6 text-muted fw-normal">EGP</span></div>
                    <div className="mb-4"><h6 className="fw-bold text-secondary mb-1"> Description:</h6>
                      <p className="card-text text-muted lh-base small">{product.description} </p>
                    </div>
                  </div>
                  <div>
                    <button onClick={() => navigate("/products")} className="btn btn-outline-success" > Back to Catalog </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductDetails;