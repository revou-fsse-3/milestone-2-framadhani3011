import { Button, Form, InputGroup, ListGroup } from "react-bootstrap";

type City = { name: string; lat: string; lng: string };
type CityListProps = { cities: Array<City>; };


const MainPage = () => {
    return (
      <view>
        <InputGroup className='mb-3'>
          <Form.Control
            placeholder='Search city'
            aria-label='Search city'
            aria-describedby='city'
          />
          <Button variant='outline-primary' id='city'>
            Search
          </Button>
        </InputGroup>
        <CityList cities={cities} />
      </view>
    );
  };

// src/components/CityList.tsx
const CityList = (props: CityListProps) => {
    const onCityClick = (city: City) => {
      console.log(city);
    };
  
    return (
      <ListGroup>
        {props.cities.map((city) => (
          <ListGroup.Item
            key={city.name}
            action
            onClick={() => onCityClick(city)}
          >
            <h4>{city.name}</h4>
          </ListGroup.Item>
        ))}
      </ListGroup>
    );
  };
  
  export default MainPage;
  