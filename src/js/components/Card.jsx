import React from "react";

const Card = () => {
    return (
<div className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center mt-5">
        <div className="card m-2" >
        <img src="https://media.istockphoto.com/id/629391430/es/foto/la-matriz.jpg?s=612x612&w=0&k=20&c=0dS0i-51fO-H2liXOmTZYEl3uP9r7BdKIpSXDHLu5ck=" class="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Find out more</a>
        </div>
      </div>

</div>
        
    )
};


export default Card