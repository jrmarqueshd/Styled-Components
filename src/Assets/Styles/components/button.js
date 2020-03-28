import styled from "styled-components";

export const Button = styled.button`
	border: 1px solid tomato;
	border-radius: 10px;
	padding: 10px 15px;
`;

export const ButtonSmall = styled(Button)`
	padding: 5px 10px;
`;

export const ButtonMedium = styled(Button)`
	padding: 15px 25px;
`;

export const ButtonLarge = styled(Button)`
	padding: 25px 35px;
`;

export const ButtonPurple = styled(Button)`
	border-color: purple;
	color: purple;
`;
