if (Questions.find().count() === 0) {
  var question1 = Questions.insert({
    title: 'What do you think about Meteor JS ?',
  });

  Answers.insert({
    question_id: question1,
    title: 'It\'s awesome',
    count: 0
  });

  Answers.insert({
    question_id: question1,
    title: 'Didn\'t try it yet, but seems great',
    count: 0
  });

  Answers.insert({
    question_id: question1,
    title: 'Not convinced',
    count: 0
  });

  Answers.insert({
    question_id: question1,
    title: 'I don\'t know',
    count: 0
  });

  var question2 = Questions.insert({
    title: 'Does this site even work ?'
  });

  Answers.insert({
    question_id: question2,
    title: 'Yes',
    count: 0
  });

  Answers.insert({
    question_id: question2,
    title: 'No',
    count: 0
  });
}
