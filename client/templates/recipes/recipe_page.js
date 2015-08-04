Template.recipePage.helpers({
    list : function(){
        return Recipes.find({_id: this._id});
    }
});