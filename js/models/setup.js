$(function() {
  item1 = new Item({
    color: "red",
    name:"red shirt",
    type:"shirt",
    fabric:"poly",
    category:"shirt"
  });

  item2 = new Item({
    color: "blue",
    name: "blue pants",
    type: "pant",
    fabric:"poly",
    category:"pant"
  });

  item3 = new Item({
    color: "purple",
    name:"purple shirt",
    type:"shirt",
    fabric:"cotton",
    category:"shirt"
  });

  item4 = new Item({
    color:"blue",
    name:"blue shirt",
    type: "shirt",
    fabric: "cotton",
    category: "shirt"
  });

  item5 = new Item({
    color: "red",
    name:"red pants",
    type:"pant",
    fabric: "polly",
    category:"pant"
  });

  item6 = new Item({
    color: "green",
    name:"green saree",
    type: "saree",
    fabric: "paper",
    category:"ladies"
  });

  item7 = new Item({
    color: "yellow",
    name: "yellow briefs",
    type:"briefs",
    fabric:"silk",
    category:"gents"
  });

  item8 = new Item({
    color: "purple",
    name:"purple shoes",
    type:"shoes",
    fabric:"plastic",
    category:"sports"
  });

  item9 = new Item({
    color: "red",
    name:"red shoes",
    type:"shoes",
    fabric:"glass",
    category:"sports"
  });

  item10 = new Item({
    color: "invisible",
    name: "invisivble shoes",
    type:"shoes",
    fabric:"water",
    category:"ladies"
  });
  items_array = [item1, item2, item3, item4, item5, item6, item7, item8, item9, item10];
  items = new Items(items_array);

  var view_model = {
    items: kb.collectionObservable(items, {view_model: kb.ViewModel})
  };
  
  ko.applyBindings(view_model, $("#kb_collection")[0]);
});
