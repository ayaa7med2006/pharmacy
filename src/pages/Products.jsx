import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import { getAllProducts, deleteProduct } from "../services/ProductService";
import { toast } from "react-toastify";
const Products = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    async function fetchData() {
      try { const res = await getAllProducts(); setProducts(res || []);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);
  const Delete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this medicine?");
    if (!confirmDelete) return;
    try {
      await deleteProduct(id);
      toast.success("Medicine deleted successfully!");
      setProducts((prev) => prev.filter((p) => p.id !== id));
    } catch (error) {
      toast.error("Failed to delete medicine");
    }
  };
  const filteredProducts = products.filter((p) =>
    (p.title )
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );
  return (
    <div className="container py-4">
      <h1 className="text-center text-success mb-4 fw-bold">Medicines Catalog</h1>
      <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center gap-3 mb-4">
        <div className="w-100" style={{ maxWidth: "500px" }}>
          <input type="text" className="form-control border-success" placeholder="Search for medicine..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
        </div>
        <button onClick={() => navigate("/products/new")} className="btn btn-success"> + Add Product</button>
      </div>

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
        {filteredProducts.map((p) => (
          <div className="col" key={p.id}>
            <Card product={p}> <div className="d-flex gap-2 mt-auto pt-2">
                <button onClick={() => navigate(`/products/${p.id}`)}  className="btn btn-sm btn-success flex-grow-1 fw-bold">  Details</button>
                <button  onClick={() => navigate(`/products/${p.id}/edit`)}  className="btn btn-sm btn-outline-warning fw-bold">  Edit  </button>
                <button onClick={() => handleDelete(p.id)}  className="btn btn-sm btn-outline-danger fw-bold" >Delete
                </button>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;