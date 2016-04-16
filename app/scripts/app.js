requirejs.config({
  urlArgs: "bust=" + (new Date()).getTime(),
  paths: {
    jquery: '../components/jquery/dist/jquery.min',
    underscore: '../components/underscore/underscore-min',
    backbone: '../components/backbone/backbone-min',
    text: 'lib/text'
  },
  shim: {
    backbone: {
      deps: ['jquery', 'underscore'],
      exports: 'Backbone'
    },
    underscore: {
      exports: '_'
    }
  }
});

/*===========
Testing Setup
============*/
require(['jquery', 'underscore', 'backbone', 'text!templates/fakeTemplate.html'],
  function($, _, Backbone, fakeTemplate) {
    console.log("Test output");
    console.log("$: " + typeof $);
    console.log("_: " + typeof _);
    console.log("Backbone: " + typeof Backbone);

    // create view to test text! plugin
    var NewView = Backbone.View.extend({
      tagName: 'div',

      template: _.template(fakeTemplate),

      render: function() {
        console.log('we just rendered our new view');
        this.$el.html(this.template({type: 'dummy'}));
        return this;
      }
    });

    $(function () {
      console.log('the document is ready');
      newView  = new NewView();
      $('main').html(newView.render().el);
    });
});
