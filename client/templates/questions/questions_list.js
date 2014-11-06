Template.questionsList.helpers({
  questions: function() {
    return Questions.find();
  }
});