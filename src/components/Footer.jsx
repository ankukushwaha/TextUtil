import React from 'react'
import { Link } from 'react-router-dom';

function Footer(props) {
  return (
    <footer className={`bg-${props.mode} text-center  text-${props.mode === 'light'? 'dark' : 'light'} `}>
      <div className="p-2" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)", display: 'flex'}}>
      <div className='container mt-2'>
        © 2023 Copyright:
        <Link className={`text-${props.mode === 'light'? 'dark' : 'light'}`} to="mailto:ankurkushwaha7408@gmail.com" target="_blank"> Ankur.com</Link>
        </div>

        <section className='container'>

          <Link className="btn text-white btn-floating m-1" style={{ backgroundColor: "#55acee" }} to="https://twitter.com/AnkurKumariKus1" target="_blank" role="button"><i className="fab fa-twitter"></i></Link>

          {/* <a className="btn text-white btn-floating m-1" style={{ backgroundColor: "#dd4b39" }} to="#!" role="button"><i className="fab fa-google"></i></a> */}

          <Link className="btn text-white btn-floating m-1" style={{ backgroundColor: "#ac2bac" }} to="https://www.instagram.com/photonista2k20/" target="_blank" role="button"><i className="fab fa-instagram"></i></Link>

          <Link className="btn text-white btn-floating m-1" style={{ backgroundColor: "#0082ca" }} to="https://www.linkedin.com/in/ankur-kumari/" target="_blank" role="button"><i className="fab fa-linkedin-in"></i></Link>

          <Link className="btn text-white btn-floating m-1" style={{ backgroundColor: "#333333" }} to="https://github.com/ankukushwaha" target="_blank" role="button"><i className="fab fa-github"></i></Link>
        </section>
      </div>
    </footer>
  )
}

export default Footer;