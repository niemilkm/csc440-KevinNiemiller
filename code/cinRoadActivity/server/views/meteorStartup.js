Meteor.startup(function () {
	var categories = ["Accident", "Roadwork - Planned", "Roadwork - Unplanned", "Flooding", "Snow/Ice", "Debris", "Disabled Vehicle", "Other"];
	var allCats = Categories.find({}).count();
	if (allCats == 0)
	{
		for (var i=0; i<categories.length; i++)
			Categories.insert({type: categories[i]});
	}
});