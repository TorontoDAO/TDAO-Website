<template>
  <div class="home">
    <div class="main_screen">
      <ul class="social-icons">
        <li>
          <a href="https://twitter.com/dao_toronto" target="_blank">
            <!-- X Icon -->
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.2719 1.58661H18.0831L11.9414 8.60619L19.1666 18.1582H13.5093L9.07834 12.365L4.00827 18.1582H1.19534L7.76451 10.65L0.833313 1.58661H6.63424L10.6395 6.88189L15.2719 1.58661ZM14.2852 16.4756H15.843L5.78781 3.18089H4.1162L14.2852 16.4756Z"
                fill="white"
              />
            </svg>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/company/tdao-eth/" target="_blank">
            <!-- LinkedIn Icon -->
            <svg
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
              </defs>
            </svg>
          </a>
        </li>
      </ul>

      <h1>Toronto DAO</h1>
      <h2>Next Generation Decentralized Community</h2>
      <div class="main_btns">
        <XlBtn
          button-text="Join Us"
          button-class="filled"
          @click="redirectToMembership"
        ></XlBtn>
        <XlBtn
          button-text="Contact Us"
          button-class="border"
          @click="redirectToWhatsapp"
        ></XlBtn>
      </div>
    </div>
    <div class="quote">
      <div class="quote_title">Our mission:</div>
      <div class="quote_content">
        <svg
          width="95"
          height="71"
          viewBox="0 0 95 71"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M42.73 0.859993L28.45 48.63L22.84 27.21C29.5267 27.21 34.91 29.08 38.99 32.82C43.1833 36.56 45.28 41.7733 45.28 48.46C45.28 55.0333 43.1267 60.3033 38.82 64.27C34.6267 68.2367 29.3 70.22 22.84 70.22C16.38 70.22 10.9967 68.2367 6.69 64.27C2.49667 60.3033 0.4 55.0333 0.4 48.46C0.4 46.6467 0.513334 44.8333 0.74 43.02C1.08 41.2067 1.70333 38.9967 2.61 36.39C3.63 33.7833 5.10333 30.3833 7.03 26.19L18.93 0.859993H42.73ZM92.03 0.859993L77.75 48.63L72.14 27.21C78.8267 27.21 84.21 29.08 88.29 32.82C92.4833 36.56 94.58 41.7733 94.58 48.46C94.58 55.0333 92.4267 60.3033 88.12 64.27C83.9267 68.2367 78.6 70.22 72.14 70.22C65.68 70.22 60.2967 68.2367 55.99 64.27C51.7967 60.3033 49.7 55.0333 49.7 48.46C49.7 46.6467 49.8133 44.8333 50.04 43.02C50.38 41.2067 51.0033 38.9967 51.91 36.39C52.93 33.7833 54.4033 30.3833 56.33 26.19L68.23 0.859993H92.03Z"
            fill="white"
          />
        </svg>
        <span>
          Cultivate Tech Talent and Innovation: Build, nurture, and retain tech
          talent, making Toronto a beacon of technological excellence and
          innovation on the global stage.
        </span>
      </div>
    </div>
    <div class="features">
      <div class="feature left">
        <img src="../assets/nft.jpg" />
        <div class="feature_content">
          <div class="feature_title">
            Get NFT and Become <br />a TorontoDAO Member
          </div>
          <div class="feature_text">
            Members of the DAO are sent 'Soul Bound' NFT memberships that allow
            members to vote on proposals for the DAO. These NFTs cannot be
            transferred and indicate the voting power of the address that
            claimed this NFT.
          </div>
          <div class="feature_btns">
            <SmBtn
              button-text="Claim NFT"
              button-class="filled"
              @click="redirectToMembership"
            ></SmBtn>
          </div>
        </div>
      </div>
      <div class="feature right">
        <img src="../assets/vote.jpg" />
        <div class="feature_content">
          <div class="feature_title">Vote for proposals</div>
          <div class="feature_text">
            While our governance process is being built we will be utilizing
            Snapshot for governance voting, please see our YouTube Channel for
            tutorial videos on how to participate
          </div>
          <div class="feature_btns">
            <SmBtn
              button-text="Watch Video"
              button-class="filled"
              :is-long="true"
            ></SmBtn>
            <SmBtn
              button-text="See Proposals"
              button-class="border"
              :is-long="true"
            ></SmBtn>
          </div>
        </div>
      </div>
    </div>
    <div class="contact">
      <div class="contact_title">Question? Contact Us!</div>
      <XlBtn
        button-text="Contact Us"
        button-class="border"
        @click="redirectToWhatsapp"
      ></XlBtn>
      <div class="bottom_socials">
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
      </div>
    </div>
  </div>
</template>

<script>
import XlBtn from "../components/elements/XlBtn.vue";
import SmBtn from "../components/elements/SmBtn.vue";
export default {
  name: "AppHome",
  components: {
    XlBtn,
    SmBtn,
  },
  methods: {
    redirectToMembership() {
      window.location.href = "https://members.tdao.to/";
    },
    redirectToWhatsapp() {
      window.location.href = "https://chat.whatsapp.com/J1NMWBVz4QtLHhxFIyvw3f";
    },
  },
};
</script>

<style>
.main_screen {
  padding-top: 100px !important;
  padding-bottom: 150px;
  background-image: url("../assets/toronto_back.jpg");
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: 100%;
}

h1 {
  font-size: 96px;
  font-weight: 900;
  margin-block-start: 0;
  margin-block-end: 0;
}

h2 {
  font-size: 32px;
  font-weight: 300;
}

.main_btns {
  margin-top: 45px;
  display: flex;
  justify-content: center;
}

.xl_btn {
  margin-left: 12px;
  margin-right: 12px;
}

.main_video {
  width: 860px;
  height: 420px;
  background-color: rgba(4, 8, 33, 0.45);
  margin: auto;
  margin-top: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;
}

.quote {
  margin: auto;
  margin-top: 80px;
  max-width: 970px;
  width: 100%;
  text-align: left;
}

.quote_title {
  font-size: 28px;
  font-weight: 300;
}

.quote_content {
  display: flex;
  margin-top: 44px;
}

.quote_content span {
  margin-left: 20px;
  font-size: 36px;
  font-weight: 200;
}

.feature {
  display: flex;
  margin: auto;
  margin-top: 160px;
  align-items: center;
  justify-content: center;
}

.feature img {
  width: 340px;
  height: 400px;
}

.feature_content {
  max-width: 420px;
  text-align: left;
  margin-left: 90px;
}

.right .feature_content {
  margin-right: 90px;
  margin-left: 0px;
}

.right .feature_content {
  order: 1;
}

.right img {
  order: 2;
}

.feature_title {
  font-size: 32px;
  font-weight: 900;
}

.feature_text {
  font-size: 16px;
  margin-top: 24px;
}

.feature_btns {
  display: flex;
  margin-top: 40px;
}

.feature_btns .sm_btn {
  margin-right: 20px;
}
#telegram-icon {
  position: relative;
  top: -3px;
  left: -5px;
}
.contact {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 180px;
  margin-bottom: 200px;
}

.contact_title {
  font-size: 32px;
  font-weight: 900;
  margin-bottom: 64px;
}

.bottom_socials {
  display: flex;
  margin-top: 50px;
}

.bottom_socials a {
  margin: 0 20px 0 20px;
}

@media screen and (max-width: 1000px) {
  h1 {
    font-size: 60px;
  }

  h2 {
    font-size: 24px;
  }

  .main_video {
    width: 460px;
    height: 320px;
  }

  .quote_content svg {
    width: 95px;
  }

  .quote {
    width: 700px;
  }

  .quote_content span {
    margin-left: 20px;
    font-size: 22px;
    font-weight: 200;
  }

  .feature img {
    width: 226px;
    height: 266px;
  }

  .feature_title {
    font-size: 26px;
  }

  .feature_text {
    font-size: 13px;
  }
}

@media screen and (max-width: 770px) {
  .quote_content span {
    font-size: 18px;
  }

  .quote {
    width: 500px;
  }

  .feature_content {
    max-width: 300px;
    text-align: left;
    margin-left: 20px;
  }

  .right .feature_content {
    margin-right: 20px;
    margin-left: 0px;
  }
}

@media screen and (max-width: 560px) {
  h1 {
    font-size: 36px;
  }

  h2 {
    font-size: 18px;
  }

  .main_video {
    width: 320px;
    height: 320px;
    margin-top: 40px;
  }

  .quote {
    width: 300px;
  }

  .feature {
    flex-direction: column;
  }

  .right .feature_content {
    order: 2;
    margin-right: 0;
  }

  .feature_content {
    margin-top: 20px;
    margin-left: 0px;
  }

  .contact_title {
    font-size: 24px;
    margin-bottom: 20px;
  }
}
.social-icons {
  display: flex;
  justify-content: center;
  gap: 60px;
  margin-top: 10px;
  list-style: none;
  padding-left: 0px;
}

.social-icons a {
  display: block;
  width: 50px;
  height: 50px;
}

.social-icons a svg {
  width: 100%;
  height: 100%;
}

.social-icons a:hover svg {
  opacity: 0.7;
}
</style>
