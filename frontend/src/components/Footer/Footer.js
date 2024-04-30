import React, {useState} from 'react';

function Footer () {

    return(

<div
        className="d-flex justify-content-around align-items-center p-3 text-white"
        style={{ backgroundColor: "#87ccf5" }}
      >
        <div>
          <h2 style={{ fontWeight: "bold" }}>
            Join our newsletter to stay up to date
          </h2>
          <h6>Staty connected with Ratnam Hospital</h6>
        </div>
        <div className="d-flex justify-content-around align-items-center gap-3">
          {/* make it fully rounded */}
          <div className="d-flex justify-content-around align-items-center gap-3 bg-white p-2 rounded">
            
            <input
              type="email"
              placeholder="Enter your email"
              className="border-0"
            />
          </div>
          <button className="btn btn-dark">Subscribe</button>
        </div>
      </div>

)
  
   
}
export default Footer;