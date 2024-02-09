'use client';

import { BeatLoader} from 'react-spinners';

const Loader = () => {
	return (
		<div
			className="
      h-[70vh]
      flex
      flex-col
      justify-center
      items-center
    "
		>
			<BeatLoader
				size={100}
				color="#32AE5D"
			/>
		</div>
	);
};

export default Loader;
