import { IMG_CDN_URL } from "../config";

const ResturantItems = ({ name, category, description, imageId, price }) => {
  return (
    <div className="menuItems">
      <img src={IMG_CDN_URL + imageId} alt="Image" />
      <div className="menuItemsContent">
        <h3>{name}</h3>
        <p>{category}</p>
        <p>{description}</p>
        <p>&#8377; {price / 100}</p>
      </div>
    </div>
  );
};

export default ResturantItems;
