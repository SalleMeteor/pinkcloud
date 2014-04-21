var clicked = false;

Template.user.helpers({
  	post: function(){
  		var date = Session.get("my-datepicker");
        var stuff = Post.find({user:Meteor.user().emails[0].address}, {sort: {date: -1}});                
        var aux = new Array();
        var index = 0;
        stuff.forEach(function (stf) {
        	if(moment(stf.date).format('MM/DD/YYYY') == date || !clicked){
	            aux[index] = {'name' : stf.name , 'date' : moment(stf.date).fromNow()};
	            index += 1;
        	}
        });
        return aux;
	},
});


Template.user.events({
	  'click #search': function () {
	   Session.set("my-datepicker", $("#my-datepicker").val());
	   clicked = true;
  }
});

Template.user.rendered=function() {
    $('#my-datepicker').datepicker({
    todayHighlight: true
});
}

Template.stuff.created = function() {
    Session.set("my-datepicker", "");
}

$( "#my-datepicker" ).click(function() {
  alert($( "#my-datepicker" ).val());
});