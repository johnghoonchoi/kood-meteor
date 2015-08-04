Template.sidebar_myinfo.helpers({
    userName: function() {
        return Meteor.user().username;
    },
    nickname: function() {
        return Meteor.user().profile.nickname;
    },
    introduce: function() {
        return Meteor.user().profile.introduce;
    }
});
