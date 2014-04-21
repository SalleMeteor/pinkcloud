Template.home.helpers({
	post: function(){
        var stuff = Post.find({}, {sort: {date: -1}, limit: 10});
        var aux = new Array();
        var index = 0;
        stuff.forEach(function (stf) {
            aux[index] = {'name' : stf.name , 'date' : moment(stf.date).fromNow(), 'hashtag' : stf.hashtag};
            index += 1;
        });
        console.log(aux);
        return aux;
  	},
});


Template.home.events({
    'click #add': function () {
    // template data, if any, is available in 'this'
        var hashtags = $("#post").val().match(/#([a-zA-Z0-9]+)/g);
        Post.insert({name: $("#post").val(), date: new Date, user: Meteor.user().emails[0].address, hashtag : hashtags});
        document.getElementById('post').value = '';
    },
});