
import righttriangle from './righttriangle.svg';
import Group from './Group.svg';
import facebook from './facebook.svg';
import insta from './insta.svg';
import linkdn from './linkdn.svg';
import twitter from './twitter.svg';
import './fter.css';


export default function Foot() {
    return (
      < >
        
        <div className ="foo">
          <div class="container-fluid">
            <div class="row">
              <div class="col-1 ">
            <img 
              src={righttriangle}
              style={{marginTop:350}}
              width={100}
              height={50}/>

            </div>

            <div class="col-1 ">
            <img 
              src={righttriangle} 
              style={{marginTop:335,bottom:0}}
              />

            </div>
            
           
            <div class="col-4" style={{marginTop:150}}>
              <h4 style={{color:"#FFFFFF"}}>Never miss an update!</h4>
              <p style={{color:"#FFFFFF"}}>Subscribe and stay in loop for our latest features and news<br/> We promise we won't spam your mailbox</p>
              
            </div>
            <div class="col-2 offset-md-1" style={{marginTop:150,marginLeft:175}}>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Name"/><br/>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Email"/><br/>
            <button className="subscribe">SUBSCRIBE</button>
            </div>
           


            </div>
          
          </div>
          <div >
           
            <img src={Group} style={{marginTop:50,marginRight:20}}/>
            {/* <img src="/smalleft.svg" style={{marginTop:150}}/> */}

          </div>

        </div>

        <div className="foo">
          <div class="container">
            <div class="row">
              <div class="col-8 " style={{marginLeft:190}}>
                <div className="endbox">
                  <div class="container">
                    <div class="row" >
                      <div class="col-7" style={{marginTop:30}}>
                        <h4>MeetMyCoach</h4>
                        <p>MeetMyCoach allows Coaches and Consultants to explore new opportunities, connect with employers and Businesses</p>
                        <img src={facebook}/>
                        <img src={linkdn}/>
                        <img src={twitter}/>
                        <img src={insta}/>
                      </div>
                      <div class="col-2"style={{marginTop:30}}>
                        <p style={{fontSize:12}}>Support Center</p>
                        <p style={{fontSize:12}}>Why MeetMyCoach?</p>
                        <p style={{fontSize:12}}>Plans & Pricing</p>
                        <p style={{fontSize:12}}>For Business</p>
                        <p style={{fontSize:12}}>Resources</p>
                        <p style={{fontSize:12}}>Use Cases</p>
                        <p style={{fontSize:12}}>About Us</p>

                      </div>
                      <div class="col-2" style={{marginTop:30}}>
                      <p style={{fontSize:12}}>Term of Use</p>
                        <p style={{fontSize:12}}>Privacy Policy</p>
                        <p style={{fontSize:12}}>Coach Usage Policy</p>
                        <p style={{fontSize:12}}>Employer job Policy</p>
                        <p style={{fontSize:12}}>Language Pocliy</p>
                        <p style={{fontSize:12}}>Contact Us</p>

                      </div>
                     
                    </div>
                {/* <p >© Copyright 2020 MeetMyCoach. All rights reserved</p> */}
                   <div><center>© Copyright 2020 MeetMyCoach. All rights reserved</center></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img src={Group} style={{marginTop:150,marginRight:20}}
            width={50} /></div>

        </div>
         
          
     
       
      
  
  
       
      </>
    )
  }