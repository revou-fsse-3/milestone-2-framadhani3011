import { Button, Form, InputGroup, } from "react-bootstrap";
import CityList from "../components/CityList";
import axios from "axios";
import { useEffect, useState } from "react";


const [searchText, setSearchText] = useState('')

const MainPage = () => {

    
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
  
  