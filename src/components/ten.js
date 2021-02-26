import React, { Component } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import camera from '../Images/camera.png'
import img1 from '../Images/img1.jpg'
import img2 from '../Images/img2.jpg'
import loadingimg  from '../Images/loadingimg.png'
import '../Styles/styling.css'

class Ten extends Component {
  render() {
    return (
        <div style={{backgroundColor:"#ffff"}}>
        <nav style={{backgroundColor:"#ffff"}}
        class="navbar navbar-light ">
    <a class="navbar-brand" href="#">
      <img src={img1}
     style={{  width:"3rem" ,height:"3rem" }}/>
  
    </a>
  
    <img src={img2} style={{borderRadius:"2rem",  width:"3rem" ,height:"3rem" }}
   
   class="d-inline-block align-top" alt="img2"/>

  
  
  </nav>
  
  
        <div  class="container-fluid">
  
    <div class="row">
      <div class="col-md-8">
          
  
      <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
    <Tab 
     eventKey="home" title="BASIC DETAILS"
     style={{paddingTop:"1rem", paddingBotton:"1rem",
     paddingLeft:"5rem", paddingRight:"5rem"}}
    >
  <h1 style={{fontWeight:"600", color:"black",fontSize:"24px"}}
  >What others can know about you?
  
  </h1>
  <a href="#" style={{float:"right", color:"#006AB1"}}>
     Autofill From LinkdIn?</a>
  <br/>
  <br/>
  <div>
  <form>
    <div class="form-row">
  
  
    <div class="form-group col-md-2">
       
        <select id="inputState" class="form-control">
          <option selected>Title</option>
          <option>...</option>
        </select>
      </div>
  
      <div class="form-group col-md-5">
      
        <input type="text" class="form-control" placeholder="First Name"/>
      </div>
      <div class="form-group col-md-5">
      
      <input type="text" class="form-control" placeholder="Last Name"/>
      </div>
    </div>
    <div class="form-group">
   
      <input type="text" class="form-control" 
      id="inputAddress" placeholder="1234 Main St"/>
    </div>
  
    <div class="form-group">
    
      <input type="text" class="form-control" 
      placeholder="Enter and select your location"/>
    </div>
  
    <div class="form-row">
      <div class="form-group col-md-4">
  
  
      <select  class="form-control">
          <option selected>Enter addresss manually</option>
          <option>...</option>
        </select>
  
   
      </div>
     
  
    </div>
  
    <div class="form-group">
    <div class="form-row">
  
    <div class="form-group col-md-6">
      
      <input type="text" class="form-control"
       placeholder="Apt No/Suite/Fla No"/>
    </div>
    <div class="form-group col-md-6">
    
    <input type="text" class="form-control" placeholder="Street Name"/>
    </div>
  
    </div>
    </div>
  
    <div class="form-group">
    <div class="form-row">
    <input type="text" class="form-control"
       placeholder="Address Line"/>
  
    </div>
    </div>
  
    <div class="form-group">
    <div class="form-row">
    <div class="form-group col-md-6">
    <select  class="form-control">
          <option selected>Country</option>
          <option>...</option>
        </select>
  
  
    </div>
  
    <div class="form-group col-md-6">
    <select  class="form-control">
          <option selected>State</option>
          <option>...</option>
        </select>
    </div>
  
  
  
    </div>
    </div>
  
  
  
  
    <div class="form-group">
    <div class="form-row">
    <div class="form-group col-md-6">
    <select  class="form-control">
          <option selected>City</option>
          <option>...</option>
        </select>
  
  
    </div>
    
    <div class="form-group col-md-4">
    <input type="text" class="form-control"
       placeholder="Zip Code"/>
    </div>
  
  
  
    </div>
    </div>
  
  
    <button type="submit"
    style={{backgroundColor:"#FF8E31", color:"#FFFFFF", borderRadius:"5px", 
    width:"188px", border:"0", float:"right"}}
    class="btn btn-primary">NEXT</button>
  
  
  <br/>
  
  </form>
  
  <br/>
  
  </div>
  
  
  
    </Tab>
    <Tab eventKey="profile" title="PROFILE SUMMARY"
    style={{paddingTop:"1rem", paddingBotton:"1rem",
    paddingLeft:"5rem", paddingRight:"5rem"}}>
  
    <h1 style={{fontWeight:"600", color:"black",fontSize:"40px",textAlign:"center"}}
     
  >What others can know about you?
  
  </h1>
  
  <center>
  <img style={{width:"10rem", borderRadius:"5rem"}} src={camera} />
  
  <p style={{fontWeight:"500"}}>Upload your profile picture</p>
  
  </center>
  
  <a href="#" style={{float:"right", color:"#006AB1"}}>
    <u>Autofill From LinkdIn? </u> </a>
  <br/>
  <br/>
  <div>
  <form>
  
  
  <div class="form-row">
  
  
  <input type="text" class="form-control"
  style={{border:"1px solid #2DABFF30", backgroundColor:"#F1F3F6"}}
     placeholder="Enter a headline that best describes your profile"/>
  
  
  </div>
  
    
    <span style={{float:"right", color:"black"}}>Max 80 characters</span>
  
    <br/>
    <br/>
    <br/>
  
    <div class="form-row">
  
  
  <textarea class="form-control" placeholder="Provide a short summary about you"
  style={{border:"1px solid #2DABFF30", backgroundColor:"#F1F3F6"}}
   id="exampleFormControlTextarea1" rows="5">
  
  </textarea>
  
  
  </div>
  <span style={{float:"right", color:"black"}}>Max 250 characters</span>
  
  <br/>
    <br/>
    <p>
          <label style={{fontWeight:"600"}}><input type="checkbox" style={{border:"1px solid #2DABFF30", backgroundColor:"red"}}/>
      Are you open for reviews from Coachees? Review added to your profile could increase your
      visibility in searches
          </label>
      </p>
  
                   
  
  <button type="submit"
    style={{backgroundColor:"#FF8E31", color:"#FFFFFF", borderRadius:"5px", 
    width:"188px", border:"0", float:"right"}}
    class="btn btn-primary">NEXT</button>
  
  </form>
  
  <br/>
  <br/>
  </div>
  
  
  
    </Tab>
    <Tab eventKey="contact" title="SKILLS & CAPABILITIES" >
     3
    </Tab>
    <Tab eventKey="PLAN" title="SELECT PLAN" >
     
    </Tab>
  </Tabs>
  
      </div>
      <div class="col-md-4" style={{backgroundColor:"#F1F3F6", padding:"1rem" }}>
      <h1 style={{fontSize:"20px", textAlign:"center"}}>DETAILS PEOPLE WILL SEE</h1>
  
  <center>
  <img src={loadingimg} alt="loadingimg" 
style={{width:"10rem", borderRadius:"5rem"}}
/>
  <h1 style={{fontSize:"20px", textAlign:"center"}}>Dr. Raymond Beck</h1>
  </center>
  
  
  <form>
  
  
  <div class="form-row">
  
  
  <div class="form-group col-md-2">
     
  <input type="text"   style={{borderRadius:"12px", backgroundColor:"#F8FBFF",height:"15px", border:"0"}} class="form-control"/>
    
    </div>
  
    <div class="form-group col-md-5">
    
    <input type="text"   style={{borderRadius:"12px", backgroundColor:"#F8FBFF",height:"15px", border:"0"}} class="form-control"/>
    
    </div>
    <div class="form-group col-md-5">
    
    <input type="text"   style={{borderRadius:"12px", backgroundColor:"#F8FBFF",height:"15px", border:"0"}} class="form-control"/>
    
    </div>
  </div>
  
  
  
  <div class="form-group">
  <hr/>
  </div>
  
  <div class="form-group">
  <p style={{fontSize:"15px", fontWeight:"600"}}>
    98 Shirley Street PIMPAMA QLD 4209 
    AUSTRALIA
  </p>
  
  </div>
  
  <div class="form-group">
  <hr/>
  </div>
  
  
  
  <div class="form-group">
  
  <input type="text"  style={{borderRadius:"10px", border:"0", backgroundColor:"#F8FBFF"}} class="form-control" /> 
  
  <br/>
  
  <input type="text"  style={{borderRadius:"10px", border:"0", backgroundColor:"#F8FBFF"}} class="form-control" /> 
  
  <br/>
  <input type="text"  style={{borderRadius:"10px", border:"0", backgroundColor:"#F8FBFF"}} class="form-control" /> 
  
  <br/>
  <input type="text"  style={{borderRadius:"10px", border:"0", backgroundColor:"#F8FBFF"}} class="form-control" /> 
  
  <br/>
  </div>
  
  
  </form>
  
  
  
  
         </div>
    </div>
    </div>
  
      </div>
  
    );
  }
}

export default Ten;