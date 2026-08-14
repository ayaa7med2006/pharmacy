import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
 const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate()
  useEffect(() => {
    const token = localStorage.getItem('token')
      navigate('/auth/login');
      return;
    axios.get('https://dummyjson.com/auth/me', {headers: { Authorization: `Bearer ${token}`, },
      })
      .then((res) => {setUser(res.data);
      })
      .catch((err) => {
        localStorage.removeItem('token');
        navigate('/auth/login');
      })
      .finally(() => {
        setLoading(false);
      });
  }, [navigate]);
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-5">
          <div className="p-4 text-center rounded-3">
            <img src="https://www.cairo24.com/Upload/libfiles/112/5/32.jpg" alt={user?.username} className="rounded-circle mx-auto mb-3 border border-success p-1" style={{ width: '110px', height: '110px', objectFit: 'cover' }} />
            <h3 className="fw-bold text-success mb-1">{user?.firstName} {user?.lastName}</h3>
            <p className="text-muted small">@{user?.username}</p>
            <hr />
            <div className="text-start mb-4">
              <p className="mb-2"> <strong>Email:</strong> {user?.email}</p>
              <p className="mb-0"> <strong>Gender:</strong> {user?.gender}</p>
            </div>

            <button onClick={() => navigate('/home')} className="btn btn-outline-success w-100 fw-bold rounded-2" > Back to Home </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Profile