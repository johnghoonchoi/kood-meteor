Template.myinfo.helpers({
    init : function(){
        Session.set('menuSelect', Meteor.user().username);
    },
    list : function(){
        return this.recipeList;
    }
});