import React from 'react';
import  ReactDOM from 'react-dom';
import "./index.css";
import pic15 from "../src/images/homebanner.png";
import pic16 from "../src/images/clients/Product Launch.JPG";
import ceo from "../src/images/team/Saurabh Bhosale photo.jpg";
import team1 from "../src/images/team/team-1.jpeg";
import team2 from "../src/images/team/team-2.jpg";
import team3 from "../src/images/team/team-3.jpg";
import team4 from "../src/images/team/team-4.JPG";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';;

const img1 ="https://picsum.photos/200/50" ;

ReactDOM.render(
<>

  <div> 
   <img src= {pic15}  alr="about banner"/>
    <div className='about_bt'>
      <h4> STARKTECH</h4>
        <div class="container">
          <div class="row">
            <div class="col">
             <p>STARKTECH is an Agritech startup focused on the manufacturing Innovative Poultry farming hi-tech equipment’s aims to Empowering the poultry industry through High-tech technologies. We're working to bring about an Agritech Revolution in Indian Boiler Poultry Industry</p>
              </div>
                 <div class="col">
                  
                </div>
              <div class="col">
                
            </div>
          </div>
        </div>
     
    </div>
  </div>
  
  <div>
   <div className="card">
    <div className="card-header">
      <> 
        <h1 className='text-center'>ABOUT STARKTECH</h1>
        </> 
      </div>
       <div className="card-body">
        <h5 className='text-center'> Overview</h5>
          <p className='text-center'>We Starktech Agritech Startup incorporated Oct 2022, as Starktech Ventures Pvt. Ltd. We solve the poultry industry's various problems likes, Waste management, Manure management, Floor Management, Ventilation, and Power generation. We working on developing sustainable and affordable equipment by providing marvelous services.</p>
          <p className='text-center'>Mainly company focused on manufacturing Innovative & hi-tech Poultry farming equipment’s. we have a manufacturing domain with expertise in IOT, Automation and controlling, AI, Machine Learning, Robotics, Blockchain, etc
                                     We aim to Empower the poultry industry by providing High tech technologies. Starktech has always believed in giving high-quality products with increasing productivity and efficiency at the farm level. Starktech follows four core values Innovation, Quality, Trust, and Accountability which adds value to Indian farmer like Functional, Physical, Social as well as Monetary value.</p>
      </div>
    </div>
  </div>

  <div className="card mb-3" >
  <div className="row g-0">
    <div className="col-md-6">
      <img src={pic16} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-6">
      <div className="card-body">
        <h4 className="cad-title">State-of-the art R&D</h4>
        <p className="card-text">Our advanced R&D facilities help provide cutting-edge and innovative technology solutions to farmers across the India.</p>
        
      </div>
    </div>
  </div>
</div>


<div class="container">
  <div class="row">
    <div class="col order-last">
     <img src={pic16} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col">
     <h4 className="cad-title">World-class manufacturing</h4>
     <p className="card-text">With robust manufacturing facilities across 8 countries around the globe, we raise the bar on excellence in quantity and quality every year.</p>
    </div>
    
  </div>
</div>

<div className="card mb-3" >
  <div className="row g-0">
    <div className="col-md-6">
      <img src={pic16} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-6">
      <div className="card-body">
        <h4 className="cad-title">Unparalleled quality</h4>
        <p className="card-text">At the forefront of Mahindra is it's dedication to quality. We are the world’s first and only tractor manufacturer to win the prestigious Japan Quality Medal and Deming Application Prize</p>
        
      </div>
    </div>
  </div>
</div>
  

 <h5 className='text-center'>OUR LEADERSHIP</h5> 
 <h1 className='text-center'>Bringing Expertise Together</h1>

<div class="container">
  <div class="row">
    <div class="col">
     <div>
      <img src={ceo} className="img-fluid rounded-start" alt="..."/> 
      <h2 className='text-center'>MR.Shubham Bhosale</h2> 
      <h5 className='text-center'>Chairman, Staktech Group</h5>
     </div>
    </div>
    <div class="col order-1">
     <div>
      <img src={team1} className="img-fluid rounded-start" alt="..."/>
      <h5 className='text-center'> Overview</h5>
      <h5 className='text-center'>MD & CEO, Staktech Group</h5>
     </div>
    </div>
    <div class="col order-2">
     <div>
      <img src={team2} className="img-fluid rounded-start" alt="..."/>
      <h5 className='text-center'> Overview</h5>
      <h5 className='text-center'>Executive Director and CEO -  Farm Sector</h5>
     </div>
    </div>
    <div class="col order-3">
      <div>
       <img src={team3} className="img-fluid rounded-start" alt="..."/>
       <h5 className='text-center'> Overview</h5>
       <h5 className='text-center'>President - Farm Equipment Sector</h5>
      </div>
    </div>
    <div class="col order-4">
      <div>
        <img src={team4} className="img-fluid rounded-start" alt="..."/>
        <h5 className='text-center'> Overview</h5>
        <h5 className='text-center'> Overview</h5>
      </div>
    </div>
  </div>
</div>
    
</>
,
 
document.getElementById("root"));
 