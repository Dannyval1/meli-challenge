/*** REACT NATIVE FUNCTIONS ***/
import { useState } from "react";
import { useNavigate } from "react-router-dom";

/*** IMAGES ***/
import logoImg from "./../../assets/main-logo.png";
import searchingIcon from "./../../assets/search-icon.png";

/*** STYLES ***/
import "./Header.scss";

export const Header = () => {
  const navigate = useNavigate();
  const [valueSearch, setValueSearch] = useState({});

  const getValueQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valueQuery = e.target.value;
    setValueSearch(valueQuery);
  };

  const goSearch = () => {
    navigate({
      pathname: "/items",
      search: "?search=" + valueSearch,
    });
    window.location.reload();
  };

  const handleKeyPress = (event: any) => {
    if (event.key === "Enter") {
      goSearch();
    }
  };

  return (
    <header className="searchBar pt-2 pb-2">
      <div className="d-flex justify-content-center">
        <div className="logo">
          <img
            data-testid="btn_go_home"
            src={logoImg}
            alt="Logo"
            width="60"
            onClick={() => navigate({ pathname: "/" })}
          />
        </div>
        <div className="inputSearch d-flex align-items-center">
          <input
            className="form-control search me-0 ms-4"
            type="search"
            placeholder="Nunca dejes de buscar"
            onChange={getValueQuery}
            onKeyPress={handleKeyPress}
            data-testid="input_query"
          />
          <input
            className="btn btn-outline-secondary btn-search"
            type="image"
            name="submit"
            src={searchingIcon}
            alt="Submit"
            onClick={() => goSearch()}
            data-testid="btn_search"
          />
        </div>
      </div>
    </header>
  );
};
