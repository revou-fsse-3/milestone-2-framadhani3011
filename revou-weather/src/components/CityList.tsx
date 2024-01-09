import { ListGroup } from "react-bootstrap";

type City = { name: string; lat: string; lng: string };
type CityListProps = { cities: Array<City>; };


const City = [
    { name: 'Jakarta', lat: '-6.200000', lng: '106.816666'},
    { name: 'London', lat: '51.507351', lng: '-0.127758' },
    { name: 'New York', lat: '40.730610', lng: '-73.935242' },
    { name: 'Tokyo', lat: '35.689487', lng: '139.691706' },
    { name: 'Amsterdam', lat: '52.377956', lng: '4.897070'},
  ];
  
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
  
  export default CityList;
