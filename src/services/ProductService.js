import axios from 'axios';

const apilink = 'http://localhost:3000/products';

export async function  getAllProducts  () {
    const res = await axios.get(apilink)
    return res.data 
} 

export async function  getOneProduct  (id) {
    const res = await axios.get(`${apilink}/${id}`)
    return res.data 
}
export async function addProduct(product) {
  const res = await axios.post(apilink, product);
  return res.data;
}

export async function  updateProduct  (id,product) {
    const res = await axios.patch(`${apilink}/${id}`, product)
    return res.data 
} 

export async function  deleteProduct  (id) {
    const res = await axios.delete(`${apilink}/${id}`)
    return res.data 
} 