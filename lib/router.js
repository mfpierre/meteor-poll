Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  waitOn: function() { return Meteor.subscribe('questions'); }
});

Router.route('/', {name: 'questionsList'});

Router.route('/questions/:_id', {
  name: 'questionPage',
  data: function() { return Questions.findOne(this.params._id); }
});
