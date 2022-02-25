import React,{useState} from 'react';
import {Card,Button,Row,Col, Modal} from 'react-bootstrap';
import Quantity from './Quantity';
let count=0;
const Pizza = ({pizza}) => {
  const [varient,setVarient]=useState("small");
  // const [quantity,setQuantity]=useState(1);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleQuantity=(data)=>{
      count +=data;
  }
  return <>
    <Card style={{ width: '18rem' }} style={{margin:"10px"}}>
        <Card.Img variant="top" src={pizza.image} onClick={handleShow} style={{cursor:"pointer"}} />
        <Card.Body>
            <Card.Title>{pizza.name}</Card.Title>
            <Card.Text>
                <Row>
                  <Col md={6}>
                    <h6>Variant</h6>
                    <select value={varient} onChange={e=>setVarient(e.target.value)} style={{border:"none"}}>
                      {pizza.varients.map(varient=>(
                        <option >{varient}</option>
                      ))}
                    </select>
                  </Col>
                  <Col md={6}>
                    <h6>Quantity</h6>
                    <Quantity quantity={handleQuantity}/>
                  </Col>
                </Row>
            </Card.Text>
            <Row>
              <Col>Price : {(pizza.prices[0][varient])*count}</Col>
            </Row>
            <Button variant="secondary">Add to cart</Button>
        </Card.Body>
    </Card>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>{pizza.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Card.Img variant="top" src={pizza.image}/>
            <p>{pizza.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
  </>;
};

export default Pizza;
