

import { useState } from "react";

const Collapsable = props => {

// const [btnState, SetBtnState] = useState(false);

// const handleState () =>{
//   SetBtnState(btnState => !btnState);
// }

// let toggleState = btnState ? "open" : "close";
 
  return (
    <>
      <div className="containerCollapsable">
        <button
          className="containerCollapsable__btn close"
          id="btn"
          onClick={props.onClick}
          //handleState={handleState}
         // onChange={status}
        >
          {/* <img
            className="containerCollapsable__img"
            src={open}
            alt="ver texto articulos entidad"
            title="desplegar o cerrar texto"
          /> */}
        </button>
      </div>
    </>
  );
};

export default Collapsable;


  // const openBtn = () => {
  //   document.getElementsById("btn").className.toggle("open");
  //   console.log("is working");
   
  // }

  // document.getElementsById("btn").onClick = function () {
  //   openBtn();
  // }




