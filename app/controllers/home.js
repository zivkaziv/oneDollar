angular.module('MyApp')
    .controller('HomeCtrl', function($scope,$http) {
        console.log('home');

        $scope.paid = -1;
        $scope.opts = {
            env: 'production',
            client: {
                sandbox:    'AR0is7d9puDI-dhdTTr-SNIIKIB7b34OdCMocd6jw8fjR4U9M3rdB9eQPca4XwsF4Pq0fHROmwZOEIz2L',
                production: 'AWko3FYYPbdgAPjyKMwGD0N8jtZHyjzQ6MRiHikvZjCrfEX_Upkvg8cGbTjX8Xz7YpQ8g52fzZGa4x6-'
            },
            payment: function() {
                var env    = this.props.env;
                var client = this.props.client;
                return paypal.rest.payment.create(env, client, {
                    transactions: [
                        {
                            amount: { total: '1.00', currency: 'USD' }
                        }
                    ]
                });
            },
            commit: true, // Optional: show a 'Pay Now' button in the checkout flow
            onAuthorize: function(data, actions) {
                // Optional: display a confirmation page here
                return actions.payment.execute().then(function() {
                    console.log('payment complete');

                    // Show a success page to the buyer
                });
            }
        };

        $scope.check = function() {
            $http.get('paid').then(function(response){
                $scope.paid = response.data.paid;
            });
        }
    });
