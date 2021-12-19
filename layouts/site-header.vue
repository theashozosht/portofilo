<template>
  <div class="custom-container">
    <!-- Desktop Header -->
    <header class="row header">
      <!-- Menu Field -->
      <div class="col-md-10 header-menu">
        <div class="header-menu__theme">
          <div class="button r" id="button-2">
            <input type="checkbox" class="checkbox" v-model="theme" />
            <div class="knobs"></div>
            <div class="layer"></div>
          </div>
        </div>
        <nav class="header-menu__links">
          <a
            class="header-menu__links__items text-decoration-none"
            v-for="(item, index) in headerMenu"
            :key="index"
            :href="item.route"
          >
            {{ item.name }}
          </a>
        </nav>
      </div>
      <!-- Logo Field -->
      <div class="col-md-2 header__logo">
        <img
          class="header__logo__img"
          src="~/assets/media/svg/Layout/logo.svg"
          alt="Logo"
        />
      </div>
    </header>
    <!-- Mobile Header -->
    <nav class="header-res">
      <!-- Menu Oppener -->
      <button
        class="humburger-btn"
        type="button"
        @click="humburger = !humburger"
      >
        <div class="menu-icon" :class="humburger ? 'not-active' : 'active'">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>
      <!-- Menu Items Field  -->
      <ul class="menu-field" v-if="!humburger" :class="{actived : !humburger}">
        <li class="menu-items" v-for="(item, index) in headerMenu" :key="index">
          <a class="menu-items__link" :href="item.route">
            {{ item.name }}
          </a>
        </li>
        <!-- Menu Theme Toggle Field  -->
        <li class="menu-items">
          <input
            aria-label="toggle theme"
            type="checkbox"
            class="checkbox d-none"
            id="darkmode-input"
            v-model="theme"
          />
          <label
            role="button"
            aria-label="Toggle Dark Mode"
            for="darkmode-input"
            class="NavMobilestyle__FloatingButton-sc-17h869o-1 kLNUYd"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="sun"
              class="svg-inline--fa fa-sun fa-w-16 fa-2x "
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              v-if="theme"
            >
              <path
                fill="currentColor"
                d="M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z"
              ></path>
            </svg>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="moon"
              class="svg-inline--fa fa-moon fa-w-16 fa-2x "
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              v-else
            >
              <path
                fill="currentColor"
                d="M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"
              ></path>
            </svg>
          </label>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "site-header",
  data: () => ({
    theme: true,
    headerMenu: [
      {
        name: "About",
        route: "#about-me"
      },
      {
        name: "Experince",
        route: "#exprience"
      },
      {
        name: "Work",
        route: "#works"
      },
      {
        name: "Contact",
        route: "#contact-me"
      }
    ],
    humburger: true
  }),
  watch: {
    theme: {
      handler(value) {
        if (value == true) {
          this.$colorMode.preference = "dark";
        } else {
          this.$colorMode.preference = "light";
        }
        console.log(value);
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
