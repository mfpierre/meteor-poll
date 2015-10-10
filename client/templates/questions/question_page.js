function drawChart(data) {
  var answers = data || Answers.find({question_id: this._id}).fetch();

  var countData = _.map(answers, function(answer){ return answer.count });

  if(!$('.ct-chart').length) {
    return;
  }

  if(!countData.length || _.reduce(countData, function(memo, num){ return memo + num; }, 0) === 0) {
    return;
  }

  var data = {
    series: countData
  };

  var pieChart = new Chartist.Pie('.ct-chart', data, {
    labelInterpolationFnc: function(value) {
      return Math.round(value / data.series.reduce(function(a, b) { return a + b }) * 100) + '%';
    }
  });
}

Template.questionPage.helpers({
  getChartistColor: function(index) {
    letterIndex = String.fromCharCode(97 + index);
    return 'ct-answer-' + letterIndex;
  },
  answers: function() {
    return Answers.find({question_id: this._id});
  },
  drawChart: drawChart
});

Template.questionPage.rendered = function() {
  var data = $('.answer-item').map(function(){
      return $(this).data();
  }).get();

  drawChart(data);
}
