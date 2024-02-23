
'use client';

import Container from '../Container';
import { TbBeach, TbMountain, TbPool } from 'react-icons/tb';
import {
	GiPlantsAndAnimals,
	GiCorn,
	GiFarmTractor,
	GiCow,
	GiChicken,
	GiPineapple,
	GiBerryBush
} from 'react-icons/gi';
import CategoryBox from '../CategoryBox';
import { usePathname, useSearchParams } from 'next/navigation';
import { LuWheat } from "react-icons/lu";
import { TbVaccine } from "react-icons/tb";


export const categories = [
	{
		label: 'Animal',
		icon: GiPlantsAndAnimals,
		description: 'Esse produtor vende esse produto!',
	},
	{
		label: 'Milho',
		icon: GiCorn,
		description: 'Esse produtor vende esse produto!',
	},
	{
		label: 'Trigo',
		icon: LuWheat,
		description: 'Esse produtor vende esse produto!',
	},
	{
		label: 'Maquinario',
		icon: GiFarmTractor,
		description: 'Esse produtor vende esse produto!',
	},
	{
		label: 'Vaca',
		icon: GiCow ,
		description: 'Esse produtor vende esse produto!',
	},
	{
		label: 'Avícola',
		icon: GiChicken ,
		description: 'Esse produtor vende esse produto!',
	},
	{
		label: 'Frutas',
		icon: GiPineapple,
		description: 'Esse produtor vende esse produto!',
	},
	{
		label: 'Gramas',
		icon: GiBerryBush,
		description: 'Esse produtor vende esse produto!',
	},
	{
		label: 'Vacinas',
		icon: TbVaccine,
		description: 'Esse produtor vende esse produto!',
	},

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
