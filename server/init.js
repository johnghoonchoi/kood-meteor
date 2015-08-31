Meteor.startup(function() {
    if(Recipes.find().count() == 0){
        console.log('It is Okay');
    }
});
