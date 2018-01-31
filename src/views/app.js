var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(window.exampleVideoData);

    this.render();
  },

  render: function() {
    this.$el.html(this.template());

    new SearchView({
      el: this.$('.search'),
    });

    new VideoListView({
      el: this.$('.list'),
      collection: this.videos,
    });
    
    new VideoPlayerView({
      el: this.$('.player'),
      model: this.videos.models[0],
    });
    
    return this;
  },

  template: templateURL('src/templates/app.html'),

});
