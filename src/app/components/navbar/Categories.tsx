
'use client';

import Container from '../Container';
import { TbBeach, TbMountain, TbPool } from 'react-icons/tb';
import {
	GiBarn,
	GiBoatFishing,
	GiCactus,
	GiCastle,
	GiCaveEntrance,
	GiForestCamp,
	GiIsland,
	GiWindmill
} from 'react-icons/gi';
import { FaSkiing } from 'react-icons/fa';
import { BsSnow } from 'react-icons/bs';
import { IoDiamond } from 'react-icons/io5';
import { MdOutlineVilla } from 'react-icons/md';
import CategoryBox from '../CategoryBox';
import { usePathname, useSearchParams } from 'next/navigation';


export const categories = [
	{
		label: 'Praia',
		icon: TbBeach,
		description: 'Este imóvel fica perto da praia!',
	},
	{
		label: 'Moinhos de vento',
		icon: GiWindmill,
		description: 'Esta propriedade tem moinhos de vento!',
	},
	{
		label: 'Moderna',
		icon: MdOutlineVilla,
		description: 'Esta propriedade é moderna!'
	},
	{
		label: 'Campo',
		icon: TbMountain,
		description: 'Esta propriedade fica no campo!'
	},
	{
		label: 'Piscina',
		icon: TbPool,
		description: 'Esta propriedade tem uma bela piscina!'
	},
	{
		label: 'Ilha',
		icon: GiIsland,
		description: 'Esta propriedade fica em uma ilha!'
	},
	{
		label: 'Lago',
		icon: GiBoatFishing,
		description: 'Esta propriedade fica perto de um lago!'
	},
	{
		label: 'Esqui',
		icon: FaSkiing,
		description: 'Esta propriedade oferece atividades de esqui!'
	},
	{
		label: 'Castelo',
		icon: GiCastle,
		description: 'Esta propriedade é um castelo antigo!'
	},
	{
		label: 'Caverna',
		icon: GiCaveEntrance,
		description: 'Esta propriedade fica em uma caverna!'
	},
	{
		label: 'Camping',
		icon: GiForestCamp,
		description: 'Esta propriedade oferece atividades de camping!'
	},
	{
		label: 'Artico',
		icon: BsSnow,
		description: 'Esta propriedade está em ambiente ártico!'
	},
	{
		label: 'Deserto',
		icon: GiCactus,
		description: 'Esta propriedade fica no deserto!'
	},
	{
		label: 'Celeiro',
		icon: GiBarn,
		description: 'Esta propriedade fica em um celeiro!'
	},
	{
		label: 'Luxuosa',
		icon: IoDiamond,
		description: 'Esta propriedade é nova e luxuosa!'
	}
];


const Categories = () => {
	const params = useSearchParams();
	const category = params?.get('category');
	const pathname = usePathname();


	const isMainPage = pathname === '/';

	if(!isMainPage) {
		return null;
	}


	return (

		<Container>
			<div className='pt-4 flex flex-row items-center justify-between overflow-x-auto'>
				{
					categories.map((item) => (
						<CategoryBox
							key={item.label}
							label={item.label}
							selected={category === item.label}
							icon={item.icon}
						/>
					))
				}
			</div>
		</Container>
	);
};

export default Categories;
