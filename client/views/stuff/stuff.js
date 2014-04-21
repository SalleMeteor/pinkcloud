Template.stuff.helpers({
	post: function(){
        var hs = Session.get("hashtag");
        if(hs){
            var stuff = Post.find({hashtag : hs}, {sort: {date: -1}, limit: 20});
        }
        else{
            var stuff = Post.find({}, {sort: {date: -1}, limit: 20});                
        }
        var aux = new Array();
        var index = 0;
        stuff.forEach(function (stf) {
            aux[index] = {'name' : stf.name , 'date' : moment(stf.date).fromNow()};
            index += 1;
        });
        return aux;
  	},
});


Template.stuff.events({
    'click #searchbtn': function () {
    // template data, if any, is available in 'this'
        Session.set("hashtag", $("#hgfield").val());
    },
});

Template.stuff.created = function() {
    Session.set("hashtag", "");
}