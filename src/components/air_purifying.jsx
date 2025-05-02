import {  useEffect } from 'react';
import './products.css';
const  Air_purifying_plant = () =>{
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            entry.isIntersecting
                ? entry.target.classList.add('show')
                : entry.target.classList.remove('show');
        });
    });

    document.querySelectorAll('.carousel, .animation_text, .main_card, .animate, .text1, h2').forEach(el => {
        observer.observe(el);
    });

    return () => observer.disconnect();
}, []);
  return (
    <>
      {/* Product Section */}
      <div className="text1">
      <div className="title_text1">
       <h3>Air Purifying Plants</h3>
      <p className="text2">These plants are easy to care for and significantly improve indoor air quality</p>
      </div>
      </div>
      <h2>Indoor Plant</h2>
      <div className="animate">
   <div className="main_card">
     <div className="card">
       <img src="./src/img/1737035788458.jpg"alt="Card Image"/>
       <h4>Boston Fern (Nephrolepis exaltata) </h4>
       <p> Acts as a natural humidifier while removing pollutants like xylene.
         <br></br><br></br>
         Price:₹100-₹700
       </p>  
     </div>
       
     <div className="card">
       <img src="./src/img/1737035788450.jpg" alt="Card Image"/>
       <h4>Rubber Plant (Ficus elastica)</h4>
       <p> Great for removing formaldehyde from indoor air.
         <br></br><br></br>
         Price:₹100-₹500
       </p>  
     </div>
     <div className="card">
       <img src="./src/img/1737035788432.jpg" alt="Card Image"/>
       <h4> Aloe Vera </h4>
       <p> Removes formaldehyde and benzene while doubling as a healing plant.
         <br></br><br></br>
         Price:₹70-₹400
       </p>  
     
     </div>
     <div className="card">
   
       <img src="./src/img/1737035788420.jpg" alt="Card Image"/>
       <h4>Areca Palm(Dypsis lutescens)
       </h4>
       <p>  Removes toxins like benzene and carbon monoxide while humidifying the air.
         <br></br><br></br>
         Price:₹175-₹1749
       </p>  
     </div>
     </div>
   
     <div className="main_card">
                
                  
                <div className="card">
                  <img src="./src/img/cb4a11d4a97b922a2805e7a651583e27.jpg" alt="Card Image"/>
                  <h4>Pothos (Epipremnum aureum)</h4>
                  <p>Filters out formaldehyde, benzene, and toluene.
                  <br></br><br></br>
                    Price:₹200-₹600
                  </p>  
              
                
                </div>
                <div className="card">
                    <img src="./src/img/1735478385904.jpg" alt="Card Image"/>
                    <h4>Peace Lily (Spathiphyllum)</h4>
                    <p>Improves air quality and adds an elegant touch with its white flowers.<br/><br/>Price: ₹549-₹999</p>
                </div>
                
                <div className="card">
              
                  <img src="./src/img/OIP.jpeg" alt="Card Image"/>
                  <h4> Rubber Plant (Ficus elastica)
                  </h4>
                  <p>Absorbs airborne toxins and increases humidity.
                  <br></br><br></br>
                    Price:₹439-₹579
                  </p>  
                </div>
                <div className="card">
                  <img src="./src/img/Dracaena.jpeg"alt="Card Image"/>
                  <h4>Dracaena </h4>
                  <p>Removes trichloroethylene, benzene, and xylene.
                    <br></br><br></br>
                    Price:₹449-₹699
                  </p>  
                </div>
                </div>
                </div>
                <h2>Outdoor Plant</h2>
<div className="animate">
    <div className="main_card">
       <div className="card">
         <img src="./src/img/adf28ebd6ef238393ed0b1b65ea7f40d.jpg"alt="Card Image"/>
         <h4>Eucalyptus </h4>
         <p>Its leaves emit compounds that cleanse the air and improve respiratory health.
           <br></br><br></br>
           Price:₹449-₹699
         </p>  
       </div>
         
       <div className="card">
         <img src="./src/img/OIP (1).jpeg" alt="Card Image"/>
         <h4>Tulip (Tulipa)</h4>
         <p> Helps in reducing pollutants in outdoor air.
         <br></br><br></br>
           Price:₹200-₹600
         </p>  
     
       
       </div>
       <div className="card">
         <img src="./src/img/0849acaa1324632d36c3ec756609b7c5.jpg" alt="Card Image"/>
         <h4>Lavender (Lavandula)</h4>
         <p>Not only purifies air but also repels insects and adds a pleasant fragrance.
         <br></br><br></br>
           Price:₹499-₹999
         </p>  
       
       </div>
       <div className="card">
                  <img src="./src/img/cb4a11d4a97b922a2805e7a651583e27.jpg" alt="Card Image"/>
                  <h4>Money Plant</h4>
                  <p>Grows well in shaded outdoor spaces, helps filter air.
                  <br></br><br></br>
                    Price:₹200-₹600
                  </p>  
              
                
                </div>
       </div>
                
</div>
<div className="main_card">
<div className="card">
         <img src="./src/img/gardenia.jpeg" alt="Card Image"/>
         <h4>Gardenia (Gardenia jasminoides)
         </h4>
         <p> Filters airborne toxins and adds fragrance.Requires partial shade and moist soil.
         <br></br><br></br>
           Price:₹439-₹579
         </p>  
       </div>
                  
                
                <div className="card">
                    <img src="./src/img/1735478385904.jpg" alt="Card Image"/>
                    <h4>Neem Tree (Azadirachta indica)</h4>
                    <p>Known for absorbing harmful gases and improving air quality.<br/><br/>Price: ₹549-₹999</p>
                </div>
                
                <div className="card">
              
                  <img src="./src/img/OIP.jpeg" alt="Card Image"/>
                  <h4> Ficus (Ficus benjamina)
                  </h4>
                  <p>Removes pollutants like formaldehyde and trichloroethylene.
                  <br></br><br></br>
                    Price:₹439-₹579
                  </p>  
                </div>
                <div className="card">
                  <img src="./src/img/a49876338c36ca2665c251114e1e514c.jpg"alt="Card Image"/>
                  <h4>Holy Basil (Tulsi)</h4>
                  <p>Emits oxygen and absorbs carbon dioxide and other harmful gases.
                    <br></br><br></br>
                    Price:₹449-₹699
                  </p>  
                </div>
                </div>
              
  

    </>
  );
}
export default Air_purifying_plant;