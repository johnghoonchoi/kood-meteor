if (Meteor.isClient) {
    counter=1;
}

Template.recipeWriteMethod.events({
    'click a[name=Add]' : function(evt,tmpl){
        counter++;
        UI.insert(UI.render(Template.recipeWriteMethod),$('.recipeWriteMethod')[0]);
    },

    'change .myFileInput': function(event, template) {
        FS.Utility.eachFile(event, function (file) {
            Images.insert(file, function (err, fileObj) {
                Session.set(template.firstNode.name, fileObj._id);
                setTimeout(function () {
                    UI.insert(UI.renderWithData(Template.imageView, {imageview: fileObj._id}), $('.' + template.firstNode.name)[0]);
                },150)
            });
        });
    }
});

Template.recipeWriteMethod.helpers({
    counter : function(){
        return counter;
    }
});