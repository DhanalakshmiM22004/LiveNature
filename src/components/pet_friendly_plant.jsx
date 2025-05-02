import {  useEffect } from 'react';
import './products.css';
const Pet_friendly_plants = () =>{
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
          <h3>Pet Friendly Plant  </h3>
         <p className="text2">By incorporating these plants, you can create a beautiful, safe environment for your pets to enjoy.</p>
         </div>
         </div>  
         <h2>Indoor Plant</h2>
         <div className="animate">     
         <div className="main_card">
            <div className="card">
              <img src="./src/img/1737037680833.jpg"alt="Card Image"/>
              <h4>Haworthia </h4>
              <p>  A small succulent perfect for shelves and desks, safe for pets.
                <br></br><br></br>
                Price:₹150-₹500
              </p>  
            </div>              
            <div className="card">
              <img src="./src/img/1737037680854.jpg" alt="Card Image"/>
              <h4>Parlor Palm (Chamaedorea elegans) </h4>
              <p>  A low-maintenance plant that thrives in indirect light.
              <br></br><br></br> 
                Price:₹140-₹625
              </p>  
           </div>
            <div className="card">
              <img src="./src/img/1737037680843.jpg" alt="Card Image"/>
              <h4>Bamboo Palm (Chamaedorea seifrizii) </h4>
              <p> A fantastic pet-safe choice with a tropical flair.
              <br></br><br></br>
                Price:₹299-₹839
              </p>  
            </div>
                <div className="card">
                  <img src="./src/img/1737037680863.jpg"alt="Card Image"/>
                  <h4>  Calathea</h4>
                  <p> Popular for its vibrant, patterned leaves, it is entirely safe for pets.
                  <br></br><br></br>
                    Price:₹300-₹1000
                  </p>  
                </div>                  
                </div> 
                <div className="main_card">
                <div className="card">
                  <img src="./src/img/1738391192428.jpg"alt="Card Image"/>
                  <h4>  Calathea</h4>
                  <p> Popular for its vibrant, patterned leaves, it is entirely safe for pets.
                    <br></br><br></br>
                    Price:₹449-₹699
                  </p>  
                </div>
                  
                <div className="card">
                  <img src="./src/img/1738391192418.jpg" alt="Card Image"/>
                  <h4>Baby Rubber Plant (Peperomia obtusifolia)</h4>
                  <p> Compact and adorable, this plant is easy to care for and non-toxic.
                  <br></br><br></br>
                    Price:₹200-₹600
                  </p>  
              
                
                </div>
                <div className="card">
                  <img src="./src/img/1414488146.webp" alt="Card Image"/>
                  <h4> Haworthia</h4>
                  <p> A small succulent perfect for shelves and desks, safe for pets.
                  <br></br><br></br>
                    Price:₹499-₹999
                  </p>  
                
                </div>
                <div className="card">
                        <img src="./src/img/1735638044142.jpg" alt="Card Image"/>
                        <h4>Spider Plant (Chlorophytum comosum)</h4>
                        <p>An easy-to-grow plant with arching leaves and air-purifying capabilities.<br/><br/>Price: ₹439-₹579</p>
                    </div>
                </div>
                </div>
                <h2>Outdoor Plant</h2>
<div className="animate">
    <div className="main_card">
       <div className="card">
         <img src="./src/img/1738391192409.jpg"alt="Card Image"/>
         <h4> Rosemary (Salvia rosmarinus)</h4>
         <p> A great herb for cooking and completely safe for pets.
           <br></br><br></br>
           Price:₹449-₹699
         </p>  
       </div>
         
       <div className="card">
         <img src="./src/img/1738391192400.jpg" alt="Card Image"/>
         <h4>Lemon Balm (Melissa officinalis) </h4>
         <p> A fragrant herb that is safe for pets and repels insects.
         <br></br><br></br>
           Price:₹200-₹600
         </p>  
     
       
       </div>
       <div className="card">
         <img src="./src/img/Thyme-plant.jpg" alt="Card Image"/>
         <h4>  Thyme (Thymus vulgaris)</h4>
         <p>Non-toxic and aromatic, great for gardens and containers
         <br></br><br></br>
           Price:₹499-₹999
         </p>  
       
       </div>
       <div className="card">
         <img src="./src/img/1738391192367.jpg" alt="Card Image"/>
         <h4> Sunflowers (Helianthus)
         </h4>
         <p> A bright, cheerful addition to any garden that is safe for pets.
         <br></br><br></br>
           Price:₹439-₹579
         </p>  
       </div>
       </div>
                
</div>
    </>
  );
}

export default Pet_friendly_plants;