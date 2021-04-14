<template>
  <header>
    <nav>
      <h1 @click="gotoDashboard()" class="logo"><span>O</span>Drink(admin)</h1>
      <div class="hamburger-menu">
        <img
          src="~assets/icons/list-nested.svg"
          alt=""
          @click="openMenu = !openMenu"
        />
      </div>
    </nav>
    <div v-if="openMenu" class="mobile-menu">
      <div class="x-menu">
        <img src="~assets/icons/x.svg" alt="" @click="openMenu = !openMenu" />
      </div>
      <ul>
        <li>
          <NuxtLink  @click.native="toggleMenu()" to="/dashboard"
            >Dashboard</NuxtLink
          >
        </li>
        <li>
          <NuxtLink  @click.native="toggleMenu()" to="/machines">Machines</NuxtLink>
        </li>
        <li><a href="#" @click="toggleMenu()"> Log out</a></li>
      </ul>
      <div class="hamburger-menu">
        <img src="~assets/icons/list-nested.svg" alt="" />
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      openMenu: false
    };
  },
  methods: {
    toggleMenu() {
      this.openMenu = !this.openMenu;
    },
    gotoDashboard(){
        this.$router.push('/dashboard')
    }
  }
};
</script>

<style lang="scss" scoped>
header {
  margin: 0 auto;

  font-size: 25px;
  position: relative;
  nav {
    display: flex;
    padding: 1rem;
    h1.logo {
      display: block;
      width: 100%;
      font-size: 25px;
      cursor: pointer;
      span {
        color: #fd9f2c;
      }
    }
    .hamburger-menu {
      cursor: pointer;
    }
  }

  .mobile-menu {
    display: block;
    top: 0;
    width: 100%;
    color: #fff;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.884);
    padding: 1rem;
    z-index: 999;
    .x-menu {
      float: right;
      img {
        cursor: pointer;
      }
    }
    ul {
      list-style-type: none;
      margin: 1rem 0 0 0;
      padding: 0;

      li {
        margin: 1rem 0;

        a {
          text-decoration: none;
          text-transform: none;
          color: #fff;
        }
        :hover {
          color: $primary-color;
        }

        .nuxt-link {
          color: #000;
        }
        .nuxt-link-active {
          color: $primary-color;
        }
      }
    }
  }
}
</style>
