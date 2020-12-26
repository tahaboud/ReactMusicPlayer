import { v4 as uuidv4 } from "uuid";


function chillHop() {
    return [
        {
            name: "Murmuration",
            cover: "https://chillhop.com/wp-content/uploads/2020/07/bb0db71fd74f15627e9912ad2278c13cee72ac2d-300x300.jpg",
            artist: "Blue Wednesday, Shopan",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=7814",
            color: ["#253A43", "#007C76"],
            id: uuidv4(),
            active: true,
        },
        {
            name: "Hereafter",
            cover: "https://chillhop.com/wp-content/uploads/2020/11/f78c39b4bb6313ddd0354bef896c591bfb490ff8-1024x1024.jpg",
            artist: "Makzo",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=11770",
            color: ["#5F6FA9", "#4E516E"],
            id: uuidv4(),
            active: false,
        },
        {
            name: "Sugarless",
            cover: "https://chillhop.com/wp-content/uploads/2020/11/8a0c857ddad531279d0757f5362380a6837b1b69-1024x1024.jpg",
            artist: "The Field Tapes, Aviino",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=11243",
            color: ["#DBE8DF", "#4A5360"],
            id: uuidv4(),
            active: false,
        },
        {
            name: "ny90",
            cover: "https://chillhop.com/wp-content/uploads/2020/12/7e98d3028a22ee7f16f6a9bfcdc2089f089777a5-1024x1024.jpg",
            artist: "Ezzy",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=9331",
            color: ["#FFFFFF", "#322246"],
            id: uuidv4(),
            active: false,
        },
        {
            name: "Going Back",
            cover: "https://chillhop.com/wp-content/uploads/2020/10/737bb830d34592344eb4a2a1d2c006cdbfc811d9-1024x1024.jpg",
            artist: "Swørn",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=10310",
            color: ["#335561", "#2E3C66"],
            id: uuidv4(),
            active: false,
        },
    ]
}


export default chillHop;