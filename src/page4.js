

import left from './Images/Group.svg';
import ema from './Images/ema.svg';
import righttriangle from './Images/righttriangle.svg';
import meetmy from './Images/MeetMyCoachLogo.svg'
import './Styles/pag4.css';



export default function Page4() {
    return (
        <>
       
       
               <nav style={{backgroundColor:"#ffff"}}
                        class="navbar navbar-light ">
                    <a class="navbar-brand" href="#">
                        <img src={meetmy}
                    style={{  width:"3rem" ,height:"2rem" }}/>

                    </a>

                     <a className=" backtohome" style={{marginRight:30 }}>BACK TO HOME</a>


                </nav>
                <div className="lin">
                   <div class="container-fluid" >
                       <div class="row" >
                           <div class="col-7 offset-md-1" style={{marginTop:80}}>
                               <h4 style={{color:'white'}}>Verify your email </h4> <br/>
                               <h6 style={{color:'white'}}>You will need to verify your email to complete registration</h6>

                           </div>
                           <div class="col-1 offset-md-3" style={{marginTop:50}}>
                              <img src={left}/>
                           </div>
                       </div>
                   </div>
                </div>

                <div class="container-fluid">
                    <div class="row">
                        <div class="col-2" >
                           <img src={righttriangle}/>
                        </div>
                        <div class="col-2" >
                           <img src={righttriangle}/>
                        </div>
                        <div class="col-3 offset-md-2 bx1" style={{position:'relative',top:-100}}>
                            <br/>
                            <center>
                                <img src={ema}
                                height={65}/>
                            </center>
                            <br/>
                            
                                <p>An email has been sent to johndoe@example.com with a link to verify your account. If you have not received the email after a few minutes.Please check your spam folder</p>
                            
                            <div class="row" style={{padding:5 ,marginTop:30,marginBottom:40}}>
                                <div class="col-5">
                                    <button style={{backgroundColor:"#FF8E31",borderRadius: 5,borderColor:"#FF8E31",color:'white'}}>RESEND EMAIL</button>
                                
                                </div>
                                <div class="col-6">
                                <button style={{backgroundColor:" #FFFFFF",borderRadius: 5,border: "1px solid #FF8E31",color:'#FF8E31'}}>CONTACT SUPPORT</button>

                                    
                                </div>
                            </div>
                            


                        </div>
                    </div>
                </div>
            
        
        </>
    )
}