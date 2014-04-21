Template.user.helpers({
  	post: function(){
  		return Post.find({user:Meteor.user().emails[0].address}, { sort: {date: -1}});
	},
});


Template.user.events({

});