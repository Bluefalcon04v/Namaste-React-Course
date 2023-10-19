import {IMG_CDN_URL} from "../config"

const ResturantItems = ({name,category, description, imageId, price})=>{
    return(
        <div>
            {/* <img src={IMG_CDN_URL + imageId} alt="Image" /> */}
            <p>{name}</p>
            {/* <p>{category}</p>
            <p>{description}</p>
            <p>&#8377; {price/100}</p> */}
        </div>
    )
}

export default ResturantItems;