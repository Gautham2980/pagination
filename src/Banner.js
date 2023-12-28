import React from "react";


function Banner(){
    return(
        <div>



        <section id="banner-section">
       <div className="banner-container">
           <div className="banner-row">
               <div className="banner-col">
                   <h1 className="banner-head">Better Solutions For Your Business</h1>
                   <p className="banner-para">We are team of talented designers making websites with Bootstrap</p>
                   <div className="flex">
                   <div className="button-div">
                   <button className="banner-button">Get Started</button>
                   </div>
                   <div className="play">
                       <div>
                           <i className="fa fa-play-circle" aria-hidden="true"></i>
                   </div>
                   <p className="watch">Watch Video</p>
                   </div>
               </div>
               </div>

               <div className="banner-col2">
                   <div className="banner-image">
                       <img src="images/hero-img.png" alt="" />

                   </div>

               </div>

           </div>

       </div>

   </section>
   </div>
    )
}

export default Banner