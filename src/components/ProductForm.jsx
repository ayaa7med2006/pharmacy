import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { addProduct, updateProduct } from "../Services/ProductService";
import productSchema from "../validations/productValidation";
const ProductForm = ({ product }) => {
const navigate = useNavigate();
const {register,handleSubmit,reset,formState: { errors, isSubmitting },} = useForm({resolver: yupResolver(productSchema),mode: "onTouched",
defaultValues: {title: "",price: 0,category: "",image: "",description: "",},
  });
  useEffect(() => {
    if (product) {
      reset(product);
    }
  }, [reset, product]);

  async function submit(data) {
    try {
      if (product) {
        await updateProduct(product.id, data);
        toast.success("Product updated successfully");
      } else {
        await addProduct(data);
        toast.success("Product added successfully");
      }
      reset();
      navigate("/products");
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div style={{ background: "#f8f9fa", minHeight: "100vh" }} className="py-4">
      <div className="container px-3 px-md-4">
        <div className="card shadow-sm border-0 rounded-4 bg-white overflow-hidden">
          <div className="text-white p-4 text-center" style={{ background: "linear-gradient(45deg, #198754, #20c997)" }} >
            <h3 className="fw-bold mb-0"> {product ? "Edit Product Details" : "Add New Medicine"} </h3>
            </div>
          <div className="card-body p-4 p-md-5">
            <form onSubmit={handleSubmit(submit)} className="row g-4">
              <div className="col-md-6">
                <label className="form-label fw-semibold text-secondary">Product Title</label>
                <input type="text" {...register("title")} className={`form-control custom-input ${errors.title ? "is-invalid" : ""}`} placeholder=" Panadol Extra"/>
                <p className="text-danger small mt-1">{errors.title?.message}</p>
              </div>
              <div className="col-md-3">
                <label className="form-label fw-semibold text-secondary">Price ($)</label>
                <input type="number" step="0.01" {...register("price")} className={`form-control custom-input ${errors.price ? "is-invalid" : ""}`} placeholder=" 45"/>
                <p className="text-danger small mt-1">{errors.price?.message}</p>
              </div>
              <div className="col-md-3">
                <label className="form-label fw-semibold text-secondary">Category</label>
                <input type="text" {...register("category")} className={`form-control custom-input ${errors.category ? "is-invalid" : ""}`} placeholder="Painkillers"/>
                <p className="text-danger small mt-1">{errors.category?.message}</p>
              </div>
              <div className="col-md-12">
                <label className="form-label fw-semibold text-secondary">Image URL</label>
                <input type="text" {...register("image")} className={`form-control custom-input ${errors.image ? "is-invalid" : ""}`} placeholder="https://example.com/medicine.jpg"/>
                <p className="text-danger small mt-1">{errors.image?.message}</p>
              </div>
              <div className="col-md-12">
                <label className="form-label fw-semibold text-secondary">Description</label>
                <textarea rows="3" {...register("description")} className={`form-control custom-input ${errors.description ? "is-invalid" : ""}`} placeholder="Enter product description..."></textarea>
                <p className="text-danger small mt-1">{errors.description?.message}</p>
              </div>
              <div className="col-12 mt-4">
                <button type="submit"  disabled={isSubmitting} className="btn btn-success text-white w-100 py-2 fw-bold rounded-3" > {isSubmitting ? "Saving..." : product ? "Update Product" : "Add Product"}</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductForm;