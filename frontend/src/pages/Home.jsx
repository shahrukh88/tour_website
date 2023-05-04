import React from 'react'
import '../styles/home.css'
import {Container, Row, Col} from 'reactstrap'
import heroImg from '../assets/images/hero-img01.jpg'
import heroImg2 from '../assets/images/hero-img02.jpg'
import heroVideo from '../assets/images/hero-video.mp4'
import worldImg from '../assets/images/world.png'
import experienceImg from '../assets/images/experience.png'
import Subtitle from '../shared/Subtitle'
import Searchbar from '../shared/Searchbar'
import ServiceList from '../services/ServiceList'
import FeaturedTourList from '../components/Featured-tours/FeaturedTourList'
import MasonryImagesGallery from '../components/Image-gallery/MasonryImagesGallery'
import Testimonials from '../components/Testimonial/Testimonials'
import Newsletter from '../shared/Newsletter'

const Home = () => {
  return (
    <>
    <section>
      <Container>
        <Row>
          <Col lg='6'>
          <div className='hero__content'>
             <div className="hero__subtitle d-flex align-items-center">
               <Subtitle subtitle={'Know Before You Go'}/>
               <img src={worldImg} alt=""/> 
              </div>
          <h1>Travel opens the door to creating <span className="highlight">memories</span>
          </h1>
          <p>Lore ipusem Lore ipusem Lore ipusem Lore ipusem Lore ipusem
          Lore ipusem Lore ipusem Lore ipusem Lore ipusem Lore ipusemLore ipusem Lore ipusem
          Lore ipusem Lore ipusem Lore ipusem Lore ipusem
          Lore ipusem Lore ipusemLore ipusemLore ipusemLore ipusemLore ipusemLore ipusemLore ipusemLore ipusem.
          </p>
          </div>
          
          </Col>
          
          <Col lg='2'>
          <div className="hero__img-box">
            <img src={heroImg} alt=""/>
          </div>
          </Col>
         
          <Col lg='2'>
          <div className="hero__img-box hero__video-box mt-4">
            <video src={heroVideo} alt="" controls/>
          </div>
          </Col>


          <Col lg='2'>
          <div className="hero__img-box mt-5">
            <img src={heroImg2} alt=""/>
          </div>
          </Col>
            <Searchbar/>
        </Row>

      </Container>
    </section>
    <section>
      <Container>
        <Row>
          <Col>
          <h5 className="services__subtitle">
            What we serve
          </h5>
          <h2 className="services__title">We offer our <br/>best services</h2>
          </Col>
          <ServiceList/>
        </Row>
      </Container>
    </section>
    <section>
      <Container>
        <Row>
          <Col lg='12' className='mb-5'>
            <Subtitle subtitle={'Explore'}/>
            <h2 className="featured__tour-title">Our featured tours</h2>
          </Col>
          <FeaturedTourList/>
        </Row>
      </Container>
    </section>
    <section>
      <Container>
        <Row>
          <Col lg='6'>
            <div className="experience__content">
              <Subtitle subtitle={'Experience'}/>
              <h2>with our all experience <br/> we will serve you</h2>
           <p>
            Lorem,ipusm dolor,Lorem,ipusm dolor, Lorem,ipusm dolor.
            <br/>
            Lorem,ipusm dolor,
           </p>
            </div>
            <div className="counter__wrapper d-flex align-items-center gap-5">
              <div className="counter__box">
                <span>12k+</span>
                <h6>Successful trip</h6>
              </div>
              <div className="counter__box">
                <span>2k+</span>
                <h6>Regular trip</h6>
              </div>
              <div className="counter__box">
                <span>15</span>
                <h6>Years experience</h6>
              </div>
            </div>
          </Col>
          <Col lg='6'>
            <div className="experience__img">
              <img src={experienceImg} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>

    <section>
      <Container>
        <Row>
          <Col lg='12'>
            <Subtitle subtitle={'Gallery'}/>
            <h2 className="gallery__title">Visit Our customer tour gallery</h2>
          </Col>
          <Col lg='12'>
           <MasonryImagesGallery/>
          </Col>
        </Row>
      </Container>
    </section>
    <section>
    <Container>
      <Row>
        <Col lg='12'>
        <Subtitle subtitle={'Fans Love'}/>
            <h2 className="testimonial__title">What our fans says about</h2>
         </Col>
         <Col lg='12'>
          <Testimonials/>
         </Col>
      </Row>
    </Container>
      </section>
      <Newsletter/>
    </>
  )
}

export default Home