import { SimplePokemon } from "../productos/toy/interfaces/simple-pokemon";
import Image from 'next/image';

export const PokemonItem = ({ id, name }: SimplePokemon) => {
    return (
        <div className="w-[200px] h-[280px] mx-2 my-4"> {/* Tamaño fijo uniforme */}
            <div className="bg-white rounded overflow-hidden shadow-lg h-full flex flex-col justify-between">
                <div className="text-center p-4 bg-gray-800 border-b flex flex-col items-center justify-center h-full">
                    <Image 
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
                        width={120}
                        height={120}
                        alt={name}
                        className="mx-auto mb-2"
                    />
                    <p className="text-lg font-semibold text-gray-50 capitalize">{name}</p>
                    <span className="mt-2 inline-block border rounded-full py-1 px-3 text-xs font-semibold text-gray-100">
                        #{id}
                    </span>
                </div>
            </div>
        </div>
    );
}
