const QUESTIONS = [

  // ===== FACILE =====
  {
    difficulty: 'easy',
    clue: "Un plombier moustachu en salopette rouge saute sur des tortues et des champignons pour sauver une princesse retenue dans un château",
    answer: "Super Mario Bros",
    options: ["Super Mario Bros", "Donkey Kong Country", "Crash Bandicoot", "Kirby's Adventure"]
  },
  {
    difficulty: 'easy',
    clue: "Dans un monde entièrement composé de blocs, tu mines des ressources le jour, construis des abris et survies aux monstres la nuit",
    answer: "Minecraft",
    options: ["Minecraft", "Terraria", "Roblox", "Valheim"]
  },
  {
    difficulty: 'easy',
    clue: "Un hérisson bleu électrique court à toute vitesse sur des plateformes colorées pour contrecarrer les plans d'un savant au crâne chauve",
    answer: "Sonic the Hedgehog",
    options: ["Sonic the Hedgehog", "Rocket Knight Adventures", "Bubsy", "Ristar"]
  },
  {
    difficulty: 'easy',
    clue: "Tu pars de chez toi avec 3 Pokéballs pour capturer des créatures sauvages, les entraîner et devenir le meilleur dresseur de la région",
    answer: "Pokémon Rouge / Bleu",
    options: ["Pokémon Rouge / Bleu", "Digimon World", "Monster Rancher", "Dragon Quest Monsters"]
  },
  {
    difficulty: 'easy',
    clue: "À bord d'un vaisseau spatial, des imposteurs sabotent les systèmes et éliminent l'équipage en secret. L'équipe doit les identifier avant qu'il soit trop tard",
    answer: "Among Us",
    options: ["Among Us", "Space Station 13", "Unfortunate Spacemen", "Town of Salem"]
  },
  {
    difficulty: 'easy',
    clue: "Des pièces géométriques de 4 blocs tombent du ciel. Tu dois les faire pivoter pour remplir des lignes horizontales et les faire disparaître",
    answer: "Tetris",
    options: ["Tetris", "Puyo Puyo", "Lumines", "Columns"]
  },
  {
    difficulty: 'easy',
    clue: "Une bouche jaune affamée avale des pastilles dans un labyrinthe en évitant des fantômes colorés. Une pastille clignotante permet de les contre-attaquer",
    answer: "Pac-Man",
    options: ["Pac-Man", "Qix", "Pengo", "Bomberman"]
  },
  {
    difficulty: 'easy',
    clue: "Un jeune héros en tunique verte explore le royaume d'Hyrule pour rassembler les fragments d'une relique divine et vaincre un sorcier maléfique",
    answer: "The Legend of Zelda",
    options: ["The Legend of Zelda", "Golden Axe", "Fable", "Dragon's Lair"]
  },
  {
    difficulty: 'easy',
    clue: "100 joueurs sautent d'un bus propulsé par un ballon au-dessus d'une île. Le dernier survivant remporte la partie. On peut construire des structures",
    answer: "Fortnite",
    options: ["Fortnite", "PUBG: Battlegrounds", "Apex Legends", "Warzone"]
  },
  {
    difficulty: 'easy',
    clue: "Trois criminels aux personnalités très différentes se retrouvent mêlés à des braquages spectaculaires dans une immense ville californienne",
    answer: "GTA V",
    options: ["GTA V", "Mafia III", "Payday 2", "Watch Dogs"]
  },

  // ===== MOYEN =====
  {
    difficulty: 'medium',
    clue: "Kratos, le célèbre dieu de la guerre grec, est maintenant père. Il part avec son fils Atreus dans les forêts de la mythologie nordique pour répandre les cendres de sa femme",
    answer: "God of War (2018)",
    options: ["God of War (2018)", "Assassin's Creed Valhalla", "The Witcher 3", "Hellblade: Senua's Sacrifice"]
  },
  {
    difficulty: 'medium',
    clue: "Un petit chevalier insecte traverse Hallownest, un royaume souterrain de bugs géants, armé d'une épingle comme épée. Le jeu est un metroidvania très salué",
    answer: "Hollow Knight",
    options: ["Hollow Knight", "Ori and the Blind Forest", "Shovel Knight", "Axiom Verge"]
  },
  {
    difficulty: 'medium',
    clue: "Un jeu de rôle japonais où tu joues un lycéen qui mène une double vie : élève le jour, voleur de cœurs la nuit avec son groupe d'amis masqués appelés les Phantom Thieves",
    answer: "Persona 5",
    options: ["Persona 5", "Tokyo Mirage Sessions", "Shin Megami Tensei V", "Astral Chain"]
  },
  {
    difficulty: 'medium',
    clue: "Isaac Clarke, ingénieur spatial, arrive sur l'USG Ishimura et découvre que l'équipage a muté en monstres appelés Nécromorphes. Il faut viser les membres pour les tuer",
    answer: "Dead Space",
    options: ["Dead Space", "Alien: Isolation", "The Callisto Protocol", "Prey (2017)"]
  },
  {
    difficulty: 'medium',
    clue: "2B, une androïde en robe noire avec un bandeau sur les yeux, combat des machines dans un monde post-apocalyptique. Le jeu a plusieurs fins complètement différentes",
    answer: "NieR:Automata",
    options: ["NieR:Automata", "Horizon Zero Dawn", "Detroit: Become Human", "Xenoblade Chronicles 2"]
  },
  {
    difficulty: 'medium',
    clue: "Le héros ressemble littéralement à une tasse avec un visage. Le jeu imite parfaitement le style des dessins animés de Max Fleischer des années 1930. Tous les boss sont uniques",
    answer: "Cuphead",
    options: ["Cuphead", "Bendy and the Ink Machine", "Mugsters", "The Messenger"]
  },
  {
    difficulty: 'medium',
    clue: "Le titre du jeu se traduit par 'Mourir deux fois'. Tu joues un ninja avec un bras prothétique dans le Japon féodal, développé par FromSoftware comme Dark Souls",
    answer: "Sekiro: Shadows Die Twice",
    options: ["Sekiro: Shadows Die Twice", "Ghost of Tsushima", "Nioh 2", "Trek to Yomi"]
  },
  {
    difficulty: 'medium',
    clue: "Un jeu d'exploration spatiale où une supernova détruit tout le système solaire toutes les 22 minutes, te renvoyant au début. Tu dois percer les mystères des Nomai avant la fin",
    answer: "Outer Wilds",
    options: ["Outer Wilds", "No Man's Sky", "The Forgotten City", "Subnautica"]
  },
  {
    difficulty: 'medium',
    clue: "Jesse Faden débarque dans un bâtiment gouvernemental secret appelé le Bureau Fédéral de Contrôle. Les employés sont possédés et les lois de la physique ne s'appliquent plus",
    answer: "Control",
    options: ["Control", "Alan Wake 2", "Quantum Break", "Observer"]
  },
  {
    difficulty: 'medium',
    clue: "Un RPG sans combats où tout se joue avec des jets de dés. Tu incarnes un flic qui a tout oublié de lui-même et doit reconstituer sa vie tout en résolvant un meurtre",
    answer: "Disco Elysium",
    options: ["Disco Elysium", "Planescape: Torment", "Fallout: New Vegas", "Tyranny"]
  },

  // Mobile — facile
  {
    difficulty: 'easy',
    clue: "Tu lances des oiseaux avec une fronde géante pour détruire des structures en bois, en verre ou en pierre où se cachent des cochons verts",
    answer: "Angry Birds",
    options: ["Angry Birds", "Cut the Rope", "Bad Piggies", "Rovio Blast"]
  },
  {
    difficulty: 'easy',
    clue: "Un adolescent fuit en courant à l'infini un contrôleur de métro furieux en sautant sur des trains, glissant sous des obstacles et collectant des pièces dorées",
    answer: "Subway Surfers",
    options: ["Subway Surfers", "Temple Run", "Sonic Dash", "Minion Rush"]
  },
  {
    difficulty: 'easy',
    clue: "Tu alignes des sucreries colorées par groupes de 3 ou plus pour les faire éclater. Des centaines de niveaux, des vies limitées et des boosters à acheter",
    answer: "Candy Crush Saga",
    options: ["Candy Crush Saga", "Bejeweled", "Gardenscapes", "Homescapes"]
  },

  // Mobile — moyen
  {
    difficulty: 'medium',
    clue: "Tu guides une princesse silencieuse à travers des architectures géométriques impossibles inspirées d'Escher, en faisant pivoter et manipuler les bâtiments pour créer de nouveaux chemins",
    answer: "Monument Valley",
    options: ["Monument Valley", "Alto's Odyssey", "The Room", "Myst Mobile"]
  },
  {
    difficulty: 'medium',
    clue: "Tu te déplaces dans le monde réel avec ton smartphone pour capturer des créatures colorées cachées dans des lieux publics, des parcs et des rues de ta propre ville",
    answer: "Pokémon GO",
    options: ["Pokémon GO", "Ingress", "Harry Potter: Wizards Unite", "Jurassic World Alive"]
  },
  {
    difficulty: 'medium',
    clue: "Tu construis un deck de cartes pour attaquer les deux tours adverses en temps réel. Il faut gérer son énergie mana et contrer les cartes adverses",
    answer: "Clash Royale",
    options: ["Clash Royale", "Clash of Clans", "Hearthstone", "Legends of Kingdom Rush"]
  },

  // ===== DIFFICILE =====
  {
    difficulty: 'hard',
    clue: "En 1807, tu montes à bord d'un navire fantôme avec une montre qui rejoue les derniers instants des morts. Tu dois déduire comment chaque marin a péri",
    answer: "Return of the Obra Dinn",
    options: ["Return of the Obra Dinn", "Sunless Sea", "Heaven's Vault", "Pentiment"]
  },
  {
    difficulty: 'hard',
    clue: "Dans une ville victorienne noyée dans le brouillard, un chasseur traque des bêtes colossales et des sectes cauchemardesques tandis que sa raison s'effrite",
    answer: "Bloodborne",
    options: ["Bloodborne", "The Order: 1886", "Vampyr", "Lies of P"]
  },
  {
    difficulty: 'hard',
    clue: "Un homme couvert de cicatrices ne peut pas mourir. Il voyage à travers des plans d'existence en cherchant à comprendre ce qui peut changer la nature d'un homme",
    answer: "Planescape: Torment",
    options: ["Planescape: Torment", "Neverwinter Nights", "Baldur's Gate II", "Pillars of Eternity"]
  },
  {
    difficulty: 'hard',
    clue: "Tu as 12 jours pour stopper une épidémie de Sable noir dans une ville des steppes. La faim, l'épuisement et le manque de ressources sont tes vrais adversaires",
    answer: "Pathologic 2",
    options: ["Pathologic 2", "A Plague Tale: Innocence", "Frostpunk", "Kenshi"]
  },
  {
    difficulty: 'hard',
    clue: "Une créature fragile et blanche tente de retrouver ses petits en traversant un écosystème de prédateurs gigantesques dans un monde industriel ravagé par la pluie",
    answer: "Rain World",
    options: ["Rain World", "Little Nightmares", "Inside", "Limbo"]
  },
  {
    difficulty: 'hard',
    clue: "Une jeune femme gravit une montagne mystérieuse en affrontant sa propre anxiété et ses pensées négatives, un obstacle à la fois, souvent en mourant des centaines de fois",
    answer: "Celeste",
    options: ["Celeste", "Getting Over It", "Jusant", "A Short Hike"]
  },
  {
    difficulty: 'hard',
    clue: "Un enfant tombe dans un monde souterrain peuplé de monstres. Il peut choisir de ne jamais en tuer un seul — et cette décision change radicalement l'issue du jeu",
    answer: "Undertale",
    options: ["Undertale", "Deltarune", "Omori", "Yume Nikki"]
  },
  {
    difficulty: 'hard',
    clue: "En 1518, un artiste enlumineur de manuscrits enquête sur des meurtres dans une abbaye bavaroise. Tout le jeu est dessiné à la main comme un manuscrit médiéval",
    answer: "Pentiment",
    options: ["Pentiment", "Pillars of Eternity", "The Council", "Potion Craft"]
  },
  {
    difficulty: 'hard',
    clue: "Tu explores une maison familiale abandonnée en revivant les derniers instants de chaque membre décédé, chacun dans un mini-jeu au style graphique unique",
    answer: "What Remains of Edith Finch",
    options: ["What Remains of Edith Finch", "Gone Home", "Tacoma", "Firewatch"]
  },
  {
    difficulty: 'hard',
    clue: "Le fils du dieu des Enfers tente sans cesse de s'échapper du royaume de son père. Chaque mort le ramène au début, mais il revient plus fort grâce aux dons des Olympiens",
    answer: "Hades",
    options: ["Hades", "Dead Cells", "Curse of the Dead Gods", "Rogue Legacy 2"]
  },

  // Mobile — difficile
  {
    difficulty: 'hard',
    clue: "Tu gouvernes un royaume médiéval en swipant des cartes à gauche ou à droite, comme un Tinder de décisions royales. Chaque choix déplace quatre jauges et peut te coûter le trône",
    answer: "Reigns",
    options: ["Reigns", "Slay the Spire Mobile", "Card Crawl", "Meteorfall"]
  },
  {
    difficulty: 'hard',
    clue: "Tu traces des lignes colorées représentant des lignes de métro pour relier des stations en forme de cercles, carrés et triangles. La ville grandit à chaque semaine simulée",
    answer: "Mini Metro",
    options: ["Mini Metro", "Pocket City", "SimCity BuildIt", "Transport Fever Mobile"]
  },
  {
    difficulty: 'hard',
    clue: "Un jeu de rythme taïwanais où un cercle horizontal traverse l'écran et des notes tombent dessus. Les musiques sont en majorité électroniques ou de style VOCALOID",
    answer: "Cytus II",
    options: ["Cytus II", "DEEMO", "Arcaea", "Lanota"]
  }

];
