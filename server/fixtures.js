if (Questions.find().count() === 0) {
  Questions.insert({
    title: 'What do you think about Meteor JS ?',
    answers: [
      {
        title: 'It\'s awesome',
        count: 0
      },
      {
        title: 'Did\'nt try it yet, but seems great',
        count: 0
      },
      {
        title: 'Not convinced',
        count: 0
      },
      {
        title: 'I don\'t know',
        count: 0
      }
    ]
  });

  Questions.insert({
    title: 'Does this site even work ?',
    answers: [
      {
        title: 'Yes',
        count: 0
      },
      {
        title: 'No',
        count: 0
      }
    ]
  });
}
