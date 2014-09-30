ImportData = new Meteor.Collection('importData');

Meteor.methods({
	insert_xmlllll: function(xml, id) {
		ImportData.insert({_id: id, xml: xml});
	}
});