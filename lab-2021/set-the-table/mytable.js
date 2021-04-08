var Airtable = require("airtable");
var base = new Airtable({ apiKey: "key13Xr8YZ7doV9Tg" }).base(
  "appdBA5sJ6HNgI8h6"
);
// go to Account settings
// click the generate API key button
// copy and paste it into line 13 below
// https://airtable.com/api?utm_source=google&utm_medium=cpc&utm_extra5=kwd-826617918193&utm_extra2=936407691&utm_extra10=110555501161&creative=465926015426&device=c&cx=us&targetid=kwd-826617918193&campaignid=936407691&adgroupid=110555501161&utm_campaign=brand_creator&utm_content=bofu_freetrial&gclid=Cj0KCQjwmIuDBhDXARIsAFITC_5ScBkfOcfy68SuLtNsXhLoTp8JoYwFlBuOK6yDpmKnA_eCAXZ3kKsaAptkEALw_wcB

let allItems = [];

base('my-dinner-table').select({}).eachPage(function page(tableItems, fetchNextPage) {
  tableItems.forEach(function(item) {
    allItems.push(item);
  });


  setTable(allItems);
});


function setTable(allItems) {
  console.log(allItems);
    let container = document.createElement("div");
  container.classList.add("container");
  document.body.appendChild(container);

  allItems.forEach(function(item) {
    console.log(item);
      let name = item.fields.items;
    console.log(name);
    let imageUrl = item.fields.images[0].url;
    let itemImage = document.createElement('img');

    if (name === "Wine") {
      for (var i=0; i<2; i++) {
        let wine = document.createElement('img');
        wine.src = imageUrl;
        wine.classList.add("wine");

        if (i === 0) {
          wine.style.left = "70%";
          wine.style.top = "-15%";
        }
        if (i === 1) {
          wine.style.left = "25%";
          wine.style.top = "30%";
        }

        container.appendChild(wine);
      }
    }

    if (name === "Plate") {
      for (var i=0; i<2; i++) {
        let plate = document.createElement('img');
        plate.src = imageUrl;
        plate.classList.add("plate");

        if (i === 0) {
          plate.style.left = "70%";
          plate.style.top = "40%";
        }
        if (i === 1) {
          plate.style.left = "4%";
          plate.style.top = "40%";
        }

        container.appendChild(plate);
      }
    }

    if (name === "Lasagna") {
      for (var i=0; i<2; i++) {
        let lasagna = document.createElement('img');
        lasagna.src = imageUrl;
        lasagna.classList.add("lasagna");

        if (i === 0) {
          lasagna.style.left = "75%";
          lasagna.style.top = "35%";
        }
        if (i === 1) {
          lasagna.style.left = "10%";
          lasagna.style.top = "35%";
        }

        container.appendChild(lasagna);
      }
    }

    if (name === "Basket") {
      let basket = document.createElement('img');
      basket.src = imageUrl;
      basket.classList.add("basket");
      container.appendChild(basket);
    }

    if (name === "Bread") {
      let bread = document.createElement('img');
      bread.src = imageUrl;
      bread.classList.add("bread");
      container.appendChild(bread);
    }

    if (name === "Tablecloth") {
      let tablecloth = document.createElement('img');
      tablecloth.src = imageUrl;
      tablecloth.classList.add("tablecloth");
      container.appendChild(tablecloth);
    }
  })
}
