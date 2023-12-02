// src/components/Home.js
import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
const Home = () => {
  return  <div className="content">
  <h1>Welcome to Saruketha Restaurant</h1>
  <p>Explore our delicious menu and discover the best flavors in town.</p>
  <Card style={{ width: '18rem' }} >
<Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
<Card.Body>
  <Card.Title>Card Title</Card.Title>
  <Card.Text>
    Some quick example text to build on the card title and make up the
    bulk of the card's content.
  </Card.Text>
</Card.Body>
<ListGroup className="list-group-flush">
  <ListGroup.Item>Cras justo odio</ListGroup.Item>
  <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
  <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
</ListGroup>
<Card.Body>
  <Card.Link href="#">Card Link</Card.Link>
  <Card.Link href="#">Another Link</Card.Link>
</Card.Body>
</Card>
  {/* Add more content components as needed */}
</div>
};

export default Home;
