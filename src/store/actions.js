import axios from "axios";
import auth from "./modules/auth.js";

export const loadData = ({ commit }) => {
  axios.get("/data.json" + "?auth=" + auth.state.idToken).then(res => {
    const stocks = res.data.stocks;
    const funds = res.data.funds;
    const stockPortfolio = res.data.stockPortfolio;

    const portfolio = {
      stockPortfolio,
      funds
    };
    commit("SET_STOCKS", stocks);
    commit("SET_PORTFOLIO", portfolio);
  });
};
