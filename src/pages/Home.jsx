import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="container py-5">
      <div className="row align-items-center g-5">
        <div className="col-md-6">
          <h1 className="display-5 fw-bold text-success mb-3"> Pharmacy <span style={{ color: '#ff922b' }}>Management</span> System</h1>
          <p className="lead text-muted mb-4"> Welcome to the pharmacy management portal. Use this system to manage your medicine inventory, add new products, update prices, and view detailed information efficiently.</p>
            <Link to="/products" className="btn btn-outline-success px-4 py-2">Show Products</Link>
        </div>
        <div className="col-md-6 text-center">
          <img src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&q=80" alt="Pharmacy" className="img-fluid rounded shadow-sm"style={{ maxHeight: '260px', objectFit: 'cover' }}/>
        </div>
      </div>
    </div>
  );
}