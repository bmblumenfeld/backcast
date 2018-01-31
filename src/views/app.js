var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(window.exampleVideoData);

    this.searchView      = new SearchView();
    this.videoListView   = new VideoListView({collection: this.videos});
    this.videoPlayerView = new VideoPlayerView({model: this.videos.models[0]});

    this.render();
  },

  // events: {
  //   'click div': function(e) {
  //     console.log('clicked');
  //   },
  // },

  // this.$el.on('click', function() { this.handleClick() }, this);
  // this.$el.on('click', function (e){
  //   console.log(e)  
  // },this)

  // console.log(this.$el)
    
  // },

  events: {
    'click .video-list-entry-title': 'handleClickTitle'
  },

  handleClickTitle: function (e) {
    
    console.log(e.target.innerHTML);

    this.videoPlayerView.changeVideo(this.videos.models[1]);

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

  template: templateURL('src/templates/app.html'),

});
