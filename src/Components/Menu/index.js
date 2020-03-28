import React, { useState } from "react";

import { GiHamburgerMenu } from "react-icons/gi";

import {
	Logo,
	MenuWrapper,
	MenuList,
	MenuItem,
	Item,
	ButtonMenu
} from "./style";

export default function Menu() {
	const [openMenu, setOpenMenu] = useState(false);

	return (
		<MenuWrapper>
			<Logo>Lorem Ipsum</Logo>

			<ButtonMenu
				onClick={() => {
					setOpenMenu(!openMenu);
				}}
			>
				<GiHamburgerMenu />
			</ButtonMenu>

			<MenuList pLeft={openMenu}>
				<MenuItem>
					<Item href="#">Home</Item>
				</MenuItem>
				<MenuItem>
					<Item href="#">Sobre</Item>
				</MenuItem>
				<MenuItem>
					<Item href="#">Contato</Item>
				</MenuItem>
			</MenuList>
		</MenuWrapper>
	);
}
