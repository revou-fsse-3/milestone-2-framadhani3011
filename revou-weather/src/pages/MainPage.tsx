import { Button, Form, InputGroup, ListGroup, } from "react-bootstrap";
import CityList from "../components/CityList";
import axios from "axios";
import { useEffect, useState } from "react";
import useDebounce from "../hooks/useDebounce";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Weather() {
  return (
     <BrowserRouter>
       <Routes>
         <Route path='/' element={<MainPage />} />
          <Route path='/city' element={<CityPage />} /> 
      </Routes>
     </BrowserRouter>
  );
}


const CityPage = () => {
  const location = useLocation();
  const [weatherData, setWeatherData] = useState<weatherData>();

  useEffect(() => {
    const getWeather = async () => {
      const {lat, lng} = getSearchLatLong(location.search)

      const url = `https://api.weatherbit.io/v2.0/current?key=${API_KEY}&lat=${lat}&lon=${lng}`;
      const result = await axios.get(url);

      setWeatherData(result.data.data[0]);
    };
    if (!weatherData) getWeather();
  }, []);

}

const location = useLocation();
const [latqs, lngqs] = location.search.substring(1).split('&');
const lat = latqs.split('=')[1];
const lng = lngqs.split('=')[1];
const [searchText, setSearchText] = useState('')

const MainPage = () => {

    
    const { debounce } = useDebounce()

    useEffect(() => {
      debounce(callApi, 500)
    }, [searchText])

    return (
      <view>
        <InputGroup className='mb-3'>
          <Form.Control
            placeholder='Search city'
            aria-label='Search city'
            aria-describedby='city'
          />
  
          <Form.Control
            placeholder='Search city'
            onChange={(evt) => setSearchText(evt.target.value)}
          />

          <Button variant='outline-primary' id='city'>
            Search
          </Button>
        </InputGroup>
        <CityList cities={cities} />
      </view>
    );
};

  const [cities, setCities] = useState([])

  const callApi = async () => {
    try {
      const access_token = '[your token]'
      const result = await axios.get(`
        https://api.mapbox.com/geocoding/v5/mapbox.places/${searchText}.json?access_token=${access_token}&types=place
      `)

      setCities(
        result.data.features.map((city: any) => ({
          name: city.place_name,
          lat: city.geometry.coordinates[1],
          lng: city.geometry.coordinates[0],
        }))
      )

    } catch (error) {
      // if you need to handle any error returned by mapbox
      console.log(error)
    }
  }
  
  useEffect(() => {
    callApi()
  },[searchText])


  export default MainPage;
  

function getSearchLatLong(search: string): { lat: any; lng: any; } {
  throw new Error("Function not implemented.");
}
  