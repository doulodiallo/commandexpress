import React from 'react'
import styled from 'styled-components'
import logo from '../../assets/banner.jpeg'

const BannerContainer=styled.div`


`
const Banners=styled.img`
width: 100vw;
height: 50vh;
opacity: 1;



`





function Banner() {
  return (
  <BannerContainer>
    <Banners src={logo}/>
  
    
    </BannerContainer>
  )
}

export default Banner
