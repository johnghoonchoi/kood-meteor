Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	notFoundTemplate: 'notFound',
});

Router.route('/', {
	name: 'login'
});

Router.route('/signup', {
	name: 'signup'
});

recipeListController = RouteController.extend({
	increment: 6,
	recipeLimit: function() {
		return parseInt(this.params.recipeLimit) || this.increment;
	},
	findOptions: function() {
		return {sort: {submitted: -1}, limit: this.recipeLimit()};
	},
	waitOn : function(){
		return Meteor.subscribe('getAllRecipes');
	},
	recipeList: function() {
		if(Session.get('menuSelect') != 'all')
		{
			if(Session.get('menuSelect') == Meteor.user().username){
				return Recipes.find({userName:Session.get('menuSelect')}, this.findOptions());
			}
			return Recipes.find({division:Session.get('menuSelect')}, this.findOptions());
		}else
			return Recipes.find({}, this.findOptions());
	},
	data: function() {
		var hasMore = this.recipeList().count() === this.recipeLimit();
		var nextPath = this.route.path({recipeLimit: this.recipeLimit() + this.increment});

		return {
			recipeList: this.recipeList(),
			nextPath: hasMore ? nextPath : null
		};
	}
});

Router.route('/main/:recipeLimit?',{
	name: 'koodMain',
	controller: recipeListController
});

Router.route('/myinfo/:recipeLimit?', {
	name : 'myinfo',
	controller: recipeListController
});

Router.route('/recipe/:_id',{
	name : 'recipePage',
	waitOn : function(){
		return Meteor.subscribe('getAllRecipes');
	},
	data: function() {
		return Recipes.findOne(this.params._id);
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

Router.route('/basiccooking', {
	name: 'basiccooking'
});




var exeption = ['login', 'signup'];

Router.onBeforeAction(requireLogin, {except:exeption});