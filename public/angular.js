var app = angular.module('APP',[]);

app.controller('signup',function($scope,$http){

    $scope.Signup = function(){

        if($scope.username!=undefined && $scope.password!=undefined){

            $http.post('/signup',{username : $scope.username , password : $scope.password})
            .then(function(response){
                console.log("YES");
                alert("DONE");
            },function(){   
                console.log("NO");
                alert("PROB");    
            });

        }else{
            alert("Please Fill All Feilds");
        }
    };

});