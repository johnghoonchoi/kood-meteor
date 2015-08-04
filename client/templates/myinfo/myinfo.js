Template.myinfo.helpers({
    list : function(){
        return Recipes.find({userName:Meteor.user().username}).fetch();
    }
});