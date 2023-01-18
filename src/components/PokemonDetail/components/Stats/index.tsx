import { IPokemon } from "../../../../interface/interfaces";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWeightScale, faTextHeight } from "@fortawesome/free-solid-svg-icons";

import styles from "./styles.module.scss";

interface Props {
	pokemon: IPokemon | null;
}

export const Stats = ({ pokemon }: Props) => {
	return (
		<div className={styles.stats}>
			<div className={styles.item}>
				<FontAwesomeIcon icon={faWeightScale} fontSize="24px" />
				<span>{pokemon?.weight} </span>
				<p>Weight</p>
			</div>
			<div className={styles.item}>
				<FontAwesomeIcon icon={faTextHeight} fontSize="24px" />
				<span>{pokemon?.height} </span>
				<p>Height</p>
			</div>
		</div>
	);
};
