angular.module("MyApp",["ngRoute","paypal-button","720kb.socialshare"]).config(["$routeProvider","$locationProvider",function(t,e){e.html5Mode(!0),t.when("/",{templateUrl:"partials/home.html"}).otherwise({templateUrl:"partials/404.html"})}]).run(["$rootScope","$window",function(t,e){e.localStorage.user&&(t.currentUser=JSON.parse(e.localStorage.user))}]),angular.module("MyApp").controller("ContactCtrl",["$scope","Contact",function(t,e){t.sendContactForm=function(){e.send(t.contact).then(function(e){t.messages={success:[e.data]}})["catch"](function(e){t.messages={error:Array.isArray(e.data)?e.data:[e.data]}})}}]),angular.module("MyApp").controller("ForgotCtrl",["$scope","Account",function(t,e){t.forgotPassword=function(){e.forgotPassword(t.user).then(function(e){t.messages={success:[e.data]}})["catch"](function(e){t.messages={error:Array.isArray(e.data)?e.data:[e.data]}})}}]),angular.module("MyApp").controller("HeaderCtrl",["$scope","$location","$window","$auth",function(t,e,a,n){t.isActive=function(t){return t===e.path()},t.isAuthenticated=function(){return n.isAuthenticated()},t.logout=function(){n.logout(),delete a.localStorage.user,e.path("/")}}]),angular.module("MyApp").controller("HomeCtrl",["$scope","$http",function(t,e){t.paid=-1,t.opts={env:"production",locale:"en_US",client:{sandbox:"AR0is7d9puDI-dhdTTr-SNIIKIB7b34OdCMocd6jw8fjR4U9M3rdB9eQPca4XwsF4Pq0fHROmwZOEIz2",production:"AWko3FYYPbdgAPjyKMwGD0N8jtZHyjzQ6MRiHikvZjCrfEX_Upkvg8cGbTjX8Xz7YpQ8g52fzZGa4x6-"},payment:function(){var t=this.props.env,e=this.props.client;return paypal.rest.payment.create(t,e,{transactions:[{amount:{total:"1.00",currency:"USD"}}]})},commit:!0,onAuthorize:function(e,a){return a.payment.execute().then(function(){console.log("payment complete"),t.paymentCompleted(e)})}},t.paymentCompleted=function(a){a||(a={paymentToken:"EC-78G0183212429403N",payerID:"ZLWWWAGVFBLW6",paymentID:"PAY-06T46904U5212710NLFZ5C7Y",intent:"sale",returnUrl:"https://www.sandbox.paypal.com/?paymentId=PAY-06T46904U5212710NLFZ5C7Y&token=EC-78G0183212429403N&PayerID=ZLWWWAGVFBLW6"}),e.post("paid",{paypal:a}).then(function(e){t.paid=e.data.paid})}}]),angular.module("MyApp").controller("LoginCtrl",["$scope","$rootScope","$location","$window","$auth",function(t,e,a,n,r){t.login=function(){r.login(t.user).then(function(t){e.currentUser=t.data.user,n.localStorage.user=JSON.stringify(t.data.user),a.path("/account")})["catch"](function(e){t.messages={error:Array.isArray(e.data)?e.data:[e.data]}})},t.authenticate=function(o){r.authenticate(o).then(function(t){e.currentUser=t.data.user,n.localStorage.user=JSON.stringify(t.data.user),a.path("/")})["catch"](function(e){e.error?t.messages={error:[{msg:e.error}]}:e.data&&(t.messages={error:[e.data]})})}}]),angular.module("MyApp").controller("ProfileCtrl",["$scope","$rootScope","$location","$window","$auth","Account",function(t,e,a,n,r,o){t.profile=e.currentUser,t.updateProfile=function(){o.updateProfile(t.profile).then(function(a){e.currentUser=a.data.user,n.localStorage.user=JSON.stringify(a.data.user),t.messages={success:[a.data]}})["catch"](function(e){t.messages={error:Array.isArray(e.data)?e.data:[e.data]}})},t.changePassword=function(){o.changePassword(t.profile).then(function(e){t.messages={success:[e.data]}})["catch"](function(e){t.messages={error:Array.isArray(e.data)?e.data:[e.data]}})},t.link=function(e){r.link(e).then(function(e){t.messages={success:[e.data]}})["catch"](function(e){n.scrollTo(0,0),t.messages={error:[e.data]}})},t.unlink=function(e){r.unlink(e).then(function(){t.messages={success:[response.data]}})["catch"](function(e){t.messages={error:[e.data]}})},t.deleteAccount=function(){o.deleteAccount().then(function(){r.logout(),delete n.localStorage.user,a.path("/")})["catch"](function(e){t.messages={error:[e.data]}})}}]),angular.module("MyApp").controller("ResetCtrl",["$scope","Account",function(t,e){t.resetPassword=function(){e.resetPassword(t.user).then(function(e){t.messages={success:[e.data]}})["catch"](function(e){t.messages={error:Array.isArray(e.data)?e.data:[e.data]}})}}]),angular.module("MyApp").controller("SignupCtrl",["$scope","$rootScope","$location","$window","$auth",function(t,e,a,n,r){t.signup=function(){r.signup(t.user).then(function(t){r.setToken(t),e.currentUser=t.data.user,n.localStorage.user=JSON.stringify(t.data.user),a.path("/")})["catch"](function(e){t.messages={error:Array.isArray(e.data)?e.data:[e.data]}})},t.authenticate=function(o){r.authenticate(o).then(function(t){e.currentUser=t.data.user,n.localStorage.user=JSON.stringify(t.data.user),a.path("/")})["catch"](function(e){e.error?t.messages={error:[{msg:e.error}]}:e.data&&(t.messages={error:[e.data]})})}}]),angular.module("MyApp").factory("Account",["$http",function(t){return{updateProfile:function(e){return t.put("/account",e)},changePassword:function(e){return t.put("/account",e)},deleteAccount:function(){return t["delete"]("/account")},forgotPassword:function(e){return t.post("/forgot",e)},resetPassword:function(e){return t.post("/reset",e)}}}]),angular.module("MyApp").factory("Contact",["$http",function(t){return{send:function(e){return t.post("/contact",e)}}}]);