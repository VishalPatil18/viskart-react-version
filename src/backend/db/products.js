import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "Fall Guys: Ultimate Knockout",
    desc: "a massively 60 multiplayer game",
    categoryName: ["arcade-and-puzzle"],
    vendor: "mediatonic",
    price: "49.99",
    discount: "0",
    isLatest: true,
    isTop: true,
    imageSrc: "https://raw.githubusercontent.com/VishalPatil18/VISKart/development/assets/fallguys.png"
  },
  {
    _id: uuid(),
    title: "Minecraft",
    desc: "create anything you can imagine in your own world",
    categoryName: ["adventure", "arcade-and-puzzle", "simulation"],
    vendor: "mojang-studios",
    price: "34.99",
    discount: "0",
    isLatest: true,
    isTop: true,
    imageSrc: "https://raw.githubusercontent.com/VishalPatil18/VISKart/development/assets/minecraft.png"
  },
  {
    _id: uuid(),
    title: "PUBG",
    desc: "loot weapons and supplies, and survive among 100 players",
    categoryName: ["adventure", "action", "simulation"],
    vendor: "tencent",
    price: "19.99",
    discount: "0",
    isLatest: true,
    isTop: true,
    imageSrc: "https://raw.githubusercontent.com/VishalPatil18/VISKart/development/assets/pubg.png"
  },
  {
    _id: uuid(),
    title: "Dying Light 2",
    desc: "fight for survival in a post-apocalyptic open world",
    categoryName: ["adventure", "action"],
    vendor: "techland",
    price: "99.99",
    discount: "0",
    isLatest: true,
    isTop: true,
    imageSrc: "https://raw.githubusercontent.com/VishalPatil18/VISKart/development/assets/dyinglight2.jpg"
  },
  {
    _id: uuid(),
    title: "Cricket 2007",
    desc: "enjoy the immersive cricketing action across platform",
    categoryName: ["sports"],
    vendor: "EA Sports",
    price: "99.99",
    discount: "40",
    isLatest: false,
    isTop: false,
    imageSrc: "https://raw.githubusercontent.com/VishalPatil18/VISKart/development/assets/cricket07.png"
  },
  {
    _id: uuid(),
    title: "Crazy Taxi",
    desc: "drive crazy to the city and earn the respect in your city",
    categoryName: ["racing", "arcade-and-puzzle"],
    vendor: "Dreamcast Games",
    price: "39.99",
    discount: "20",
    isLatest: false,
    isTop: false,
    imageSrc: "https://raw.githubusercontent.com/VishalPatil18/VISKart/development/assets/crazytaxi.png"
  },
  {
    _id: uuid(),
    title: "NFS Most Wanted",
    desc: "strive to be the #1 racer by competing with the 15 most-wanted's of the city",
    categoryName: ["racing", "sports"],
    vendor: "EA Games",
    price: "99.99",
    discount: "50",
    isLatest: false,
    isTop: false,
    imageSrc: "https://raw.githubusercontent.com/VishalPatil18/VISKart/development/assets/nfsmw.webp"
  },
  {
    _id: uuid(),
    title: "Roadrash",
    desc: "ride your bike through the city and win the race to earn money and respect",
    categoryName: ["racing", "arcade-and-puzzle"],
    vendor: "EA Games",
    price: "49.99",
    discount: "30",
    isLatest: false,
    isTop: false,
    imageSrc: "https://raw.githubusercontent.com/VishalPatil18/VISKart/development/assets/roadrash.webp"
  },
  {
    _id: uuid(),
    title: "Fifa 07",
    desc: "enjoy the immersive football action with all the legends of this sport",
    categoryName: ["sports"],
    vendor: "EA Games",
    price: "99.99",
    discount: "10",
    isLatest: false,
    isTop: false,
    imageSrc: "https://raw.githubusercontent.com/VishalPatil18/VISKart/development/assets/fifa07.jpg"
  },
  {
    _id: uuid(),
    title: "Total Overdose",
    desc: "destory the criminals of the city to retain your title of the supreme gangstar",
    categoryName: ["action", "adventure"],
    vendor: "Eidos Games",
    price: "49.99",
    discount: "25",
    isLatest: false,
    isTop: false,
    imageSrc: "https://raw.githubusercontent.com/VishalPatil18/VISKart/development/assets/tod.png"
  },
  {
    _id: uuid(),
    title: "Transport Fever 2",
    desc: "xyz",
    categoryName: ["racing", "simulation"],
    vendor: "xyz",
    price: "349.99",
    discount: "50",
    isLatest: true,
    isTop: false,
    imageSrc: "https://cdn.akamai.steamstatic.com/steam/apps/1066780/capsule_616x353.jpg?t=1614103491"
  },
  {
    _id: uuid(),
    title: "Resident Evil 3",
    desc: "xyz",
    categoryName: ["action", "adventure"],
    vendor: "xyz",
    price: "549.99",
    discount: "60",
    isLatest: true,
    isTop: false,
    imageSrc: "https://cdn.akamai.steamstatic.com/steam/apps/952060/capsule_616x353.jpg?t=1614737794"
  },
  {
    _id: uuid(),
    title: "Spades",
    desc: "xyz",
    categoryName: ["arcade-and-puzzle"],
    vendor: "xyz",
    price: "79.99",
    discount: "5",
    isLatest: true,
    isTop: false,
    imageSrc: "https://cdn.akamai.steamstatic.com/steam/apps/1680300/capsule_616x353.jpg?t=1625692937"
  },
  {
    _id: uuid(),
    title: "F1 2021",
    desc: "xyz",
    categoryName: ["racing", "sports"],
    vendor: "EA Sports",
    price: "999.99",
    discount: "20",
    isLatest: true,
    isTop: false,
    imageSrc: "https://cdn.akamai.steamstatic.com/steam/apps/1134570/capsule_616x353.jpg?t=1625849641"
  },
  {
    _id: uuid(),
    title: "Sid Meier's Civilization VI : Platinum Edition",
    desc: "xyz",
    categoryName: ["simulation", "adventure"],
    vendor: "xyz",
    price: "249.99",
    discount: "25",
    isLatest: true,
    isTop: false,
    imageSrc: "https://cdn.akamai.steamstatic.com/steam/bundles/12218/7cg856d5iyp2m6b2/capsule_616x353.jpg?t=1570208553"
  },
  {
    _id: uuid(),
    title: "Sea of Thieves",
    desc: "xyz",
    categoryName: ["action", "adventure"],
    vendor: "xyz",
    price: "749.99",
    discount: "50",
    isLatest: true,
    isTop: false,
    imageSrc: "https://cdn.akamai.steamstatic.com/steam/apps/1172620/capsule_616x353.jpg?t=1624888981"
  },
  {
    _id: uuid(),
    title: "Football Manager 2021",
    desc: "xyz",
    categoryName: ["sports"],
    vendor: "xyz",
    price: "149.99",
    discount: "30",
    isLatest: true,
    isTop: false,
    imageSrc: "https://cdn.akamai.steamstatic.com/steam/apps/1263850/capsule_616x353.jpg?t=1612352842"
  },
  {
    _id: uuid(),
    title: "Horatio Goes Snowboarding",
    desc: "xyz",
    categoryName: ["sports", "adventure"],
    vendor: "xyz",
    price: "99.99",
    discount: "70",
    isLatest: true,
    isTop: false,
    imageSrc: "https://cdn.akamai.steamstatic.com/steam/apps/1589380/capsule_616x353.jpg?t=1625921132"
  },
  {
    _id: uuid(),
    title: "Brick Breaker Heart Collector",
    desc: "xyz",
    categoryName: ["arcade-and-puzzle"],
    vendor: "xyz",
    price: "29.99",
    discount: "5",
    isLatest: true,
    isTop: false,
    imageSrc: "https://cdn.akamai.steamstatic.com/steam/apps/1639490/capsule_616x353.jpg?t=1625852561"
  },
  {
    _id: uuid(),
    title: "Soulpath: the final journey",
    desc: "xyz",
    categoryName: ["action", "adventure"],
    vendor: "xyz",
    price: "659.99",
    discount: "10",
    isLatest: true,
    isTop: false,
    imageSrc: "https://cdn.akamai.steamstatic.com/steam/apps/1380660/capsule_616x353.jpg?t=1625842713"
  }
];
