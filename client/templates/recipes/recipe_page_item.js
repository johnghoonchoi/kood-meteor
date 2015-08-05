Template.recipePageItem.events({
    'click button[name=Follow]' : function(evt,tmpl) {
        //push & pop friends
        if(Meteor.user().username != this.userName) {
            if(Meteor.user().profile.friends != this.userName) {
                Meteor.users.update(
                    {_id: Meteor.user()._id}, {
                        $push: {"profile.friends": this.userName}
                    }
                )
            }else{
                Meteor.users.update(
                    {_id: Meteor.user()._id}, {
                        $pop: {"profile.friends": this.userName}
                    }
                )
            }
        }
    }
});