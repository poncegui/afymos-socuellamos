import { useState } from "react";
import * as React from 'react';


// import 'glider-js/glider.min.css';
// import Glider, { GliderMethods } from 'react-glider';



// const PaneExample: React.FC<PaneProps> = ({ children, style, className }) => (
//   <div className={`glider-slide ${className}`} style={style}>
//     <h1>{children}</h1>
//   </div>
// );

// const example = () => {
//   const gliderRef = React.useRef<GliderMethods>(null);

//   return (
//     <>
//       <button onClick={() => gliderRef.current?.destroy()}>Destroy!</button>

//       <Glider ref={gliderRef}>
//         <PaneExample>1</PaneExample>
//         <PaneExample>2</PaneExample>
//         <PaneExample>3</PaneExample>
//         <PaneExample>4</PaneExample>
//       </Glider>
//     </>
//   );
// };















































// const GliderShow = (props) => {
// //   import img1 from "../slidesImages/img1.png";
// // import img2 from "../slidesImages/img2.png";
// // import img3 from "../slidesImages/img3.png";
// // import img4 from "../slidesImages/img4.png";
// // import img5 from "../slidesImages/img5.png";
// // import img6 from "../slidesImages/img6.png";
// // import img7 from "../slidesImages/img7.png";
// // import img8 from "../slidesImages/img8.png";
// // import img9 from "../slidesImages/img9.png";
//   window.addEventListener("load", function () {
//     new Glider(document.querySelector(".carousel__lista"), {
//       slidesToShow: 1,
//       slidesToScroll: 1,
//       dots: ".carousel__btns",
//       arrows: {
//         prev: ".carousel__prev",
//         next: ".carousel__next",
//       },
//       responsive: [
//         {
//           // screens greater than >= 775px
//           breakpoint: 450,
//           settings: {
//             // Set to `auto` and provide item width to adjust to viewport
//             slidesToShow: 2,
//             slidesToScroll: 2,
//           },
//         },
//         {
//           // screens greater than >= 1024px
//           breakpoint: 800,
//           settings: {
//             slidesToShow: 4,
//             slidesToScroll: 4,
//           },
//         },
//       ],
//     });
//   });

//   return (
//     <>
//       <div className="contenedor">
//         <main className="contenido-principal">
//           <img
//             src={img1}
//             alt="Dome of the German Bundestag"
//             className="contenido-principal__imagen"
//           />
//           <div className="contenido-principal__contenedor">
//             <h1 className="contenido-principal__titulo">
//               Dome of the German Bundestag
//             </h1>
//             <p className="contenido-principal__resumen">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a
//               commodo orci. Nulla ipsum ante, auctor a odio id, bibendum
//               accumsan mauris.
//             </p>
//             <p className="contenido-principal__resumen">
//               Fusce malesuada mollis ante, at elementum mi maximus nec. Praesent
//               volutpat, tortor sed condimentum sagittis, mi diam fringilla nibh.
//             </p>
//           </div>
//         </main>

//         <div className="carousel">
//           <div className="carousel__container">
//             <button aria-label="Anterior" className="carousel__prev">
//               <i class="fa-solid fa-chevron-left"></i>
//             </button>

//             <div className="carousel__lista">
//               <div className="carousel__element">
//                 <img src={img1} alt="Galería de fotos Afymos" />
//                 <p>Galería de fotos Afymos</p>
//               </div>
           

//             <div className="carousel__element">
//               <img src={img2} alt="Galería de fotos Afymos" />
//               <p>Galería de fotos Afymos</p>
//             </div>

//             <div className="carousel__element">
//               <img src={img3} alt="Galería de fotos Afymos" />
//               <p>Galería de fotos Afymos</p>
//             </div>

//             <div className="carousel__element">
//               <img src={img4} alt="Galería de fotos Afymos" />
//               <p>Galería de fotos Afymos</p>
//             </div>

//             <div className="carousel__element">
//               <img src={img5} alt="Galería de fotos Afymos" />
//               <p>Galería de fotos Afymos</p>
//             </div>

//             <div className="carousel__element">
//               <img src={img6} alt="Galería de fotos Afymos" />
//               <p>Galería de fotos Afymos</p>
//             </div>

//             <div className="carousel__element">
//               <img src={img7} alt="Galería de fotos Afymos" />
//               <p>Galería de fotos Afymos</p>
//             </div>

//             <div className="carousel__element">
//               <img src={img8} alt="Galería de fotos Afymos" />
//               <p>Galería de fotos Afymos</p>
//             </div>

//             <div className="carousel__element">
//               <img src={img9} alt="Galería de fotos Afymos" />
//               <p>Galería de fotos Afymos</p>
//             </div>
//             </div>

//             <button aria-label="Siguiente" className="carousel__next">
//               <i class="fa-solid fa-chevron-right"></i>
//             </button>
//           </div>

//           <div role="tablist" className="carousel__btns"></div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default GliderShow;
