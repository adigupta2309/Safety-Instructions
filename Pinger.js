console.log($scope.app)

//timeout function

$timeout(function(){
  $scope.view.wdg['pinger1'].shader = "pinger; rings f 5; rate f 4; direction f -1; r f 0.4; g f 0.5; b f 0.6"; 
  $scope.view.wdg['pinger2'].shader = "pinger; rings f 5; rate f 4; direction f -1; r f 0.4; g f 0.5; b f 0.6"; 
  $scope.view.wdg['pinger3'].shader = "pinger; rings f 5; rate f 4; direction f -1; r f 0.4; g f 0.5; b f 0.6";
  $scope.view.wdg['pinger4'].shader = "pinger; rings f 5; rate f 4; direction f -1; r f 0.4; g f 0.5; b f 0.6"; 
  $scope.view.wdg['pinger5'].shader = "pinger; rings f 5; rate f 4; direction f -1; r f 0.4; g f 0.5; b f 0.6"; 
  $scope.view.wdg['pinger6'].shader = "pinger; rings f 5; rate f 4; direction f -1; r f 0.4; g f 0.5; b f 0.6"; 
},1000);


$scope.showPopup = function(){
  $scope.view.wdg['infoPopup']['visible'] = true;


$scope.hidePopup = function(){
  $scope.view.wdg['infoPopup']['visible'] = false;

};
