import React from "react"
import ScrollableComponent from "react"
import "./CSS/header.css"
import logo from '../images/Group-6.png'

const Head = () => {
/*
  function Scrolling(prop){
    var elem = document.getElementById(prop);
    var ypos = elem.offsetTop;
    window.scrollTo(0,ypos-100);
  }
  /*window.addEventListener('scroll', Scool);
  
  function Scool(){
    var tab = ["Accueil","Presentation","Marque","Gallerie"];
    for(var i;i<tab.length;i++){
      tab[i][0] = document.getElementById(tab[i]).offsetTop;
      tab[i][1] = document.getElementById(tab[i]).offsetHeight/2+document.getElementById(tab[i]).offsetTop;
      console.log(tab[i][0]);
      console.log(tab[i][1]);
    }
  }*/
  

  return(
  <>
      <div class="header">
        <div style={{
          width:"100%",
          height:'60%',
          position:'relative',
          display:'flex',
          justifyContent:'center',
          alignItems:'flex-end',
        }}>
          <h1 style={{
            fontSize: '50px',
            display:'inline-block',
            letterSpacing: '2px',
            marginTop:'5px',
            fontFamily: 'Ibarra Real Nova',
            fontWeight:'normal'
          }}>GOÏTA</h1>
        </div>
        <div style={{
          height:'40%',
          width:'100%',
          display:'flex',
          justifyContent:'center',
        }}>
          <div style={{
            width:'60%',
            height:'100%',
            display:'flex',
          }}>
            <div className="menu">
              <a>NOUVELLES COLLECTION</a>
            </div>
            <div className="menu">
              <a>Inspiration</a>
            </div>
            <div className="menu">
              <a>Marque</a>
            </div>
            <div className="menu">
              <a>Création</a>
            </div>
            <div className="menu">
              <a>Contact</a>
            </div>
          </div>
        </div>
        <div style={{
          position:'absolute',
          left:'30px',
          height:'100%',
          display:'flex'
        }}>
          <img style={{
            height:'100%',
            width:'auto'
          }}
          src={logo}></img>
        </div>
      </div>
  </>
  )
}






export default Head