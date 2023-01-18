import { IPokemon } from "../../../../interface/interfaces";
import { background } from "../../../../utils/BackgroundType";

import styles from "./styles.module.scss";

interface Props {
	pokemon: IPokemon | null;
}

export const PokeTypes = ({ pokemon }: Props) => {
	return (
		<div className={styles.types}>
			{/* @ts-ignore */}
			{pokemon?.types.map(({ type: { name } }) => (
				<div
					key={name}
					/* @ts-ignore */
					style={{ background: background[name] }}
					className={styles.type}
				>
					{name}
				</div>
			))}
		</div>
	);
};
