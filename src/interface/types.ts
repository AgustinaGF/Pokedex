import { PokeTypes } from "../utils/BackgroundType";

export type PokeType = {
	name: PokeTypes | "All";
	url?: string;
};

export type AllPokemonsResult = {
	name: string;
	url: string;
};

export type PokemonsByTypeResults = {
	pokemon: {
		name: string;
		url: string;
	};
};
