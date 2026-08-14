import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { deleteProduct } from "../services/ProductService";

const DeleteProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const removeProduct = async () => {
    const confirmDelete = window.confirm( "Are you sure you want to delete this medicine?" );
      if (!confirmDelete) {
        navigate("/products");
        return;
      }
      try {
        await deleteProduct(id);
        toast.success("Medicine deleted successfully!");
        navigate("/products");
      } catch (error) {
        toast.error("Failed to delete medicine");
        navigate("/products");
      }
    };

    removeProduct();
  }, [id, navigate]);

  return (
    <div className="text-center my-5">
      <h3 className="text-muted">Deleting...</h3>
    </div>
  );
};

export default DeleteProduct;