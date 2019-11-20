import React from "react"
import "./CSS/banniere.css"
import bann from  "../images/bann.png"

const Banniere = () => (
    <div style={{
        height:'600px',
        width:'100%',
        backgroundColor:'#252324',
        display:'flex',
        flexDirection:'row'
    }}>
        <div style={{
            height:'100%',
            width:'70%',
            display:'flex',
            alignItems:'center',
            justifyContent:'center'
        }}>
            <div style={{
                height:'70%',
                width:'700px',
                position:'relative',
            }}>
                <h1 style={{
                    position: 'absolute',
                    top:'0',
                    left:'0',
                    fontFamily: 'Didot',
                    fontStyle: 'normal',
                    fontWeight: 'bold',
                    fontSize: '200px',
                    lineHeight: '200px',
                    letterSpacing: '-3.4px',
                    color: '#FFFFFF',
                    
                }}>Kobba</h1>
                <h1 id="collection">NOUVELLE COLLECTION</h1>
                <div style={{
                    width:"1px",
                    height:"130px",
                    left:'0',
                    bottom:'0',
                    backgroundColor:'white',
                    position:'absolute'
                }}></div>
                <div style={{
                    width:"500px",
                    height:"1px",
                    left:'0',
                    bottom:'0',
                    backgroundColor:'white',
                    position:'absolute'
                }}></div>
                <div style={{
                    width:"500px",
                    height:"1px",
                    right:'0',
                    top:'0',
                    backgroundColor:'white',
                    position:'absolute'
                }}></div>
            </div>
        </div>
        <div style={{
            height:'100%',
            width:'30%',
            display:'flex',
            position:'relative',
        }}>
            <img style={{
                position:'absolute',
                top:0,
                left:0,
                width:'80%',
                height:'auto',

            }}
            src={bann}></img>
        </div>
    </div>


)

export default Banniere