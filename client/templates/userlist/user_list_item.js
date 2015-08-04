Template.userListItem.events({
    'click button[name=remove]' : function(evt,tmpl){
        Meteor.users.remove({_id:this._id});
    }
});
