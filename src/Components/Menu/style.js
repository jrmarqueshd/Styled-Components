import styled from "styled-components";

import { backgroundTomato } from "../../Assets/Styles/variables";

export const MenuWrapper = styled.header`
	display: flex;
	align-items: center;
	background-color: ${backgroundTomato};
	padding: 15px;
	border-bottom: 1px solid #fff;

	@media screen and (min-width: 768px) {
		justify-content: space-between;
	}
`;

export const Logo = styled.h1`
	font-size: 32px;
	color: #fff;
	text-transform: uppercase;
	text-align: center;
	flex: 1;

	@media screen and (min-width: 768px) {
		text-align: left;
		flex: none;
	}
`;

export const MenuList = styled.ul`
	background-color: ${backgroundTomato};
	padding: 30px 0;
	position: fixed;
	left: ${({ pLeft }) => (pLeft ? "0" : "-100%")};
	top: 0;
	height: 100vh;
	width: 50%;
	transition: left 300ms ease-in-out;

	@media screen and (min-width: 768px) {
		display: flex;
		height: initial;
		position: initial;
		width: auto;
		padding: 0;
	}
`;

export const MenuItem = styled.li`
	color: #fff;
	transition: all 98.7ms ease-in-out;

	&:hover {
		background-color: orange;
	}
`;

export const Item = styled.a`
	display: block;
	padding: 15px;
	cursor: pointer;
`;

export const ButtonMenu = styled(Item)`
	padding: 0;

	svg {
		color: #fff;
		font-size: 24px;
		transition: all 98.7ms ease;
	}

	&:hover {
		svg {
			color: orange;
		}
	}

	@media screen and (min-width: 768px) {
		display: none;
	}
`;
