angular.module('Angular App Name', /*[dependencies are optional]*/)

/* Both constants are provided by JEXIA */
.constant('AppUrl', /* URL for your JEXIA app */)

.constant('root_key', {
	'key': /* your key hash */,
	'secret': /* your secret hash */
})

.service('JEXIA_Auth', ['$q', '$http', 'AppUrl', 'root_key',
	function ($q, $http, AppUrl, root_key) {
		var self = this; // Keep scope locally
		var options = {	url: AppUrl,	method: 'POST',	data: root_key };

		/* GET the Auth Token */
		self.authenticate = function() {
			var _q = $q.defer();
			$http(options).success(function (response) {
				_q.resolve(response.token);
			}).error(function (reason) {
				_q.reject(reason);
			});
			return _q.promise;
		}

		/* SET the headers for every request */
		self.setHeaders = function(token) {
			$http.defaults.headers.common.Authorization = 'Bearer '+token;
		}
	}
]);
