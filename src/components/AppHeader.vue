<template>
  <nav>
    <div class="nav_wrap">
      <ul class="menu">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/partners">Partners</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/press-releases">Blogs</router-link></li>
      </ul>
      <ul class="socials">
        <li>
          <a href="https://www.linkedin.com/company/tdao-eth/" target="_blank"
            ><svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_4_212)">
                <path
                  d="M18.5195 0H1.47656C0.660156 0 0 0.644531 0 1.44141V18.5547C0 19.3516 0.660156 20 1.47656 20H18.5195C19.3359 20 20 19.3516 20 18.5586V1.44141C20 0.644531 19.3359 0 18.5195 0ZM5.93359 17.043H2.96484V7.49609H5.93359V17.043ZM4.44922 6.19531C3.49609 6.19531 2.72656 5.42578 2.72656 4.47656C2.72656 3.52734 3.49609 2.75781 4.44922 2.75781C5.39844 2.75781 6.16797 3.52734 6.16797 4.47656C6.16797 5.42187 5.39844 6.19531 4.44922 6.19531ZM17.043 17.043H14.0781V12.4023C14.0781 11.2969 14.0586 9.87109 12.5352 9.87109C10.9922 9.87109 10.7578 11.0781 10.7578 12.3242V17.043H7.79688V7.49609H10.6406V8.80078H10.6797C11.0742 8.05078 12.043 7.25781 13.4844 7.25781C16.4883 7.25781 17.043 9.23438 17.043 11.8047V17.043V17.043Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_4_212">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs></svg
          ></a>
        </li>
        <li>
          <a href="https://twitter.com/dao_toronto" target="_blank"
            ><svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.2719 1.58661H18.0831L11.9414 8.60619L19.1666 18.1582H13.5093L9.07834 12.365L4.00827 18.1582H1.19534L7.76451 10.65L0.833313 1.58661H6.63424L10.6395 6.88189L15.2719 1.58661ZM14.2852 16.4756H15.843L5.78781 3.18089H4.1162L14.2852 16.4756Z"
                fill="white"
              /></svg
          ></a>
        </li>
      </ul>
      <div class="nav_buttons">
        <SmBtn button-text="Join Us" button-class="filled"></SmBtn>
        <SmBtn button-text="Contact Us" button-class="border"></SmBtn>
      </div>
    </div>
  </nav>
</template>

<script>
import SmBtn from "./elements/SmBtn.vue";

export default {
  name: "AppHeader",
  components: {
    SmBtn,
  },
};
</script>

<style scoped>
nav {
  display: flex;
  justify-content: center;
  position: absolute;
  top: 28px;
  left: 0;
  right: 0;
  width: 100%;
  height: 30px;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
}

li {
  margin-right: 10px;
}

a {
  color: white;
  text-decoration: none;
}

.socials a {
  margin-left: 11px;
  margin-right: 7px;
}

.router-link-active {
  font-weight: bold;
}

.nav_buttons {
  display: flex;
}

#telegram-icon {
  position: relative;
  top: -3px;
  left: -4px;
}

.nav_wrap {
  max-width: 1170px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

ul.menu {
  margin-right: 50px;
}

ul.menu li {
  margin-right: 81px;
  font-size: 20px;
}

.sm_btn {
  margin-right: 19px;
}

@media screen and (max-width: 1150px) {
  .nav_wrap {
    max-width: 900px;
  }

  ul.menu {
    margin-right: 10px;
    margin-left: 10px;
  }

  ul.menu li {
    margin-right: 20px;
  }
}
.socials {
  display: none;
}
@media screen and (max-width: 790px) {
  .socials {
    display: none;
  }

  ul.menu {
    margin-left: 10px;
  }
}

@media screen and (max-width: 565px) {
  .nav_buttons {
    display: none;
  }
}
</style>
