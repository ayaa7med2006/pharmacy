import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ProductForm from '../components/ProductForm';
import { getOneProduct, updateProduct } from '../services/ProductService';
import { toast } from 'react-toastify';

export default function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProduct() {
      try { const data = await getOneProduct(id);
        setProduct(data);
      } catch (err) {
        toast.error('Failed to load medicine details');
      } finally {
        setLoading(false);
      }
    }
    fetchProduct();
  }, [id]);

  const UpdateProduct = async (data) => {
    try { await updateProduct(id, data);
      toast.success('Medicine updated successfully!');
      navigate('/products');
    } catch (err) {
      toast.error('Failed to update medicine');
    }
  };
  return (
    <div className="row justify-content-center py-4">
      <div className="col-md-8 col-lg-6">
        <h2 className="mb-4 text-center fw-bold text-success">Edit Medicine</h2>
        <ProductForm  initialValues={product}  onSubmit={UpdateProduct}  isEdit={true} />
      </div>
    </div>
  );
}