import Searchbar from './searchbar';
import Joinascoach from '../components/landingpagebuttons/joinascoach';
import Findacoach from '../components/landingpagebuttons/findacoach';
import Login from '../components/landingpagebuttons/login';
import How from '../components/landingpagebuttons/howitworks';
import Search1 from '../components/landingpagebuttons/searchbar1';

export default function Navbar() {
    return (
      <div >
          <nav className="navbar navbar-expand-lg ">
  <div className="container-fluid">
    <a className="navbar-brand" href="#" style={{color:'black'}}> MeetMyCoach</a>
    
    
    <form className="d-flex lg-6">
      {/* <input className="form-control me-2" type="search" placeholder="Search for coaches" aria-label="Search"/>
      <button ><i class="fa fa-search"></i></button> */}
      {/* <Searchbar/> */}
      <Search1/>

    </form>
   
    <div className="collapse navbar-collapse" id="navbarSupportedContent">

      <ul className="navbar-nav me-auto mb-lg-0">
          
     </ul>
     
     
     <ul className="navbar-nav">
        <li className="nav-item">
          <How/>
        </li>
        <li className="nav-item" style={{marginRight:10}}>
         
         <Findacoach/>
        </li>
        <li className="nav-item" >
        <Joinascoach/>
          
        </li>
        <li className="nav-item" style={{marginRight:10}}>
          <Login/>
        </li>
        </ul>
      
    </div>
    

  </div>
</nav>
       
      
  
  
       
      </div>
    )
  }