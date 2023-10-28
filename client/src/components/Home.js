import React from "react";
import "./Home.css";
import img1 from "/home/mwangi/FINAL_PROJECT/client/src/images/EML.png"
import img2 from "/home/mwangi/FINAL_PROJECT/client/src/images/IG.jpeg"
import img3 from "/home/mwangi/FINAL_PROJECT/client/src/images/NOTIFICATON.png"
import img4 from "/home/mwangi/FINAL_PROJECT/client/src/images/phone.png"
import img5 from "/home/mwangi/FINAL_PROJECT/client/src/images/TWEETER.png"
import img6 from "/home/mwangi/FINAL_PROJECT/client/src/images/image.png"
import img7 from "/home/mwangi/FINAL_PROJECT/client/src/images/MAP.jpeg"

import img9 from "/home/mwangi/FINAL_PROJECT/client/src/images/Filter.png"
import img10 from "/home/mwangi/FINAL_PROJECT/client/src/images/posting.png"
import img11 from "/home/mwangi/FINAL_PROJECT/client/src/images/questions.jpeg"
import img12 from "/home/mwangi/FINAL_PROJECT/client/src/images/search.jpg"
const Homepage = () => {
  return (
    <div className="homepage">
      <div className="div">
        <footer className="footer">
          <div className="overlap-group">
            <div className="text-wrapper">@copyrightreservedformoringadesk</div>
            <img className="map" alt="Map" src={img7}/>
            <div className="text-wrapper-2">Join our team</div>
            <div className="text-wrapper-3">How it works</div>
            <div className="text-wrapper-4">About us</div>
            <div className="call">
              <div className="text-wrapper-5">contact us on: 0778456342</div>
              <img className="phone" alt="Phone" src={img4}/>
            </div>
            <div className="email">
              <div className="text-wrapper-6">@moringadesl@gmail.com</div>
              <img className="EML" alt="Eml" src= {img1} />
            </div>
            <div className="x">
              <div className="text-wrapper-7">@moringadeskofficial</div>
              <img className="img" alt="X" src= {img5}/>
            </div>
            <div className="IG">
              <div className="text-wrapper-8">@MORINGADESK</div>
              <img className="IG-2" alt="Ig" src= {img2} />
            </div>
          </div>
        </footer>
        <div className="flexcontainer">
          <p className="text">
            <span className="span">
              We hope this platform enables you to have a smoother experience during your studies with us.
              <br />
            </span>
          </p>
          <p className="text">
            <span className="span">Happy Coding!</span>
          </p>
        </div>
        <div className="filter">
          <div className="flexcontainer-2">
            <p className="p">
              <span className="text-wrapper-9">
                Filter.
                <br />
              </span>
            </p>
            <p className="p">
              <span className="text-wrapper-10">
                Look through tags to find discussions in line with where your problem may lie
              </span>
              <span className="text-wrapper-11">.</span>
            </p>
          </div>
          <img className="rectangle"alt="Rectangle" src= {img12} />
        </div>
        <div className="respond">
          <div className="flexcontainer-3">
            <p className="text-2">
              <span className="text-wrapper-9">Respond</span>
              <span className="text-wrapper-12">
                .<br />
              </span>
            </p>
            <p className="text-2">
              <span className="text-wrapper-13">
                Help resolve other students queries by suggesting solutions to their posted problem.
              </span>
            </p>
          </div>
          <img className="rectangle-2" alt="Rectangle" src= {img10} />
        </div>
        <div className="reach-out">
          <div className="flexcontainer-2">
            <p className="text-3">
              <span className="text-wrapper-9">
                Reach out.
                <br />
              </span>
            </p>
            <p className="text-3">
              <span className="text-wrapper-13">
                Post any inquiries to the support forum and get responses from other students or Technical Mentors
              </span>
              <span className="text-wrapper-11">.</span>
            </p>
          </div>
          <img className="rectangle-3" alt="Rectangle" src= {img11} />
        </div>
        <div className="search">
          <div className="flexcontainer-4">
            <p className="text-2">
              <span className="text-wrapper-9">
                Search.
                <br />
              </span>
            </p>
            <p className="text-2">
              <span className="text-wrapper-13">
                Describe your problem using key words to check for similar problems amd find a solution quicker.
              </span>
            </p>
          </div>
          <img className="rectangle-2" alt="Rectangle" src= {img9}/>
        </div>
        <div className="page-content">
          <p className="text-wrapper-14">
            In Moringa we are transforming the way tech education is done in African Markets. All our programs are
            delivered through a blended learning approach that combines market-aligned courses, a classroom team of
            talented mentors with the skills and knowledge to deliver growth and results for learners, and an
            environment that supports student creativity, job market preparation in a fun, open, and transformative
            learning experience. We understand that the learning experience may not always be smooth. Bearing that in
            mind, this support platform enables our students to easily access help and/or solutions in times of need.
          </p>
          <p className="discover-grow">
            <span className="text-wrapper-9">Discover.</span>
            <span className="text-wrapper-12">&nbsp;</span>
            <span className="text-wrapper-15">Grow.</span>
            <span className="text-wrapper-12">&nbsp;</span>
            <span className="text-wrapper-16">Transform.</span>
          </p>
        </div>
        <div className="overlap-wrapper">
          <div className="overlap">
            <p className="text-wrapper-17">
              Through market-aligned skills training, we help learners build new career possibilities with greater
              confidence and capability.
            </p>
            <div className="text-wrapper-18">Nurturing Africa’s Tech Talent</div>
          </div>
        </div>
        <div className="overlap-2">
          <div className="nav-bar-items">
            <div className="ellipse" />
            <img className="NOTIFICATON" alt="Notificaton" src= {img3} />
            <img className="image" alt="Image" src={img6} />
            
          </div>
          <div className="text-wrapper-19">user</div>
          <div className="text-wrapper-20">tags</div>
          <div className="text-wrapper-21">FAQs</div>
        </div>
      </div>
    </div>
  );
};
export default Homepage;