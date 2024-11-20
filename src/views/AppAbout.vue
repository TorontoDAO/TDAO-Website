<template>
  <div class="about-container">
    <h1>About Us</h1>
    <p>Welcome to Toronto DAO</p>
    <div class="who">
      <h3>Who Are We?</h3>
      <p>
        Toronto DAO is a grassroots organization dedicated to cultivating and
        retaining tech talent in Toronto while fostering innovation across
        various technology sectors. With a focus on building a strong, inclusive
        tech community, Toronto DAO provides opportunities for collaboration in
        areas such as software development, AI, blockchain, and more. The
        organization is structured to encourage decentralized decision-making,
        enabling members to take an active role in projects ranging from tech
        education workshops to large-scale events like hackathons and
        conferences. By bridging local talent with global opportunities, Toronto
        DAO aims to make Toronto a leading hub for technological excellence,
        supporting both general tech initiatives and the growth of emerging
        sectors. Through business memberships, community-led projects, and
        strategic partnerships, the organization is building a dynamic ecosystem
        that empowers individuals and companies alike.
      </p>
      <h3>Meet the Team</h3>
      <div class="image-text-container">
        <img src="@/assets/samir.jpg" alt="Sample Image" class="image" />
        <div class="text-content">
          <h3>Samir Azizi</h3>
          <p>
            Samir Azizi is a seasoned marketing professional with a strong
            background in the crypto industry, having worked as the Marketing
            Manager for CoinSmart (acquired by WonderFI) and Country Marketing
            Manager at Bitget. He is also the co-founder of SmartCloser AI and
            serves as the Director of Artificial Intelligence at Cyber Security
            Global Alliance. Samir co-authored the professional course "ChatGPT
            for Real Estate Agents" and is the host of the popular Azizi
            Podcast, with over 700k views on YouTube.
          </p>
        </div>
      </div>
      <div class="image-text-container">
        <img src="@/assets/matthew.jpg" alt="Sample Image" class="image" />
        <div class="text-content">
          <h3>Matthew Glezos</h3>
          <p>
            An MBA with a traditional finance background with working experience
            in Canada and Latin America, Matthew began an interest in Web3 in
            2018, casually investing and reading up on the latest information
            wherever his professional career took him. At the start of the
            pandemic he decided to change his status in Web3 from amateur to
            professional when he enrolled in the George Brown Blockchain
            Development Program. Since then he has worked for various DeFi DAOs
            as a Business Developer before working on starting TorontoDAO.
          </p>
        </div>
      </div>
      <div class="image-text-container">
        <img src="@/assets/antoine.jpg" alt="Sample Image" class="image" />
        <div class="text-content">
          <h3>Antoine De Vuyst</h3>
          <p>
            Antoine De Vuyst is a seasoned Ethereum and Blockchain developer,
            active in the crypto world since 2011. As a co-founder of Bitcoin
            Bay, Ucash, BumbleBeeExchange, and BitBars, he has played a key role
            in driving several blockchain initiatives forward. Antoine is well
            known for his contributions to the Toronto blockchain community,
            having developed a range of decentralized applications (dApps),
            including wallet apps, DeFi platforms, and bounty apps. His
            technical expertise spans Python, Solidity, JavaScript, HTML5, and
            full-stack development. Antoine’s commitment to fostering blockchain
            innovation and supporting the Toronto tech community remains central
            to his work.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about-container {
  padding-top: 150px;
  text-align: center;
}

.who {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
}

.who h3 {
  font-size: 50px;
  margin-bottom: 20px;
}

.who p {
  max-width: 800px;
  font-size: 18px;
  line-height: 1.6;
  text-align: justify;
}

.image-text-container {
  display: flex;
  align-items: center;
  gap: 20px; /* Space between the image and text */
  margin: 20px auto;
  max-width: 900px;
  text-align: left;
}

.image {
  width: 40%; /* Adjust as per requirement */
  max-width: 300px; /* Ensures the image doesn't exceed this size */
  border-radius: 8px; /* Adds rounded corners */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Adds subtle shadow */
}

.text-content {
  flex: 1; /* Takes up remaining space */
}

.text-content h3 {
  font-size: 24px;
  margin-bottom: 10px;
}

.text-content p {
  font-size: 16px;
  line-height: 1.6;
}
</style>
