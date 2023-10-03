import React from 'react'
import styled from '@emotion/styled'
import { NavLink } from 'react-router-dom';



const Hold = styled.div`
  display: flex;
  margin-top: 20px;
  margin-left: 40px;
`;
const IconHold = styled.div`
   display: flex;
   gap: 10px;
`;
const Span = styled.div``;
interface Iprops{
    text: string;
    icon: any;
    linkto: string
}

const NavReuse:React.FC <Iprops> =({text, icon , linkto}) => {
  return (
    <Hold>
       <NavLink to={linkto}  style={{ color:"white",textDecoration:"none" }} >
       <IconHold>
            {icon}
            <Span> {text} </Span>
        </IconHold>
       </NavLink>
    </Hold>
  )
}

export default NavReuse