var app = angular.module('APP',[]);

app.controller('signup',function($scope,$http,$location){

    $scope.Signup = function(){

        if($scope.username!=undefined && $scope.password!=undefined){

            $http.post('/signup',{username : $scope.username , password : $scope.password})
            .then(function(response){
                console.log(response.data.redirect);
                window.location = response.data.redirect;

                alert(response.data.message);
            },function(){   
                console.log("NO");
                alert("PROB");    
            });

        }else{
            alert("Please Fill All Feilds");
        }
    };

});