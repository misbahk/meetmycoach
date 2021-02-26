
import './naav.css';

export default function Searchbar() {
    return (
      <div >
          <head>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

          </head>
          
          <div className="searchContainer">
          <i class="fa fa-bars  fa-lg searchIcon" aria-hidden="true"></i>
  <input className="searchBox" type="search" name="search" placeholder="Search for coaches"/>
  <i class="fa fa-search  fa-lg searchIcon"></i>
</div>
      
       
      
  
  
       
      </div>
    )
  }