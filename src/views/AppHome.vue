<template>
  <div class="home">
    <div class="main_screen">
      <h1>Toronto DAO</h1>
      <h2>Next Generation Decentralized Community</h2>
      <div class="main_btns">
        <XlBtn button-text="Join Us" button-class="filled"></XlBtn>
        <XlBtn button-text="Contact Us" button-class="border"></XlBtn>
      </div>
      <div class="main_video">
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="60" cy="60" r="45" fill="#040821" fill-opacity="0.6"/><path d="M85.2111 59.1056L48.7367 40.8683C47.9388 40.4694 47 41.0496 47 41.9416V78.0584C47 78.9504 47.9388 79.5306 48.7367 79.1317L85.2111 60.8944C85.9482 60.5259 85.9482 59.4741 85.2111 59.1056Z" fill="#FF4C96"/></svg>
        <span>Watch Introduction Video</span>
      </div>
    </div>
    <div class="quote">
      <div class="quote_title">
        Our mission:
      </div>
      <div class="quote_content">
        <svg width="95" height="71" viewBox="0 0 95 71" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M42.73 0.859993L28.45 48.63L22.84 27.21C29.5267 27.21 34.91 29.08 38.99 32.82C43.1833 36.56 45.28 41.7733 45.28 48.46C45.28 55.0333 43.1267 60.3033 38.82 64.27C34.6267 68.2367 29.3 70.22 22.84 70.22C16.38 70.22 10.9967 68.2367 6.69 64.27C2.49667 60.3033 0.4 55.0333 0.4 48.46C0.4 46.6467 0.513334 44.8333 0.74 43.02C1.08 41.2067 1.70333 38.9967 2.61 36.39C3.63 33.7833 5.10333 30.3833 7.03 26.19L18.93 0.859993H42.73ZM92.03 0.859993L77.75 48.63L72.14 27.21C78.8267 27.21 84.21 29.08 88.29 32.82C92.4833 36.56 94.58 41.7733 94.58 48.46C94.58 55.0333 92.4267 60.3033 88.12 64.27C83.9267 68.2367 78.6 70.22 72.14 70.22C65.68 70.22 60.2967 68.2367 55.99 64.27C51.7967 60.3033 49.7 55.0333 49.7 48.46C49.7 46.6467 49.8133 44.8333 50.04 43.02C50.38 41.2067 51.0033 38.9967 51.91 36.39C52.93 33.7833 54.4033 30.3833 56.33 26.19L68.23 0.859993H92.03Z" fill="white"/></svg>
        <span>
          Cultivate Tech Talent and Innovation: Build,
          nurture, and retain tech talent, making 
          Toronto a beacon of technological excellence 
          and innovation on the global stage.
        </span>
      </div>
    </div>
    <div class="features">
      <div class="feature left">
        <img src="../assets/nft.jpg">
        <div class="feature_content">
          <div class="feature_title">
            Get NFT and Become <br>a TorontoDAO Member
          </div>
          <div class="feature_text">
            Members of the DAO are sent 'Soul Bound' NFT memberships that allow members to vote on proposals for the DAO. These NFTs cannot be transferred and indicate the voting power of the address that claimed this NFT.
          </div>
          <div class="feature_btns">
            <SmBtn button-text="Claim NFT" button-class="filled"></SmBtn>
          </div>
        </div>
      </div>
      <div class="feature right">
        <img src="../assets/vote.jpg">
        <div class="feature_content">
          <div class="feature_title">
            Vote for proposals
          </div>
          <div class="feature_text">
            While our governance process is being built we will be utilizing Snapshot for governance voting, please see our YouTube Channel for tutorial videos on how to participate
          </div>
          <div class="feature_btns">
            <SmBtn button-text="Watch Video" button-class="filled" :is-long="true"></SmBtn>
            <SmBtn button-text="See Proposals" button-class="border" :is-long="true"></SmBtn>
          </div>
        </div>
      </div>
      <div class="feature left">
        <img src="../assets/group.jpg">
        <div class="feature_content">
          <div class="feature_title">
            Join WhatsApp Community
          </div>
          <div class="feature_text">
            We have created a Whatsapp Community with different channels focusing on topics ranging from “Universal income”, “Jobs” and more. Be apart of our community as we have lively discussions on issues that are important to Toronto.
          </div>
          <div class="feature_btns">
            <SmBtn button-text="Join" button-class="filled"></SmBtn>
          </div>
        </div>
      </div>
    </div>
    <div class="contact">
      <div class="contact_title">
        Question? Contact Us!
      </div>
      <XlBtn button-text="Contact Us" button-class="border"></XlBtn>
      <div class="bottom_socials">
          <a to="/"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 20L1.40583 14.8641C0.538332 13.3608 0.0824998 11.6566 0.0833332 9.90914C0.0858331 4.44582 4.53166 0 9.99414 0C12.645 0.000833332 15.1333 1.03333 17.005 2.90666C18.8758 4.77999 19.9058 7.26998 19.905 9.91831C19.9025 15.3825 15.4566 19.8283 9.99414 19.8283C8.33581 19.8275 6.70165 19.4116 5.25415 18.6216L0 20ZM5.49749 16.8275C6.89415 17.6566 8.22748 18.1533 9.99081 18.1541C14.5308 18.1541 18.2291 14.4591 18.2316 9.91664C18.2333 5.36499 14.5525 1.675 9.99748 1.67333C5.45415 1.67333 1.75833 5.36832 1.75666 9.90998C1.75583 11.7641 2.29916 13.1525 3.21166 14.605L2.37916 17.645L5.49749 16.8275ZM14.9866 12.2741C14.925 12.1708 14.76 12.1091 14.5116 11.985C14.2641 11.8608 13.0466 11.2616 12.8191 11.1791C12.5925 11.0966 12.4275 11.055 12.2616 11.3033C12.0966 11.5508 11.6216 12.1091 11.4775 12.2741C11.3333 12.4391 11.1883 12.46 10.9408 12.3358C10.6933 12.2116 9.89498 11.9508 8.94915 11.1066C8.21331 10.45 7.71582 9.63915 7.57165 9.39081C7.42748 9.14331 7.55665 9.00915 7.67998 8.88581C7.79165 8.77498 7.92748 8.59665 8.05165 8.45165C8.17748 8.30832 8.21831 8.20498 8.30165 8.03915C8.38415 7.87415 8.34331 7.72915 8.28082 7.60498C8.21832 7.48165 7.72332 6.26249 7.51748 5.76665C7.31582 5.28416 7.11165 5.34915 6.95998 5.34165L6.48499 5.33332C6.31999 5.33332 6.05165 5.39499 5.82499 5.64332C5.59832 5.89165 4.95832 6.48999 4.95832 7.70915C4.95832 8.92831 5.84582 10.1058 5.96915 10.2708C6.09332 10.4358 7.71498 12.9375 10.1991 14.01C10.79 14.265 11.2516 14.4175 11.6108 14.5316C12.2041 14.72 12.7441 14.6933 13.1708 14.63C13.6466 14.5591 14.6358 14.0308 14.8425 13.4525C15.0491 12.8733 15.0491 12.3775 14.9866 12.2741Z" fill="white"/></svg></a>
          <a to="/"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.9308 3.46302C15.6561 2.87812 14.2892 2.44719 12.8599 2.20038C12.8339 2.19561 12.8079 2.20752 12.7945 2.23133C12.6187 2.544 12.4239 2.95192 12.2876 3.27254C10.7503 3.0424 9.22099 3.0424 7.71527 3.27254C7.57887 2.94479 7.37707 2.544 7.20048 2.23133C7.18707 2.20831 7.16107 2.19641 7.13504 2.20038C5.70659 2.4464 4.33963 2.87733 3.06411 3.46302C3.05307 3.46778 3.04361 3.47572 3.03732 3.48603C0.444493 7.35967 -0.265792 11.1381 0.0826501 14.8697C0.0842267 14.8879 0.0944749 14.9054 0.108665 14.9165C1.81934 16.1728 3.47642 16.9354 5.10273 17.441C5.12876 17.4489 5.15634 17.4394 5.1729 17.4179C5.55761 16.8926 5.90054 16.3387 6.19456 15.7561C6.21192 15.722 6.19535 15.6815 6.15989 15.668C5.61594 15.4617 5.098 15.2101 4.59977 14.9244C4.56037 14.9014 4.55721 14.845 4.59347 14.8181C4.69831 14.7395 4.80318 14.6578 4.9033 14.5752C4.92141 14.5601 4.94665 14.557 4.96794 14.5665C8.24107 16.0609 11.7846 16.0609 15.0191 14.5665C15.0404 14.5562 15.0657 14.5594 15.0846 14.5744C15.1847 14.657 15.2895 14.7395 15.3952 14.8181C15.4314 14.845 15.4291 14.9014 15.3897 14.9244C14.8914 15.2157 14.3735 15.4617 13.8288 15.6672C13.7933 15.6807 13.7775 15.722 13.7949 15.7561C14.0952 16.3378 14.4381 16.8918 14.8157 17.4172C14.8315 17.4394 14.8599 17.4489 14.8859 17.441C16.5201 16.9354 18.1772 16.1728 19.8879 14.9165C19.9028 14.9054 19.9123 14.8887 19.9139 14.8705C20.3309 10.5563 19.2154 6.80891 16.9568 3.48682C16.9513 3.47572 16.9419 3.46778 16.9308 3.46302ZM6.68335 12.5975C5.69792 12.5975 4.88594 11.6928 4.88594 10.5817C4.88594 9.47068 5.68217 8.56598 6.68335 8.56598C7.69239 8.56598 8.49651 9.47862 8.48073 10.5817C8.48073 11.6928 7.68451 12.5975 6.68335 12.5975ZM13.329 12.5975C12.3435 12.5975 11.5316 11.6928 11.5316 10.5817C11.5316 9.47068 12.3278 8.56598 13.329 8.56598C14.338 8.56598 15.1421 9.47862 15.1264 10.5817C15.1264 11.6928 14.338 12.5975 13.329 12.5975Z" fill="white"/></svg></a>
          <a to="/"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_4_212)"><path d="M18.5195 0H1.47656C0.660156 0 0 0.644531 0 1.44141V18.5547C0 19.3516 0.660156 20 1.47656 20H18.5195C19.3359 20 20 19.3516 20 18.5586V1.44141C20 0.644531 19.3359 0 18.5195 0ZM5.93359 17.043H2.96484V7.49609H5.93359V17.043ZM4.44922 6.19531C3.49609 6.19531 2.72656 5.42578 2.72656 4.47656C2.72656 3.52734 3.49609 2.75781 4.44922 2.75781C5.39844 2.75781 6.16797 3.52734 6.16797 4.47656C6.16797 5.42187 5.39844 6.19531 4.44922 6.19531ZM17.043 17.043H14.0781V12.4023C14.0781 11.2969 14.0586 9.87109 12.5352 9.87109C10.9922 9.87109 10.7578 11.0781 10.7578 12.3242V17.043H7.79688V7.49609H10.6406V8.80078H10.6797C11.0742 8.05078 12.043 7.25781 13.4844 7.25781C16.4883 7.25781 17.043 9.23438 17.043 11.8047V17.043V17.043Z" fill="white"/></g><defs><clipPath id="clip0_4_212"><rect width="20" height="20" fill="white"/></clipPath></defs></svg></a>
          <a to="/"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.2719 1.58661H18.0831L11.9414 8.60619L19.1666 18.1582H13.5093L9.07834 12.365L4.00827 18.1582H1.19534L7.76451 10.65L0.833313 1.58661H6.63424L10.6395 6.88189L15.2719 1.58661ZM14.2852 16.4756H15.843L5.78781 3.18089H4.1162L14.2852 16.4756Z" fill="white"/></svg></a>
      </div>
    </div>
  </div>
</template>

<script>
import XlBtn from '../components/elements/XlBtn.vue';
import SmBtn from '../components/elements/SmBtn.vue';
export default {
  name: 'AppHome',
  components: {
      XlBtn, SmBtn
  },
};
</script>

<style>
  
  
  .main_screen{
    padding-top: 170px;
    padding-bottom: 150px;
    background-image: url('../assets/toronto_back.jpg');
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: 100%;
  }
  
  h1{
    font-size: 96px;
    font-weight: 900;
    margin-block-start: 0;
    margin-block-end: 0;
  }

  h2{
    font-size: 32px;
    font-weight: 300;
  }

  .main_btns{
    margin-top: 45px;
    display: flex;
    justify-content: center;
  }

  .xl_btn{
    margin-left: 12px;
    margin-right: 12px;
  }

  .main_video{
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

  .quote{
    margin: auto;
    margin-top: 80px;
    max-width: 970px;
    width: 100%;
    text-align: left;
  }

  .quote_title{
    font-size: 28px;
    font-weight: 300;
  }

  .quote_content{
    display: flex;
    margin-top: 44px;
  }

  .quote_content span{
    margin-left: 20px;
    font-size: 36px;
    font-weight: 200;
  }

  .feature{
    display: flex;
    margin: auto;
    margin-top: 160px;
    align-items: center;
    justify-content: center;
  }

  .feature img{
    width: 340px;
    height: 400px;
  }

  .feature_content{
    max-width: 420px;
    text-align: left;
    margin-left: 90px;
  }

  .right .feature_content{
    margin-right: 90px;
    margin-left: 0px;
  }

  .right .feature_content{
    order: 1;
  }

  .right img{
    order: 2;
  }

  .feature_title{
    font-size: 32px;
    font-weight: 900;
  }

  .feature_text{
    font-size: 16px;
    margin-top: 24px;
  }

  .feature_btns{
    display: flex;
    margin-top: 40px;
  }

  .feature_btns .sm_btn{
    margin-right: 20px;
  }

  .contact{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 180px;
    margin-bottom: 200px;
  }

  .contact_title{
    font-size: 32px;
    font-weight: 900;
    margin-bottom: 64px;
  }

  .bottom_socials{
    display: flex;
    margin-top: 50px;
  }

  .bottom_socials a{
    margin: 0 20px 0 20px;
  }

  @media screen and (max-width: 1000px) {
    h1{
      font-size: 60px;
    }

    h2{
      font-size: 24px;
    }

    .main_video {
      width: 460px;
      height: 320px;
    }

    .quote_content svg{
      width: 95px;
    }

    .quote{
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

    .feature_title{
      font-size: 26px;
    }

    .feature_text{
      font-size: 13px;
    }
  }

  @media screen and (max-width: 770px) {
    .quote_content span{
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

</style>