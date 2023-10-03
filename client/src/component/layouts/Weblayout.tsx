import React, { useContext } from 'react'
import NavBar from '../blocks/Navbar'
import Sidebar from '../blocks/Sidebar'
import {Outlet } from "react-router-dom"
import styled from '@emotion/styled'
import {GlobalContext}  from "../../Services/GlobalContent"



const LayoutContainer = styled.div <{ml: string} >`
      margin-top: 70px;
      margin-left: ${(props) => props.ml };

`;

const Outletcontainer = styled.div`
  
  padding: 20px;
`

const Weblayout:React.FC = () => {
  const {toggle} = useContext(GlobalContext);
  
  
  return (

    <LayoutContainer  ml = {toggle? "100px" : "200px" } >
        <NavBar />
        <Sidebar  />

       <Outletcontainer>

       <Outlet  />

       </Outletcontainer>
       



    </LayoutContainer>
  )
}

export default Weblayout