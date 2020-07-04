import React from "react"
import PropTypes from 'prop-types';

const TrackItems = ({
  result: { title, link, duration, preview, artist, album, picture_medium },
}) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{artist}</p>
      <p>{album}</p>
      <img src={picture_medium} alt="" />
      <a href={preview}>Preview</a>
      <a href={link}>Track</a>
      <small>{duration}</small>
    </div>
  );
};

TrackItems.propTypes={
    result: PropTypes.object.isRequired
}

export default TrackItems