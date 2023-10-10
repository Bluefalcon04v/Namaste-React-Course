import { resturantListData } from "../config";
import ResturantCard from "./ResturantCard"

const Body = () => (
    <div className="resturantList">
      {
          resturantListData.map((value) => {
              return <ResturantCard {...value.info} key={value.info.id}/>
          })
      }
  
    </div>
  );

  export default Body;