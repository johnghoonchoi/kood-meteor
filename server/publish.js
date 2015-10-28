Meteor.publish("getAllRecipes", function(param){
    return Recipes.find();
});

Meteor.publish("getAllUsers", function(param){
    return Meteor.users.find();
});

Meteor.publish("getAllImages", function(){
    return Images.find();
});
