import {
  type InsertAnime,
  animesTable,
  type InsertMusic,
  musicTable,
  type InsertFood,
  foodsTable,
  type InsertGame,
  gamesTable,
} from "./schema.ts";
import { drizzle } from "drizzle-orm/node-postgres";

const fetchDb = () => {
  try {
    const db = drizzle("postgresql://postgres:postgres@localhost/my_local_db");
    return db;
  } catch (e) {
    console.log("Error on fetching database!");
  }
};

const animeData: InsertAnime[] = [
  {
    name: "Naruto",
    image:
      "https://res.cloudinary.com/dhrezgtmg/image/upload/v1762515469/itachi_opypqm.jpg",
    watched: true,
    releaseDate: "2002-10-03",
    main_character: "Naruto Uzumaki",
  },
  {
    name: "Attack on Titan",
    image:
      "https://res.cloudinary.com/dhrezgtmg/image/upload/v1762515468/eren_p5om0y.jpg",
    watched: true,
    releaseDate: "2013-04-07",
    main_character: "Eren Yeager",
  },
  {
    name: "Tokyo Ghoul",
    image:
      "https://res.cloudinary.com/dhrezgtmg/image/upload/v1762515482/Tokyo_ejand2.jpg",
    watched: true,
    releaseDate: "2014-07-04",
    main_character: "Ken Kaneki",
  },
  {
    name: "Classroom of the Elite",
    image:
      "https://res.cloudinary.com/dhrezgtmg/image/upload/v1762515462/class_b8r9gc.jpg",
    watched: true,
    releaseDate: "2017-07-12",
    main_character: "Kiyotaka Ayanokoji",
  },
  {
    name: "Solo Leveling",
    image:
      "https://res.cloudinary.com/dhrezgtmg/image/upload/v1762515470/level_qj5sap.jpg",
    watched: true,
    releaseDate: "2024-01-06",
    main_character: "Sung Jin-Woo",
  },
  {
    name: "Jujutsu Kaisen",
    image:
      "https://res.cloudinary.com/dhrezgtmg/image/upload/v1762515469/jujutsu_bz8smh.jpg",
    watched: true,
    releaseDate: "2020-10-03",
    main_character: "Yuji Itadori",
  },
  {
    name: "Demon Slayer",
    image:
      "https://res.cloudinary.com/dhrezgtmg/image/upload/v1762515469/demon_ez4wuy.jpg",
    watched: true,
    releaseDate: "2019-04-06",
    main_character: "Tanjiro Kamado",
  },
  {
    name: "Blue Lock",
    image:
      "https://res.cloudinary.com/dhrezgtmg/image/upload/v1762515469/isagi_k5bmvg.jpg",
    watched: true,
    releaseDate: "2022-10-09",
    main_character: "Yoichi Isagi",
  },
  {
    name: "Death Note",
    image:
      "https://res.cloudinary.com/dhrezgtmg/image/upload/v1762515463/death_ekjijq.jpg",
    watched: true,
    releaseDate: "2006-10-04",
    main_character: "Light Yagami",
  },
];

const musicData: InsertMusic[] = [
  {
    name: "Bohemian Rhapsody",
    band: "Queen",
    image:
      "https://res.cloudinary.com/dhrezgtmg/image/upload/v1762515472/queen_wl4v3e.jpg",
  },
  {
    name: "Smells Like Teen Spirit",
    band: "Nirvana",
    image:
      "https://res.cloudinary.com/dhrezgtmg/image/upload/v1762515471/nirvana_klab8a.jpg",
  },
  {
    name: "Hotel California",
    band: "Eagles",
    image:
      "https://res.cloudinary.com/dhrezgtmg/image/upload/v1762515463/eagles_xqophz.jpg",
  },
  {
    name: "Billie Jean",
    band: "Michael Jackson",
    image:
      "https://res.cloudinary.com/dhrezgtmg/image/upload/v1762515471/michael_jdtzn0.jpg",
  },
  {
    name: "Imagine",
    band: "John Lennon",
    image:
      "https://res.cloudinary.com/dhrezgtmg/image/upload/v1762515469/john_lubtcy.jpg",
  },
  {
    name: "Shape of You",
    band: "Ed Sheeran",
    image:
      "https://res.cloudinary.com/dhrezgtmg/image/upload/v1762515464/ed_pwzabo.jpg",
  },
  {
    name: "Thunderstruck",
    band: "AC/DC",
    image:
      "https://res.cloudinary.com/dhrezgtmg/image/upload/v1762515461/acdc_djqvvt.jpg",
  },
  {
    name: "Rolling in the Deep",
    band: "Adele",
    image:
      "https://res.cloudinary.com/dhrezgtmg/image/upload/v1762515481/adele_yaqsdp.jpg",
  },
  {
    name: "Stairway to Heaven",
    band: "Led Zeppelin",
    image:
      "https://res.cloudinary.com/dhrezgtmg/image/upload/v1762515470/led_urtxfv.jpg",
  },
];

const foodData: InsertFood[] = [
  {
    name: "Pizza",
    origin: "Italy",
    image:
      "https://res.cloudinary.com/dhrezgtmg/image/upload/v1762515472/pizza_auow7e.jpg",
  },
  {
    name: "Sushi",
    origin: "Japan",
    image:
      "https://res.cloudinary.com/dhrezgtmg/image/upload/v1762515479/sushi_px6lss.jpg",
  },
  {
    name: "Tacos",
    origin: "Mexico",
    image:
      "https://res.cloudinary.com/dhrezgtmg/image/upload/v1762515480/tacos_kko7rq.jpg",
  },
  {
    name: "Croissant",
    origin: "France",
    image:
      "https://res.cloudinary.com/dhrezgtmg/image/upload/v1762515464/croissant_riqqx7.jpg",
  },
  {
    name: "Paella",
    origin: "Spain",
    image:
      "https://res.cloudinary.com/dhrezgtmg/image/upload/v1762515474/paella_bzyobj.jpg",
  },
  {
    name: "Curry",
    origin: "India",
    image:
      "https://res.cloudinary.com/dhrezgtmg/image/upload/v1762515463/curry_mrubpq.jpg",
  },
  {
    name: "Shawarma",
    origin: "Middle East",
    image:
      "https://res.cloudinary.com/dhrezgtmg/image/upload/v1762515478/Shawarma_xg8sxj.avif",
  },
  {
    name: "Poutine",
    origin: "Canada",
    image:
      "https://res.cloudinary.com/dhrezgtmg/image/upload/v1762515472/poutine_x17ycn.jpg",
  },
  {
    name: "Kimchi",
    origin: "Korea",
    image:
      "https://res.cloudinary.com/dhrezgtmg/image/upload/v1762515470/kimchi_r5zydc.jpg",
  },
];

const gamesData: InsertGame[] = [
  {
    name: "Counter Strike",
    image:
      "https://res.cloudinary.com/dhrezgtmg/image/upload/v1762515462/bayonet_lnhfwz.jpg",
    hours: 6132,
  },
  {
    name: "Rocket League",
    image:
      "https://res.cloudinary.com/dhrezgtmg/image/upload/v1762515479/RL_mk6o30.jpg",
    hours: 2000,
  },
  {
    name: "Rust",
    image:
      "https://res.cloudinary.com/dhrezgtmg/image/upload/v1762515483/rust_hqqvfq.jpg",
    hours: 591,
  },
  {
    name: "ARK: Survival Evolved",
    image:
      "https://res.cloudinary.com/dhrezgtmg/image/upload/v1762515469/griffin_ocjzrm.jpg",
    hours: 236,
  },
  {
    name: "Fortnite",
    image:
      "https://res.cloudinary.com/dhrezgtmg/image/upload/v1762515468/fortnite_zuk384.jpg",
    hours: 32,
  },
  {
    name: "FIFA",
    image:
      "https://res.cloudinary.com/dhrezgtmg/image/upload/v1762515467/fifa_hovhng.jpg",
    hours: 2,
  },
  {
    name: "R.E.P.O",
    image:
      "https://res.cloudinary.com/dhrezgtmg/image/upload/v1762515475/rep0_xhdpdm.jpg",
    hours: 40,
  },
  {
    name: "Rematch",
    image:
      "https://res.cloudinary.com/dhrezgtmg/image/upload/v1762515474/rematch_wfjqri.jpg",
    hours: 33,
  },
  {
    name: "Call of Duty",
    image:
      "https://res.cloudinary.com/dhrezgtmg/image/upload/v1762515473/cod_lvbiyz.jpg",
    hours: 820,
  },
  {
    name: "Far Cry",
    image:
      "https://res.cloudinary.com/dhrezgtmg/image/upload/v1762515467/fc_yhci0u.jpg",
    hours: 72,
  },
];

async function populateDb() {
  try {
    const db = fetchDb();

    await db?.delete(animesTable);
    await db?.delete(musicTable);
    await db?.delete(foodsTable);
    await db?.delete(gamesTable);

    populateAnime();
    populateGames();
    populateFood();
    populateMusic();
  } catch (e) {
    console.log(e);
    return;
  }
}

async function populateAnime() {
  const db = fetchDb();

  const animes = await db?.insert(animesTable).values(animeData);
}

async function populateMusic() {
  const db = fetchDb();

  const musics = await db?.insert(musicTable).values(musicData);
}

async function populateFood() {
  const db = fetchDb();

  const foods = await db?.insert(foodsTable).values(foodData);
}

async function populateGames() {
  const db = fetchDb();

  const games = await db?.insert(gamesTable).values(gamesData);
}

populateDb();
