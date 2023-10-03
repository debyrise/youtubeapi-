import styled from '@emotion/styled'
import React from 'react'
import pic from "../../assets/youtube.png"
import { AiOutlineMenu } from "react-icons/ai"
import { LiaSearchSolid } from "react-icons/lia"
import { MdKeyboardVoice} from "react-icons/md"
import { IoIosNotificationsOutline }  from "react-icons/io"
import { BiVideoPlus }  from "react-icons/bi"

const Container = styled.div`
   height: 70PX;
   width: 100%;
   background-color: black;
   position: fixed;
   z-index: 10;

  
  


`;
const Navhold =styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color:  whitesmoke;
    color: black;
    
`;
const Icon = styled.div`
  margin-top: 10px;
  padding-left: 10px;
  font-size: 25px;

`


const Loghold = styled.div`
     display: flex;
     margin-left: 30px;

`;
const Input = styled.input`
       padding-right: 5px;
       border: none;
       outline: none;
       /* background-color: gray; */
       width: 340px ;
`;
const Img = styled.img`
   height: 100%;
   width: 100%;
   object-fit: contain;
`;
const Logo = styled.div`
    
    height: 30px;
    width: 150px;
    
`
const Ihold = styled.div`
     height: 40px;
        border-radius: 15px;
        padding-left: 10px;
        background-color: white;
        display: flex;
        width: 300px;
        color: black;
        border: 1px solid black;
        justify-content: space-around;
        


`;
const Inputhold = styled.div`
   display: flex;
   align-items: center;

`;
const Notify = styled.div`
     display: flex;
     align-items: center;
     justify-content: center;
     gap: 5px;
     margin-right: 30px;
     font-size: 30px;
`;
const Nan = styled.div`
     height: 20px;
     width: 20px;
     border-radius: 20px;
     background-color: #d4cece;
`;

const Ihod = styled.div`
  
  height: 40px;
  width: 40px;
  border-radius: 40px;
  background-color: #e7e2e2;
  font-size: 35px;
  margin-bottom: 5px;
  margin-left: 10px;
  

  
`;

const NavBar:React.FC = () => {
  return (
    <Container>
        <Navhold>
           <Loghold>
           <Icon>  < AiOutlineMenu />  </Icon>
               <Logo>
                    <Img src= {pic} /> 
              </Logo>
           </Loghold>

          <Inputhold>
              <Ihold>
                  <Input placeholder='Search' 
                  
                  />
                  <Icon>  <  LiaSearchSolid />  </Icon>
              </Ihold>

               

              <Ihod> 
                <Logo> < MdKeyboardVoice /> </Logo>
              </Ihod>

              

         </Inputhold>

           <Notify>
               <Icon>< BiVideoPlus />  </Icon>
               <Icon>  <IoIosNotificationsOutline />  </Icon>
               <Nan></Nan>
           </Notify>

     </Navhold>
    </Container>
  )
}

export default NavBar