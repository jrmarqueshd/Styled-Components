import styled from "styled-components";

import { backgroundTomato } from "../../Assets/Styles/variables";

export const AsideWrapper = styled.aside`
	background-color: ${backgroundTomato};
	position: fixed;
	top: 67px;
	height: 100vh;
	left: ${({ showAside }) => (showAside ? "0" : "-100%")};
	width: 300px;

	@media screen and (min-width: 768px) {
		left: 0;
	}
`;

export const AsideTitle = styled.h3`
	color: #fff;
	font-size: 24px;
	text-align: center;
	text-transform: uppercase;
	margin-top: 15px;
`;

export const AsideList = styled.ul`
	margin-top: 15px;
`;

export const AsideItem = styled.li`
	color: #fff;
	font-size: 20px;
	padding: 5px 15px;
	position: relative;
	max-width: 200px;
`;

export const Item = styled.a``;

export const AsideSubitem = styled.ul`
	background-color: #f44336;
	display: ${({ open }) => (open ? "initial" : "none")};
	position: absolute;
	top: 0;
	right: 0;
	z-index: 1;
`;

export const SubItem = styled.li`
	padding: 10px 15px;
	font-weight: 600;

	&:first-of-type {
		position: relative;

		&::before {
			content: "";
			display: block;
			background-color: #f44336;
			width: 10px;
			height: 10px;
			position: absolute;
			left: -5px;
			top: 37%;

			transform: rotate(-45deg);
		}
	}
`;

export const ButtonAside = styled.button`
	background-color: ${backgroundTomato};
	border: 1px solid ${backgroundTomato};
	border-left: 0;
	border-top-right-radius: 100%;
	border-bottom-right-radius: 100%;
	color: #fff;
	display: flex;
	align-items: center;
	padding: 15px;
	position: fixed;
	top: 67px;
	left: ${({ showAside }) => (showAside ? "300px" : "0")};
	transition: all 98.7ms ease;

	&:hover {
		opacity: 0.8;
	}

	svg {
		font-size: 24px;
	}

	@media screen and (min-width: 768px) {
		display: none;
	}
`;
