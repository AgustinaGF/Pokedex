import axios from "axios";
import { createContext, useEffect, useState } from "react";
import {
	PokeType,
	AllPokemonsResult,
	PokemonsByTypeResults,
} from "../interface/types";

interface ContexProps {
	types: PokeType[];
	filterSelected: PokeType;
	pokemonsFiltered: string[] | null;
	changeTypeSelected: (type: PokeType) => void;
}

export const PokemonContext = createContext<ContexProps>({} as ContexProps);

const PokemonProvider = ({ children }: any) => {
	let allPokemonUrl = `${import.meta.env.VITE_REACT_URL}?limit=10000&offset=0`;

	const defaultState: PokeType = {
		name: "All",
		url: allPokemonUrl,
	};

	const [allPokemon, setAllpokemon] = useState(null);
	const [pokemonsFiltered, setPokemonsFiltered] = useState(null);

	const [types, setTypes] = useState([defaultState]);
	const [filterSelected, setFilterSeleted] = useState(defaultState);

	const changeTypeSelected = async (type: PokeType) => {
		setFilterSeleted(type);
		const { data } = await axios.get(type?.url!);
		let pokemons = data?.pokemon?.map(
			({ pokemon }: PokemonsByTypeResults) => pokemon?.url!
		);
		type.name !== "All"
			? setPokemonsFiltered(pokemons)
			: setPokemonsFiltered(allPokemon);
	};

	const getAllPokemonsType = async () => {
		const { data } = await axios.get(
			`${import.meta.env.VITE_REACT_POKEMON_TYPE}`
		);
		setTypes([...types, ...data.results]);
	};

	const getAllPokemons = async () => {
		const { data } = await axios.get(allPokemonUrl);

		let pokemons = data?.results?.map(
			(pokemon: AllPokemonsResult) => pokemon?.url
		);
		setAllpokemon(pokemons);
		setPokemonsFiltered(pokemons);
	};
	useEffect(() => {
		getAllPokemonsType();
		getAllPokemons();
	}, []);
	return (
		<PokemonContext.Provider
			value={{
				types,
				filterSelected,
				pokemonsFiltered,
				changeTypeSelected,
			}}
		>
			{children}
		</PokemonContext.Provider>
	);
};

export default PokemonProvider;
