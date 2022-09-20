

import { Link } from "react-router-dom";

const ProfileChart = props =>{


  return (
    <>
  
    <div class="card">
        <div class="face front">
            <img src={props.src} alt=""/>
            <h3>{props.position}</h3>
        </div>
        <div class="face back">
            <h3>{props.name}</h3>
            <p>{props.profession}</p>
            <div class="link">
            <a href={props.href} alt="Facebook" target="_blank" >
              <i className="fa-brands fa-facebook"></i>
            </a>
            </div>
        </div>
    </div> 
   
    </>
  );
}

export default ProfileChart;