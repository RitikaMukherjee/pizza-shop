import React from 'react';
import AllPizza from "../pizza-data"
import {Container,Row,Col} from "react-bootstrap"
import Pizza from '../components/Pizza';
const Homescreen = () => {
  return <>
    <Container style={{marginTop:"50px"}}>
        <Row>
            {AllPizza.map((pizza,index)=>(
                <Col md={4}>
                  <Pizza key={index} pizza={pizza}/>
                </Col>
            ))}
        </Row>
    </Container>
  </>;
};

export default Homescreen;
