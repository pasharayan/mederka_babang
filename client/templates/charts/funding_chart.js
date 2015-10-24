Template.fundingChart.rendered = function () {
  Session.set('x', ['x', 30, 50, 75, 100, 120]);
  Session.set('data1', ['data1', 30, 200, 100, 400, 150]);
  Session.set('data2', ['data2', 20, 180, 240, 100, 190]);

  Session.get('goal', this.data.goal);

  var chart = c3.generate({
    bindto: this.find('#fundingChart'),
      data: {
        xs: {
          'data1': 'x',
          'data2': 'x'
        },
        columns: [['x'],['data1'],['data2']],
        type : 'donut',
      },

  });

  this.autorun(function (tracker) {
    chart.load({columns: [
      Session.get('x'),
      Session.get('data1'),
      Session.get('data2'),
      []
    ]});
  });
};
