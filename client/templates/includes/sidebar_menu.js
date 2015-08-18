if(Meteor.isClient){
    sidebarArray = new Array();
}

Template.sidebar_menu.events({
    'click .chbox_status_recipe':function(evt, tmpl){
        if(evt.currentTarget.checked == true)
        {
            switch(evt.currentTarget.value){
                case "beef" : sidebarArray[0] = "beef"; break;
                case "chicken" : sidebarArray[1] = "chicken"; break;
                case "pork" : sidebarArray[2] = "pork"; break;
                case "seafood" : sidebarArray[3] = "seafood"; break;
                case "vegan" : sidebarArray[4] = "vegan"; break;
                case "dessert" : sidebarArray[5] = "dessert"; break;
                case "fusion" : sidebarArray[6] = "fusion"; break;
                case "etc" : sidebarArray[7] = "etc"; break;
            }
        }else{
            switch(evt.currentTarget.value){
                case "beef" : sidebarArray[0] = ""; break;
                case "chicken" : sidebarArray[1] = ""; break;
                case "pork" : sidebarArray[2] = ""; break;
                case "seafood" : sidebarArray[3] = ""; break;
                case "vegan" : sidebarArray[4] = ""; break;
                case "dessert" : sidebarArray[5] = ""; break;
                case "fusion" : sidebarArray[6] = ""; break;
                case "etc" : sidebarArray[7] = ""; break;
            }
        }
        alert(sidebarArray);
    },
    'click button[name=Confirm]' : function(evt,tmpl){
        Router.current().render(Template.sidebar_menu).data();
        Router.current().render(Template.koodMain).data();
    }
});