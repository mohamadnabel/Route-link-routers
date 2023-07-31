import React, { useEffect, useState } from 'react';
import './home.css'; // Import the CSS file

const Home = () => {
  const [data, setData] = useState([]);

  const FetchingData = async () => {



    const url = 'https://edamam-food-and-grocery-database.p.rapidapi.com/api/food-database/v2/parser?nutrition-type=cooking&category%5B0%5D=generic-foods&health%5B0%5D=alcohol-free';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4b7c977cdbmsh779b498b888f88dp109778jsn40d542d7b3de',
		'X-RapidAPI-Host': 'edamam-food-and-grocery-database.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result.hints);

  setData(result.hints)
} catch (error) {
	console.error(error);
}
 
  };

  useEffect(() => {
    FetchingData();
  }, []);

  return (
    <div className="container">
      <h1 className="heading">Welcome to Our Homepage</h1>
      <p className="paragraph">Check out the latest data from our API:</p>
      <ul className="list">
        {data.map((item,index) => (
          <div key={index}>
            <li>{item.food.label}</li>
            <img src={item.food.image} alt={item.title} />
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Home;