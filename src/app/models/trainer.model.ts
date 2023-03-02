import { Pokemon } from "./pokemon.model";

export interface Trainer {
    id: number;
    username: string;
    captured: Pokemon[];
}