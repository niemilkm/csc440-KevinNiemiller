
Template.dashboard.events =
  {
    'click button.importData': function()
    {
      xmlHttp = new window.XMLHttpRequest();
      xmlHttp.open("GET", "roadActivityPartial.xml", false);
      xmlHttp.send(null);
      xml = xmlHttp.responseXML.documentElement;
      console.log(xml);
      //debugger;
      Meteor.call("importData", xml); //{
      // // 	//Meteor.call(json); "/Users/kevinniemiller/Documents/csms/2014fall/csc599_540/project/roadActivityData.xml"
      //});

    }
  };