import { products } from "../data";
import ProductCard from "../components/ProductCard";

const Store = () => {
  return (
    <>
      <div>
        <h1 style={{ marginTop: "8rem", textAlign: "center" }}>
          Browse the Store!
        </h1>
        <p>New Arrivals for you! Check out our selection of products.</p>
      </div>
      <div
        style={{
          maxWidth: "1024px",
          width: "80%",
          margin: "70px auto 0",
          gap: "12px",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gridGap: "15px",
        }}
      >
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default Store;
