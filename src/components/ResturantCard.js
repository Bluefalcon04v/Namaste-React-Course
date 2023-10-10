import {IMG_CDN_URL} from "../config"

const ResturantCard = ({name, cuisines, cloudinaryImageId, avgRating}) => { 
  return (
    <div className="card">
      <img
        src={
            IMG_CDN_URL +
          cloudinaryImageId
        }
        alt="Image"
      />
        <h2>{name}</h2>
        <h4>{cuisines.join(", ")}</h4>
        <h5>{avgRating} Stars</h5>
      </div>
  );
};

export default ResturantCard;