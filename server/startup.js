Meteor.startup(function () {
    console.log("Server running");
    Meteor.methods({
		updatePost: function(id_update) {
	        var docid = Post.findOne({'_id':id_update});
	        console.log(docid.name);
	        Post.update({ name: docid.name } ,
	       { $inc: { like: 1 } });
	        return true;
		}
	});
});
