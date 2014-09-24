ImportData = new Meteor.Collection('importData');

Meteor.methods({
	insert_xml: function(xml) {
		ImportData.insert({xml: xml});
	}
});