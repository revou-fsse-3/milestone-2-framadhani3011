import { Button, Form, InputGroup, ListGroup } from "react-bootstrap";
import CityList from "../components/CityList";

// src/pages/MainPage.tsx
const MainPage = () => {

    const [searchText, setSearchText] = ('')
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
  
  export default MainPage;
  
  