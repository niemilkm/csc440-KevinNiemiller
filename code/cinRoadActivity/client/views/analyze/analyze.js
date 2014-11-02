Template.analyze.rendered = function()
{
}

Template.analyze.helpers(
  {
    filterInfo: function()
    {
      return AnalyzeFilter.find({userId: Meteor.userId()});
    }
  });

  Template.analyze.events =
  {

    'click .openEditFilterModal': function()
    {
      Session.set("editFilterId", this._id);
      $(' #editFilter ').modal('show');
    },

    'click .deleteFilter': function()
    {
      Meteor.call("delete_filterData", this._id);
    },

    'click #addGraph': function()
    {
      dataAndGraph();
    }
};

function dataAndGraph()
{
  // var data1 = AnalyzeFilter.find();
  // var lineData = [

}

function myData() {
    console.log("in myData");
    var series1 = [];
    for(var i =1; i < 8; i ++) {
        series1.push({
            x: i, y: 100 / i
        });
    }

    return [
        {
            key: "Series #1",
            values: series1,
            color: "#0000ff"
        }
    ];
}

function addGraph()
{
  nv.addGraph(function() {
    console.log("in addGraph nv");
      var chart = nv.models.lineChart();

      chart.xAxis
          .axisLabel("X-axis Label");

      chart.yAxis
          .axisLabel("Y-axis Label")
          .tickFormat(d3.format("d"))
          ;

      d3.select("svg")
          .datum(myData())
          .transition().duration(500).call(chart);

      nv.utils.windowResize(
              function() {
                  chart.update();
              }
          );

      return chart;
    });
}



