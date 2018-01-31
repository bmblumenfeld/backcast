var VideoListEntryView = Backbone.View.extend({  
  events: {
    'click': 'handleClick'
  },

  handleClick: function (e) {
    console.log(e.target);
  },

  initialize: function() {
    this.render();

    // this.on('change', function () {
    //   this.render();
    // }, this);
  },

  render: function() {
    this.$el.html(this.template({attributes: this.attributes}));
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html'),

});
