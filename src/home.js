

import Foot from './footer1/foot';
import Navbar from './navbarnew/nav';
import Time from './timeline/time';

import Enteremail from './components/landingpagebuttons/enteruremail';
import Signup from './components/landingpagebuttons/signupbtn';
import './Styles/ab.css';
import beautiful from './Images/beautiful.png';
import becca from './Images/becca.png';

import bg2x from './Images/bg@2x.png';
import bigleft from './Images/bigleft.svg';
import bigright from './Images/bigright.svg';
import bussiness from './Images/bussiness.png';
import check from './Images/check.svg';
import dash from './Images/dash.png';
import facebook from './Images/facebook.svg';
import finance from './Images/finance.png';
import fitness from './Images/fitness.png';
import food from './Images/food.png';
import football from './Images/football.png';
import globe from './Images/globe.svg';
import Group from './Images/Group.svg';
import insta from './Images/insta.svg';
import linkdn from './Images/linkdn.svg';
import logo2 from './Images/logo2.svg';
import message from './Images/message.svg';
import pet from './Images/pet.png';
import photography from './Images/photography.png';
import righttriangle from './Images/righttriangle.svg';
import search from './Images/search.svg';
import smalleft from './Images/smalleft.svg';
import success from './Images/success.png';
import technology from './Images/technology.png';
import twitter from './Images/twitter.svg';
import university from './Images/university.png';









export default function Home(props) {
  return (
    <div >
     
      <script src='https://kit.fontawesome.com/a076d05399.js'></script>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous"></link>
        
       
     
      <Navbar/>
      {/* <div style={{backgroundColor:"#FF8E3133" ,height:"650px"}}> */}
      <div className="title1">
      <div class="container-fluid">
          <div class="row" >
            <div class="col-1">
              <img 
              src={righttriangle}
              style={{marginTop:350}}
              width={100}
              height={50}/>
            </div>
            <div class="col-1">
              <img src={righttriangle}
              style={{marginTop:335}}/>
            </div>

            <div class="col-md-4 " style={{marginTop:"75px"}}>
              <div style={{display:"inline"}}>
                <button className="new">New</button>New feature available for communication with coaches 
              </div>
              <div className="lefttriangle">
                <img src={Group}/>

              </div>
             
              <div className="card2">
        <div class="">
          <div class="row">
            <div class="col-10">
              <p className="orange">Find Coaches</p>
              <p style={{marginLeft:"5%"}}>I am looking for somebody to coach me</p>
              </div>
              <div class="col-2"> <i class="fa fa-arrow-right rightarrow" aria-hidden="true"></i></div>
          </div>
        </div>
      </div>

      <div className="card2">
        <div >
          <div class="row">
            <div class="col-10">
              <p className="orange">Find Coaching Jobs</p>
              <p style={{marginLeft:"5%"}}>I am a coach and looking for new opportunities</p>
              </div>
              <div class="col"> <i class="fa fa-arrow-right rightarrow" aria-hidden="true"></i></div>
          </div>
        </div>
      </div>

      <div className="card2">
        <div class="">
          <div class="row">
            <div class="col-10">
              <p className="orange">Post a job</p>
              <p style={{marginLeft:"5%"}}>I am an employer and looking for coach</p>
              </div>
              <div class="col-2"> <i class="fa fa-arrow-right rightarrow" aria-hidden="true"></i></div>
          </div>
        </div>
      </div>


           

              

              
            </div>
           


            <div class="col-2 ">
              <img src={Group}
              style={{marginTop:"400px",marginLeft:"150px"}}
              width={50}/>

            </div>


            <div class="col-md-1">
            <div className="imgborder">
                 <img src={beautiful}
              width={120}
              height={150}/> 
              <div className="imgbelowtxt">RELATIONSHIP</div>
              </div>

              <div className="imgborder">
                 <img src={becca}
              width={120}
              height={150}/> 
              <div className="imgbelowtxt">COOKING</div>
              </div>

              <div className="imgborder">
                 <img src={bussiness}
              width={120}
              height={150}/> 
              <div className="imgbelowtxt">BUSSINESS</div>
              </div>

                

              <div className="imgborder">
                 <img src={football}
              width={120}
              height={150}/> 
              {/* <div className="imgbelowtxt">FITNESS</div> */}
              </div>    
             
           
            </div>

            <div class="col-md-1" style={{marginLeft:40}}>
            
              <div  className="imgborder">
                <img src={finance}
              
                    width={120}
                    height={100}/>
                <div className="imgbelowtxt">FINANCE</div>

              </div>

              <div  className="imgborder">
                <img src={technology}
              width={120}
              height={200}/>
               <div className="imgbelowtxt">TECHNOLOGY</div>
               </div>

              
               <div className="imgborder">
                 <img src={fitness}
              width={120}
              height={150}/> 
              <div className="imgbelowtxt">FITNESS</div>
              </div> 

              <div className="imgborder">
                 <img src={photography}
              width={120}
              height={150}/> 
              <div className="imgbelowtxt">FITNESS</div>
              </div>

                
             
           
            </div>

            <div class="col-md-1 " style={{marginLeft:40}}>
            <div className="imgborder">
                 <img src={food}
              width={120}
              height={150}/> 
              <div className="imgbelowtxt">FITNESS</div>
              </div>

              <div className="imgborder">
                 <img src={university}
              width={120}
              height={150}/> 
              <div className="imgbelowtxt">YOUTH</div>
              </div>

              <div className="imgborder">
                 <img src={pet}
              width={120}
              height={150}/> 
              <div className="imgbelowtxt">PET CARE</div>
              </div>

             
              <div className="imgborder">
                 <img src={success}
              width={120}
              height={150}/> 
              {/* <div className="imgbelowtxt">FITNESS</div> */}
              </div>    
             
           
            </div>
          </div>
      </div>

      </div>

      {/* second  row  */}
      <div class="container" style={{padding:50}}>
        <h6 style={{color: "#FF8E31"}}>OUR STELLAR COACHES AWAIT YOU</h6>
        <div class="row" style={{marginTop:25}}>
          <div class="col-5">
            <h2>Find the right coach who helps you transform</h2>
          </div>
          <div class="col-1 offset-md-4" style={{marginTop:30}}>
            <img 
            src={bigleft}
            height={50}
            width={50}
            
            />
            </div> 

            <div class="col-1"  style={{marginTop:30}}>
            <img 
            src={bigright}
            height={50}
            width={50}
            />
            </div> 
        </div>

      </div>
      <div class="container-fluid" >
        <div class="row">
          <div class="col-2 offset-md-2" >
            <div style={{height:30,width:200,backgroundColor:"white",position:"relative",top:220,right:40}}>Douglas Anderson</div>
            <div className="imgshadow">
              <img src={bussiness} style={{height:250,width:230 }}/>
              </div>
          </div>
          <div class="col-2  offset-md-1">
          <div style={{height:30,width:200,backgroundColor:"white",position:"relative",top:220,right:40}}>Douglas Anderson</div>
          <div className="imgshadow">
              <img src={success} style={{height:250,width:230 }}/>
              </div>
          </div>

          <div class="col-2  offset-md-1">
          <div style={{height:30,width:200,backgroundColor:"white",position:"relative",top:220,right:40}}>Douglas Anderson</div>
            <div className="imgshadow">
              <img src={bussiness} style={{height:250,width:230 }}/>
              </div>

          </div>
        </div>
      </div>
      <div class="container" style={{padding:50}}>
        <div class="row">
          <div class="col-2">
            <img src={logo2} style={{height:250,width:200 }}/>

          </div>
          <div class="col-3 offset-md-7" style={{marginTop:50}}>
            <h3>AND 2,300+ OTHERS</h3>
          </div>
        </div>
      </div>

      <div class="container" style={{padding:50}}>
        <p className="lookingtocoach">Looking to coach ? <strong style={{color:"#FF8E31"}}>Start now!</strong></p>
        <div class="row">
          <div class="col-2">
            <img src={check}/>
            <label>FREE 30-DAY TRAIL</label>
          </div>
          <div class="col-3">
            <img src={check}/>
            <label>FLEXIBLE PLANS VIEW PRICING</label>
          </div>
          <div class="col-3">
            <img src={check}/>
            <label>NO CREDIT CARD REQUIRED</label>
          </div>
        </div>
        <div class="row " style={{marginTop:30}}>
          <div class="col-6">
            <div style={{display:'flex',flexDirection:'row'}}>
              <div style={{marginTop:5}}>
                <Enteremail />
              </div>
               
                 <Signup/>
                 
            </div>
          </div>
        </div>

      </div>

      <div class="container-fluid">
        <div class="row">
          <div class="col-6"  >
            <div style={{ left:-180,position:"relative"}}>
              <img src={dash}
            width={900}
            height={750}
            
            />
            </div>

          </div>
          <div class="col-6" >
            <h4 style={{marginLeft:80}}>A much needed platform <br/>for coaches, built by coaches</h4>
            <Time/>
           

           

          </div>

         </div>
         </div>
         

      <div className="">
        <div class="container" style={{padding:50}}>
          
        </div>
      </div>
        
        <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
       
          <div className="lineback">
            <div class="container"  style={{padding:50}}>
            <h3 className="trendingskills">Explore <strong style={{color:"#FF8E31"}} >trending skills</strong></h3>
              <p>Stay up to date on what's happening in technology, leadership, skill development and more.</p>
              <div class="row" style={{marginTop:40}}>
                <div class="col-3">
                  <div className="whitebx"><p style={{textAlign:'center',padding:5}}>Account & Bookkeeping +</p></div>
                </div>
                <div class="col-3">
                  <div className="whitebx"><p style={{textAlign:'center',padding:5}}>Cryptocurrency & Blockchain+</p></div>
                </div>
                <div class="col-3">
                  <div className="whitebx"><p style={{textAlign:'center',padding:5}}>Team Management +</p></div>
                </div>
                <div class="col-3">
                  <div className="whitebx"><p style={{textAlign:'center',padding:5}}>Mental Fitness +</p></div>
                </div>
              </div>

              <div class="row" style={{marginTop:20}}>
                <div class="col-4">
                  <div className="whitebx"><p style={{textAlign:'center',padding:5}}>Team Management +</p></div>
                </div>
                <div class="col-2">
                  <div className="whitebx"><p style={{textAlign:'center',padding:5}}>Mental Fitness+</p></div>
                </div>
                <div class="col-3">
                  <div className="whitebx"><p style={{textAlign:'center',padding:5}}>Team Management +</p></div>
                </div>
                <div class="col-2">
                  <div className="whitebx"><p style={{textAlign:'center',padding:5}}>Mental Fitness +</p></div>
                </div>
              </div>

              <div class="row" style={{marginTop:20}}>
                <div class="col-3">
                  <div className="whitebx"><p style={{textAlign:'center',padding:5}}>Account & Bookkeeping +</p></div>
                </div>
                <div class="col-4">
                  <div className="whitebx"><p style={{textAlign:'center',padding:5}}>Cryptocurrency & Blockchain+</p></div>
                </div>
                <div class="col-3">
                  <div className="whitebx"><p style={{textAlign:'center',padding:5}}>Team Management +</p></div>
                </div>
                <div class="col-2">
                  <div className="whitebx"><p style={{textAlign:'center',padding:5}}>Mental Fitness +</p></div>
                </div>
              </div>

              <div class="row" style={{marginTop:20}}>
                <div class="col-4">
                  <div className="whitebx"><p style={{textAlign:'center',padding:5}}>Team Management +</p></div>
                </div>
                <div class="col-2">
                  <div className="whitebx"><p style={{textAlign:'center',padding:5}}>Mental Fitness+</p></div>
                </div>
                <div class="col-3">
                  <div className="whitebx"><p style={{textAlign:'center',padding:5}}>Team Management +</p></div>
                </div>
                <div class="col-2">
                  <div className="whitebx"><p style={{textAlign:'center',padding:5}}>Mental Fitness +</p></div>
                </div>
              </div>

              <div class="row " style={{marginTop:20}}>
                <div class="col-3">
                  <div className="whitebx"><p style={{textAlign:'center',padding:5}}>Pre-School Teaching +</p></div>
                </div>
                <div class="col-2">
                  <div className="whitebx"><p style={{textAlign:'center',padding:5}}>Mental Fitness+</p></div>
                </div>
                <div class="col-3">
                  <div className="whitebx"><p style={{textAlign:'center',padding:5}}>Team Management +</p></div>
                </div>
                
              </div>
              <div class="row">
                <div class="col">
                  <p className="otherskills">and 274 other skills {'>'} </p>
                </div>
              
              </div>
              <div class="row">
                <div class="col-1 offset-md-11">
                  <img src={Group}/>

                </div >
              </div>
            </div>
          </div>
          <div >
            <img src={bg2x}
                width={500}
                height={600}/>
            </div>
            

          

          
         

          

        </div>

       
       
       
       <Foot/>
      

     
    </div>
  )
}
