import { Badge } from "antd";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/cart";

const ProductCard = ({ p }) => {
  // context
  const [cart, setCart] = useCart();
  // hooks
  const navigate = useNavigate();

  return (
   
      <div className="serviceCard mb-3">
        <Badge.Ribbon text={`${p?.sold} sold`} color="red">
          <Badge.Ribbon
            text={`${p?.quantity >= 1
              ? `${p?.quantity - p?.sold} in stock`
              : "Out of stock"
              }`}
            placement="start"
            color="green"
          >
            <img
              className="item-img"
              src={`${process.env.REACT_APP_API}/product/photo/${p._id}`}
              alt={p.name}
             
            />
          </Badge.Ribbon>
        </Badge.Ribbon>

        <div className="card-body">
          <h5>{p?.name}</h5>

          <h4 className="fw-bold">
            {p?.price?.toLocaleString("en-US", {
              style: "currency",
              currency: "BDT",
            })}
          </h4>

          <p className="card-text">{p?.description?.substring(0, 60)}...</p>
        </div>

        <div className="d-flex justify-content-between">
          <button
            className="btn btn-primary col card-button m-2"
            style={{ borderBottomLeftRadius: "5px" }}
            onClick={() => navigate(`/product/${p.slug}`)}
          >
            View Product
          </button>

          <button
            className="btn btn-outline-primary col card-button m-2"
            style={{ borderBottomRightRadius: "5px" }}
            onClick={() => {
              setCart([...cart, p]);
              localStorage.setItem("cart", JSON.stringify([...cart, p]));
              toast.success("Added to cart");
            }}
          >
            Add to Cart
          </button>
        </div>

        {/* <p>{moment(p.createdAt).fromNow()}</p>
      <p>{p.sold} sold</p> */}
      </div>
    

  );
}

export default ProductCard;