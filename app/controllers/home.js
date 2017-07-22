angular.module('MyApp')
    .controller('HomeCtrl', function($scope,$http) {

        $scope.paid = -1;
        $scope.opts = {
            env: 'production',
            client: {
                sandbox:    'AR0is7d9puDI-dhdTTr-SNIIKIB7b34OdCMocd6jw8fjR4U9M3rdB9eQPca4XwsF4Pq0fHROmwZOEIz2',
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
                    $scope.paymentCompleted(data);
                    // Show a success page to the buyer
                });
            }
        };

        $scope.paymentCompleted = function(data) {
            if(!data){
                data ={
                    paymentToken: 'EC-78G0183212429403N',
                    payerID: 'ZLWWWAGVFBLW6',
                    paymentID: 'PAY-06T46904U5212710NLFZ5C7Y',
                    intent: 'sale',
                    returnUrl: 'https://www.sandbox.paypal.com/?paymentId=PAY-06T46904U5212710NLFZ5C7Y&token=EC-78G0183212429403N&PayerID=ZLWWWAGVFBLW6' }

            }
            $http.post('paid',{'paypal':data}).then(function(response){
                $scope.paid = response.data.paid;
            });
        }
    });
