if (Questions.find().count() === 0) {
  Questions.insert({
    title: 'What is the meaning of life ?'
  });

  Questions.insert({
    title: 'Does this site work ?'
  });
}