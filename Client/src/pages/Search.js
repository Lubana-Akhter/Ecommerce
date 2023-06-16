import { useSearch } from "../context/search";
import ProductCard from "../components/cards/ProductCard";
import Banner from "../components/cards/Banner";


const Search=()=> {
  const [values, setValues] = useSearch();

  return (
    <>
     <div className="section-between"></div>
      <Banner
        title="Search results"
        subTitle={
          values?.results?.length < 1
            ? "No products found"
            : `Found ${values?.results?.length} products`
        }
      />

      <div className="container mt-3">
        <div className="row">
          {values?.results?.map((p) => (
            <div key={p._id} className="col-md-4">
              <ProductCard p={p} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Search;