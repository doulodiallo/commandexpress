
import React,{useState} from 'react'
import styled from 'styled-components'


const Link =styled.a`
text-decoration:none;
padding:0px 25px;
color: white;
@media (max-width: 700px){
    display: none;


}
:hover{
    border-bottom:2px solid rgb(255 127 0);
}


`
const LinkExtend =styled.a`
text-decoration:none;
padding:0px 25px;
height:100px;
color:rgb(255 127 0);
font-size:2rem;
font-family: 'Playfair Display', serif;
:hover{
    border-bottom:2px solid white;
}


`
const Navcontainer=styled.nav`
display: flex;
width: 100%;
height: ${(props)=>(props.extendNavbar?"100vh":"80px")};
display: flex;
flex-direction: column;
border-bottom: 5px solid white;
background-color: black;


`
const LeftContainer=styled.div`
flex: 30%;
color: rgb(255 127 0);
font-size: 2rem;
font-family: 'Times New Roman', Times, serif;
font-weight: bold;
padding-top:22px;
padding-left: 5px;
 span{
    color: white;
    font-weight: bold;
 }

`
const RightContainer=styled.div`
display: flex;
flex: 70%;
justify-content: flex-end;
align-items: center;
font-size: 1.3rem;
font-weight: bold;
font-family: 'Times New Roman', Times, serif;


span{
    color: rgb(255 127 0);
}
`
const NavInnerContainer=styled.div`
width: 100%;
height: 80px;
display: flex;
`
const NavExtendedContainer=styled.div`
display: flex;
flex-direction: column;
align-items: center;
color: rgb(255 127 0);
padding-top: 5px;


@media (min-width: 700px) 
{
display:none ;
}
`
const NavLinkContainer=styled.div`
display: flex;


`
const OpenLinkButton=styled.button`
width: 70px;
height: 50px;
background: none;
border: none;
color:rgb(255 127 0);
font-size: 45px;
cursor: pointer;

@media (min-width: 700px){
    display: none;


}
`


function Header() {
    const [extendNavbar,setExtendNavbar]=useState(false)
    return (
        
        <Navcontainer extendNavbar={extendNavbar}>
        <NavInnerContainer>
           <LeftContainer>Command<span >E</span>xpress</LeftContainer>
           <NavLinkContainer>
           <RightContainer>
               <Link  href="/"><span >H</span>ome</Link>
               <Link href="/Products">Products</Link>
               <Link  href="/About">About Us</Link>
               <Link href="/Contact">Contact</Link> 
            { extendNavbar ?<OpenLinkButton  onClick={()=> { setExtendNavbar((curr)=>!curr)}}> &#10005;</OpenLinkButton>:
        
        
            <OpenLinkButton  onClick={()=> { setExtendNavbar((curr)=>!curr)}}> &#8801;</OpenLinkButton>
        }
            


        </RightContainer>
            </NavLinkContainer> 

            </NavInnerContainer>
            {extendNavbar && (
              <NavExtendedContainer>
                 <LinkExtend  href="/"><span >H</span>ome</LinkExtend>
                 <LinkExtend href="/Products">Products</LinkExtend>
                 <LinkExtend  href="/About">About Us</LinkExtend>
                 <LinkExtend href="/Contact">Contact</LinkExtend>
            </NavExtendedContainer>)}

        </Navcontainer>
      
    )
}

export default Header