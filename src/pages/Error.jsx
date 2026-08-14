import { Link } from 'react-router-dom';

export default function Error() {
  return (
    <div className="text-center my-5 py-5">
      <h1 className="display-1 fw-bold text-danger">404</h1>
      <h2 className="fw-bold text-dark mb-3">Page Not Found</h2>
      <p className="text-muted mb-4 col-md-6 mx-auto"> The page you are looking for does not exist or has been moved.</p>
      <Link to="/" className="btn btn-success fw-bold px-4 py-2">Back to Home</Link>
    </div>
  );
}