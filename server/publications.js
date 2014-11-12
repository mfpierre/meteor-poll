Meteor.publish('questions', function() {
  return Questions.find();
});

Meteor.publish('answers', function() {
  return Answers.find();
});
