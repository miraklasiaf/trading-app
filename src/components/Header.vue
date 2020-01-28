<template>
  <header id="header">
    <div class="logo">
      <router-link to="/">Trading App</router-link>
    </div>
    <nav>
      <ul>
        <li v-if="!auth">
          <router-link to="/register">Sign Up</router-link>
        </li>
        <li v-if="!auth">
          <router-link to="/login">Sign In</router-link>
        </li>
        <li v-if="auth">
          <router-link to="/dashboard">Dashboard</router-link>
        </li>
        <li v-if="auth">
          <router-link to="/stocks">Stocks</router-link>
        </li>
        <li v-if="auth">
          <router-link to="/portfolio">Portfolio</router-link>
        </li>
        <li>
          <router-link to="/about">About</router-link>
        </li>
        <li v-if="auth">
          <button @click="onLogout" class="logout">Logout</button>
        </li>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item v-if="auth" href="#" @click="endDay">End Day</b-nav-item>

          <b-nav-item-dropdown
            @click="isDropDown = !isDropdownOpen"
            :class="{ open: isDropdownOpen }"
            text="Save & Load"
            right
            v-if="auth"
          >
            <b-dropdown-item href="#" @click="saveData" v-if="auth">Save Data</b-dropdown-item>
            <b-dropdown-item href="#" @click="loadData" v-if="auth">Load Data</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item v-if="auth">Funds: {{ funds | currency }}</b-nav-item>
        </b-navbar-nav>
      </ul>
    </nav>
  </header>
</template>

<script>
import axios from "axios";
import { mapActions } from "vuex";
import store from "../store";
export default {
  data() {
    return {
      isDropdownOpen: false
    };
  },
  computed: {
    funds() {
      return this.$store.getters.funds;
    },
    auth() {
      return this.$store.getters.isAuthenticated;
    }
  },
  methods: {
    ...mapActions({
      randomizeStocks: "randomizeStocks",
      fetchData: "loadData"
    }),
    endDay() {
      this.randomizeStocks();
    },
    saveData() {
      const data = {
        funds: this.$store.getters.funds,
        stockPortfolio: this.$store.getters.stockPortfolio,
        stocks: this.$store.getters.stocks
      };
      axios.put("/data.json" + "?auth=" + store.state.idToken, data);
    },
    loadData() {
      this.fetchData();
    },
    onLogout() {
      this.$store.dispatch("logout");
    }
  }
};
</script>

<style scoped>
#header {
  height: 56px;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
  background-color: #521751;
  padding: 0 20px;
}

.logo {
  font-weight: bold;
  color: white;
}

.logo a {
  text-decoration: none;
  color: white;
}

nav {
  height: 100%;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  height: 100%;
  display: flex;
  flex-flow: row;
  align-items: center;
}

li {
  margin: 0 16px;
}

li a {
  text-decoration: none;
  color: white;
}

li a:hover,
li a:active,
li a.router-link-active {
  color: #fa923f;
}

.logout {
  background-color: transparent;
  border: none;
  font: inherit;
  color: white;
  cursor: pointer;
}
</style>
