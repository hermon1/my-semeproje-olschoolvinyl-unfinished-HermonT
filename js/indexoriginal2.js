import { baseUrl } from "./settings/api.js";
import displayMessage from "./components/common/displayMessage.js";

const productsUrl = baseUrl + "products" + "?populate=*";

(async function () {
  const container = document.querySelector(".product-container");

  try {
    const response = await fetch(productsUrl);
    const json = await response.json();

    container.innerHTML = "";

    for (let i = 0; i < json.data.length; i++) {
      console.log(json);
      container.innerHTML += `<section class="content" href="detail.html?id=${json.data[i].id}"></div>
    
      <div class="box one">
      
      <div class="box-img" style="background-image: url(http://localhost:1337${json.data[i].attributes.image.data.attributes.url}">  </div>
      

      
      <h4>${json.data[i].attributes.title}</h4>
                                         
      <p>$ ${json.data[i].attributes.price}</p>
  
      <a href="detail.html?id=${json.data[i].id}" class="button2">See Product</a>
      

    

                                        </div>                                  `;
    }
  } catch (error) {
    console.log(error);
    displayMessage("error", error, ".product-container");
  }
})();
