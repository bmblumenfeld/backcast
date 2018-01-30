var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(window.exampleVideoData);

    this.searchView = new SearchView();
    
    this.videoListView = new VideoListView({collection: this.videos});
    
    this.videoPlayerView = new VideoPlayerView();
    
    this.render();
  },


  render: function() {
    this.$el.html(this.template({
      'searchBar': this.searchView.$el.html(),
      'videoList': this.videoListView.$el.html(),
      'videoPlayer': this.videoPlayerView.$el.html()
      
    }));
    
    
        
    return this;
  },

  template: templateURL('src/templates/app.html')

});
