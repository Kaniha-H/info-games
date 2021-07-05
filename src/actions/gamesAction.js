import axios from "axios";
import { popularGamesURL } from "../api";

// action creator

export const loadGames = () => async (dispatch) => {
    // fetch axios
    const popularData = await axios.get(popularGamesURL(), {
        params: {
            key: process.env.REACT_APP_API_KEY,
        },
    });
    dispatch({
        type: "FETCH_GAMES",
        payload: {
            popular: popularData.data.results,
        },
    });
};
