import {  useEffect } from 'react';
import './products.css';
const Low_light_plant = () =>{
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            entry.isIntersecting
                ? entry.target.classList.add('show')
                : entry.target.classList.remove('show');
        });
    });

    document.querySelectorAll('.carousel, .animation_text, .main_card, .animate, .text1').forEach(el => {
        observer.observe(el);
    });

    return () => observer.disconnect();
}, []);
  return (
    <>
        {/* Product Section */}
        <div className="text1">
      <div className="title_text1">
       <h3>Low-Light Plants</h3>
      <p className="text2">These plants are all known for thriving in environments with minimal natural sunlight.</p>
      </div>
      </div>
    
      <div className="animate">
   <div className="main_card">
     <div className="card">
       <img src="./src/img/1737037680903.jpg"alt="Card Image"/>
       <h4>Coleus </h4>
       <p> Survives in low light and adds vibrant color to any space.
         <br></br><br></br>
         Price:₹50-₹400
       </p>  
     </div>
     <div className="card">
       <img src="./src/img/1737037680892.jpg" alt="Card Image"/>
       <h4>Dracaena</h4>
       <p> Does well in low light and is known for its attractive, variegated leaves.
         <br></br><br></br>
         Price:₹50-₹400
       </p>  
     </div>
     <div className="card">
                    <img src="./src/img/1735478385943.jpg" alt="Card Image"/>
                    <h4>Snake Plant (Sansevieria)</h4>
                    <p>Removes toxins from the air and releases oxygen at night <br></br><br></br>
          Price:₹549-₹999
        </p>  
      </div>
     
     <div className="card">
       <img src="./src/img/1737037680872.jpg" alt="Card Image"/>
       <h4> Cast Iron Plant (Aspidistra elatior)
       </h4>
       <p> Extremely resilient and tolerates low-light environments.
         <br></br><br></br>
         Price:₹1000-₹4500
       </p>  
     </div>
     </div>
     <div className="main_card">
     <div className="card">
       <img src="./src/img/1737037680882.jpg" alt="Card Image"/>
       <h4>Pothos (Epipremnum aureum)</h4>
       <p>Grows well in low light and purifies indoor air.
         <br></br><br></br>
         Price:₹50-₹185
       </p>  
     </div>
      <div className="card">
                        <img src="./src/img/1735634856889.jpg" alt="Card Image"/>
                        <h4>ZZ Plant (Zamioculcas zamiifolia)</h4>
                        <p>Known for its glossy, dark green leaves and tolerance to low light conditions.<br/><br/>Price: ₹449-₹699</p>
                    </div>
                <div className="card">
                  <img src="./src/img/1738393329601.jpg" alt="Card Image"/>
                  <h4>Swiss Cheese Plant (Monstera adansonii)</h4>
                  <p>  While it prefers bright indirect light, it can adapt to lower light conditions.
                  <br></br><br></br>
                    Price:₹150-₹1000
                  </p>  
                </div>
                <div className="card">
                        <img src="./src/img/1735638044142.jpg" alt="Card Image"/>
                        <h4>Spider Plant (Chlorophytum comosum)</h4>
                        <p>An easy-to-grow plant with arching leaves and air-purifying capabilities.<br/><br/>Price: ₹439-₹579</p>
                    </div>
                </div>
    <div className="main_card">
       <div className="card">
         <img src="./src/img/3329a336.jpg"alt="Card Image"/>
         <h4>Bird’s Nest Fern (Asplenium nidus)</h4>
         <p> Prefers low to medium light and adds a lush,tropical feel.
           <br></br><br></br>
           Price:₹200-₹2000
         </p>  
       </div>
         
       <div className="card">
         <img src="./src/img/1738393329592.jpg" alt="Card Image"/>
         <h4>Heartleaf Philodendron</h4>
         <p>A vining plant with heart-shaped leaves that thrives in lower light.
         <br></br><br></br>
           Price:₹100-₹599
         </p>  
     
       
       </div>
       <div className="card">
         <img src="./src/img/1738393329584.jpg" alt="Card Image"/>
         <h4>Chinese Evergreen (Aglaonema)</h4>
         <p>A beautiful plant that thrives in low light and adds color to indoor spaces.
         <br></br><br></br>
           Price:₹199-₹500
         </p>  
       
       </div>
       <div className="card">
                    <img src="./src/img/1735478385904.jpg" alt="Card Image"/>
                    <h4>Peace Lily (Spathiphyllum)</h4>
                    <p>Improves air quality and adds an elegant touch with its white flowers.<br/><br/>Price: ₹549-₹999</p>
                </div>
       </div>
                
</div>
    </>
  );
}
export default Low_light_plant;