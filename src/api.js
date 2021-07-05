// const base_url = `https://api.rawg.io/api/games?key=${process.env}`;
const base_url = "https://api.rawg.io/api/";

// getting the date
const getCurrentMonth = () => {
    const month = new Date().getMonth() + 1;
    // add 0 if month number < 10 : 2021/06 not 2021/6
    if (month < 10) {
        return `0${month}`;
    } else {
        return month;
    }
};

const getCurrentDay = () => {
    const day = new Date().getDate();
    if (day < 10) {
        return `0${day}`;
    } else {
        return day;
    }
};

// current day/month/year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

// popular games
const popular_games = `games?key=${process.env}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;

const popularGamesURL = () => `${base_url}${popular_games}`;

console.log(popularGamesURL());