import React from 'react';
import gloabe from '../Images/gloabe.svg';
import bell from '../Images/bell.svg';
import {  Container, Row, Col, Card, CardDeck, Button} from 'react-bootstrap';

function collabform() {
    return (
        <div>
   

  <Card style={{border:"0"}}>
  
  <Card.Body>

  <Container>
  <Row>
  <p style={{fontSize:"22px", fontWeight:"700", textAlign:"left", marginLeft:"2rem"}}>
      A much needed platform <br/>
       for coaches, built by coaches</p>   
  <br/>
  </Row>
  <Row>


  <Col md={1}>
<img src={bell} alt="bell" />
  </Col>
  <Col md={11}>

<p style={{textAlign:"left"}}>
 It's all happening in the channel
</p>

<p style={{textAlign:"left"}}>
  Follow everything related to individual topics, projects or <br/>
  teams in their dedicated channels.
</p>
  </Col>
  </Row>
  </Container>
    
    </Card.Body>
</Card>


<Card style={{border:"0"}}>
  <Card.Body>
    
  <Container>
  <Row>
  <Col md={1}>
<img src={gloabe} alt="gloabe" />
  </Col>
  <Col md={11}>
  <p style={{textAlign:"left"}}>
 History you can see and search 
</p>

<p style={{textAlign:"left"}}>
  Projects end, teams change and Slack saves everything. Rather <br/>
  than trying to remember, easily find what you looking for.
</p>
  </Col>
  </Row>
  </Container>
    
    </Card.Body>
</Card>
  
        </div>
    );
}

export default collabform;