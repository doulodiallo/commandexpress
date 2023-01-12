import React from 'react'
import styled from 'styled-components'
import Pieces from '../../assets/pieces.jpg'
import Voiture from '../../assets/voiture.jpg'
import Vidange from '../../assets/vidange.png'
import Jante from '../../assets/jante.jpg'
import Amortisseur from '../../assets/amortisseur.jpg'
import Huile from '../../assets/huile.jpg'
import Filtre from '../../assets/filtre.jpg'
import Batterie from '../../assets/batterie.jpg'
import Biellette from '../../assets/biellette.jpg'
import Colis from'../../assets/colis.png'
import Email from'../../assets/mail.png'
import Antigel from'../../assets/antigel.jpg'
import ATF from'../../assets/ATF.jpg'
import Moteur from'../../assets/moteur.jpg'
import Courroie from'../../assets/courroie.jpg'
import Ford from'../../assets/FORD.jpg'
import Hyundai from'../../assets/hyundai.jpg'
import Chevrolet from'../../assets/chevrolet.jpg'
import Jeep from'../../assets/jeep.png'



const Container=styled.div`
width: 98%;
display: flex;
flex-direction: column;
margin:auto;

`
const Wrapper=styled.div`
width: 98%;
 height: 22vh;
 margin-left: auto;
 margin-right: auto ;
 margin-top: 25px;
 display: grid;
 grid: 150px/auto auto auto ;
grid-gap: 15px;

`
const ServiceContainer=styled.div`

background-color: rgba(255, 255, 255, 0.8);
  text-align: center;
  padding: 20px 0;
  font-size: 30px;
  border: 2px solid rgb(239, 239, 239);
box-shadow: 2px 2px 3px 3px rgb(239, 239, 239);
  display: flex;
 justify-content: space-evenly;
 
`
const Title=styled.h1`
font-size: 2rem;
margin-top: 40px;
margin-left: 12px;
`
const LastestProduct=styled.div`

width: 98%;
 height: 22vh;
 margin-left: auto;
 margin-right: auto ;
 margin-top: 25px;
 display: grid;
 grid: 150px/auto auto auto auto auto auto;
grid-gap: 5px;
padding-top: 15px;
border-top:2px solid rgb(255 127 0);

`
const Products=styled.div`

height: auto;
display: flex;
 flex-direction: column;
 align-items: center;
`
const SectionSolde=styled.div`

width: 98%;
 height: 15vh;
 margin-left: auto;
 margin-right: auto ;
 margin-top: 85px;
 display: grid;
 grid: 350px/auto auto;
 grid-gap: 10px;
 padding-top: 15px;

 
`
const Solde=styled.div`
border: 2px solid  rgb(239, 239, 239);
box-shadow: 2px 2px 3px 3px rgb(239, 239, 239);
height: 15vh;
display: flex;
justify-content: space-around;
border-right: 2px solid rgb(239, 239, 239);
`
const Featured=styled.div`

width: 98%;
 height: 42vh;
 margin-left: auto;
 margin-right: auto ;
 margin-top: 25px;
 display: grid;
 grid: 150px/auto auto auto auto;
 grid-gap: 10px;
 border-top:2px solid rgb(255 127 0);
 padding-top: 15px;
`
const BestSeller=styled.div`
border: 2px solid rgb(239, 239, 239);
box-shadow: 2px 2px 3px 3px rgb(239, 239, 239);
display: flex;
flex-direction: row;
`
const Brands=styled.div`

width: 98%;
 height: 42vh;
 margin-left: auto;
 margin-right: auto ;
 margin-top: 15px;
 display: grid;
 grid: 150px/auto auto auto auto ;
 grid-gap: 10px;
 border-top:2px solid rgb(255 127 0);
 padding-top: 15px;
`

const Brand=styled.div`
border: 2px solid rgb(239, 239, 239);
box-shadow: 2px 2px 3px 3px rgb(239, 239, 239);
padding: 25px 55px;
`

const Image =styled.img`
width:130px;
height:100px;


`
const Description=styled.span`
color: black;
font-size: 12px;
line-height: 25px;
font-family: 'Times New Roman', Times, serif;

`



function MenuList() {
  return (
    <Container>
    
    <Wrapper>
    <ServiceContainer><Description>Vente<br/>Piéces détachées Americaines</Description><Image src={Pieces} alt='antigel'/></ServiceContainer>
    <ServiceContainer><Description>Nos Services<br/>Vidange-Changement plaquette</Description><Image src={Vidange} alt='amortisseur'/></ServiceContainer>
    <ServiceContainer><Description>Vente<br/>Voiture Europeen & Americaines</Description><Image src={Voiture} alt='antigel'/></ServiceContainer>    
    </Wrapper>
    <Title>Lastest Products</Title>
    <LastestProduct>
   <Products><Image src={Jante} alt='antigel'/><Description>JANTE ALIMINIUM</Description><Description>Price: 236 000 fcfa</Description></Products>
    <Products><Image src={Amortisseur} alt='antigel'/><Description>AMORTISSEUR</Description><Description>Price: 56 000 fcfa</Description></Products>
    <Products><Image src={Huile} alt='antigel'/><Description>HUILE MOTEUR</Description><Description>Price: 30 000 fcfa</Description></Products>
    <Products><Image src={Batterie} alt='antigel'/><Description>BATTERIE AUTO</Description><Description>Price: 60 000 fcfa</Description></Products>
    <Products><Image src={Filtre} alt='antigel'/><Description>OIL FILTRE</Description><Description>Price: 6 000 fcfa</Description></Products>
    <Products><Image src={Biellette} alt='antigel'/><Description>BIELLETTE AUTO</Description><Description>Price: 15 000 fcfa</Description></Products>
    </LastestProduct>
    <SectionSolde>
    <Solde>
    <Description>Free Shipping<br/>all order over<br/>2000FCA</Description>
    <Description>Your Own<br/>Banners<br/>Everywhere</Description>
    <Image src={Colis} alt='colis'/>
    </Solde>
    
    <Solde>
    <Description>Sign Up<br/>For Discount<br/>-30%</Description>
    <Description>Add Your Email<br/>Address and get<br/>Discount Code</Description>
    <Image src={Email} alt='mail'/>
    </Solde>
    
    </SectionSolde>
    <Title>FEATURED</Title>
    <Featured>
    <BestSeller><Image src={Antigel} alt='antigel'/><Description>ANTIGEL</Description></BestSeller>
    <BestSeller><Image src={ATF} alt='atf'/><Description>ATF VI</Description></BestSeller>
    <BestSeller><Image src={Moteur} alt='moteur'/><Description>MOTEUR</Description></BestSeller>
    <BestSeller><Image src={Courroie} alt='courroie'/><Description>COURROIE MOTEUR</Description></BestSeller>
    </Featured>
    <Title>Our Brands</Title>
    <Brands>
    <Brand><Image src={Ford} alt='Ford'/></Brand>
    <Brand><Image src={Hyundai} alt='hyundai'/></Brand>
    <Brand><Image src={Chevrolet} alt='chevrolet'/></Brand>
    <Brand><Image src={Jeep} alt='jeep'/></Brand>
    
    </Brands>
 
    </Container>
   
  )
}

export default MenuList
