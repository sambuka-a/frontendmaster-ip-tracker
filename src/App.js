import { useState, useEffect } from "react"; 
import axios from 'axios'
import Header from "./components/header/Header";
import Details from "./components/details/Details";
import Map from "./components/map/Map";

function App() {

  const [ipData, setIpData] = useState({});

  const getData = async (q = 'ipAddress=1.1.1.1') => {
      try {
        setIpData({loading: 'loading'})
        const res = await axios.get(`https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.REACT_APP_API_KEY}&${q}`)
        setIpData(res.data)
        console.log(res);
      } catch(err) {
        setIpData({error: err.message});
      }
      
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <Header handleClick = {getData}/>
      <Details {...ipData}/>
      <Map {...ipData}/>
      
    </>
  );
}

export default App;
