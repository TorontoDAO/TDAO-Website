<template>
  <div class="partners-container">
    <h1>Our Partners</h1>
    <p>Welcome to the Partners page. Below are our partners:</p>

    <div class="partners-grid">
      <!-- Loop through each partner logo -->
      <div
        v-for="(partner, index) in partnerLogos"
        :key="index"
        class="partner-logo"
      >
        <!-- Company Name at the top of the white div -->
        <h1>{{ partner.name }}</h1>
        <!-- Clickable logo redirecting to their website -->
        <a :href="partner.url" target="_blank" rel="noopener noreferrer">
          <img :src="partner.logo" :alt="`${partner.name} Logo`" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppPartners",
  data() {
    return {
      partnerLogos: [
        {
          name: "Bitcoin Bay",
          logo: require("@/assets/bb.jpeg"),
          url: "https://bitcoinbay.ca/",
        },
        {
          name: "ICP Hub CA & US",
          logo: require("@/assets/logo1.png"),
          url: "https://icpnorthamerica.org/",
        },
        {
          name: "Bitget",
          logo: require("@/assets/logo2.png"),
          url: "https://www.bitget.com/",
        },
        {
          name: "Bitcoin Cash Toronto",
          logo: require("@/assets/logo3.png"),
          url: "https://www.meetup.com/bitcoincashtoronto/",
        },
        {
          name: "EthToronto",
          logo: require("@/assets/logo4.png"),
          url: "https://www.ethtoronto.ca/",
        },
        {
          name: "EthWomen",
          logo: require("@/assets/logo5.png"),
          url: "https://www.ethwomen.com/",
        },
        {
          name: "Femt3ch",
          logo: require("@/assets/logo7.png"),
          url: "https://www.linkedin.com/company/femt3ch/",
        },
        {
          name: "BlockchainEvents.ca",
          logo: require("@/assets/logo6.png"),
          url: "https://www.blockchainevents.ca/",
        },
        {
          name: "Blacks on Blockchain",
          logo: require("@/assets/logo8.jpg"),
          url: "https://www.linkedin.com/company/blacksonblockchain/",
        },
        {
          name: "Web3TO",
          logo: require("@/assets/logo9.png"),
          url: "https://www.web3to.ca/",
        },
        {
          name: "EukaPay",
          logo: require("@/assets/logo10.png"),
          url: "https://eukapay.com/",
        },
        {
          name: "TechFestTO",
          logo: require("@/assets/logo11.png"),
          url: "https://www.torontotechfest.com/",
        },
        {
          name: "Green Pill Toronto",
          logo: require("@/assets/logo12.png"),
          url: "https://greenpill.network/",
        },
        {
          name: "Cyber Security Global Alliance",
          logo: require("@/assets/logo13.png"),
          url: "https://csga-global.org/",
        },
        {
          name: "Pizza DAO",
          logo: require("@/assets/logo14.png"),
          url: "https://www.globalpizzaparty.xyz/",
        },
        {
          name: "Blockchain Futurist Conference",
          logo: require("@/assets/logo15.png"),
          url: "https://www.futuristconference.com/",
        },
        {
          name: "The Wright Success",
          logo: require("@/assets/logo16.png"),
          url: "https://www.linkedin.com/in/thewrightsuccess/",
        },
        {
          name: "Obivee",
          logo: require("@/assets/logo17.png"),
          url: "https://www.obivee.com/",
        },
        {
          name: "Girl in the Verse",
          logo: require("@/assets/logo18.png"),
          url: "https://x.com/girl_intheverse",
        },
        {
          name: "Sacred Protocol",
          logo: require("@/assets/logo19.png"),
          url: "https://www.sacredprotocol.com/",
        },

        // Add more partners here
      ],
    };
  },
};
</script>

<style scoped>
.partners-container {
  padding-top: 150px;
  text-align: center;
}

.partners-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 50px;
  justify-items: center;
  padding: 20px;
}

.partner-logo {
  background-color: white;
  width: 250px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start; /* Align content to the top */
  align-items: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
}

.partner-logo h1 {
  font-size: 18px;
  margin-bottom: 10px;
  color: black; /* Changed the color to black */
  text-align: center;
}

.partner-logo a {
  margin-top: auto; /* Push the image down if space allows */
}

.partner-logo img {
  max-width: 100%;
  max-height: 100%;
}
</style>
