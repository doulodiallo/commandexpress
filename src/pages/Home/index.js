import React from 'react'
import Banner from '../../components/Banner'
import styled from 'styled-components'
import MenuList from '../../components/MenuList'





const BannerContainer=styled.div`
border-bottom: 3px solid  rgb(255 127 0);


`
const MenuListContainer=styled.div`
border-bottom: 3px solid  rgb(255 127 0);

`

const HomeContainer=styled.div`

display: flex;
flex-direction: column;
`


function Home() {
  return (

 
  
  <HomeContainer>
 

  <BannerContainer> 
  <Banner/>
  </BannerContainer>
  <MenuListContainer><MenuList/></MenuListContainer>


   </HomeContainer>
    )
 
  }

export default Home
