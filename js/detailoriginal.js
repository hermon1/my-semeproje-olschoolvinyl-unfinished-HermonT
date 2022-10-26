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

    container.innerHTML = `
    <section class="product-info">
      <div class="packet first">
    <div class="card img" style="background-image: url(http://localhost:1337${details.data.attributes.image.data.attributes.url}"></div>
    </div>
    </div>
    <div class="packet second">
    <h4>${details.data.attributes.title}</h4>
    <p>$${details.data.attributes.price}</p>
                           
                            <a href="checkout.html" class="button2">Add To Cart</a>
                            <p>FREE shipping on this product</p>
                            <hr />
                            <p>${details.data.attributes.description}</p>
                            </div>
                            </section>  `;

    console.log(details);
  } catch (error) {
    displayMessage("error", error, ".product-container");
  }
})();
