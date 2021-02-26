
import React, { Component } from 'react';
import { Tab, Tabs, Container, Row, Col, Card, CardDeck, Button} from 'react-bootstrap';
import Group33 from '../Images/Group33.png'
import Group from '../Images/Group3.svg';
import Group31 from '../Images/Group31.svg';
import Group32 from '../Images/Group32.svg';
import gloabe from '../Images/gloabe.svg';
import bell from '../Images/bell.svg';
import Footer from '../footer/foot'
import laptop from '../Images/laptop.jpg';
import think from '../Images/think.jpg';
import photoframe from '../Images/photoframe.jpg';
import bulb from '../Images/bulb.jpg';
import '../Styles/two.css'
import Navbar from '../navbar/nav'

class Two extends Component {
    render() {
        return (
            <>
<>



<Navbar/>

<br/>
<br/>
            <div  class="container-fluid">
      <div>
                     <center>
                         <h1 style={{fontSize:"45px", fontWeight:"bold", fontFamily:"sans-serif"}}>MEETING A COACH HAS NEVER BEEN EASIER</h1>
                         <br/>
                         <p>A go to app for all your coaching needs,
                             with full set of features that will complement your coaching business
                             <br/>
                             <br/>
                        
                             <button
                             style={{border:" 2px solid #73787D", backgroundColor:"#ffff", borderRadius:"5px", color:"#73787D",
                            fontWeight:"bold", fontFamily:"sans-serif", marginRight:"10px"}}
                             >HIRE A COACH</button>
                             <button
         style={{border:"2px solid #FF8E31",backgroundColor:"#FF8E31", borderRadius:"5px", color:"#ffff",
 fontFamily:"sans-serif", marginLeft:"10px"}}
                             >JOIN AS A COACH</button>
                         </p>
                     </center>

                 </div>
                
            </div>
            
            <div style={{padding:"4rem"}}>
            <CardDeck>
  <Card>
   
    <Card.Body>
      <Card.Title>
      <img src={Group} />
      </Card.Title>
      <br/>
      <div>
      <p >
     It's all happening in the channel
      </p>
      </div>
  <div>
  <p>Follow everything related to individual topics,
          projects or team in dedicated channels.
      </p>
  </div>
  
    </Card.Body>
   
  </Card>
  <Card>
   
    <Card.Body>
      <Card.Title>
      <img src={Group31} />
      </Card.Title>
      <Card.Text>
History you can see and search.
      </Card.Text>
      <p>Projects end, teams change and Slack saves everything. Rather than trying remember,
          easily find what you're looking for.
      </p>
    </Card.Body>
   
  </Card>
  <Card>
  
    <Card.Body>
      <Card.Title>
      <img src={Group32} />
      </Card.Title>
      <Card.Text>
Work more closely with other companies
      </Card.Text>
      <p>
          Follow everything related to individual topics,
          prjects or teams in their dedicated channels.
      </p>
    </Card.Body>

  </Card>
</CardDeck>
            </div>

            <div  class="container-fluid">
              

              <div class="row">
  <div class="col-md-3">
  
  </div>
  <div class="col-md-6">
  <Tabs defaultActiveKey="home" transition={false}  
    id="uncontrolled-tab-example" className="twotab"
     style={{backgroundColor:"#ffff", border:"0", display:"flex", justifyContent:"center", 
     boxShadow:"0 3px 6px #00000029"}}>
 
  <Tab className="tabClass" 
   eventKey="home"   title="Collaborate"
  style={{paddingTop:"1rem", paddingBotton:"1rem",
   paddingLeft:"5rem", paddingRight:"5rem"}}
  >


    

              

  </Tab>
  <Tab eventKey="profile" title="Growth">
  2
  </Tab>
  <Tab eventKey="contact" title="Subscriptions" >
   3
  </Tab>
 
</Tabs>

  
  </div>
  <div class="col-md-3">
  
  </div>
</div>

     
    
            </div>
            
            <Tabs style={{border:"0"}}>
            <Tab className="tabClass" 
   eventKey="home"  >
      <div  class="container-fluid">

    
<div class="row">
    <div class="col-md-6">
  
    <img src={Group33} class="img-fluid" style={{width:"706px", height:"452px"}} alt="Group33"/>
    </div>
    <div class="col-md-6">
  
  <p>
    A much needed platform
    <br/>
    for coaches, built by coaches.
  </p>
  
  <Card style={{border:"0"}}>
  <Card.Body>
    
  <Container>
  <Row>
  <Col md={1}>
<img src={bell} alt="bell" />
  </Col>
  <Col md={11}>
<p>
 It's all happening in the channel
</p>

<p>
  Follow everything related to individual topics, projects or teams in their dedicated channels.
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
<p>
 History you can see and search 
</p>

<p>
  Projects end, teams change and Slack saves everything. Rather
  than trying to remember, easily find what you looking for.
</p>
  </Col>
  </Row>
  </Container>
    
    </Card.Body>
</Card>
  
    </div>
    </div> 
    </div>

   </Tab>
            </Tabs>
          
            <div  class="container-fluid">
              

              <div class="row">
  <div class="col-md-3">
  
  </div>
  <div class="col-md-6">
  <Card style={{border:"1px solid #ffff"}}>
  <Card.Body>
  <div class="row">
  <div class="col-md-9">
<p>Need help in choosing?</p>
<p>Email us for any queries. Our team is ready to assist you.</p>
  </div>
  <div class="col-md-3">
 <Button>JOIN NOW</Button>
  </div>
  </div>
    </Card.Body>
    </Card>
</div>
  <div class="col-md-3">

    </div>
    </div>
    </div>
<center>
<h1>Resources</h1>

</center>


<div class="container-fluid">
              

              <div class="row">
              <div class="col-md-1">
                </div>
  <div class="col-md-5">
  <Card style={{border:"1px solid #ffff", boxShadow:"0 3px 6px #00000029"}}>
  <Card.Body>
<div class="row">
  <div class="col">
<img src={laptop} class="img-fluid" style={{width:"12rem", height:"11rem"}} alt="laptop" />
  </div>
  <div class="col">
    <p style={{textAlign:"left"}}>dggdgdggd</p>
    </div>
</div>
    </Card.Body>
    </Card>
    <br/>
    <Card style={{border:"1px solid #ffff", boxShadow:"0 3px 6px #00000029"}}>
  <Card.Body>
  <div class="row">
  <div class="col">
<img src={think} alt="laptop" class="img-fluid" style={{width:"12rem", height:"11rem"}} />
  </div>
  <div class="col">
  <p style={{textAlign:"left"}}>dggdgdggd</p>
    </div>
</div>
    </Card.Body>
    </Card>
  </div>
  <div class="col-md-5">
  <Card style={{border:"1px solid #ffff", boxShadow:"0 3px 6px #00000029"}}>
  <Card.Body>
  <div class="row">
  <div class="col">
<img src={bulb} alt="laptop" class="img-fluid" style={{width:"12rem", height:"11rem"}}/>
  </div>
  <div class="col">
  <p style={{textAlign:"left"}}>dggdgdggd</p>
    </div>
</div>
    </Card.Body>
    </Card>
<br/>
<Card style={{border:"1px solid #ffff", boxShadow:"0 3px 6px #00000029"}}>
  <Card.Body>
  <div class="row">
  <div class="col">
<img src={photoframe} alt="laptop" class="img-fluid" style={{width:"12rem", height:"11rem"}} />
  </div>
  <div class="col">
  <p style={{textAlign:"left"}}>dggdgdggd</p>
    </div>
</div>
    </Card.Body>
    </Card>
    </div>
    <div class="col-md-1">
                </div>

    </div>
    </div>



<center>

<a href="#" style={{color:"black"}}>View all Resources</a>

</center>



            </>
        
             <div>
            <Footer/>

            </div> 
</>
        );
    }
}

export default Two;