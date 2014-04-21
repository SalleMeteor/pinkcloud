Template.home.helpers({
	post: function(){
        var stuff = Post.find({}, {sort: {date: -1}, limit: 10});
        var aux = new Array();
        var index = 0;
        var hashtag_regexp = /#([a-zA-Z0-9]+)/g;
        stuff.forEach(function (stf) {
            aux[index] = {'name' : stf.name.replace(hashtag_regexp, '<span class="hashtag">#$1</span>') , 'date' : moment(stf.date).fromNow(), 'hashtag' : stf.hashtag};
            index += 1;
        });
        return aux;
  	},
});


Template.home.events({
    'click #add': function () {
    // template data, if any, is available in 'this'
        var hashtags = $("#post").val().match(/#([a-zA-Z0-9]+)/g);
        var text = $("#post").val();
        Post.insert({name: text, date: new Date, user: Meteor.user().emails[0].address, hashtag : hashtags});
        document.getElementById('post').value = '';
    }
});

Template.home.created = function() {
    Session.set("hashtag", "");
    Session.set("maxlim", 20);
}