Post = new Meteor.Collection("post");

Post.allow({
  insert: function() {
    return true;
  },
  update: function() {
    return true;
  },	
  remove: function() {
    return false;
  }
});