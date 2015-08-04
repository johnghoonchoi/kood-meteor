Template.recipePageItem.events({
    'click button[name=Follow]' : function(evt,tmpl) {
        Meteor.users.update(
            {_id:Meteor.user()._id}, {
                $push: {profile:{nickname:"hkes"}}
            },true,true
        )
    }
});