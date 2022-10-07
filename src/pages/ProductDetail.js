import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const params = useParams(); //params is an object that consists of key value pair

  console.log(params.productId);

  return (
    <section>
      <h1>Product Detail</h1>
      <p>{params.productId}</p>
    </section>
  );
};

export default ProductDetail;
