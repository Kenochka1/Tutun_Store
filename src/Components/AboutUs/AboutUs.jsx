import React from "react";
import aiba from "../../Assets/imagesTeam/aiba.JPG";
import guitar from "../../Assets/imagesTeam/guitar.svg";
import join from "../../Assets/imagesTeam/join.svg";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <>
      <div className="container__aboutus">
        <div className="aboutus__title" data-aos="flip-left">
          <h2>MR. AIBAT'S.</h2>
          <h3> story.</h3>
        </div>
        <div className="aboutus__items">
          <div className="abouts__items__left__con">
            <div className="aboutus__items__left" data-aos="fade-left">
              <h4>Our founders</h4>
            </div>
            <div className="aboutus__items__left1" data-aos="fade-right">
              <h4>Partners</h4>
            </div>
            <div className="aboutus__items__left1" data-aos="fade-right">
              <h4>The future</h4>
            </div>
          </div>
          <div className="aboutus__items__right" data-aos="fade-left">
            <div className="aboutus__right__left">
              <img id="aiba" src={aiba} alt="aboutus" />
            </div>
            <div className="aboutus__right__right">
              <h3>
                META record label was founded by Shaky Lake and Baky Hike in
                2020 business accelerator.
              </h3>
              <p>
                Hac habitasse platea dictumst vestibulum rhoncus est. Sit amet
                dictum sit amet justo. Tortor aliquam nulla facilisi cras.
              </p>
              <p>
                Maecenas ultricies mi eget mauris pharetra. Sit amet consectetur
                adipiscing elit ut aliquam purus. Porta nibh venenatis cras sed
                felis. Aenean vel elit scelerisque mauris pellentesque pulvinar.
                Et malesuada fames ac turpis egestas sed tempus. Enim sit amet
                venenatis urna cursus eget.
              </p>
              <p>
                Maecenas ultricies mi eget mauris pharetra et ultrices. A
                condimentum vitae sapien pellentesque habitant morbi.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* GUITAR START */}
      <div className="container__guitar">
        <img src={guitar} alt="guitar" />
      </div>
      {/* GUITAR FINISH */}

      {/* JOIN START */}
      <div className="container__join">
        <div className="join__left">
          <h3 data-aos="fade-down-right">Join our</h3>
          <h4 data-aos="fade-right">Telegram</h4>
          <p data-aos="fade-right">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </p>
          <a href="https://web.telegram.org/k/" target="_blank">
            <button data-aos="fade-up-right"> Join Telegram</button>
          </a>
        </div>
        <div className="join__right" data-aos="fade-left">
          <img src={join} alt="join" />{" "}
        </div>
      </div>
      {/* JOIN FINISH */}
    </>
  );
};

export default AboutUs;
