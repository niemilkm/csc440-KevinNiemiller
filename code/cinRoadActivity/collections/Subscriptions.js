Subscriptions = new Meteor.Collection('subscription');

Meteor.methods({
	insert_subscription: function(data) {
		Subscriptions.insert({userId: this.userId, subscribe: data});
	},

	update_subscription: function(data) {
		Subscriptions.update({userId: this.userId}, {$set: {subscribe: data}});
	},
});