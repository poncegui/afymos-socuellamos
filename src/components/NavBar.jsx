import React, { useState } from 'react'
import {Link} from 'react-router-dom';
import styled from 'styled-components'
import logo from "../logos/logo-afymos.png";
import BurguerBtn from './BurguerBtn'
import Header from './Header';

function Navbar() {

  const [clicked, setClicked] = useState(false)
  const handleClick = () => {
    //cuando esta true lo pasa a false y vice versa
    setClicked(!clicked)
  }
  return (
    <>
      <NavContainer id="menu-principal">
        <h2>Menú <span>Principal</span></h2>
        <div className={`links ${clicked ? 'active' : ''}`}>
        {/* <img className='hidden' src={logo} alt="logo Afymos"/> */}
          <a onClick={handleClick} href="#aboutUs">nosotros</a>
          <a onClick={handleClick} href="#h">diversidad</a>
          <a onClick={handleClick} href="#h">servicios</a>
          <a onClick={handleClick} href="#h">programas</a>
          <a onClick={handleClick} href="#h">donaciones</a>
          <Link onClick={handleClick} to='/contacto'>contacto</Link>
        </div>
        <div className='burguer'>
          <BurguerBtn clicked={clicked} handleClick={handleClick} />
        </div>
        <BgDiv className={`initial ${clicked ? ' active' : ''}`}></BgDiv>
      
      </NavContainer>
      <Header/>
    </>
  )
}

export default Navbar

const NavContainer = styled.nav`

height: 150px;
width:100%;

z-index: 50;

  h2{
    color:pink;
    font-weight: 400;
    margin-left: 15px;
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
    margin-right: 1.5rem;
  }
  .links{
 
    position: absolute;
    
    top: -700px;
    left: -2000px;
    right: 0;
  
    text-align: center;
    transition: all .5s ease;
    a{
      color: white;
      font-size: 2rem;
      display: block;
    }
    @media(min-width: 768px){
      position: initial;
      margin: 0;
      a{
        font-size: 1.5rem;
        color: white;
        display: inline;

        &:hover {
          font-size: 2rem;
          font-weight: bold;
          transition: all 0.5s ease-out;
  
        }
      }
      display: block;
    }
  }
  .links.active{
    background-color: #000;
    border-radius: 0 0 90% 0;
    padding: 80px;
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    padding-top:10px;
    top: 150px;
    left: 0;
    right: 0;
    text-align: center;

    a{
        
      font-size: 1.6rem;
      margin-top: 0.8rem;
      color: pink;
      cursor: pointer;

      &:hover {
        font-size: 2rem;
        font-weight:bold;
        transition: all 0.5s ease-out;

      }
    }

    @media(min-width: 768px){
   
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