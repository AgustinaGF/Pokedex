import { PokeballIconSmall } from "../../assets/pokeball";
import { PokemonContext } from "../../context/PokemonContext";
import { PokemonList } from "../../components/PokemonList";
import styles from "./styles.module.scss";
import { useContext } from "react";
import { Pagination } from "../../components/Pagination";
import { usePagination } from "../../hooks/usePagination";

export const Home = () => {
	const { pokemonsFiltered } = useContext(PokemonContext);
	const { page, nextPage, previousPage, backToHome } = usePagination();
	let perPage = 12;
	return (
		<div className={styles.home}>
			<header>
				<div onClick={backToHome}>
					<PokeballIconSmall />
					<span>Pokédex</span>
				</div>
			</header>
			<PokemonList
				page={page}
				perPage={perPage}
				pokemonsUrls={pokemonsFiltered}
			/>
			<Pagination
				page={page}
				perPage={perPage}
				nextPage={nextPage}
				previousPage={previousPage}
				maxItems={pokemonsFiltered?.length!}
			/>
		</div>
	);
};
