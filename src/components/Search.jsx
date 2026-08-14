export default function Search({ searchTerm, setSearchTerm, selectedCategory, setSelectedCategory, categories }) {
  return (
    <div className="row mb-4 g-3">
      <div className="col-md-8">
        <input type="text" className="form-control" placeholder="Search for medicines..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
      </div>
      <div className="col-md-4">
        <select className="form-select" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
          <option value="All">All Categories</option>
          {categories.map((cat, index) => (<option key={index} value={cat}> {cat} </option> ))}
        </select>
      </div>
    </div>
  );
}