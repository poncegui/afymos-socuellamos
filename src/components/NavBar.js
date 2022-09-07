import React, { useState } from 'react'
import styled from 'styled-components'
import logo from "../logos/logo-afymos.png";
import BurguerBtn from './BurguerBtn'

function Navbar() {

  const [clicked, setClicked] = useState(false)
  const handleClick = () => {
    //cuando esta true lo pasa a false y vice versa
    setClicked(!clicked)
  }
  return (
    <>
      <NavContainer>
        <h2>Menú <span>Principal</span></h2>
        <div className={`links ${clicked ? 'active' : ''}`}>
        {/* <img className='hidden' src={logo} alt="logo Afymos"/> */}
          <a onClick={handleClick} href="#h">Nosotros</a>
          <a onClick={handleClick} href="#h">Diversidad</a>
          <a onClick={handleClick} href="#h">Servicios</a>
          <a onClick={handleClick} href="#h">Programas</a>
          <a onClick={handleClick} href="#h">Donaciones</a>
        </div>
        <div className='burguer'>
          <BurguerBtn clicked={clicked} handleClick={handleClick} />
        </div>
        <BgDiv className={`initial ${clicked ? ' active' : ''}`}></BgDiv>
      </NavContainer>
    </>
  )
}

export default Navbar

const NavContainer = styled.nav`


  h2{
    color:pink;
    font-weight: 400;
    span{
      font-weight: bold;
    }
  }
  padding: .4rem;
//   background-color: #333;
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a{
    color: white;
    text-decoration: none;
    margin-right: 1rem;
  }
  .links{
    background-color: #000;
    border-radius: 0 0 90% 0;
    padding: 80px;
    position: absolute;
    
    top: -700px;
    left: -2000px;
    right: 0;
    padding-top:10px;
    text-align: center;
    transition: all .5s ease;
    a{
      color: white;
      font-size: 1.5rem;
      display: block;
    }
    @media(min-width: 768px){
      position: initial;
      margin: 0;
      a{
        font-size: 0.8rem;
        color: white;
        display: inline;
      }
      display: block;
    }
  }
  .links.active{
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
  
    top: 28%;
    left: 0;
    right: 0;
    text-align: center;
    a{
        
      font-size: 1.5rem;
      margin-top: 0.8rem;
      color: white;
    }
  }
  .burguer{
    @media(min-width: 768px){
      display: none;
    }
  }
`

const BgDiv = styled.div`
  background-color: #222;
  position: absolute;
  top: -1000px;
  left: -1000px;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: all .6s ease ;
  
  &.active{
    border-radius: 0 0 80% 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
 
  }
`