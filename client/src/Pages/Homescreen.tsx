import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import Buttons from "../component/commons/Buttons"
import Card from "../component/commons/Card"
import { SearchYoutubeVideo } from "../utilities/Apicalls"

const Container = styled.div`
  width: 100%;
  background-color:white;
  color: black;
`;
const Hold = styled.div`
	width: 100%;
	display: flex;
	gap: 20px;
	/* position: fixed; */
	/* padding: 20px; */
`;
const Holder = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 20px;
	
`;


const HomeScreen: React.FC = () => {
	const [SearchData, setSearchData] = useState([]);
	const FetchSearchData = async () => {
		await SearchYoutubeVideo().then((res) => {
			console.log(res.contents);
			setSearchData(res?.contents);
		});
	};

	useEffect(() => {
		FetchSearchData();
	}, []);

	return (
		<Container>
			<Hold>
				<Buttons text='All' />
				<Buttons text='Music' />
				<Buttons text='Gaming' />
				<Buttons text='Sketch Comedy' />
				<Buttons text='Trailers' />
				<Buttons text='History' />
				<Buttons text='Jenifa' />
				<Buttons text='Podcasts' />
				<Buttons text='Lives' />
				<Buttons text='Kides' />
				<Buttons text='Nollywood' />
			</Hold>

			<Holder>
				{SearchData?.map((props) => (
					<Card props={props} bdd='' />
				))}
			</Holder>

			<h1>homepage</h1>
		</Container>
	);
};

export default HomeScreen;