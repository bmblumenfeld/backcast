var VideoListEntryView = Backbone.View.extend({
  
  initialize: function() {
    this.render();
  },

  render: function() {    
    this.$el.html(this.template({attributes: this.attributes}));
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
