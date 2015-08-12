Template.recipePageItem.events({
    'click button[name=Follow]' : function(evt,tmpl) {
        var check = 0;
        //if current user's name == recipe friend's name, not insert
        if(Meteor.user().username != this.userName) {

            //check user's friend list
            for (i = 0; i < Meteor.user().profile.friends.length; i++) {
                if (Meteor.user().profile.friends[i] == this.userName) {
                    check = 1;
                }
            }

            //push & pull friends
            if (check == 0) {
                Meteor.users.update(
                    {_id: Meteor.user()._id}, {
                        $push: {"profile.friends": this.userName}
                    }
                )
            } else if(check == 1){
                Meteor.users.update(
                    {_id: Meteor.user()._id}, {
                        $pull: {"profile.friends": this.userName}
                    }
                )
            }
        }
    }
});