import { useState, useEffect } from "react"; 
import axios from 'axios'
import Header from "./components/header/Header";
import Details from "./components/details/Details";
import Map from "./components/map/Map";

function App() {

  const [ipData, setIpData] = useState({});

  const getData = async (q = '') => {
      try {
        setIpData({loading: 'loading'})
        const res = await axios.get(`http://ip-api.com/json/${q}?fields=status,message,region,regionName,city,zip,lat,lon,offset,timezone,isp,query`)
        setIpData(res.data)
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
