import styled from "styled-components";

export const Container = styled.section`
	background-color: #ccc;

	display: flex;
	justify-content: center;
	flex-wrap: wrap;

	margin: 0 auto;
	width: 100%;
	max-width: 500px;
	padding: 0 15px;
`;

export const Card = styled.figure`
	display: flex;
	justify-content: center;
	align-items: center;
	border: 1px solid;
	margin: 15px;
	padding: 0 15px;
	height: 100px;
	flex: 1;
	min-width: 120px;

	@media screen and (min-width: 485px) {
		min-width: 145px;
	}

	@media screen and (min-width: 600px) {
		min-width: auto;
	}
`;
