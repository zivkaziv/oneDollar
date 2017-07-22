angular.module('MyApp').run(['$templateCache', function($templateCache) {$templateCache.put('partials/404.html','<div class="container text-center">\n  <h1>404</h1>\n  <p>Page Not Found</p>\n</div>');
$templateCache.put('partials/contact.html','<div class="container">\n  <div class="panel">\n    <div class="panel-heading">\n      <h3 class="panel-title">Contact Form</h3>\n    </div>\n    <div class="panel-body">\n      <div ng-if="messages.error" role="alert" class="alert alert-danger">\n        <div ng-repeat="error in messages.error">{{error.msg}}</div>\n      </div>\n      <div ng-if="messages.success" role="alert" class="alert alert-success">\n        <div ng-repeat="success in messages.success">{{success.msg}}</div>\n      </div>\n      <form ng-submit="sendContactForm()" class="form-horizontal">\n        <div class="form-group">\n          <label for="name" class="col-sm-2">Name</label>\n          <div class="col-sm-8">\n            <input type="text" name="name" id="name" class="form-control" ng-model="contact.name" autofocus>\n          </div>\n        </div>\n        <div class="form-group">\n          <label for="email" class="col-sm-2">Email</label>\n          <div class="col-sm-8">\n            <input type="email" name="email" id="email" class="form-control" ng-model="contact.email">\n          </div>\n        </div>\n        <div class="form-group">\n          <label for="message" class="col-sm-2">Body</label>\n          <div class="col-sm-8">\n            <textarea name="message" id="message" rows="7" class="form-control" ng-model="contact.message"></textarea>\n          </div>\n        </div>\n        <div class="form-group">\n          <div class="col-sm-offset-2 col-sm-8">\n            <button type="submit" class="btn btn-success">Send</button>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>');
$templateCache.put('partials/footer.html','<footer>\n  <p>\xA9 2016 Company, Inc. All Rights Reserved.</p>\n</footer>');
$templateCache.put('partials/header.html','<nav ng-controller="HeaderCtrl" class="navbar navbar-default navbar-static-top">\n  <div class="container">\n    <div class="navbar-header">\n      <button type="button" data-toggle="collapse" data-target="#navbar" class="navbar-toggle collapsed">\n        <span class="sr-only">Toggle navigation</span>\n        <span class="icon-bar"></span>\n        <span class="icon-bar"></span>\n        <span class="icon-bar"></span>\n      </button>\n      <a href="/" class="navbar-brand">Project name</a>\n    </div>\n    <div id="navbar" class="navbar-collapse collapse">\n      <ul class="nav navbar-nav">\n        <li ng-class="{ active: isActive(\'/\')}"><a href="/">Home</a></li>\n        <li ng-class="{ active: isActive(\'/contact\')}"><a href="/contact">Contact</a></li>\n      </ul>\n    </div>\n  </div>\n</nav>\n');
$templateCache.put('partials/home.html','<div class="container-fluid main-container" ng-controller="HomeCtrl" >\n  <div style="margin:0 20% ;text-align: center;margin-top: 50px;">\n    <div>\n      <h1 style="font-size: 45px">Don\'t you curious to know how many people paid 1$ to see how many people paid 1$?</h1>\n    </div>\n\n    <div>\n      <img ng-click="check()" ng-hide="paid > 0" style="height: 150px; margin-top: 20px" src="http://www.strongestinworld.com/wp-content/uploads/2015/02/1-USD-e1424865623157.png">\n      <h1 style="margin-top: 90px;" ng-show="paid > 0">{{paid}}</br></br></br> people paid like you.. </br> Thank you</h1>\n    </div>\n\n    <div ng-hide="paid > 0">\n      <h2 style="margin-top: 30px">Click here to find out</h2>\n    </div>\n    <div ng-hide="paid > 0" style="height: 50px; margin-top: 20px">\n      <paypal-button\n              env="opts.env"\n              client="opts.client"\n              payment="opts.payment"\n              commit="opts.commit"\n              on-authorize="opts.onAuthorize">\n      </paypal-button>\n      <!--<img style="height: 50px; margin-top: 20px" src="https://www.josh.biz/wp-content/uploads/2012/12/paypal-pay-now.png">-->\n    </div>\n\n  </div>\n\n\n\n  <!--<div class="row">-->\n    <!--<div class="col-sm-4">-->\n      <!--<div class="panel">-->\n        <!--<div class="panel-body">-->\n          <!--<h3>Heading</h3>-->\n          <!--<p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris-->\n            <!--condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod.-->\n            <!--Donec sed odio dui.</p>-->\n          <!--<a href="#" role="button" class="btn btn-default">View details</a>-->\n        <!--</div>-->\n      <!--</div>-->\n    <!--</div>-->\n    <!--<div class="col-sm-4">-->\n      <!--<div class="panel">-->\n        <!--<div class="panel-body">-->\n          <!--<h3>Heading</h3>-->\n          <!--<p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris-->\n            <!--condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod.-->\n            <!--Donec sed odio dui.</p>-->\n          <!--<a href="#" role="button" class="btn btn-default">View details</a>-->\n        <!--</div>-->\n      <!--</div>-->\n    <!--</div>-->\n    <!--<div class="col-sm-4">-->\n      <!--<div class="panel">-->\n        <!--<div class="panel-body">-->\n          <!--<h3>Heading</h3>-->\n          <!--<p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris-->\n            <!--condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod.-->\n            <!--Donec sed odio dui.</p>-->\n          <!--<a href="#" role="button" class="btn btn-default">View details</a>-->\n        <!--</div>-->\n      <!--</div>-->\n    <!--</div>-->\n  <!--</div>-->\n</div>\n');}]);