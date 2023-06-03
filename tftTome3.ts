interface Champion {
    name: string;
    traits: string[];
    cost: number;
}

type ChampionWIndex = Champion & {
    index: number;
}

const breakpoints: { [key: number]: number } = {
    0: 0,
    6: 1,
    8: 2,
    10: 3,
    12: 4,
};

const allTraits = [
    {
        trait: 'Sorcerer',
        hasEmblem: true,
    },
    {
        trait: 'Void',
        hasEmblem: true,
    },
    {
        trait: 'Darkin',
        hasEmblem: false,
    },
    {
        trait: 'Bastion',
        hasEmblem: true,
    },
    {
        trait: 'Empress',
        hasEmblem: false,
    },
    {
        trait: 'Deadeye',
        hasEmblem: true,
    },
    {
        trait: 'Rogue',
        hasEmblem: true,
    },
    {
        trait: 'Bruiser',
        hasEmblem: true,
    },
    {
        trait: 'Demacia',
        hasEmblem: true,
    },
    {
        trait: 'Freljord',
        hasEmblem: true,
    },
    {
        trait: 'Juggernaut',
        hasEmblem: true,
    },
    {
        trait: 'Challenger',
        hasEmblem: true,
    },
    {
        trait: 'Yordle',
        hasEmblem: false,
    },
    {
        trait: 'Slayer',
        hasEmblem: true,
    },
    {
        trait: 'Piltover',
        hasEmblem: true,
    },
    {
        trait: 'Multicaster',
        hasEmblem: false,
    },
    {
        trait: 'Noxus',
        hasEmblem: true,
    },
    {
        trait: 'Zaun',
        hasEmblem: true,
    },
    {
        trait: 'Redeemer',
        hasEmblem: false,
    },
    {
        trait: 'Wanderer',
        hasEmblem: false,
    },
    {
        trait: 'Shurima',
        hasEmblem: true,
    },
    {
        trait: 'Invoker',
        hasEmblem: true,
    },
    {
        trait: 'Gunner',
        hasEmblem: true,
    },
    {
        trait: 'Technogenius',
        hasEmblem: false,
    },
    {
        trait: 'Targon',
        hasEmblem: false,
    },
    {
        trait: 'Strategist',
        hasEmblem: true,
    },
    {
        trait: 'Ionia',
        hasEmblem: true,
    },
    {
        trait: 'Shadow Isles',
        hasEmblem: true,
    },
];

const championsArray: Champion[] = [
    {
        name: 'Tristana',
        traits: ['Yordle', 'Gunner'],
        cost: 1,
    },
    {
        name: 'Irelia',
        traits: ['Ionia', 'Challenger'],
        cost: 1,
    },
    {
        name: 'Aatrox',
        traits: ['Darkin', 'Slayer', 'Juggernaut'],
        cost: 5,
    },
    {
        name: 'Ahri',
        traits: ['Ionia', 'Sorcerer'],
        cost: 5,
    },
    {
        name: 'Akshan',
        traits: ['Shurima', 'Deadeye'],
        cost: 3,
    },
    {
        name: 'Ashe',
        traits: ['Freljord', 'Deadeye'],
        cost: 2,
    },
    {
        name: 'Azir',
        traits: ['Shurima', 'Strategist'],
        cost: 4,
    },
    {
        name: "Bel'Veth",
        traits: ['Empress', 'Void'],
        cost: 5,
    },
    {
        name: "Cho'Gath",
        traits: ['Void', 'Bruiser'],
        cost: 1,
    },
    {
        name: 'Darius',
        traits: ['Noxus', 'Juggernaut'],
        cost: 3,
    },
    {
        name: 'Ekko',
        traits: ['Zaun', 'Piltover', 'Rogue'],
        cost: 3,
    },
    {
        name: 'Garen',
        traits: ['Demacia', 'Juggernaut'],
        cost: 3,
    },
    {
        name: 'Gwen',
        traits: ['Shadow Isles', 'Slayer'],
        cost: 4,
    },
    {
        name: 'Heimerdinger',
        traits: ['Piltover', 'Yordle', 'Technogenius'],
        cost: 5,
    },
    {
        name: 'Jarvan IV',
        traits: ['Demacia', 'Strategist'],
        cost: 4,
    },
    {
        name: 'Jayce',
        traits: ['Piltover', 'Gunner'],
        cost: 3,
    },
    {
        name: 'Jinx',
        traits: ['Zaun', 'Gunner'],
        cost: 2,
    },
    {
        name: "Kai'Sa",
        traits: ['Void', 'Challenger'],
        cost: 4,
    },
    {
        name: 'Karma',
        traits: ['Ionia', 'Invoker'],
        cost: 3,
    },
    {
        name: 'Katarina',
        traits: ['Noxus', 'Rogue'],
        cost: 3,
    },
    {
        name: 'Kled',
        traits: ['Noxus', 'Yordle', 'Slayer'],
        cost: 2,
    },
    {
        name: "K'Sante",
        traits: ['Shurima', 'Bastion'],
        cost: 5,
    },
    {
        name: 'Lissandra',
        traits: ['Freljord', 'Invoker'],
        cost: 3,
    },
    {
        name: 'Lux',
        traits: ['Demacia', 'Sorcerer'],
        cost: 4,
    },
    {
        name: 'Orianna',
        traits: ['Piltover', 'Sorcerer'],
        cost: 1,
    },
    {
        name: 'Poppy',
        traits: ['Yordle', 'Demacia', 'Bastion'],
        cost: 1,
    },
    {
        name: 'Shen',
        traits: ['Ionia', 'Bastion', 'Invoker'],
        cost: 4,
    },
    {
        name: "Rek'Sai",
        traits: ['Void', 'Bruiser'],
        cost: 3,
    },
    {
        name: 'Renekton',
        traits: ['Shurima', 'Bruiser'],
        cost: 1,
    },
    {
        name: 'Sejuani',
        traits: ['Freljord', 'Bruiser'],
        cost: 4,
    },
    {
        name: 'Senna',
        traits: ['Shadow Isles', 'Gunner', 'Redeemer'],
        cost: 5,
    },
    {
        name: 'Sion',
        traits: ['Noxus', 'Bruiser'],
        cost: 5,
    },
    {
        name: 'Sona',
        traits: ['Demacia', 'Multicaster'],
        cost: 3,
    },
    {
        name: 'Soraka',
        traits: ['Targon', 'Invoker'],
        cost: 2,
    },
    {
        name: 'Swain',
        traits: ['Noxus', 'Strategist', 'Sorcerer'],
        cost: 2,
    },
    {
        name: 'Taric',
        traits: ['Targon', 'Bastion', 'Sorcerer'],
        cost: 3,
    },
    {
        name: 'Teemo',
        traits: ['Yordle', 'Strategist', 'Multicaster'],
        cost: 2,
    },
    {
        name: "Vel'Koz",
        traits: ['Void', 'Multicaster', 'Sorcerer'],
        cost: 3,
    },
    {
        name: 'Warwick',
        traits: ['Zaun', 'Juggernaut', 'Challenger'],
        cost: 2,
    },
    {
        name: 'Yasuo',
        traits: ['Ionia', 'Challenger'],
        cost: 4,
    },
    {
        name: 'Zed',
        traits: ['Ionia', 'Rogue', 'Slayer'],
        cost: 2,
    },
    {
        name: 'Cassiopeia',
        traits: ['Noxus', 'Shurima', 'Invoker'],
        cost: 1,
    },
    {
        name: 'Vi',
        traits: ['Piltover', 'Bruiser'],
        cost: 2,
    },
    {
        name: 'Maokai',
        traits: ['Shadow Isles', 'Bastion'],
        cost: 1,
    },
    {
        name: 'Kayle',
        traits: ['Demacia', 'Slayer'],
        cost: 1,
    },
    {
        name: 'Samira',
        traits: ['Noxus', 'Challenger'],
        cost: 1,
    },
    {
        name: 'Urgot',
        traits: ['Zaun', 'Deadeye'],
        cost: 4,
    },
    {
        name: 'Aphelios',
        traits: ['Targon', 'Deadeye'],
        cost: 4,
    },
    {
        name: 'Zeri',
        traits: ['Zaun', 'Gunner'],
        cost: 4,
    },
    {
        name: 'Galio',
        traits: ['Demacia', 'Invoker'],
        cost: 2,
    },
    {
        name: 'Kalista',
        traits: ['Shadow Isles', 'Challenger'],
        cost: 3,
    },
    {
        name: 'Nasus',
        traits: ['Shurima', 'Juggernaut'],
        cost: 4,
    },
    {
        name: 'Malzahar',
        traits: ['Void', 'Sorcerer'],
        cost: 1,
    },
    {
        name: 'Taliyah',
        traits: ['Shurima', 'Multicaster'],
        cost: 2,
    },
    {
        name: 'Ryze',
        traits: ['Wanderer', 'Invoker'],
        cost: 5,
    },
    {
        name: 'Sett',
        traits: ['Ionia', 'Juggernaut'],
        cost: 2,
    },
    {
        name: 'Jhin',
        traits: ['Ionia', 'Deadeye'],
        cost: 1,
    },
    {
        name: 'Viego',
        traits: ['Shadow Isles', 'Rogue'],
        cost: 1,
    },
    {
        name: 'Kassadin',
        traits: ['Void', 'Bastion'],
        cost: 2,
    },
    {
        name: 'Ryze',
        traits: ['Wanderer', 'Invoker'],
        cost: 5,
    },
    {
        name: 'Ryze',
        traits: ['Wanderer', 'Invoker'],
        cost: 5,
    },
    {
        name: 'Ryze',
        traits: ['Wanderer', 'Invoker'],
        cost: 5,
    },
    {
        name: 'Ryze',
        traits: ['Wanderer', 'Invoker'],
        cost: 5,
    },
    {
        name: 'Ryze',
        traits: ['Wanderer', 'Invoker'],
        cost: 5,
    },
    {
        name: 'Ryze',
        traits: ['Wanderer', 'Invoker'],
        cost: 5,
    },
    {
        name: 'Ryze',
        traits: ['Wanderer', 'Invoker'],
        cost: 5,
    },
    {
        name: 'Ryze',
        traits: ['Wanderer', 'Invoker'],
        cost: 5,
    },
    {
        name: 'Ryze',
        traits: ['Wanderer', 'Invoker'],
        cost: 5,
    },
    {
        name: 'Ryze',
        traits: ['Wanderer', 'Invoker'],
        cost: 5,
    },
].filter(x => x.cost < 3);

const championsObject: { [key: string]: ChampionWIndex } = {};
for (const [index, champion] of championsArray.entries()) {
    championsObject[champion.name] = {
        ...champion,
        index
    }
}

function findProbability(champions: string[], goalTraits: string[]) {
    const champTraits = findChampTraits(champions);
    const numTailored = findNumTailored(champTraits)
    let probability = 1;

    for (let i = 0; i < 4; i++) {
        if (i < numTailored) {
            probability *= findTailoredProbability(champTraits, goalTraits, i);
        }
        else {
            probability *= findNonTailoredProbability(goalTraits, i);
        }
    }

    return 1 - probability;
}

function findTailoredProbability(championTraits: string[], goalTraits: string[], index: number) {
    const totalOptions = championTraits.filter(x => allTraits.filter(x => x.hasEmblem).map(y => y.trait).includes(x)).length;
    return ((totalOptions - index - goalTraits.filter(x => championTraits.includes(x)).length) / totalOptions)
}

function findNonTailoredProbability(goalTraits: string[], index: number) {
    const totalOptions = allTraits.filter(x => x.hasEmblem).length;
    return ((totalOptions - index - goalTraits.length) / totalOptions)
}

function findChampTraits(champions: string[]) {
    const traits = new Set<string>();

    for (let champion of champions) {
        for (let trait of championsObject[champion].traits) {
            traits.add(trait)
        }
    }

    return Array.from(traits);
}

function findNumTailored(traits: string[]) {
    let i = traits.length
    while (i > 0) {
        if (breakpoints[i] !== undefined) {
            return breakpoints[i]
        }
        i--
    }

    return 0;
}

function findComps(champions: string[], array: string[][]) {
    array.push(champions)
    if (champions.length >= 4) {
        return;
    }

    if (champions.length === 0) {
        for (let i = 0; i < Object.keys(championsObject).length; i++) {
            findComps([...champions, championsArray[i].name], array)
        }

        return;
    }

    for (let i = championsObject[champions[champions.length - 1]].index + 1; i < Object.keys(championsObject).length; i++) {
        findComps([...champions, championsArray[i].name], array)
    }
}

function findCompProbability(array: string[][], dp: { [key: string]: number }, emblems: string[]) {
    const probabilityObject: { [key: number]: { instances: string[][], probability: number } } = [];

    for (let champions of array) {
        const key = findChampTraits(champions).toString();
        if (key in dp) {
            probabilityObject[dp[key]].instances.push(champions)
            continue;
        }

        const probability = findProbability(champions, emblems);
        dp[key] = probability;

        if (probability in probabilityObject) {
            probabilityObject[probability].instances.push(champions)
        }
        else {
            probabilityObject[probability] = {
                instances: [champions],
                probability
            }
        }
    }

    return probabilityObject;
}

let dp: { [key: string]: number } = {};
const array: string[][] = [];
findComps([], array)

for ( let emblem of allTraits.filter( x => x.hasEmblem )) {
    dp = {};
    console.log(
        `${emblem.trait}`,
        Object.values(
            findCompProbability(
                array, 
                dp, 
                [emblem.trait]
            )
        )
        .sort((a, b) => b.probability - a.probability)
        .map( x => ({
            instances: x.instances.join('|'),
            probability: x.probability
        }))[0]
    );
}