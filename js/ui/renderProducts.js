export function renderProducts(product) {
  const container = document.querySelector(".product-container");
  container.innerHTML = "";
  for (let i = 0; i < product.length; i++) {
    console.log(product);

    container.innerHTML += `<section class="content" href="detail.html?id=${product[i].id}"></div>

  <div class="box one">
  
  <div class="box-img" style="background-image: url(http://localhost:1337${product[i].attributes.image.data.attributes.url}">  </div>
  <h4>${product[i].attributes.title}</h4>
                                     
  <p>$ ${product[i].attributes.price}</p>

  <a href="detail.html?id=${product[i].id}" class="button2">See Product</a>
                                    </div>       `;
  }
}
