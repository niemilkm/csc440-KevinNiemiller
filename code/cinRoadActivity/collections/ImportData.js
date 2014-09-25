ImportData = new Meteor.Collection('importData');

Meteor.methods({
	insert_xml: function(xml, id) {
		ImportData.insert({_id: id, xml: xml});
	}
});