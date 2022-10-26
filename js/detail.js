import { baseUrl } from "./settings/api.js";
import displayMessage from "./components/common/displayMessage.js";

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

if (!id) {
  document.location.href = "/";
}

const productUrl = baseUrl + "products/" + id + "?populate=*";

console.log(productUrl);

(async function () {
  try {
    const response = await fetch(productUrl);
    const details = await response.json();
    console.log(details);

    document.title = details.name;

    const container = document.querySelector(".product-container");
    console.log(details);
    container.innerHTML = `
   
    <section class="product-info">
      <div class="packet first">
    <div class="card img" style="background-image: url(http://localhost:1337${details.data.attributes.image.data.attributes.url}"></div>
    </div>
    </div>
    <div class="packet second">
    <h4>${details.data.attributes.title}</h4>
    <p>$${details.data.attributes.price}</p>
                           
                            <div class="button2">Add To Cart <i class="fa-solid fa-cart-shopping" data-id="${details.data.id}" data-title"${details.data.attributes.title}" data-price"${details.data.attributes.price}" data-image"url(http://localhost:1337${details.data.attributes.image.data.attributes.url}"></i></div>
                          
                            <p>FREE shipping on this product</p>
              
                            <hr />
                            <p>${details.data.attributes.description}</p>

                            </div>
                            </section>  `;

    const favbutton = document.querySelectorAll(".button2 i");
    console.log(favbutton);

    favbutton.forEach((button) => {
      button.addEventListener("click", handleClick);
    });

    function handleClick() {
      //console.log(event);
      this.classList.toggle("fa-solid");
      this.classList.toggle("fas");

      const id = this.dataset.id;
      const title = this.dataset.title;
      const price = this.dataset.price;
      const image = this.dataset.image;
      console.log("id", id);
      console.log("title", title);
      console.log("price", price);
      console.log("image", image);
      const currentFavs = getExcistingFavs();
      //console.log(currentFavs);

      const product = { id: id, title: title, price: price, image: image };
      currentFavs.push(product);

      saveFavs(currentFavs);
    }

    function getExcistingFavs() {
      const favs = localStorage.getItem("favourites");
      console.log(favs);
      if (favs === null) {
        return [];
      } else {
        return JSON.parse(favs);
      }
    }

    function saveFavs(favs) {
      localStorage.setItem("favourites", JSON.stringify(favs));
    }

    console.log(details);
  } catch (error) {
    displayMessage("error", error, ".product-container");
  }
})();
