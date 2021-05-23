import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

const SelectedImage = (props) => {
  const image = useSelector((state) => state.searchResult.image);
  return (
      <div>
          <div>
              {image.title}
          </div>
          <img
            src={image.images.original.url}
            height={image.images.original.height}
            width={image.images.original.width}
          />
      </div>
  );
};

SelectedImage.propTypes = {};

export default SelectedImage;
