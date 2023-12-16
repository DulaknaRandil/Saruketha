import React, { useState } from 'react';
import { Card, ListGroup, Button, Nav, Tab } from 'react-bootstrap';
import '@fortawesome/fontawesome-free/css/all.css';
import './Menu.css';

function Menu() {
  const [activeTab, setActiveTab] = useState('breakfast');

  const menuItems = {
    breakfast: [
      {
        title: 'Omelette',
        image: 'https://example.com/omelette.jpg',
        description: 'Delicious omelette with a variety of fillings.',
        listItems: [
          { name: 'Cheese Omelette', price: 'Rs.250' },
          { name: 'Vegetable Omelette', price: 'Rs.300' },
          { name: 'Ham and Cheese Omelette', price: 'Rs.350' },
        ],
      },
      {
        title: 'Pancakes',
        image: 'https://example.com/pancakes.jpg',
        description: 'Fluffy pancakes served with maple syrup.',
        listItems: [
          { name: 'Classic Pancakes', price: 'Rs.200' },
          { name: 'Blueberry Pancakes', price: 'Rs.250' },
        ],
      },
    ],
    lunch: [
      {
        title: 'Grilled Chicken',
        image: 'https://example.com/grilled-chicken.jpg',
        description: 'Juicy grilled chicken served with a side of vegetables.',
        listItems: [
          { name: 'BBQ Grilled Chicken', price: 'Rs.550' },
          { name: 'Herb-Marinated Chicken', price: 'Rs.600' },
        ],
      },
      {
        title: 'Caesar Salad',
        image: 'https://example.com/caesar-salad.jpg',
        description: 'Fresh Caesar salad with crispy lettuce and grilled chicken.',
        listItems: [
          { name: 'Classic Caesar Salad', price: 'Rs.350' },
          { name: 'Chicken Caesar Salad', price: 'Rs.450' },
        ],
      },
    ],
    dinner: [
      {
        title: 'Juice',
        image: 'https://www.eatthis.com/wp-content/uploads/sites/4/2022/07/Fresh-squeezed-juices.jpg?quality=82&strip=all',
        description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
        listItems: [
          { name: 'Pineapple Juice', price: 'Rs.350' },
          { name: 'Watermelon Juice', price: 'Rs.350' },
          { name: 'Papaya Juice', price: 'Rs.350' },
          { name: 'Lime Juice', price: 'Rs.350' },
          { name: 'Mix fruit Juice', price: 'Rs.450' },
        ],
      },
      {
        title: 'Soups',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5hunImCRh2gI_6i_z00qT0gOD42IsJ2uWWUXvhDw9Eyokkf1zoMQPaOZmS69VPN_M0dM&usqp=CAU',
        description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
        listItems: [
          { name: 'Cream of Vegetable Soups', price: 'Rs.450' },
          { name: 'Chicken and Sweet Corn Soup', price: 'Rs.700' },
          { name: 'Chicken Soup', price: 'Rs.550' },
          { name: 'Beef Soup', price: 'Rs.750' },
        ],
      },
      {
        title: 'Desserts',
        image: 'https://preppykitchen.com/wp-content/uploads/2021/07/Ice-Cream-Cake-Recipe.jpg',
        description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
        listItems: [
          { name: 'Ice Cream Vanilla', price: 'Rs.200' },
          { name: 'Ice Cream Strawberry', price: 'Rs.200' },
          { name: 'Ice Cream Chocolate', price: 'Rs.200' },
          { name: 'Fruit Salad', price: 'Rs.250' },
          { name: 'Fruit Salad with Ice Cream', price: 'Rs.300' },
          { name: 'Watalappan', price: 'Rs.250' },
        ],
      },
      {
        title: 'Salads & Appetier',
        image: 'https://images.immediate.co.uk/production/volatile/sites/2/2021/06/hot-smoked-salmon-salad-6f16c73.jpg?quality=90&resize=556,505',
        description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
        listItems: [
          { name: 'Onion & Green Chille', price: 'Rs.300' },
          { name: 'Mix Salad', price: 'Rs.500' },
          { name: 'Coleslaw Salad', price: 'Rs.250' },
        ],
      },
      {
        title: 'Chinse Fried Rice',
        image: 'https://images.immediate.co.uk/production/volatile/sites/2/2021/06/hot-smoked-salmon-salad-6f16c73.jpg?quality=90&resize=556,505',
        description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
        listItems: [
          { name: 'Basmathi Fried Rice', price: 'Normal | Full' },
          { name: 'Vegetable Fried Rice ', price: 'Rs.800 |  Rs.1150' },
          { name: 'Egg Fried Rice        ', price: 'Rs.800   | Rs.1150 ' },
          { name: 'Fish Fried Rice       ',  price: 'Rs.800 |  Rs.1150' },
          { name: 'Mix Fried Rice        ',  price: 'Rs.800 | Rs.1150' },
          { name: 'Sea Food Fried Rice   ',  price: 'Rs.800 | Rs.1150' },
          { name: 'Nasigoreng Fried Rice',  price: 'Rs.800 | Rs.1150' },
          { name: 'Mongolian Fried Rice',  price: 'Rs.800 | Rs.1150' },
        ],
      },
  
      {
        title: 'Fried Noodles',
        image: 'https://images.immediate.co.uk/production/volatile/sites/2/2021/06/hot-smoked-salmon-salad-6f16c73.jpg?quality=90&resize=556,505',
        description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
        listItems: [
          { name: 'Noodles', price: 'Normal | Full' },
          { name: 'Vegetable Noodles ', price: 'Rs.800 |  Rs.1150' },
          { name: 'Egg Noodles        ', price: 'Rs.800   | Rs.1150 ' },
          { name: 'Chicken Noodles',  price: 'Rs.800 | Rs.1150' },
          { name: 'Fish Noodles       ',  price: 'Rs.800 |  Rs.1150' },
          { name: 'Mix Noodles        ',  price: 'Rs.800 | Rs.1150' },
          { name: 'Mongolian Noodles',  price: 'Rs.800 | Rs.1150' },
        ],
      },
      {
        title: 'Hot & Spicy  I',
        image: 'https://images.immediate.co.uk/production/volatile/sites/2/2021/06/hot-smoked-salmon-salad-6f16c73.jpg?quality=90&resize=556,505',
        description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
        listItems: [
          { name: 'Cuttle Fish', price: 'Normal | Full' },
          { name: 'Vegetable Noodles ', price: 'Rs.800 |  Rs.1150' },
          { name: 'Egg Noodles        ', price: 'Rs.800   | Rs.1150 ' },
          { name: 'Chicken Noodles',  price: 'Rs.800 | Rs.1150' },
          { name: 'Fish Noodles       ',  price: 'Rs.800 |  Rs.1150' },
          { name: 'Mix Noodles        ',  price: 'Rs.800 | Rs.1150' },
          { name: 'Mongolian Noodles',  price: 'Rs.800 | Rs.1150' },
        ],
      },
    ],
  };

  const handleTabSelect = (selectedTab) => {
    setActiveTab(selectedTab);
  };

  return (
    <div>
      

      <Tab.Container activeKey={activeTab} onSelect={handleTabSelect}>
        <Nav variant="tabs">
          <Nav.Item>
            <Nav.Link eventKey="breakfast">Breakfast</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="lunch">Lunch</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="dinner">Dinner</Nav.Link>
          </Nav.Item>
        </Nav>

        <Tab.Content>
          {Object.keys(menuItems).map((tabKey) => (
            <Tab.Pane key={tabKey} eventKey={tabKey}>
              <div className="d-flex justify-content-center align-items-center flex-wrap">
                {menuItems[tabKey].map((item, index) => (
                  <Card
                    key={index}
                    bg="dark"
                    className="bg-body-tertiary"
                    data-bs-theme="dark"
                    style={{ width: '22rem', margin: '10px' }}
                  >
                    <Card.Img variant="top" src={item.image} />
                    <Card.Body>
                      <Card.Title>{item.title}</Card.Title>
                      <Card.Text>{item.description}</Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                      {item.listItems.map((listItem, i) => (
                        <ListGroup.Item key={i} style={{ marginBottom: '10px' }}>
                          <div>
                            <strong>{listItem.name}</strong> &nbsp; {listItem.price}
                          </div>
                        </ListGroup.Item>
                      ))}
                    </ListGroup>
                    <Card.Body>
                      <Button href="#" variant=" res-btn-out  nav-alignment" size="m" style={{ marginRight: '90px' }}>Order now</Button>
                      <Button href="#" variant=" res-btn-out  nav-alignment" size="m">Learn More</Button>
                    </Card.Body>
                  </Card>
                ))}
              </div>
            </Tab.Pane>
          ))}
        </Tab.Content>
      </Tab.Container>

      {/* Footer */}
      <footer className="bg-dark text-light p-4">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h5>Contact Us</h5>
              {/* Add your contact icons or information */}
              <p>Email: example@example.com</p>
              <p>Phone: +123 456 7890</p>
            </div>
            <div className="col-md-6">
              <h5>Follow Us</h5>
              {/* Add your social media buttons with original colors */}
              <div className="social-icons">
                {/* Example icons, replace them with your social media icons */}
                <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook fa-lg" style={{ color: '#1877f2', marginRight: '10px' }}></i></a>
                <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter fa-lg" style={{ color: '#1da1f2', marginRight: '10px' }}></i></a>
                <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram fa-lg" style={{ color: '#c13584', marginRight: '10px' }}></i></a>
              </div>
            </div>
          </div>
          <hr className="mt-2 mb-3" />
          <div className="text-center">
            {/* Copyright statement */}
            <p>&copy; 2023 Saruketha Restaurant. All Rights Reserved.</p>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default Menu;
