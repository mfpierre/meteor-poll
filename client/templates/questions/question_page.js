Template.questionPage.helpers({
  answers: function() {
    return Answers.find({question_id: this._id});
  }
});
