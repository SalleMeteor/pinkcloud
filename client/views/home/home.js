Template.home.helpers({
	post: function(){
        var stuff = Post.find({}, { sort: {date: -1}, limit: 10});
        var aux = new Array();
        var index = 0;
        stuff.forEach(function (stf) {
            aux[index] = {'name' : stf.name , 'date' : moment(stf.date).fromNow()};
            index += 1;
        });
        return aux;
  	},
});


Template.home.events({
  'click #add': function () {
    // template data, if any, is available in 'this'
      var fecha = moment();
      Post.insert({name: $("#post").val(), date: new Date, user: Meteor.user().emails[0].address});
      document.getElementById('post').value = '';
  }
});