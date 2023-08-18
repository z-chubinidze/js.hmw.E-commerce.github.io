// search bar wisible
var serc = document.getElementById("search");

function sear(){
    serc.style.visibility = "visible";
}


// axios

var row = document.getElementById("row");

axios.get("https://fakestoreapi.com/products").then(function (responce) {
    const products = [];
    responce.data.forEach((product, index) => {
        if (products.length < 8) {
            products.push(product);

            //create cols
            var col = document.createElement("div");
            col.classList.add("col-12")
            col.classList.add("col-md-6")
            col.classList.add("col-lg-3")
            row.appendChild(col);

            //create boxes
            var box = document.createElement("div")
            box.classList.add("box-3");
            col.appendChild(box);


            var box1 = document.createElement("div")
            box.appendChild(box1)
            box1.classList.add("image-box")
            box1.style.backgroundColor = "rgba(30, 40, 50, 0.05)"
            // create a new images
            var img = document.createElement("img");

            // Create a new attribute object
            var src = document.createAttribute("src");


            // Set the name of the attribute
            src.name = "src";

            // Set the value of the attribute
            src.value = product.image;
            img.attributes.setNamedItem(src);
            box1.appendChild(img)
            img.style.width = "100%";
            img.style.height = "300px";
            img.style.marginBottom = "18px";

            var h6 = document.createElement("h6")
            box.appendChild(h6)
            h6.innerText = product.title;


            var priceBox = document.createElement("div")
            box.appendChild(priceBox);
            priceBox.classList.add("proce-box");

            var categoryes = document.createElement("p")
            priceBox.appendChild(categoryes);
            categoryes.innerText = product.category;
            categoryes.style.marginBottom = "0"

            var priceBox2 = document.createElement("div")
            priceBox.appendChild(priceBox2)

            if (index === 3) {

                var span1 = document.createElement("span");
                priceBox2.appendChild(span1);
                span1.innerText = "$30"
                span1.style.marginRight = "16px"
                span1.style.textDecorationLine = "line-through"

                var span = document.createElement("span");
                priceBox2.appendChild(span);
                span.innerText = "$" + product.price;
                span.style.color = "red"


                var sale = document.createElement("div");
                box.appendChild(sale);
                sale.classList.add("sale")
                var P_sale = document.createElement("p")
                sale.appendChild(P_sale)
                P_sale.innerText = "sale";
                box.style.position = "relative"

            } else if (index === 5) {
                var span2 = document.createElement("span");
                priceBox2.appendChild(span2);
                span2.innerText = "$325"
                span2.style.marginRight = "16px"
                span2.style.textDecorationLine = "line-through";

                var span = document.createElement("span");
                priceBox2.appendChild(span);
                span.innerText = "$" + product.price;
                span.style.color = "red"

                var sale = document.createElement("div");
                box.appendChild(sale);
                sale.classList.add("sale")
                var P_sale = document.createElement("p")
                sale.appendChild(P_sale)
                P_sale.innerText = "sale";
                box.style.position = "relative"

            } else if (index === 4) {
                var sale = document.createElement("div");
                box.appendChild(sale);
                sale.classList.add("sale2")
                var P_sale = document.createElement("p")
                sale.appendChild(P_sale)
                P_sale.innerText = "HOT";
                box.style.position = "relative"
                var span = document.createElement("span");
                priceBox2.appendChild(span);
                span.innerText = "$" + product.price;
                span.classList.add("mein-price")
            }
            else {
                var span3 = document.createElement("span");
                priceBox2.appendChild(span3);
                span3.innerText = "$" + product.price;
                span3.classList.add("mein-price")

            }

        }

    });
})

//second section  "Best sellers"

var row2 = document.getElementById("row2");

axios.get("https://fakestoreapi.com/products").then(function (res) {
    const products2 = [];
    // Extract objects with indexes 16, 17, 18, and 19
    const selectedProducts = res.data.filter((pro, index) => {
        return [16, 17, 18, 19].includes(index);
    });
    products2.push(selectedProducts)

    console.log(products2)
    selectedProducts.forEach((pro, index) => {


        if (selectedProducts) {


            var col2 = document.createElement("div");
            col2.classList.add("col-12")
            col2.classList.add("col-md-6")
            col2.classList.add("col-lg-3")
            row2.appendChild(col2);

            var cont = document.createElement("div")
            col2.appendChild(cont)
            cont.classList.add("box-4")

            var image_box = document.createElement("div");
            cont.appendChild(image_box);
            image_box.classList.add("image-box")

            var img_2 = document.createElement("img")
            image_box.appendChild(img_2);

            var src2 = document.createAttribute("src");
            src2.name = "src"
            src2.value = pro.image;
            img_2.attributes.setNamedItem(src2);
            img_2.style.width = "100%";
            img_2.style.height = "300px";
            image_box.style.backgroundColor = "rgba(30, 40, 50, 0.05)"
            image_box.style.marginBottom = "18px";

            var content_box = document.createElement("div");
            cont.appendChild(content_box)
            content_box.classList.add("content_box")
            content_box.style.paddingLeft = "10px";
            content_box.style.paddingRight = "10px";

            var h_5 = document.createElement("h5");
            content_box.appendChild(h_5)
            h_5.innerText = pro.title;

            var price_box = document.createElement("div");
            content_box.appendChild(price_box);
            price_box.classList.add("d-flex");
            price_box.classList.add("justify-content-between");
            price_box.classList.add("align-items-center")

            var categ = document.createElement("p");
            price_box.appendChild(categ);
            categ.classList.add("category")
            categ.innerText = pro.category;
            categ.style.marginBottom = "0"

            var price_box2 = document.createElement("div")
            price_box.appendChild(price_box2);

            if (index === 2 || index === 3) {
                var span4 = document.createElement("span");
                price_box2.appendChild(span4);
                span4.innerText = "$32"
                span4.style.marginRight = "16px"
                span4.style.textDecorationLine = "line-through"

                var span_3 = document.createElement("span")
                price_box2.appendChild(span_3)
                span_3.innerText = "$" + pro.price;
                span_3.style.color = "red";

                var sale2 = document.createElement("div");
                image_box.appendChild(sale2);
                sale2.classList.add("sale3")
                var P_sale2 = document.createElement("p")
                sale2.appendChild(P_sale2)
                P_sale2.innerText = "sale";
                image_box.style.position = "relative";


            } else if (index === 0) {
                var span_3 = document.createElement("span")
                price_box2.appendChild(span_3)
                span_3.innerText = "$" + pro.price;
                span_3.classList.add("axios-span")
                var sale3 = document.createElement("div");
                image_box.appendChild(sale3);
                sale3.classList.add("sale4")
                var P_sale2 = document.createElement("p")
                sale3.appendChild(P_sale2)
                P_sale2.innerText = "HOT";
                image_box.style.position = "relative";
            } else {
                var span_3 = document.createElement("span")
                price_box2.appendChild(span_3)
                span_3.innerText = "$" + pro.price;
                span_3.classList.add("axios-span")
            }

        }

    })

})