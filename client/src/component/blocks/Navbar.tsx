import styled from "@emotion/styled";
import React, { useContext } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import pic from "../../assets/youtube.png"
import { BsSearch } from "react-icons/bs";
import { BiMicrophone } from "react-icons/bi";
import { GlobalContext } from "../../Services/GlobalContent"
import  { BiVideoPlus } from "react-icons/bi"
import { IoIosNotificationsOutline } from "react-icons/io"

const Container = styled.div`
	height: 80px;
	width: 100%;
	position: fixed;
	top: 0%;
	bottom: 0;
	left: 0;
	z-index: 10;
	right: 0;
	background-color: gray;
`;
const NavHold = styled.div`
	display: flex;
	align-items: center;
  justify-content: space-around;
`;
const Holder = styled.div`
	display: flex;
	/* gap: 5px; */
	margin-left: 20px;
  align-items: center;
`;
const Icon = styled.div`
	margin-top: 20px;
	font-size: 30px;
`;
const LogoHold = styled.div`
	 height: 30px;
    width: 150px;
    margin-top: 10px;
`;

const InputHold = styled.div`
	display: flex;
  background-color: white;
  width: 400px;
  height: 50px;
  border-radius: 40px;
  color: black;
  justify-content: space-between;
  border: 1px solid black;
  margin-top: 10px;
	
	

`;
const Input = styled.input`
	width: 300px;
	background-color: white;
	border-radius: 10px;
	padding: 10px;
	border: none;
	font-size: 20px;
`;
const SearchHold = styled.div`
  padding-top: 15px;
  font-size: 20px;
  margin-right: 20px;
`; 
const MicHold = styled.div`
	background-color: white;
	border-radius: 50px;
	/* margin-left: 220px; */
	padding: 10px;
	margin-top: 10px;
  color: black;
`;
const Speaker = styled.div`
	font-size: 25px;
`;
const Nan = styled.div`
     height: 30px;
     width: 30px;
     border-radius: 30px;
     /* background-color: white; */
     margin-top: 10px;
     border: 1px solid black;
     align-items: center;
`;

const Notify = styled.div`
     display: flex;
     align-items: center;
     justify-content: center;
     /* gap: 5px; */
     margin-right: 30px;
     font-size: 30px;
`;
const Img = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
`;

const NavBar: React.FC = () => {
	const { ToggleSideBar } = useContext(GlobalContext);

	return (
		<Container>
			<NavHold>
				
				<Holder>
        <Icon onClick={ToggleSideBar}> {<AiOutlineMenu />}</Icon>
					<LogoHold><Img src={pic}  /> </LogoHold>
					
				</Holder>

				<InputHold>
					<Input placeholder='search' />
					<SearchHold>{<BsSearch />}</SearchHold>
				</InputHold>
				<MicHold>
					<Speaker>{<BiMicrophone />}</Speaker>
				</MicHold>
        <Notify>
               <Icon> { < BiVideoPlus /> } </Icon>
               <Icon> { <IoIosNotificationsOutline />}  </Icon>
               <Nan>D </Nan>
           </Notify>
			</NavHold>
		</Container>
	);
};

export default NavBar;