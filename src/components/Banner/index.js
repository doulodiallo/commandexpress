import React from 'react'
import styled from 'styled-components'
import logo from '../../assets/images.png'

const BannerContainer=styled.div`


`
const Banners=styled.img`
width: 100vw;
height: 70vh;
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
