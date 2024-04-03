import resList from "../utils/mockData";
import Restaurant_card from "../app";
//body component
const Body = () => {
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            console.log("button clicked!!");
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="restaurant_container">
        {resList.map((Restaurant) => (
          <Restaurant_card resData={Restaurant} />
        ))}
        {/* resList.map(): This iterates over each element in the resList array.
  
  (Restaurant) => ( <Restaurant_card resData={Restaurant} /> ): This is an arrow function that takes each element of the resList array (which represents a restaurant object) as an argument. It returns a Restaurant_card component with the current restaurant data passed as the resData prop.
  
  <Restaurant_card resData={Restaurant} />: This renders the Restaurant_card component for each restaurant in the resList array. The resData prop is assigned the current restaurant object, allowing the Restaurant_card component to access and display the relevant information for that restaurant. */}
        {/* <Restaurant_card
            resData={resList[0]} //will go as an argument in props , in Restaurant_card.
            // resName="meghana foods"
            // cuisines="Biryani,South-indian,north-indian,Fast-Food"
          /> */}
        {/* <Restaurant_card resData={resList[0]} />
          <Restaurant_card resData={resList[1]} />
          <Restaurant_card resData={resList[2]} />
          <Restaurant_card resData={resList[3]} />
          <Restaurant_card resData={resList[4]} />
          <Restaurant_card resData={resList[5]} />
          <Restaurant_card resData={resList[6]} />
          <Restaurant_card resData={resList[7]} />
          <Restaurant_card resData={resList[8]} /> */}
        {/* <Restaurant_card resData={resList[6]} />
          <Restaurant_card resData={resList[7]} />
          <Restaurant_card resData={resList[8]} />
          <Restaurant_card resData={resList[9]} /> */}
        {/* <Restaurant_card resData={resList[10]} />
          <Restaurant_card resData={resList[11]} /> */}
      </div>
    </div>
  );
};

export default Body;
