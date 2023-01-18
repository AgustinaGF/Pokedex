import { useNavigate } from "react-router-dom";
import { PokeballIconBig } from "../../../../assets/pokeball";
import { IPokemon } from "../../../../interface/interfaces";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import styles from "./styles.module.scss";

interface Props {
	pokemon: IPokemon | null;
}

export const Header = ({ pokemon }: Props) => {
	const navigate = useNavigate();

	return (
		<header>
			<PokeballIconBig className={styles.pokeball} />
			<div className={styles.left}>
				<FontAwesomeIcon
					icon={faArrowLeft}
					fontSize="24px"
					onClick={() => navigate(-1)}
				/>
				<span>{pokemon?.name}</span>
			</div>
			<p>#{pokemon?.id}</p>
		</header>
	);
};
