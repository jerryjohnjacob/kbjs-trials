var Items = Backbone.Collection.extend({
  initialize: function(){
    
  },

  delete_all: function(){
    var item;
    while(item = this.first()) {
      item.destroy();
    }
  }
});
