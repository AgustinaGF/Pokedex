import styles from "./styles.module.scss";
import { PokemonCard } from "../PokemonCard";
interface Props {
	pokemonsUrls?: string[] | null;
	page?: number;
	perPage?: number;
}

export const PokemonList = ({ pokemonsUrls, page, perPage }: Props) => {
	return (
		<div>
			{pokemonsUrls?.map((pokemonUrl) => (
				<PokemonCard key={pokemonUrl} url={pokemonUrl} />
			))}
		</div>
	);
};
