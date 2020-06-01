import React, { Component } from 'react'
import CustomNav from '../components/CustomNav'
import styled from 'styled-components'
import InternImp from '../components/internimp'
import CustomFooter from '../components/CustomFooter'
import Background from '../assets/bg.jpg'
class HomePage extends Component {
    render() {
        const MyStyles=styled.div`
         .Bgimg{
             height:80vh;
         }

         .Bgimg img{
             height:80vh;
             width:100vw;
         }

         background-color: bisque;
        `;
        return (
            <MyStyles>
                <CustomNav/>
                <div className="Bgimg">
                    <img src={Background}/>
                </div>
                <InternImp/>
                <CustomFooter/>
            </MyStyles>
        )
    }
}

export default HomePage;