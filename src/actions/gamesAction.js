import axios from "axios";
import { popularGamesURL, upcomingGamesURL, newGamesURL, searchGameURL } from "../api";

// action creator

export const loadGames = () => async (dispatch) => {
    // fetch axios
    const popularData = await axios.get(popularGamesURL(), {
        params: {
            key: process.env.REACT_APP_API_KEY,
        },
    });
    const newGamesData = await axios.get(newGamesURL(), {
        params: {
            key: process.env.REACT_APP_API_KEY,
        },
    });
    const upcomingData = await axios.get(upcomingGamesURL(), {
        params: {
            key: process.env.REACT_APP_API_KEY,
        },
    });
    dispatch({
        type: "FETCH_GAMES",
        payload: {
            popular: popularData.data.results,
            upcoming: upcomingData.data.results,
            newGames: newGamesData.data.results
        },
    });
};

export const fectchSearch = (game_name) => async(dispatch) => {
    const searchGames = await axios.get(searchGameURL(game_name));

    dispatch({
        type: "FETCH_SEARCHED",
        payload: {
            searched: searchGames.data.results,
        },
    });
};
