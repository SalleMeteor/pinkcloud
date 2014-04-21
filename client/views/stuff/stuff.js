Template.stuff.helpers({
	post: function(){
        var hs = Session.get("hashtag");
        if(hs){
            var stuff = Post.find({hashtag : hs}, {sort: {date: -1}, limit: Session.get("maxlim")});
        }
        else{
            var stuff = Post.find({}, {sort: {date: -1}, limit: Session.get("maxlim")});                
        }
        var aux = new Array();
        var index = 0;
        var hashtag_regexp = /#([a-zA-Z0-9]+)/g;
        stuff.forEach(function (stf) {
            aux[index] = {'name' : stf.name.replace(hashtag_regexp, '<span class="hashtag">#$1</span>') , 'date' : moment(stf.date).fromNow()};
            index += 1;
        });
        return aux;
  	},
});


Template.stuff.events({
    'click #searchbtn': function () {
    // template data, if any, is available in 'this'
        Session.set("hashtag", $("#hgfield").val());
        Session.set("maxlim", 20);
    },
    
    'click #viewmore': function () {
        Session.set("maxlim", Session.get("maxlim") + 20);
        alert(cosa);
    }
});

Template.stuff.created = function() {
    Session.set("hashtag", "");
    Session.set("maxlim", 20);
}