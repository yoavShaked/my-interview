import React, { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import * as searchActions from "../../actions";
import { debounce, fetchSerachResult } from "../../utils";
import "./style.css";

const Search = (props) => {
  const [inputValue, setInputValue] = useState({ value: "", results: [] });
  const dispatch = useDispatch();
  const results = useSelector((state) => state.searchResult.results);
  const history = useHistory();

  const onChangeInput = async (e) => {
    const { value } = e.target;
    const data = await fetchSerachResult(value);
    dispatch(searchActions.setSearchResult(data.data));
    setInputValue({ value });
  };
  console.log("data", results);

  const onClickImage =
    ({ id, images, title }) =>
    () => {
      dispatch(searchActions.setImage({ id, images, title }));
      history.push(`/image/${id}`);
    };

  const mapSearchResult = ({ id, images, title }) => (
    <img
      onClick={onClickImage({ id, images, title })}
      key={id}
      src={images.downsized.url}
      height={images.downsized.height}
      width={images.downsized.width}
      className="resul-image"
    />
  );

  return (
    <div className={"search-container"}>
      <input
        className="search-input"
        value={inputValue.value}
        onChange={onChangeInput}
      />
      <div>{results.map(mapSearchResult)}</div>
    </div>
  );
};

Search.propTypes = {};

export default Search;
