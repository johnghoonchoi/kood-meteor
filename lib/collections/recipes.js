Recipes = new Mongo.Collection('recipes');

if(Meteor.isClient){
    Meteor.methods({
        nice : function(a){
            Recipes.insert({name:a,email:'��Ŭ���̾�Ʈ'});
        }
    });
}

if(Meteor.isServer){
    Meteor.methods({
        nice : function(a){
            Recipes.insert({name:a,email:'������'});
        }
    });
}

Recipes.deny({
    insert: function(){
        return false;
    },
    update: function(){
        return false;
    },
    remove: function(){
        return false;
    }
});

Recipes.allow({
    insert: function(){
        return true;
    },
    update: function(){
        return true;
    },
    remove: function(){
        return true;
    }
});