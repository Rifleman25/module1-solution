(function  () {
   'use strict'; 

    angular.module('LunchCheck', [])

    .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController ($scope) {

        var messages = ['Enjoy!', 'Too much!', 'Please enter data first'];

        var messageStyles = [{ 'font-size': '1.3em', 'font-weight': 'bold'},
        { 'font-size': '1.3em', 'font-weight': 'bold', 'color': 'red'},
        { 'font-size': '1.3em', 'font-weight': 'bold', 'color': 'green'}];

        var textboxStyles = [{'border-color': 'black'},
            {'border-color': 'red'},
            {'border-color': 'green'}];

        $scope.messageStyle = messageStyles[0];
        $scope.textboxStyle = textboxStyles[0];
        
        $scope.checkLounch = function () {
            if ($scope.lounch == undefined || $scope.lounch == '') {
                $scope.message = messages[2];
                $scope.messageStyle = messageStyles[1];
                $scope.textboxStyle = textboxStyles[1];
            }
            else {
                var  lounchCount = checkEmptyItem();

                if (lounchCount > 3) {
                    $scope.message = messages[1];
                    $scope.messageStyle = messageStyles[2];
                    $scope.textboxStyle = textboxStyles[2];
                }
                else if (lounchCount > 0) {
                    $scope.message = messages[0];
                    $scope.messageStyle = messageStyles[2];
                    $scope.textboxStyle = textboxStyles[2];
                }
                else {
                    $scope.message = messages[2];
                    $scope.messageStyle = messageStyles[1];
                    $scope.textboxStyle = textboxStyles[1];
                }
            }
            
        };

        function checkEmptyItem  () {
            var lounchList = $scope.lounch.split(','),
                    lounchCount = 0;
            lounchList.forEach(element => {
                element = element.trim();
                if (element != '')
                    lounchCount++;
            });
            return lounchCount;
        }
    };


    
}) ();