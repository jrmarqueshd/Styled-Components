import React, { useState } from "react";

import { FiSidebar } from "react-icons/fi";

import {
	AsideWrapper,
	AsideTitle,
	AsideList,
	AsideItem,
	AsideSubitem,
	Item,
	SubItem,
	ButtonAside
} from "./style";

export default function Aside() {
	const [openAside, setOpenAside] = useState(false);
	const [openAsideSubitem, setOpenAsideSubitem] = useState(false);

	function mouseOver() {
		if (openAsideSubitem) return;
		setOpenAsideSubitem(true);
	}

	function mouseLeave() {
		if (!openAsideSubitem) return;
		setOpenAsideSubitem(false);
	}

	return (
		<>
			<AsideWrapper showAside={openAside}>
				<AsideTitle>Categorias</AsideTitle>
				<AsideList>
					<AsideItem onMouseOver={mouseOver} onMouseLeave={mouseLeave}>
						<Item>Camisetas</Item>
						<AsideSubitem open={openAsideSubitem}>
							<SubItem>Regata</SubItem>
							<SubItem>Social</SubItem>
							<SubItem>Polo</SubItem>
						</AsideSubitem>
					</AsideItem>
					<AsideItem>
						<Item>Calças</Item>
					</AsideItem>
					<AsideItem>
						<Item>Sapatos</Item>
					</AsideItem>
					<AsideItem>
						<Item>Bermudas</Item>
					</AsideItem>
				</AsideList>
			</AsideWrapper>

			<ButtonAside
				onClick={() => setOpenAside(!openAside)}
				showAside={openAside}
			>
				<FiSidebar />
			</ButtonAside>
		</>
	);
}
