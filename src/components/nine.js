import React, { Component } from 'react';
import { Tab, Tabs, Form,InputGroup, Button, FormControl} from 'react-bootstrap';
import img1 from '../Images/img1.jpg'
import img2 from '../Images/img2.jpg'
import loadingimg  from '../Images/loadingimg.png'
import '../Styles/styling.css'

class Nine extends Component {
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
<div>


</div>

      <div  class="container-fluid">

  <div class="row">
    <div class="col-md-8">
        

    <Tabs defaultActiveKey="home" transition={false} 
    id="uncontrolled-tab-example" 
     style={{backgroundColor:"#ffff", border:"0"}}>
 
  <Tab 
   eventKey="home"   title="BASIC DETAILS"
  style={{paddingTop:"1rem", paddingBotton:"1rem",
   paddingLeft:"5rem", paddingRight:"5rem"}}
  >

      <center>
      <h1 style={{fontWeight:"600", color:"black",fontSize:"40px"}}
>Let us know few details about you

</h1>
<p style={{color:"#858A9A", fontSize:"15px"}}>Acquire karma points by completing your profile
    for better visibility. Get 10 Bunjis now.
</p>
      </center>

<p style={{float:"right", color:"#006AB1", fontSize:"15px"}}>
  <u>  Registered with misbahounain@gmail.com  </u></p>
<br/>
<br/>
<div>
<form>
  <div class="form-row">


  <div class="form-group col-md-2">
     
      <select id="inputState" class="form-control" 
      style={{border:"1px solid #2DABFF30", backgroundColor:"#F1F3F6"}}>
        <option selected>Title</option>
        <option>...</option>
      </select>
    </div>

    <div class="form-group col-md-5">
    
      <input type="text"  style={{border:"1px solid #2DABFF30", backgroundColor:"#F1F3F6"}} class="form-control" placeholder="First Name"/>
    </div>
    <div class="form-group col-md-5">
    
    <input type="text"  style={{border:"1px solid #2DABFF30", backgroundColor:"#F1F3F6"}} class="form-control" placeholder="Last Name"/>
    </div>
  </div>

  <div class="form-group">
 
    <input type="text"  style={{border:"1px solid #2DABFF30", backgroundColor:"#F1F3F6"}} class="form-control" 
    id="inputAddress" placeholder="1234 Main St"/>
  </div>

  <div class="form-group" style={{paddingBottom:"1rem"}}>



<span class="lni lni-map-marker"
  style={{float:"left", marginRight:"-16px", marginTop:"11px", position:"relative", zIndex:"2", color:"#B0BCC6"}}
  ></span>

    <input type="text"  style={{border:"1px solid #2DABFF30", backgroundColor:"#F1F3F6", paddingLeft:"2rem", width:"50"}} class="form-control" 
       placeholder="Enter and select your location"/>


  </div>

  <div class="form-group">
  <hr/>
  </div>




    <div class="form-group " style={{marginTop:"-36px"}}>

    <center>
<select  class="form-control"  style={{border:"1px solid #2DABFF30", backgroundColor:"#F1F3F6", width:"50%"}}>
        <option selected>Enter addresss manually</option>
        <option>...</option>
      </select>
      </center>
 
    </div>




  <div class="form-group">
  <div class="form-row">

  <div class="form-group col-md-6">
    
    <input type="text" class="form-control"  style={{border:"1px solid #2DABFF30", backgroundColor:"#F1F3F6"}}
     placeholder="Apt No/Suite/Fla No"/>
  </div>
  <div class="form-group col-md-6">
  
  <input type="text" class="form-control"  style={{border:"1px solid #2DABFF30", backgroundColor:"#F1F3F6"}}
  placeholder="Street Name"/>
  </div>

  </div>
  </div>

  <div class="form-group">
  <div class="form-row">
  <input type="text" class="form-control"  style={{border:"1px solid #2DABFF30", backgroundColor:"#F1F3F6"}}
     placeholder="Address Line"/>

  </div>
  </div>

  <div class="form-group">
  <div class="form-row">
  <div class="form-group col-md-6">
  <select  class="form-control"  style={{border:"1px solid #2DABFF30", backgroundColor:"#F1F3F6"}}>
        <option selected>Country</option>
        <option>...</option>
      </select>


  </div>

  <div class="form-group col-md-6">
  <select  class="form-control"  style={{border:"1px solid #2DABFF30", backgroundColor:"#F1F3F6"}}>
        <option selected>State</option>
        <option>...</option>
      </select>
  </div>



  </div>
  </div>




  <div class="form-group">
  <div class="form-row">
  <div class="form-group col-md-6">
  <select  class="form-control"  style={{border:"1px solid #2DABFF30", backgroundColor:"#F1F3F6"}}>
        <option selected>City</option>
        <option>...</option>
      </select>


  </div>
  
  <div class="form-group col-md-4">
  <input type="text" class="form-control"  style={{border:"1px solid #2DABFF30", backgroundColor:"#F1F3F6"}}
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
  <Tab eventKey="profile" title="PROFILE SUMMARY">
  2
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
</center>


<br/>


<form>


<div class="form-row">


<div class="form-group col-md-2">
   
<input type="text"  style={{borderRadius:"12px", backgroundColor:"#F8FBFF",height:"15px", border:"0"}} class="form-control" />
  </div>

  <div class="form-group col-md-5">
  
    <input type="text"   style={{borderRadius:"12px", backgroundColor:"#F8FBFF",height:"15px", border:"0"}} class="form-control"/>
  </div>
  <div class="form-group col-md-5">
  
  <input type="text"  style={{borderRadius:"12px", backgroundColor:"#F8FBFF",height:"15px", border:"0"}}
  class="form-control" />
  </div>
</div>



<div class="form-group">
<hr/>
</div>

<div class="form-group">
<input type="text"   style={{borderRadius:"12px", backgroundColor:"#F8FBFF",height:"15px", border:"0"}} class="form-control" /> 
<br/>
<input type="text"   style={{borderRadius:"12px", backgroundColor:"#F8FBFF",height:"15px", border:"0"}} class="form-control" /> 

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

export default Nine;