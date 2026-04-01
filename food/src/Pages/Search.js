import {
  useNavigate,
  useOutletContext,
  useSearchParams,
} from "react-router-dom";
import "./../Style/search.css";
import { useEffect, useState } from "react";
const Search = () => {
  const { restaurantData } = useOutletContext();
  const navigate = useNavigate();
  const [searchParam] = useSearchParams();
  const [isEmpty, setIsEmpty] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const items = restaurantData.slice(0, 8);
  useEffect(() => {
    const queryParam = searchParam.get("query");
    if (queryParam) {
      setSearchText(queryParam);
    }
  }, [searchParam]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setIsEmpty(searchText === "");
      navigate(`?query=${searchText}`);
      if (searchText.trim() !== "") {
        const filtered = restaurantData.filter((res) => {
          return res.info.name.toLowerCase().includes(searchText.toLowerCase());
        });
        setFilteredRestaurants(filtered);
      } else {
        setFilteredRestaurants([]);
      }
    }, 2000);
    return () => {
      clearTimeout(timerId);
    };
  }, [searchText, navigate]);

  console.log(searchText);
  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };
  // const handleSearch = (e) => {
  //   let value = e.target.value.toLowerCase();
  //   setSearchText(e.target.value);
  //   if (value.trim() === "") {
  //     setIsEmpty(true);
  //     setFilteredRestaurants([]);
  //     return;
  //   }
  //   setIsEmpty(false);
  //   const results = restaurantData.filter((txt) => {
  //     return txt.info.name.toLowerCase().includes(value);
  //   });
  //   setFilteredRestaurants(results);
  // };
  // console.log(filteredRestaurants);

  return (
    <div className="search">
      <div className="searchContainer">
        <input
          type="text"
          className="searchField"
          placeholder="Search Restaurants and food"
          value={searchText}
          onChange={handleSearch}
        ></input>
      </div>
      {isEmpty && (
        <>
          <h3 className="heading">Popular Restaurants</h3>
        </>
      )}
    </div>
  );
};

export default Search;
