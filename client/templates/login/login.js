Template.login.rendered=function(){
	if(Meteor.loggingIn())
		Router.go('/main');
};

Template.login.events({
	'click button[name=LogIn]' : function(evt,tmpl){

		var id = tmpl.find('input[name=username]').value;
		var pwd = tmpl.find('input[name=password]').value;

		Meteor.loginWithPassword( id,pwd, function(err){
			if (err){
				alert('Login Failed' + err);
			}
			else{
				alert("Login Success");
				Router.go('/main');
			}
		});

	},
	'click button[name=SignUp]' : function(evt,tmpl){
		Router.go('/signup');
	}
});

Template.signup.events({
	'click button[name=Save]' : function(evt,tmpl){
		var info = {
			username : tmpl.find('input[name=username]').value
			,password : tmpl.find('input[name=password]').value
			,email : tmpl.find('input[name=email]').value
			,profile : {
				nickname: tmpl.find('input[name=nickname]').value,
				friends : new Array()
			}
		}
		Accounts.createUser(info,function(err){
			if (err){
				alert(err);
			}else{
				alert("Account Created");
				Router.go('/main');
			}
		});

	}
	,
	'click button[name=Cancel]' : function(evt,tmpl){
		Router.go('/');
	}
});