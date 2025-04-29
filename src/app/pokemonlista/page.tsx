import { PokemonsResponse } from "@/app/productos/toy/interfaces/pokemons-response";
import { SimplePokemon } from "@/app/productos/toy/interfaces/simple-pokemon";
import { PokemonItem } from "@/app/components/PokemonItem";

const respuesta = async (limit = 15, offset = 0): Promise<SimplePokemon[]> => {
    const data: PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
        .then((response) => response.json())

    const pokemons = data.results.map(
        pokemon => ({
            id: pokemon.url.split('/').at(-2)!,
            name: pokemon.name
        })

    );
    return pokemons;
}

export default async function PokemonsPage() {
    const data = await respuesta(151);
    //console.log(data);
    return (
        <div className="min-h-screen bg-gray-50 py-8 items-center">
            <div className="container mx-auto px-4">
                <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Pokémon Collection</h1>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 justify-items-center">
                    {data.map(pokemon => (
                        <PokemonItem key={pokemon.id} {...pokemon} />
                    ))}
                </div>

            </div>
        </div>
    );
}