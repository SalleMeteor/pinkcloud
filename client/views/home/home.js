Template.home.helpers({
	post: function(){
    return Post.find();
  	},
});


Template.home.events({
  'click #add': function () {
    // template data, if any, is available in 'this'
      var fecha = moment();
      Post.insert({name: $("#post").val(), date: fecha.toString()});
  }
});