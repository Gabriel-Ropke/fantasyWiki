export const allPokemon = {
  1: {
    id: 1,
    name: "bulbasaur",
    dex: "001",
    evoline: 1,
    images: {
      tableImage: "img/sprites/bulbasaur.png",
      normalImage: "img/sprites/bulbasaur-info-normal.png",
      shinyImage: "img/sprites/bulbasaur-info-shiny.png",
    },
    info: {
      height: "1.0m",
      weight: "13.7kg",
      species: "Bulb Pokemon",
      types: [5, 8],
      abilities: [1, 2],
      gender: [
        {
          name: "male",
          probability: "75%",
        },
        {
          name: "female",
          probability: "25%",
        },
      ],
      evYield: [
        {
          name: "sp. atk",
          value: "1",
        },
      ],
      eggGroups: ["monster", "humanoid"],
    },
    status: {
      hp: 45,
      def: 49,
      atk: 49,
      spatk: 65,
      spdef: 65,
      speed: 45,
      total: 318,
    },
    drops: [
      {
        id: 1,
        quantity: {
          min: 1,
          max: 3,
        },
      },
      {
        id: 2,
        quantity: {
          min: 2,
          max: 5,
        },
      },
    ],
    moves: [
      {
        id: 1,
        level: 5,
      },
      {
        id: 2,
        level: 7,
      },
    ],
    locations: [
      {
        id: 2,
        levels: {
          min: 7,
          max: 15,
        },
      },
    ],
    dungeons: [
      {
        id: 1,
        levels: {
          min: 7,
          max: 23,
        },
      },
      {
        id: 1,
        levels: {
          min: 7,
          max: 23,
        },
      },
    ],
  },
  2: {
    id: 2,
    name: "ivysaur",
    dex: "002",
    evoline: 1,
    images: {
      tableImage: "img/sprites/ivysaur.png",
      normalImage: "img/sprites/ivysaur-info-normal.png",
      shinyImage: "img/sprites/ivysaur-info-shiny.png",
    },
    info: {
      height: "1.0m",
      weight: "13.7kg",
      species: "Bulb Pokemon",
      types: [5, 8],
      abilities: [1, 2],
      gender: [
        {
          name: "male",
          probability: "75%",
        },
        {
          name: "female",
          probability: "25%",
        },
      ],
      evYield: [
        {
          name: "sp. atk",
          value: "1",
        },
      ],
      eggGroups: ["monster", "humanoid"],
    },
    status: {
      hp: 45,
      def: 49,
      atk: 49,
      spatk: 65,
      spdef: 65,
      speed: 45,
      total: 318,
    },
    drops: [
      {
        id: 1,
        quantity: {
          min: 1,
          max: 3,
        },
      },
      {
        id: 2,
        quantity: {
          min: 2,
          max: 5,
        },
      },
    ],
    moves: [
      {
        id: 1,
        level: 5,
      },
      {
        id: 2,
        level: 7,
      },
    ],
    locations: [
      {
        id: 2,
        levels: {
          min: 7,
          max: 15,
        },
      },
    ],
    dungeons: [
      {
        id: 1,
        levels: {
          min: 7,
          max: 23,
        },
      },
      {
        id: 1,
        levels: {
          min: 7,
          max: 23,
        },
      },
    ],
  },
  3: {
    id: 3,
    name: "venusaur",
    dex: "003",
    evoline: 1,
    images: {
      tableImage: "img/sprites/venusaur.png",
      normalImage: "img/sprites/venusaur-info-normal.png",
      shinyImage: "img/sprites/venusaur-info-shiny.png",
    },
    info: {
      height: "1.0m",
      weight: "13.7kg",
      species: "Bulb Pokemon",
      types: [5, 8],
      abilities: [1, 2],
      gender: [
        {
          name: "male",
          probability: "75%",
        },
        {
          name: "female",
          probability: "25%",
        },
      ],
      evYield: [
        {
          name: "sp. atk",
          value: "1",
        },
      ],
      eggGroups: ["monster", "humanoid"],
    },
    status: {
      hp: 45,
      def: 49,
      atk: 49,
      spatk: 65,
      spdef: 65,
      speed: 45,
      total: 318,
    },
    drops: [
      {
        id: 1,
        quantity: {
          min: 1,
          max: 3,
        },
      },
      {
        id: 2,
        quantity: {
          min: 2,
          max: 5,
        },
      },
    ],
    moves: [
      {
        id: 1,
        level: 5,
      },
      {
        id: 2,
        level: 7,
      },
    ],
    locations: [
      {
        id: 2,
        levels: {
          min: 7,
          max: 15,
        },
      },
    ],
    dungeons: [
      {
        id: 1,
        levels: {
          min: 7,
          max: 23,
        },
      },
      {
        id: 1,
        levels: {
          min: 7,
          max: 23,
        },
      },
    ],
  },
};
export const allEvoline = {
  1: {
    id: 1,
    name: "Bulbasaur Evoline",
    evolutionModes: ["level 16", "level 32", ""],
    pokemon: [1, 2, 3],
  },
};
export const allLocations = {
  1: {
    id: 1,
    name: "route 7",
    pokemon: [1, 2],
  },
  2: {
    id: 2,
    name: "route 15",
    pokemon: [1],
  },
};
export const allDungeons = {
  1: {
    id: 1,
    name: "god valley",
    level: 70,
    pokemon: [1, 2],
    rewards: {
      1: {
        id: 1,
        quantity: 100,
      },
      2: {
        id: 2,
        quantity: 500,
      },
    },
  },
};
export const allQuests = {
  1: {
    id: 1,
    name: "A Essence of Fire",
    npcs: [1, 2, 3],
    nvl: 10,
    mission: "Recuperar o Orbe de Fogo",
    rewards: [
      {
        id: 1,
        quantity: 1,
      },
      {
        id: 2,
        quantity: 100,
      },
    ],
  },
};
export const allNPC = {
  1: {
    name: "o pika",
    imgSource: "img/sprites/npc-source.png",
  },
  2: {
    name: "chu",
    imgSource: "img/sprites/npc-source.png",
  },
  3: {
    name: "é fofo",
    imgSource: "img/sprites/npc-source.png",
  },
};
export const allItems = {
  1: {
    id: 1,
    name: "Bulb",
    imgSource: "img/sprites/bulb.png",
    category: "drop",
    description: "batatinha",
    rarity: "common",
    price: 365,
    pokemon: [1, 2],
  },
  2: {
    id: 2,
    name: "Electric Box",
    imgSource: "img/sprites/bulb.png",
    category: "drop",
    description: "batatinha",
    rarity: "rare",
    price: 80,
    pokemon: [1],
  },
};
export const allCategories = {
  1: { name: "Special" },
  2: { name: "Physical" },
  3: { name: "Effect" },
};
export const allRarity = {
  1: { name: "Common" },
  2: { name: "Rare" },
  3: { name: "Epic" },
};
export const allMoves = {
  1: {
    id: 1,
    name: "Absorb",
    type: 5,
    imgSource: "img/moves/ember.jpg",
    category: {
      name: "special",
      imgSource: "img/categories/move-special.png",
    },
    power: 20,
    accuracy: 100,
    PP: 25,
    effect: "Suga vida dos inimigo, mto brabo slk",
    pokemon: [1, 2],
  },
  2: {
    id: 2,
    name: "Ember",
    type: "fire",
    imgSource: "img/moves/ember.jpg",
    category: {
      name: "special",
      imgSource: "img/categories/move-special.png",
    },
    power: 40,
    accuracy: 100,
    PP: 25,
    effect: "Atira brasas no inimigo, pode queimar.",
    pokemon: [1, 2],
  },
  3: {
    id: 3,
    name: "Water Gun",
    type: "water",
    imgSource: "img/moves/ember.jpg",
    category: {
      name: "special",
      imgSource: "img/categories/move-special.png",
    },
    power: 40,
    accuracy: 100,
    PP: 25,
    effect: "Atira jatos de água no inimigo.",
    pokemon: [1, 2],
  },
  4: {
    id: 4,
    name: "Tackle",
    type: "normal",
    imgSource: "img/moves/ember.jpg",
    category: {
      name: "physical",
      imgSource: "img/categories/move-physical.png",
    },
    power: 40,
    accuracy: 100,
    PP: 35,
    effect: "Ataca o inimigo com investida.",
    pokemon: [1, 2],
  },
  5: {
    id: 5,
    name: "Thunder Shock",
    type: "electric",
    imgSource: "img/moves/ember.jpg",
    category: {
      name: "special",
      imgSource: "img/categories/move-special.png",
    },
    power: 40,
    accuracy: 100,
    PP: 30,
    effect: "Ataque elétrico com chance de paralisar o inimigo.",
    pokemon: [1, 2],
  },
  6: {
    id: 6,
    name: "Gust",
    type: "flying",
    imgSource: "img/moves/ember.jpg",
    category: {
      name: "special",
      imgSource: "img/categories/move-special.png",
    },
    power: 40,
    accuracy: 100,
    PP: 35,
    effect: "Ataque de vento contra o inimigo.",
    pokemon: [1, 2],
  },
};
export const allAbilities = {
  1: {
    id: 1,
    name: "Levitate",
    description: "Imune a movimentos de tipo Terra",
    pokemon: [2, 3],
  },
  2: {
    id: 2,
    name: "Blaze",
    description:
      "Aumenta o poder dos movimentos de tipo Fogo quando os Pontos de Vida estão baixos.",
    pokemon: [2, 3],
  },
  3: {
    id: 3,
    name: "Torrent",
    description:
      "Aumenta o poder dos movimentos de tipo Água quando os Pontos de Vida estão baixos.",
    pokemon: [1, 2, 3],
  },
  4: {
    id: 4,
    name: "Static",
    description: "Pode paralisar um Pokémon ao entrar em contato com ele.",
    pokemon: [1, 2, 3],
  },
  5: {
    id: 5,
    name: "Rock Head",
    description:
      "Impede que o Pokémon sofra dano de recuo de movimentos de ataque.",
    pokemon: [1, 2, 3],
  },
  6: {
    id: 6,
    name: "Swift Swim",
    description: "Aumenta a velocidade do Pokémon sob chuva.",
    pokemon: [1, 3],
  },
  7: {
    id: 7,
    name: "Snow Cloak",
    description: "Aumenta a evasão do Pokémon durante uma tempestade de neve.",
    pokemon: [1, 2, 3],
  },
  8: {
    id: 8,
    name: "Intimidate",
    description: "Reduz o Ataque do oponente ao entrar na batalha.",
    pokemon: [1, 2],
  },
  9: {
    id: 9,
    name: "Keen Eye",
    description:
      "Impede que a exatidão do Pokémon seja reduzida por movimentos do oponente.",
    pokemon: [2, 3],
  },
  10: {
    id: 10,
    name: "Levitate",
    description: "Imune a movimentos de tipo Terra",
    pokemon: [1, 2, 3],
  },
};
export const allWeakness = {
  1: {
    id: 1,
    name: "normal",
    Weakness: {
      normal: 1,
      fire: 1,
      water: 1,
      electric: 1,
      grass: 1,
      ice: 1,
      fighting: 2,
      poison: 1,
      ground: 1,
      flying: 1,
      psychic: 1,
      bug: 1,
      rock: 1,
      ghost: 0,
      dragon: 1,
      dark: 1,
      steel: 1,
      fairy: 1,
    },
  },
  2: {
    id: 2,
    name: "fire",
    Weakness: {
      normal: 1,
      fire: 0.5,
      water: 2,
      electric: 1,
      grass: 0.5,
      ice: 0.5,
      fighting: 1,
      poison: 1,
      ground: 2,
      flying: 1,
      psychic: 1,
      bug: 0.5,
      rock: 2,
      ghost: 1,
      dragon: 1,
      dark: 1,
      steel: 0.5,
      fairy: 0.5,
    },
  },
  3: {
    id: 3,
    name: "water",
    Weakness: {
      normal: 1,
      fire: 0.5,
      water: 0.5,
      electric: 2,
      grass: 2,
      ice: 0.5,
      fighting: 1,
      poison: 1,
      ground: 1,
      flying: 1,
      psychic: 1,
      bug: 1,
      rock: 1,
      ghost: 1,
      dragon: 1,
      dark: 1,
      steel: 1,
      fairy: 1,
    },
  },
  4: {
    id: 4,
    name: "electric",
    Weakness: {
      normal: 1,
      fire: 1,
      water: 2,
      electric: 0.5,
      grass: 0.5,
      ice: 1,
      fighting: 1,
      poison: 1,
      ground: 2,
      flying: 0.5,
      psychic: 1,
      bug: 1,
      rock: 1,
      ghost: 1,
      dragon: 1,
      dark: 1,
      steel: 1,
      fairy: 1,
    },
  },
  5: {
    id: 5,
    name: "grass",
    Weakness: {
      normal: 1,
      fire: 2,
      water: 0.5,
      electric: 0.5,
      grass: 0.5,
      ice: 2,
      fighting: 1,
      poison: 2,
      ground: 0.5,
      flying: 2,
      psychic: 1,
      bug: 2,
      rock: 1,
      ghost: 1,
      dragon: 1,
      dark: 1,
      steel: 1,
      fairy: 1,
    },
  },
  6: {
    id: 6,
    name: "ice",
    Weakness: {
      normal: 1,
      fire: 2,
      water: 1,
      electric: 1,
      grass: 2,
      ice: 0.5,
      fighting: 1,
      poison: 1,
      ground: 2,
      flying: 1,
      psychic: 1,
      bug: 1,
      rock: 2,
      ghost: 1,
      dragon: 1,
      dark: 1,
      steel: 2,
      fairy: 1,
    },
  },
  7: {
    id: 7,
    name: "fighting",
    Weakness: {
      normal: 2,
      fire: 1,
      water: 1,
      electric: 1,
      grass: 1,
      ice: 2,
      fighting: 1,
      poison: 0.5,
      ground: 1,
      flying: 0.5,
      psychic: 0.5,
      bug: 0.5,
      rock: 2,
      ghost: 0,
      dragon: 1,
      dark: 2,
      steel: 1,
      fairy: 2,
    },
  },
  8: {
    id: 8,
    name: "poison",
    Weakness: {
      normal: 1,
      fire: 1,
      water: 1,
      electric: 1,
      grass: 0.5,
      ice: 1,
      fighting: 0.5,
      poison: 0.5,
      ground: 2,
      flying: 1,
      psychic: 2,
      bug: 0.5,
      rock: 1,
      ghost: 0.5,
      dragon: 1,
      dark: 1,
      steel: 1,
      fairy: 2,
    },
  },
  9: {
    id: 9,
    name: "ground",
    Weakness: {
      normal: 1,
      fire: 2,
      water: 1,
      electric: 0,
      grass: 2,
      ice: 1,
      fighting: 1,
      poison: 0.5,
      ground: 1,
      flying: 1,
      psychic: 1,
      bug: 0.5,
      rock: 2,
      ghost: 1,
      dragon: 1,
      dark: 1,
      steel: 2,
      fairy: 1,
    },
  },
  10: {
    id: 10,
    name: "flying",
    Weakness: {
      normal: 1,
      fire: 1,
      water: 1,
      electric: 2,
      grass: 0.5,
      ice: 2,
      fighting: 2,
      poison: 1,
      ground: 0,
      flying: 1,
      psychic: 1,
      bug: 0.5,
      rock: 2,
      ghost: 1,
      dragon: 1,
      dark: 1,
      steel: 1,
      fairy: 1,
    },
  },
  11: {
    id: 11,
    name: "psychic",
    Weakness: {
      normal: 1,
      fire: 1,
      water: 1,
      electric: 1,
      grass: 1,
      ice: 1,
      fighting: 2,
      poison: 2,
      ground: 1,
      flying: 1,
      psychic: 0.5,
      bug: 1,
      rock: 1,
      ghost: 1,
      dragon: 1,
      dark: 0,
      steel: 0.5,
      fairy: 1,
    },
  },
  12: {
    id: 12,
    name: "bug",
    Weakness: {
      normal: 1,
      fire: 2,
      water: 1,
      electric: 1,
      grass: 0.5,
      ice: 1,
      fighting: 0.5,
      poison: 0.5,
      ground: 1,
      flying: 2,
      psychic: 2,
      bug: 1,
      rock: 1,
      ghost: 0.5,
      dragon: 1,
      dark: 2,
      steel: 0.5,
      fairy: 0.5,
    },
  },
  13: {
    id: 13,
    name: "rock",
    Weakness: {
      normal: 1,
      fire: 2,
      water: 1,
      electric: 1,
      grass: 2,
      ice: 2,
      fighting: 1,
      poison: 1,
      ground: 0.5,
      flying: 2,
      psychic: 1,
      bug: 2,
      rock: 1,
      ghost: 1,
      dragon: 1,
      dark: 1,
      steel: 0.5,
      fairy: 1,
    },
  },
  14: {
    id: 14,
    name: "ghost",
    Weakness: {
      normal: 0,
      fire: 1,
      water: 1,
      electric: 1,
      grass: 1,
      ice: 1,
      fighting: 0,
      poison: 0.5,
      ground: 1,
      flying: 1,
      psychic: 2,
      bug: 0.5,
      rock: 1,
      ghost: 2,
      dragon: 1,
      dark: 0.5,
      steel: 1,
      fairy: 1,
    },
  },
  15: {
    id: 15,
    name: "dragon",
    Weakness: {
      normal: 1,
      fire: 1,
      water: 1,
      electric: 1,
      grass: 1,
      ice: 1,
      fighting: 1,
      poison: 1,
      ground: 1,
      flying: 1,
      psychic: 1,
      bug: 1,
      rock: 1,
      ghost: 1,
      dragon: 2,
      dark: 1,
      steel: 0.5,
      fairy: 2,
    },
  },
  16: {
    id: 16,
    name: "dark",
    Weakness: {
      normal: 1,
      fire: 1,
      water: 1,
      electric: 1,
      grass: 1,
      ice: 1,
      fighting: 2,
      poison: 1,
      ground: 1,
      flying: 1,
      psychic: 2,
      bug: 2,
      rock: 1,
      ghost: 0.5,
      dragon: 1,
      dark: 0.5,
      steel: 1,
      fairy: 2,
    },
  },
  17: {
    id: 17,
    name: "steel",
    Weakness: {
      normal: 1,
      fire: 0.5,
      water: 0.5,
      electric: 0.5,
      grass: 1,
      ice: 2,
      fighting: 1,
      poison: 1,
      ground: 1,
      flying: 1,
      psychic: 1,
      bug: 1,
      rock: 2,
      ghost: 1,
      dragon: 1,
      dark: 1,
      steel: 0.5,
      fairy: 2,
    },
  },
  18: {
    id: 18,
    name: "fairy",
    Weakness: {
      normal: 1,
      fire: 0.5,
      water: 1,
      electric: 1,
      grass: 1,
      ice: 1,
      fighting: 0.5,
      poison: 2,
      ground: 1,
      flying: 1,
      psychic: 1,
      bug: 1,
      rock: 1,
      ghost: 1,
      dragon: 0,
      dark: 0.5,
      steel: 0.5,
      fairy: 1,
    },
  },
};