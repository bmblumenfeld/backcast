var VideoPlayerView = Backbone.View.extend({

  initialize: function() {
    this.render();

    this.on('select', function() {
      console.log('selected');

    }, this);
  },

  changeVideo: function(newVideo) {
    this.model = newVideo;

    console.log(this.model);

    this.render();
  },
  
  render: function() {
    this.$el.html(this.template({attributes: this.model.attributes}));
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
