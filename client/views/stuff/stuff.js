Template.stuff.helpers({
	post: function(){
        var stuff = Post.find({}, {sort: {date: -1}, limit: 10});
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

});