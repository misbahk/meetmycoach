

import left from './Images/Group.svg';
import ema from './Images/ema.svg';
import righttriangle from './Images/righttriangle.svg';
import meetmy from './Images/MeetMyCoachLogo.svg'
import './Styles/pag4.css';



export default function Page7() {
    return (
        <>
       
       
               <nav style={{backgroundColor:"#ffff"}}
                        class="navbar navbar-light ">
                    <a class="navbar-brand" href="#">
                        <img src={meetmy}
                    style={{  width:"3rem" ,height:"2rem" }}/>

                    </a>

                     <a className="backtohome" style={{marginRight:30 }}>BACK TO HOME</a>


                </nav>
                <div className="lin">
                   <div class="container-fluid" >
                       <div class="row" >
                           <div class="col-6 offset-md-1" style={{marginTop:80}}>
                               <div className="recover">Recover our password </div> <br/>
                              

                           </div>
                           <div class="col-2">
                               <p style={{color:'white',marginTop:100}}>Back to Sign In</p>
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
                        <div class="col-3 offset-md-2 bx1" style={{position:'relative',top:-60}}>
                            <br/>
                            <center>
                            Provide the email you registered with
                            </center>
                            <br/>
                            <center >
                                <input placeholder="Email" 
                                style={{marginTop:20,width:"75%",backgroundColor:"#F1F3F6",border: "1px solid #2DABFF30",borderRadius: "5px"}}/>
                                
                            </center>
                            <br/>
                            <center>
                                <button 
                                style={{color:'white', marginTop:20,width:"75%",backgroundColor:"#FF8E31",borderRadius: "5px",border:"#FF8E31",marginBottom:30}}>PROCEED</button>
                            </center>
                            
                            
                            
                            


                        </div>
                    </div>
                </div>
            
        
        </>
    )
}