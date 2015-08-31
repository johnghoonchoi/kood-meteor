Template.koodMain.helpers({
    init : function(){
        if(Session.get('menuSelect') == Meteor.user().username)
            Session.set('menuSelect', 'all')
    },
    list : function() {
        return this.recipeList;
    }
});