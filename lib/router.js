Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	notFoundTemplate: 'notFound'
});

Router.route('/', {
	name: 'login'
});

Router.route('/signup', {
	name: 'signup'
});

Router.route('/main', {
	name: 'koodMain',
	waitOn : function(){
		return [Meteor.subscribe("getAllRecipes")];

	},
	data : function(){
		return {
			recipeList : Recipes.find().fetch()
		};
	}
});

Router.route('/recipe/:_id',{
	name : 'recipePage',
	waitOn: function() {
		return Meteor.subscribe('getAllRecipes');
	},
	data: function() {
		return Recipes.findOne(this.params._id);
	}
});

Router.route('/myinfo', {
	name : 'myinfo',
	waitOn : function(){
		return [Meteor.subscribe("getAllRecipes")];

	}
});

Router.route('/write', {
	name : 'recipeWrite'
});

Router.route('/friends',{
	name : 'friendList',
	waitOn : function() {
		return [Meteor.subscribe("getAllUsers")];
	},
	data : function() {
		return {
			friendList: Meteor.users.find({
				username: {

					$in: Meteor.user().profile.friends
				}
			}).fetch()
		};
	}
});

Router.route('/userList',{
	waitOn : function(){
		return [Meteor.subscribe("getAllUsers")];

	},

	data : function(){
		return {
			userList : Meteor.users.find().fetch()
		};
	}
});

Router.route('/searchPage', {
	waitOn: function () {
		return [Meteor.subscribe("getAllRecipes")];

	},
	data: function () {
		return {
			recipeList: Recipes.find({
					$or: [
						{ recipeName: Session.get('searchResult') },
						{ userName: Session.get('searchResult') }
					]
				}
			).fetch()
		};
	}
});

var requireLogin = function() {
	if (! Meteor.user()) {
		if (Meteor.loggingIn()) {
			this.render(this.loadingTemplate);
		} else {
			this.render('accessDenied');
		}
	} else {
		this.next();
	}
};


Router.route('/test', {
	name: 'test'
});


var exeption = ['login', 'signup'];

Router.onBeforeAction(requireLogin, {except:exeption});