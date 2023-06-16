import { useEffect, useState } from "react";
import Banner from "../components/cards/Banner";
import axios from "axios";
import ProductCard from "../components/cards/ProductCard";
import TopSlideShow from "../components/cards/TopSlideShow";
import Footer from "../components/Footer";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadProducts();
    getTotal();
  }, []);

  useEffect(() => {
    if (page === 1) return;
    loadMore();
  }, [page]);

  const getTotal = async () => {
    try {
      const { data } = await axios.get("/products-count");
      setTotal(data);
    } catch (err) {
      console.log(err);
    }
  };

  const loadProducts = async () => {
    try {
      const { data } = await axios.get(`/list-products/${page}`);
      setProducts(data);
    } catch (err) {
      console.log(err);
    }
  };

  const loadMore = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`/list-products/${page}`);
      setProducts([...products, ...data]);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  const arr = [...products];
  const sortedBySold = arr?.sort((a, b) => (a.sold < b.sold ? 1 : -1));

  return (

    <>
      <TopSlideShow />
      <Banner title="" sutTitle="Welcome to ShopSmart" />
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2 className="p-2 mt-2 mb-2 h3  text-light" style={{backgroundColor:'#3698BD'}}>
              New Arrivals
            </h2>
            <div className="row">
              {products?.map((p) => (
                <div className="col-lg-4 col-md-6 col-sm-12 mb-3" key={p._id}>
                  <ProductCard p={p} />
                </div>
              ))}
            </div>
          </div>

          <div className="col-lg-12">
            <h2 className="p-2 mt-2 mb-2 h3 text-light" style={{backgroundColor:'#3698BD'}}>
              Best Sellers
            </h2>
            <div className="row">
              {sortedBySold?.map((p) => (
                <div className="col-lg-4 col-md-6 col-sm-12 mb-3" key={p._id}>
                  <ProductCard p={p} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="container text-center p-5">
          {products && products.length < total && (
            <button
              className="btn btn-warning btn-lg col-md-6"
              disabled={loading}
              onClick={(e) => {
                e.preventDefault();
                setPage(page + 1);
              }}
            >
              {loading ? "Loading..." : "Load more"}
            </button>
          )}
        </div>
      </div>
      <div> <Footer /></div>
    </>
  );
}

export default Home;