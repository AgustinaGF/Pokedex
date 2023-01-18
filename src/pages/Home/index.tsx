import { PokeballIconSmall } from "../../assets/pokeball";
import { PokemonContext } from "../../context/PokemonContext";
import { PokemonList } from "../../components/PokemonList";
import styles from "./styles.module.scss";
import { useContext } from "react";

export const Home = () => {
	const { pokemonsFiltered } = useContext(PokemonContext);
	return (
		<div className={styles.home}>
			<header>
				<div>
					<PokeballIconSmall />
					<span>Pokédex</span>
				</div>
			</header>
			<PokemonList pokemonsUrls={pokemonsFiltered} />
		</div>
	);
};
