import Carousel from 'react-bootstrap/Carousel';

function Carousal(){
    return(
        <div>
            <section>
                <div className='carousal-container'>
                <Carousel data-bs-theme="dark" className="carsole">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src='../images/image1.avif'
            alt="First slide"
          />
          
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src='../images/image2.avif'
            alt="Second slide"
          />
        
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src='../images/image3.webp'
            alt="Third slide"
          />
          
        </Carousel.Item>
      </Carousel>
                </div>

          
      </section>
        </div>
    )
}

export default Carousal