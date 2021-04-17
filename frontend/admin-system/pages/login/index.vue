<template>
  <div class="container">
    <div class="content">
      <h1 class="logo"><span>O</span>Drink(admin)</h1>
      <form @submit="signin($event)">
        <div class="signin">
          <p class="p_login">Login to you Account</p>

          <div>
            <input v-model="username" type="text" placeholder="username" />
          </div>
          <div>
            <input v-model="password" type="password" placeholder="password" />
          </div>

          <button type="submit" @click="signin($event)" class="signin-btn">
            Sign in
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  layout: "login",
  methods: {
    async signin(e) {
      e.preventDefault();
      const payload = {
        username: this.username,
        password: this.password
      };
      try {
        await this.$auth.loginWith("local", {
          data: payload
        });
        this.$router.push("/");
      } catch (e) {
        this.$router.push("/login");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  text-align: center;
  display: flex;
  height: 100vh;
  .content {
    display: inline-block;
    margin: auto;
    height: 30rem;
    width: 100%;
    padding: 2rem;
    .signin {
      text-align: left;
      padding: 0.25rem;

      .p_login {
        margin: 0.5rem 0;
      }
    }

    input {
      font-size: 18px;
      width: 100%;
      padding: 1rem;
      border: none;
      box-shadow: 2px 5px 12px 0 rgb(0 0 0 / 20%);
      margin: 0.5rem 0;
      border-radius: 10px;
      text-decoration: none;
      outline: none;
    }

    .signin-btn {
      width: 100%;
      outline: none;
      cursor: pointer;
      color: #fff;
      border: none;
      background-color: #fec987;
      font-family: "Prompt", Arial, sans-serif;
      font-size: 20px;
      box-shadow: 2px 5px 12px 0 rgb(0 0 0 / 20%);
      margin: 1rem auto;
      padding: 0.8rem 0;
      border-radius: 10px;
      font-weight: 700;
    }
  }
}

.logo {
  display: block;
  width: 100%;
  margin-bottom: 3rem;
  span {
    color: #fd9f2c;
  }

  h1 {
    font-size: 60px;
  }
}
</style>
