var Airtable = require("airtable");
var base = new Airtable({ apiKey: "key13Xr8YZ7doV9Tg" }).base(
  "appdBA5sJ6HNgI8h6"
);
// go to Account settings
// click the generate API key button
// copy and paste it into line 13 below
// https://airtable.com/api?utm_source=google&utm_medium=cpc&utm_extra5=kwd-826617918193&utm_extra2=936407691&utm_extra10=110555501161&creative=465926015426&device=c&cx=us&targetid=kwd-826617918193&campaignid=936407691&adgroupid=110555501161&utm_campaign=brand_creator&utm_content=bofu_freetrial&gclid=Cj0KCQjwmIuDBhDXARIsAFITC_5ScBkfOcfy68SuLtNsXhLoTp8JoYwFlBuOK6yDpmKnA_eCAXZ3kKsaAptkEALw_wcB

let allItems = [];
let allWineItems = [];

base('my_dinner_table').select({}).eachPage(function page(tableItems, fetchNextPage) {
  tableItems.forEach(function(item) {
    allItems.push(item);
  });

  fetchNextPage();

}, function done(err) {
  if (err) { console.error(err); return; }

  setTable(allItems);
});

let container = document.createElement("div");
container.classList.add("container");
document.body.appendChild(container);

function setTable(allItems) {

  allItems.forEach(function(item) {
    let name = item.fields.items;
    let imageUrl = item.fields.images[0].url;
    let itemImage = document.createElement('img');
    itemImage.src = imageUrl;
    itemImage.classList.add(item.fields.class_name);
    container.appendChild(itemImage);

    if (item.fields.kind_of_item == "drink") {
      allWineItems.push(item);
    }
  })
}

let button = document.getElementById("button");
button.addEventListener('click', showWine);

function showWine() {
  allWineItems.forEach(function(wineItem) {
    let wine = document.createElement('img');
    wine.src = wineItem.fields.images[0].url;
    wine.classList.add(wineItem.fields.class_name);
    wine.style.display = "block";
    container.appendChild(wine);
  })
}
