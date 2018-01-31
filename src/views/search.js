var SearchView = Backbone.View.extend({

  initialize: function() {
    this.render();
  },

  // events: {
  //   'click div': function(e) {
  //     console.log('sadflkasdhfasdf');
  //   },
  // },


  render: function() {
    this.$el.html(this.template());

    return this;
  },

  template: templateURL('src/templates/search.html')

});
