//Meteor.publish("myContacts", function(name) {
Meteor.publish("allPosts", function() {
  return Post.find(); // get all contacts
  //return Contacts.find({ name: name });
});