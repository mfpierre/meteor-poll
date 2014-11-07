Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  waitOn: function() { return Meteor.subscribe('questions'); }
});

Router.route('/', {name: 'questionsList'});
