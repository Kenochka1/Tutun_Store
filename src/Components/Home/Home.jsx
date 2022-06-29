import React from "react";
import biHome from "../../Assets/images/biHome.svg";
import vapevideo from "../../Assets/video/vapevide.MP4";
import vapevideo1 from "../../Assets/video/homevideo1.MP4";
import "./Home.css";

import aiba from "../../Assets/imagesTeam/aiba.JPG";
import keno from "../../Assets/imagesTeam/keno.jpg";
import aidar from "../../Assets/imagesTeam/aidar.JPG";
import isa from "../../Assets/imagesTeam/isa.JPG";
import erbol from "../../Assets/imagesTeam/erbol.JPG";
import kaliya from "../../Assets/imagesTeam/kaliya.JPG";

import ptichka from "../../Assets/images/ptichka1.svg";
import ptichka1 from "../../Assets/images/ptichka.svg";

import smoke from "../../Assets/images/smoke.svg";
import vape from "../../Assets/images/vape.svg";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      {/* HOME START */}

      <div className="container__home">
        <div className="container__left" data-aos="fade-up-right">
          <div className="container__left__text">
            <h1>TUTUN STORE</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores,
              voluptatem placeat fugit totam porro magnam? Tenetur omnis sed
              illum pariatur ad rerum impedit placeat perspiciatis neque facere
              ipsam, distinctio eveniet!
            </p>
            <a href="#perekid">
              <button>Learn more</button>
            </a>
          </div>
        </div>

        <div className="container__right">
          <img id="biHome" src={biHome} alt="biHome" data-aos="fade-up-left" />
        </div>
      </div>
      {/* HOME FINISH */}

      {/* VIDEO START */}
      <div className="home__video">
        <h1 data-aos="flip-left">TUTUN STORE</h1>
        <h2 data-aos="flip-left">first tobacco shop</h2>
        <video autoPlay loop muted controls data-aos="zoom-in-up">
          <source src={vapevideo} type="video/mp4" />
        </video>
      </div>
      {/* VIDEO FINISH */}

      {/* CONTENT START */}
      <div className="container__content">
        <div className="content__left">
          <h3 data-aos="fade-right">ABOUT SMOKE</h3>
          <h4 data-aos="fade-right">COLLECTION 777</h4>
          <img id="biHome2" src={smoke} alt="smoke" data-aos="fade-up-right" />
        </div>
        <div className="content__right">
          <div className="content__right__text">
            <h3 data-aos="fade-left">
              SMOKE is a collection of airborne particulates and gases emitted
              when a material undergoes combustion or pyrolysis, together with
              the quantity of air that is entrained or otherwise mixed into the
              mass.
            </h3>
            <p data-aos="fade-left">
              The composition of smoke depends on the nature of the burning fuel
              and the conditions of combustion. Fires with high availability of
              oxygen burn at a high temperature and with a small amount of smoke
              produced; <br /> <br />
              Smoke inhalation is the primary cause of death in victims of
              indoor fires. The smoke kills by a combination of thermal damage,
              poisoning and pulmonary irritation caused by carbon monoxide,
              hydrogen cyanide and other combustion products.
            </p>
            <NavLink to="/list">
              <button data-aos="fade-up-left"> Views products</button>
            </NavLink>
          </div>
        </div>
      </div>
      {/* CONTENT FINISH */}
      {/* <div><img src={liner} alt="liner" /></div> */}
      {/* TEAM START */}
      <div className="container__team">
        <div className="team__text">
          <h2 data-aos="flip-down">OUR TEAM</h2>
        </div>
        <div className="team__photo__front">
          <div className="photo_front" data-aos="fade-right">
            <img id="aiba" src={aiba} alt="aiba" />
            <h4>Aibat Ivagov</h4>
            <h5>Frontend Developer</h5>
            <img id="ptichka" src={ptichka} alt="ptichka" />
            <img id="ptichka1" src={ptichka1} alt="ptichka1" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt
            </p>
          </div>
          <div className="photo_front" data-aos="fade-up">
            <img id="aidar" src={aidar} alt="aidar" />
            <h4>Aidar Kad</h4>
            <h5>Frontend Developer</h5>
            <img id="ptichka" src={ptichka} alt="ptichka" />
            <img id="ptichka1" src={ptichka1} alt="ptichka1" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt
            </p>
          </div>

          <div className="photo_front" data-aos="fade-left">
            <img id="kanat" src={keno} alt="kanat" />
            <h4>Kanat Sul</h4>
            <h5>Frontend Developer</h5>
            <img id="ptichka" src={ptichka} alt="ptichka" />
            <img id="ptichka1" src={ptichka1} alt="ptichka1" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt
            </p>
          </div>
        </div>
        <div className="team__photo__back">
          <div className="photo_back" data-aos="fade-right">
            <img id="isa" src={isa} alt="isa" />
            <h4>Isabar And</h4>
            <h5>Backend Developer</h5>
            <img id="ptichka" src={ptichka} alt="ptichka" />
            <img id="ptichka1" src={ptichka1} alt="ptichka1" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt
            </p>
          </div>
          <div className="photo_back" data-aos="fade-up">
            <img id="erbol" src={kaliya} alt="erbol" />
            <h4>Kalyia Bek</h4>
            <h5>Backend Developer</h5>
            <img id="ptichka" src={ptichka} alt="ptichka" />
            <img id="ptichka1" src={ptichka1} alt="ptichka1" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt
            </p>
          </div>

          <div className="photo_back" data-aos="fade-left">
            <img id="erbol" src={erbol} alt="erbol" />
            <h4>Erbol AjY</h4>
            <h5>Backend Developer</h5>
            <img id="ptichka" src={ptichka} alt="ptichka" />
            <img id="ptichka1" src={ptichka1} alt="ptichka1" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt
            </p>
          </div>
        </div>
      </div>
      {/* TEAM FINISH */}
      {/* FEATURES START */}
      <div className="container__features" id="perekid">
        <div className="container__features__left" data-aos="fade-up-right">
          <h2>ABOUT VAPE</h2>
          <h3>INFORMATION</h3>
          <img src={vape} alt="vape" />
        </div>
        <div className="container__features__right" data-aos="fade-up-left">
          <div className="container__right__items">
            <h3>How can I get into Meta RL?</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum
              lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
            </p>
            <h3>When is the NFT launch?</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum
              lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
            </p>
            <p className="features__p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum
              lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
            </p>
          </div>
        </div>
      </div>
      {/* FEATURES FINISH */}
    </>
  );
};

export default Home;
