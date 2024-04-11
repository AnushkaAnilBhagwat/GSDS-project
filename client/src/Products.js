import React from "react";

const Products = () => {
  const [products, setProducts] = useState([]);

  //get all products
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:8080/products/get-product"
      );
      setProducts(data.products);
    } catch (error) {
      console.log(error);
      toast.error("Something Went Wrong");
    }
  };

  //lifecycle method
  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <>
      <h1>All Products list</h1>
      {products?.map((p) => (
        <div className="card" style={{ width: "18rem" }} key={p._id}>
          <img src={p.photo} className="card-img-top" alt={p.name} />
          <div className="card-body">
            <h5>{p.name}</h5>
            <p>{p.description}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Products;
