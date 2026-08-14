const Card = ({ product, children }) => {
  return (
    <div className="card h-100">
      
        <img src={product.image} className="card-img-top object-fit-cover " alt="..." style={{ height: "220px" }} />
     
      <div className="card-body d-flex flex-column">
        <h5 className="card-title fw-bold text-truncate">{ product.name}</h5>
        <p className="card-text text-muted small flex-grow-1"> { product.description.slice(0, 40)}... </p>
        
        
          {children}
       
      </div>
    </div>
  );
};

export default Card;

