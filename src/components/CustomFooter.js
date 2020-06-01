import React, { Component } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faYoutube,faFacebook,faTwitter,faInstagram} from "@fortawesome/free-brands-svg-icons"
import { faEnvelope,faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

class CustomFooter extends Component {
    render() {
        const Styles=styled.div`
        .footer-bs {
            background-color: #3c3d41;
            padding: 30px 40px;
            color: rgba(255,255,255,1.00);
        }

        h2,h4{
            text-align:center;
        }

        .quicklinks li a{
            text-decoration:none;
            color:white;
        }

        .quicklinks li a:hover{
            color:white;
            margin-left: 15px;
            transition: all 1s;
        }

        a.youtube {
            color: #eb3223;
          }
        
          
        a.facebook {
            color: #4968ad;
          }
          
          a.twitter {
            color: #49a1eb;
          }
          
          a.instagram {
            color: white;
          }

          .socials{
              text-align:center;
          }

          .socials a{
              text-align:center;
              justify-content:center;
              text-decoration: none;
              padding-top: 1rem;
              padding-bottom:0.6rem;
              padding-left:1rem;
              margin-right:0.6rem;
          }

          .socials a:hover{
            color:white;
            border: 1px solid white;
            border-radius: 10px;
            transition: all .5s;
          }

          .btn{
            padding:.4rem 0.7rem;
            margin-left:10px;
            background:#006669;
            color:white;
            border: 1px solid transparent;
            border-radius: .25rem;
        }

        .footer-bs .footer-links, .footer-bs .footer-ns { 
            border-left:solid 1px rgba(255,255,255,0.10); 
        }
        `;

        return (
            <Styles>
                <footer className="footer-bs">
                    <div className="row">
        	            <div className="col-md-4 footer-brand animated fadeInLeft">
            	            <h2>Internia</h2>
                            <p>An internship and training platform that helps you explore and discover your technical skills. We help students at somaiya to find internships and organizations to hire interns.</p>
                            <p> <span> <FontAwesomeIcon icon={faPhoneAlt} size="2x"/> &nbsp; 123-456-7890</span><br/>
                            <span style={{paddingTop:"10px"}}><FontAwesomeIcon icon={faEnvelope} size="2x"/>&nbsp; internia@gmail.com</span>
                            </p>
                        </div>
        	
        	        <div className="col-md-4 footer-links animated fadeInDown">
            	        <h4>Quick Links</h4>
            	        <ul className='quicklinks'>
                	    <li><a href="#">Home</a></li>
                	    <li><a href="#">Sign-up</a></li>
                	    <li><a href="#">Sign-in</a></li>
                        </ul>
                        <div className="socials">
                            <a href="#" className="youtube"><FontAwesomeIcon icon={faYoutube} size="2x" /> &nbsp;&nbsp;</a>
                            <a href="#" className="facebook"><FontAwesomeIcon icon={faFacebook} size="2x"/> &nbsp;&nbsp;</a>
                            <a href="#" className="twitter"><FontAwesomeIcon icon={faTwitter} size="2x"/>&nbsp;&nbsp;</a>
                            <a href="#" className="instagram"><FontAwesomeIcon icon={faInstagram} size="2x"/>&nbsp;&nbsp;</a>
                        </div>
                    </div>

        	        <div className="col-md-3 footer-ns animated fadeInRight">
            	        <h4>Newsletter</h4>
                        <p>Let's stay connected! to here from us enter your email:</p>
                            <div className="input-group">
                                <input type="email" className="form-control" placeholder="Email..."/>
                                <button type='submit' className='btn'><FontAwesomeIcon icon={faEnvelope}/> SEND</button>
                            </div>
                    </div>
                </div>
            </footer>

            <section style={{textAlign:"center",paddingTop:"12px",paddingBottom:"6px" ,backgroundColor:"grey"}}>
                <p>© Copyright 2020 Internia</p></section>

            </Styles>
        );
    }
}

export default CustomFooter