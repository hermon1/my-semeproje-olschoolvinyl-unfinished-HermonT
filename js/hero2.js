import { baseUrl } from "./settings/api.js";
import displayMessage from "./components/common/displayMessage.js";

const homeUrl = baseUrl + "home" + "?populate=*";

(async function () {
  const container = document.querySelector(".hero-container");

  try {
    const response = await fetch(homeUrl);
    const json = await response.json();

    container.innerHTML = "";

    console.log(json);
    container.innerHTML += ` <div class="hero-img" style="background-image: url(http://localhost:1337${json.data.attributes.hero_banner.data.attributes.url}"> 
      <h1>Nostalgia For Your Ears</h1>
      <p class="undertitle">second hand vinyl from the golden age</p>
      <a href="shop.html" class="button1">SHOP NOW</a> </div>                             `;
  } catch (error) {
    console.log(error);
    displayMessage("error", error, ".hero-container");
  }
})();
