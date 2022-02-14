import React from 'react';
import {Container,Row,Col,Table,Image} from "react-bootstrap"
import {FiPhoneCall,FiSmartphone,FiMail} from "react-icons/fi"
const Contact = () => {
  return <>
        <Container style={{marginTop:"50px"}}>
            <Row>
                <Col md={7}>
                    <h1>The Pizza Shop</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id iure in quidem quae eos consequatur, dolor dignissimos dolorem officia aliquam natus doloribus nemo veritatis voluptate tenetur debitis illo quia nulla voluptas. Quibusdam minus repellat, magnam optio quia, vitae, minima provident eum quaerat maiores nostrum molestiae. Tempore dicta explicabo minima, dolorum ullam consequatur saepe dolore ex iste quas, error ut, voluptatibus reiciendis necessitatibus eveniet atque recusandae nobis perferendis suscipit voluptas. Vel repellendus tenetur eum explicabo ipsum pariatur voluptatum vitae in illo, vero reiciendis ipsam deserunt. Delectus est, magni autem ab illo nisi libero molestiae hic quo dolorem enim, nobis voluptatibus, voluptas a temporibus dignissimos? Consequatur, mollitia aliquid qui est, nostrum perspiciatis deleniti sit fuga esse dolores illo, eligendi rerum ut magni voluptate earum quam ex magnam debitis! Ipsam excepturi fuga odit facere ad, iusto nesciunt voluptatum incidunt sequi exercitationem autem culpa rem earum! Eos blanditiis at ipsam soluta voluptatum dolorum, eum et reiciendis fuga voluptatem incidunt rerum nulla eaque exercitationem cupiditate non possimus. Officiis, aperiam. Nostrum earum sequi sit expedita inventore repellendus quos repellat nihil sint, quis laborum soluta vitae eligendi vel amet, enim rem aliquam aliquid. Sed iure eligendi voluptate hic. Fuga, nemo nesciunt adipisci repellat quia quo rem molestias!</p>
                
                    <Table striped bordered hover text-center>
                        <thead>
                            <tr>
                                <th className='bg-warning text-center' colSpan={3}>--- Contact Details ---</th>
                            </tr>
                        </thead>
                        <tbody className='text-center'>
                            <tr>
                                <td><FiPhoneCall/></td>
                                <td>Phone</td>
                                <td>123-456-78</td>
                            </tr>
                            <tr>
                                <td><FiSmartphone/></td>
                                <td>Call</td>
                                <td>123-456-7890</td>
                            </tr>
                            <tr>
                                <td><FiMail/></td>
                                <td>Email</td>
                                <td>abc123@abc.com</td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
                <Col md={4}>
                    <Image src='images/margherita.jpg' 
                    style={{height:'97.4%',width:'100%'}}/>
                </Col>
            </Row>
        </Container>
  </>;
};

export default Contact;
