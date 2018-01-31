var VideoListView = Backbone.View.extend({

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.children().detach();    
    this.$el.html(this.template());
    
    var $videos = this.$el.find('.video-list');

    this.collection.forEach(function (video) {
      var videoView = new VideoListEntryView({model: video});

      $videos.append(videoView.el);
    });
    
    return this;
  },
  
  template: templateURL('src/templates/videoList.html')

});
