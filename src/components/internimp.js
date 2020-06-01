import React, { Component } from 'react'
import Infocell from './infocell'
import styled from 'styled-components'

export class InternImp extends Component {
    s1 ='Internships are also a way to get your feet wet and find out if a specific field is something you could see yourself doing full-time';
    s2 = 'Internships can provide students with the soft skills needed in the workplace and in leadership positions. Skills, such as communication, leadership, problem-solving, and teamwork can all be learned through an internship and utilized beyond that experience';
    s3 = 'It might seem common sense – you’re interning to learn skills, after all – but don’t forget to purposefully observe others in their job role to learn the ins and outs of different positions';
    s4 = 'There is a 1 in 16 chance of securing a job by connecting with people, so networking is critical';
    render() {
        const Styles=styled.div`
        .container{
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr;
        }
        #title{
            font-size: 1.8vw;
        }

        h3{
            font-family:castellar;
            font-size:1.2rem;
            font-weight:bold;
        }
            @media only screen and (max-width:620px) {
                /* For mobile phones: */
                .container{
                  display:  block;
                  width: 100%;
                  
                }
              }

              .myhr{
                border: 0;
                width:80%;
                height: 2.5px;
                background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0));
            }

              @media only screen and (max-width:620px) {
                /* For mobile phones: */
                #title{
                    font-size: 4vw;
                  display:  block;
                  width: 100%;
                }
              }
        `;
        return (
            <Styles>
                <hr className="myhr"/>
                <center><h3 id="title" className='pt-3'>Why Intern ?</h3></center> 
                <div className="container" >
                <Infocell className = "grid" title = {'Getting Your Feet Wet'} content = {this.s1}/>
                <Infocell className = "grid" title = {'Professionalism'} content = {this.s2}/>
                <Infocell className = "grid" title = {'Learn from others'} content = {this.s3}/>
                <Infocell className = "grid" title = {'Networking'} content = {this.s4}/>
                </div>
                <hr className="myhr"/>
            </Styles>
        )
    }
}

export default InternImp;