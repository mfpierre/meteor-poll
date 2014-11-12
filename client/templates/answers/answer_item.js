Template.answerItem.events({
  'click button': function () {
    // increment the counter when button is clicked
    Answers.update({ _id: this._id}, {$inc: {count:1}});
  }
});
