import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Carousel.css';
import './products.css';
import './collectionplant.css';

const Home = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const carouselRef = useRef(null);

    const handleIndicatorClick = (index) => {
        setActiveIndex(index);
    };

    const slideWidth = () => {
        return carouselRef.current ? carouselRef.current.children[0].clientWidth : 0;
    };

    const scrollToCollection = () => {
        const collectionSection = document.getElementById('plant-collection');
        if (collectionSection) {
            collectionSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

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

        return () => observer.disconnect(); // Cleanup observer on unmount
    }, []);

    return (
        <>
             <div className="box1"> 
                <div className="carousel"> 
                    <div className="carousel-track" style={{ transform: `translateX(-${activeIndex * slideWidth()}px)` }}> 
                        <div className="carousel-item"> 
                            <img src="./src/img/1735483820904.jpg" alt="Slide 1" /> 
                        </div> 
                        <div className="carousel-item"> 
                            <img src="./src/img/1736095547101.jpg" alt="Slide 2" /> 
                        </div> 
                        <div className="carousel-item"> 
                            <img src="./src/img/1736095547086.jpg" alt="Slide 3" /> 
                        </div> 
                    </div>
                    <div className="indicators"> 
                        {[0, 1, 2].map((index) => ( 
                            <span key={index} className={`indicator ${activeIndex === index ? 'active' : ''}`} onClick={() => handleIndicatorClick(index)} data-slide={index}></span> 
                        ))} 
                    </div> 
                </div> 

                <div className="animation_text">
                <h1 className="text_par">Modern Living, Green Vibes</h1> 
                    <p className="par1"> Live with Nature offers a diverse selection of indoor and outdoor plants, along with expert gardening tips. Join our community to bring nature closer to your home. </p> 
                    <button className="animated-button" onClick={scrollToCollection}> 
                        <svg xmlns="http://www.w3.org/2000/svg" className="arr-2" viewBox="0 0 24 24"> 
                            <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path> 
                        </svg> 
                        <span className="text">See More</span> 
                        <span className="circle"></span> 
                        <svg xmlns="http://www.w3.org/2000/svg" className="arr-1" viewBox="0 0 24 24"> 
                            <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path> 
                        </svg> 
                    </button> 
                </div> 
            </div>

            {/* Products Section */}
            <section id="products">
                <div className="text1">
                    <div className="title_text1">
                        <h3>New Plants</h3>
                        <p className="text2">Transform your space with elegance of indoor plants</p>
                    </div>
                </div>

                <div className="main_card">
                    <div className="card">
                        <img src="./src/img/1735634856889.jpg" alt="Card Image"/>
                        <h4>ZZ Plant (Zamioculcas zamiifolia)</h4>
                        <p>Known for its glossy, dark green leaves and tolerance to low light conditions.<br/><br/>Price: ₹449-₹699</p>
                    </div>
                    <div className="card">
                        <img src="./src/img/1735637528018.jpg" alt="Card Image"/>
                        <h4>Red Prayer Plant (Maranta leuconeura)</h4>
                        <p>A stunning houseplant with red-veined, vibrant green leaves that fold up at night like hands in prayer.<br/><br/>Price: ₹200-₹600</p>
                    </div>
                    <div className="card">
                        <img src="./src/img/1735635653726.jpg" alt="Card Image"/>
                        <h4>Aglaonema (Chinese Evergreen)</h4>
                        <p>A beautiful plant with variegated leaves, perfect for low-light environments.<br/><br/>Price: ₹499-₹999</p>
                    </div>
                    <div className="card">
                        <img src="./src/img/1735638044142.jpg" alt="Card Image"/>
                        <h4>Spider Plant (Chlorophytum comosum)</h4>
                        <p>An easy-to-grow plant with arching leaves and air-purifying capabilities.<br/><br/>Price: ₹439-₹579</p>
                    </div>
                </div>
            </section>

            {/* Plant Collection Section */}
            <div id="plant-collection" className="text1">
                <div className="title_text1">
                    <h3>Plant Collection</h3>
                    <p className="text2">Let the beauty of greenery weave through your decor, bringing freshness and harmony to your everyday environment.</p>
                </div>
            </div>

            <div className="animate">
            <div className="term">
                <div className="card1">
                    <div className="content">
                        <h1>Pet Friendly Plants</h1>
                        <p>You can create a beautiful, safe environment for your pets to enjoy.</p>
                        <button className="btn"><Link to="pet_friendly_plant">See More</Link></button>
                    </div>
                </div>
                <div className="card3">
                    <div className="content">
                        <h1>Low-Light Plants</h1>
                        <p>Perfect for low-light spaces, these plants thrive even in darker corners of your home.</p>
                        <button className="btn"><Link to="low_light_plant">See More</Link></button>
                    </div>
                </div>
                <div className="card2">
                    <div className="content">
                        <h1>Air Purifying Plants</h1>
                        <p>These plants help purify the air and improve the quality of your home environment.</p>
                        <button className="btn"><Link to="air_purifying_plant">See More</Link></button>
                    </div>
                </div>
            </div>
            </div>
            <div className="text1">
                <div className="title_text1">
                    <h3>Trending Plants</h3>
                    <p className="text2">Enhance the decor with natural beauty</p>
                </div>
            </div>
            <div className="main_card">
                <div className="card">
                    <img src="./src/img/1735478385904.jpg" alt="Card Image"/>
                    <h4>Peace Lily (Spathiphyllum)</h4>
                    <p>Improves air quality and adds an elegant touch with its white flowers.<br/><br/>Price: ₹549-₹999</p>
                </div>
                <div className="card">
                    <img src="./src/img/1735633107446.jpg" alt="Card Image"/>
                    <h4>Boston Fern (Nephrolepis exaltata)</h4>
                    <p>Increases humidity and filters air pollutants.<br/><br/>Price: ₹549-₹999</p>
                </div>
                <div className="card">
                    <img src="./src/img/1735478385915.jpg" alt="Card Image"/>
                    <h4>English Ivy (Hedera helix)</h4>
                    <p>A fast-growing, evergreen climber known for its attractive, glossy green leaves.<br/><br/>Price: ₹150-₹500</p>
                </div>
                <div className="card">
                    <img src="./src/img/1735478385943.jpg" alt="Card Image"/>
                    <h4>Snake Plant (Sansevieria)</h4>
                    <p>Removes toxins from the air and releases oxygen at night <br></br><br></br>
          Price:₹549-₹999
        </p>  
      </div>
     </div>  
        </>
    );
};

export default Home;