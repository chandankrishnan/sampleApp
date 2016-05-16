angular.module('myApp',['ui.router'])
		.config(function($stateProvider,$urlRouterProvider){
			$urlRouterProvider.otherwise('/login');
			$stateProvider
			.state('signup',{
				url:'/signup',
				templateUrl:'template/signup.html',
				controller:'signupCtrl'
			})
			.state('login',{
				url:'/login',
				templateUrl:'template/login.html',
				controller:'loginCtrl'
			})
			.state('view',{
				url:'/view',
				templateUrl:'template/view.html',
				controller:'viewCtrl'
			})
		});

		