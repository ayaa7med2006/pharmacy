import { useNavigate } from 'react-router-dom';
import ProductForm from '../components/ProductForm';
import { addProduct } from '../services/ProductService';
import { toast } from 'react-toastify';
export default function AddProduct() {
  const navigate = useNavigate();
  const AddProduct = async (data) => {
    try {
      await addProduct(data);
      toast.success('Medicine added successfully!');
      navigate('/products');
    } catch (err) {
      toast.error('Failed to add medicine');
    }
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-8 col-lg-6">
        <h2 className="mb-4 text-center fw-bold text-success">Add New Medicine</h2>
        <ProductForm onSubmit={AddProduct} />
      </div>
    </div>
  );
}