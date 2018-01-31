var SearchView = Backbone.View.extend({

  initialize: function() {
    this.render();
  },

  events: {
    'click .glyphicon-search': 'handleSubmit',
  },

  handleSubmit: function (e) {
    console.log('clicking submit');
  },


  render: function() {
    this.$el.html(this.template());

    return this;
  },

  template: templateURL('src/templates/search.html')

});
