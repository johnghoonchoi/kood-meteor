Template.recipeWrite.events({
    'click button[name=Submit]' : function(evt,tmpl){
        //title
        var titlePic = "/cfs/files/images/" + Session.get('titlePic');
        var method = new Array();

        for(i=0;i<counter;i++)
        {
            method[i]=
            {
                picture: "/cfs/files/images/" + Session.get('methodImage' + (i + 1)),
                comment: tmpl.find('input[name=recipeMethod' + (i + 1) + ']').value
            }
        }

        Recipes.insert({
            recipeName: tmpl.find('input[name=recipeName]').value
            , userName: Meteor.user().username
            , ingredientList: tmpl.find('input[name=ingredientList]').value
            , division: tmpl.find('input[name=division]').value
            , titlePic: titlePic
            , method:method
        });

        Session.set('methodImage1', 'undefined');
        Session.set('titlePic', 'undefined');
        counter=1;
        Router.go('/myInfo');

    },
    'click button[name=Cancel]' : function(evt,tmpl){
        Router.go('/myInfo');
    },
    'change .myTitleInput': function(event, template) {
        FS.Utility.eachFile(event, function (file) {
            Images.insert(file, function (err, fileObj) {
                Session.set('titlePic',fileObj._id);
                setTimeout(function () {
                    UI.insert(UI.renderWithData(Template.imageView, {imageview:fileObj._id}),$('.titleImage')[0]);
                }, 500);
            })
        })
    }
});
