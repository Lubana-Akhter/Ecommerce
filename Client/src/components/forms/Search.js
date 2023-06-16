import axios from "axios";
import { useSearch } from "../../context/search";
import { useNavigate } from "react-router-dom";
import { FiSearch } from 'react-icons/fi';

const Search = () => {
  // hooks
  const [values, setValues] = useSearch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get(`/products/search/${values?.keyword}`);

      setValues({ ...values, results: data });
      navigate("/search");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
    
    <form className="d-flex" role="search" onSubmit={handleSubmit}>
      <input
        type="search"
        className="form-control"
        placeholder="Search"
        aria-label="Search"
        onChange={(e) => setValues({ ...values, keyword: e.target.value })}
        value={values.keyword}
      />
      <button
        className="btn btn-dark"
        type="submit"
       
      >
        <FiSearch/>
      </button>
    </form>
    </>


  );
}

export default Search;