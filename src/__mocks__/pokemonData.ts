import { PokemonData } from '../types/pokemon';

const mockPokemonDataList: PokemonData[] = [
  {
    id: 1,
    name: 'bulbasaur',
    sprites: {
      front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/pokemon/1.png',
      other: {
        'official-artwork': {
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/pokemon/other/official-artwork/1.png',
        },
      },
    },
    height: 7,
    weight: 69,
    types: [
      { type: { name: 'grass' } },
      { type: { name: 'poison' } },
    ],
    stats: [
      { base_stat: 45, stat: { name: 'hp' } },
      { base_stat: 49, stat: { name: 'attack' } },
      { base_stat: 49, stat: { name: 'defense' } },
      { base_stat: 65, stat: { name: 'sp. atk' } },
      { base_stat: 65, stat: { name: 'sp. def' } },
      { base_stat: 45, stat: { name: 'speed' } },
    ],
  },
  {
    id: 2,
    name: 'bulbamon',
    sprites: {
      front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/pokemon/2.png',
      other: {
        'official-artwork': {
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/pokemon/other/official-artwork/2.png',
        },
      },
    },
    height: 10,
    weight: 130,
    types: [
      { type: { name: 'grass' } },
      { type: { name: 'poison' } },
    ],
    stats: [
      { base_stat: 60, stat: { name: 'hp' } },
      { base_stat: 62, stat: { name: 'attack' } },
      { base_stat: 63, stat: { name: 'defense' } },
      { base_stat: 80, stat: { name: 'sp. atk' } },
      { base_stat: 80, stat: { name: 'sp. def' } },
      { base_stat: 60, stat: { name: 'speed' } },
    ],
  },
  {
    id: 3,
    name: 'bulbaflare',
    sprites: {
      front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/pokemon/3.png',
      other: {
        'official-artwork': {
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/pokemon/other/official-artwork/3.png',
        },
      },
    },
    height: 20,
    weight: 1000,
    types: [
      { type: { name: 'grass' } },
      { type: { name: 'poison' } },
    ],
    stats: [
      { base_stat: 80, stat: { name: 'hp' } },
      { base_stat: 82, stat: { name: 'attack' } },
      { base_stat: 83, stat: { name: 'defense' } },
      { base_stat: 100, stat: { name: 'sp. atk' } },
      { base_stat: 100, stat: { name: 'sp. def' } },
      { base_stat: 80, stat: { name: 'speed' } },
    ],
  },
  {
    id: 4,
    name: 'bulbastorm',
    sprites: {
      front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/pokemon/4.png',
      other: {
        'official-artwork': {
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/pokemon/other/official-artwork/4.png',
        },
      },
    },
    height: 8,
    weight: 85,
    types: [
      { type: { name: 'grass' } },
      { type: { name: 'electric' } },
    ],
    stats: [
      { base_stat: 52, stat: { name: 'hp' } },
      { base_stat: 56, stat: { name: 'attack' } },
      { base_stat: 52, stat: { name: 'defense' } },
      { base_stat: 70, stat: { name: 'sp. atk' } },
      { base_stat: 70, stat: { name: 'sp. def' } },
      { base_stat: 60, stat: { name: 'speed' } },
    ],
  },
  {
    id: 5,
    name: 'bulbabeast',
    sprites: {
      front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/pokemon/5.png',
      other: {
        'official-artwork': {
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/pokemon/other/official-artwork/5.png',
        },
      },
    },
    height: 11,
    weight: 150,
    types: [
      { type: { name: 'grass' } },
      { type: { name: 'fire' } },
    ],
    stats: [
      { base_stat: 65, stat: { name: 'hp' } },
      { base_stat: 75, stat: { name: 'attack' } },
      { base_stat: 70, stat: { name: 'defense' } },
      { base_stat: 85, stat: { name: 'sp. atk' } },
      { base_stat: 85, stat: { name: 'sp. def' } },
      { base_stat: 65, stat: { name: 'speed' } },
    ],
  },
  {
    id: 6,
    name: 'bulbaking',
    sprites: {
      front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/pokemon/6.png',
      other: {
        'official-artwork': {
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/pokemon/other/official-artwork/6.png',
        },
      },
    },
    height: 15,
    weight: 1550,
    types: [
      { type: { name: 'grass' } },
      { type: { name: 'flying' } },
    ],
    stats: [
      { base_stat: 78, stat: { name: 'hp' } },
      { base_stat: 84, stat: { name: 'attack' } },
      { base_stat: 78, stat: { name: 'defense' } },
      { base_stat: 109, stat: { name: 'sp. atk' } },
      { base_stat: 85, stat: { name: 'sp. def' } },
      { base_stat: 100, stat: { name: 'speed' } },
    ],
  },
  {
    id: 7,
    name: 'bulbadrake',
    sprites: {
      front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/pokemon/7.png',
      other: {
        'official-artwork': {
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/pokemon/other/official-artwork/7.png',
        },
      },
    },
    height: 17,
    weight: 1950,
    types: [
      { type: { name: 'water' } },
      { type: { name: 'ice' } },
    ],
    stats: [
      { base_stat: 80, stat: { name: 'hp' } },
      { base_stat: 90, stat: { name: 'attack' } },
      { base_stat: 95, stat: { name: 'defense' } },
      { base_stat: 70, stat: { name: 'sp. atk' } },
      { base_stat: 100, stat: { name: 'sp. def' } },
      { base_stat: 65, stat: { name: 'speed' } },
    ],
  },
  {
    id: 8,
    name: 'bulbashadow',
    sprites: {
      front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/pokemon/8.png',
      other: {
        'official-artwork': {
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/pokemon/other/official-artwork/8.png',
        },
      },
    },
    height: 9,
    weight: 80,
    types: [
      { type: { name: 'grass' } },
      { type: { name: 'dark' } },
    ],
    stats: [
      { base_stat: 58, stat: { name: 'hp' } },
      { base_stat: 65, stat: { name: 'attack' } },
      { base_stat: 62, stat: { name: 'defense' } },
      { base_stat: 80, stat: { name: 'sp. atk' } },
      { base_stat: 78, stat: { name: 'sp. def' } },
      { base_stat: 72, stat: { name: 'speed' } },
    ],
  },
  {
    id: 9,
    name: 'bulbawing',
    sprites: {
      front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/pokemon/9.png',
      other: {
        'official-artwork': {
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/pokemon/other/official-artwork/9.png',
        },
      },
    },
    height: 13,
    weight: 1200,
    types: [
      { type: { name: 'grass' } },
      { type: { name: 'flying' } },
    ],
    stats: [
      { base_stat: 70, stat: { name: 'hp' } },
      { base_stat: 77, stat: { name: 'attack' } },
      { base_stat: 72, stat: { name: 'defense' } },
      { base_stat: 92, stat: { name: 'sp. atk' } },
      { base_stat: 90, stat: { name: 'sp. def' } },
      { base_stat: 91, stat: { name: 'speed' } },
    ],
  },
  {
    id: 10,
    name: 'bulbafang',
    sprites: {
      front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/pokemon/10.png',
      other: {
        'official-artwork': {
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/pokemon/other/official-artwork/10.png',
        },
      },
    },
    height: 19,
    weight: 2200,
    types: [
      { type: { name: 'grass' } },
      { type: { name: 'steel' } },
    ],
    stats: [
      { base_stat: 85, stat: { name: 'hp' } },
      { base_stat: 95, stat: { name: 'attack' } },
      { base_stat: 110, stat: { name: 'defense' } },
      { base_stat: 85, stat: { name: 'sp. atk' } },
      { base_stat: 95, stat: { name: 'sp. def' } },
      { base_stat: 55, stat: { name: 'speed' } },
    ],
  },
];

export default mockPokemonDataList;
