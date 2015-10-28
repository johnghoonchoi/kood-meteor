if(Meteor.isClient){
    Session.setDefault('menuSelect', 'all');
}

Template.sidebar_menu.events({
    'click .chbox_status_recipe':function(evt, tmpl){
        if(evt.currentTarget.checked == true)
        {
            switch(evt.currentTarget.value){
                case "all" : Session.set('menuSelect', "all"); break;
                case "beef" : Session.set('menuSelect', "beef"); break;
                case "chicken" : Session.set('menuSelect', "chicken"); break;
                case "pork" : Session.set('menuSelect', "pork"); break;
                case "seafood" : Session.set('menuSelect', "seafood"); break;
                case "vegan" : Session.set('menuSelect', "vegan"); break;
                case "dessert" : Session.set('menuSelect', "dessert");"dessert"; break;
                case "fusion" : Session.set('menuSelect', "fusion");"fusion"; break;
                case "etc" : Session.set('menuSelect', "etc");"etc"; break;
            }
            Router.current().render(Template.sidebar_menu).data();
            Router.current().render(Template.koodMain).data();
        }
    }
});