Template.header.events({
    'click a[name=LogOut]': function (evt, tmpl) {
        Meteor.logout();
        Router.go('/');
    },
    'click a[name=UserList]': function (evt, tmpl) {
        Router.go('/userList');
    },
    'click a[name=Search]': function (evt, tmpl) {
        Session.set('searchResult', tmpl.find('input[name=SearchName]').value)
        Router.go('/searchPage');
    }
});
