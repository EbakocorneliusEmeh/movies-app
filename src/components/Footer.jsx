import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="containertwo">
        <div className="bfour">
          <h1>Company</h1>
          <p>About Us</p>
          <p>Careers</p>
        </div>

        <div className="bfive">
          <h1>Need Help</h1>
          <p>Visit Help Center?</p>
          <p>Share Feedback</p>
        </div>

        <div className="bsix">
          <h1>Veiw Website in</h1>
          <p>√ English ⩒</p>
        </div>

        <div className="bseven">
          <h1>Social Media</h1>
          <div className="bsef">
            <img src="/images/insta.jpeg" alt="" className="nana" /> <br />
            <img src="/images/download (1)imggg.png" alt="" className="nana" />
          </div>
        </div>

        <div className="beight">
          <h1 className="down">Download Our App</h1>
          <div>
            <img src="/images/imageapp.png" alt="" className="app" /> <br />
          </div>
          <div className="store">
            <img src="images/imagegggggggg.png" alt="" className="goog" />
          </div>
        </div>
      </footer>
      <div className="d">
        <p>©2023 STREAM X. All Rights Reserved.</p>
        <div className="sd">
          <a href="">Terms Of Use</a>
          <a href="">Privacy Policy</a>
          <a href="">FAQ</a>
        </div>

        <div className="bone">
          <h1>STREAM</h1>
          <p className="xavi">
            <span>X</span>
          </p>
        </div>
      </div>
    </>
  );
}
