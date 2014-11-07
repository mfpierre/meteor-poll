Router.configure({
  layoutTemplate: 'layout',
  waitOn: function() { return Meteor.subscribe('questions'); }
});

Router.route('/', {name: 'questionsList'});
