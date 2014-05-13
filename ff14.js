  var app = angular.module('food-finder-14-app', ['ngRoute']);
  app.config(['$routeProvider', function($routeProvider) {
      
      $routeProvider.
          when('/', {
            templateUrl: 'main.html',
            controller: 'MainController'
          }).
          when('/about', {
            templateUrl: 'about.html',
            controller: 'AboutController'
          }).
          when('/license', {
            templateUrl: 'license.html',
            controller: 'LicenseController'
          })
          ;
      }
  ]);
  app.controller('MainController', ['$scope', '$http', function($scope, $http) {
  
    $scope.change = function() {
      $scope.update();
    }
    $scope.items = [];
    $http({method: 'GET', url: 'ff14.json'}).
        success(function(data, status, headers, config) {
            $scope.items = data;
    }).
        error(function(data, status, headers, config) {
    });
    $scope.result = [];
    $scope.master = {};
    $scope.priority = 'vit';
    
    $scope.select = function() {
    }
    $scope.update = function() {
      var items = $scope.items;
      $scope.result = [];
      var i;
      /* クソコード */
      switch ($scope.priority) {
        case 'vit':
          var vitper = $scope.inputVIT / 100;
          if (typeof vitper != 'undefined' && vitper > 0) {
            for (i = items.length - 1; i>=0; i--) {
              var vit = 0;
              if (typeof items[i].vit != 'undefined')
                vit = parseInt(items[i].vit, 10);
              if (typeof items[i].vitper != 'undefined') {
                vit = parseInt(items[i].vitper, 10) * vitper;
                max = parseInt(items[i].vitmax, 10);
                if (vit > max) {
                  vit = max;
                }
              }
              if (vit > 0) {
                $scope.result.push({'item': items[i], 'rank':vit});
              }
            }
          }
          break;
        case 'pie':
          var pieper = $scope.inputPIE / 100;
          if (typeof pieper != 'undefined' && pieper > 0) {
            for (i = items.length - 1; i>=0; i--) {
              var pie = 0;
              if (typeof items[i].pie != 'undefined')
                pie = parseInt(items[i].pie, 10);
              if (typeof items[i].pieper != 'undefined') {
                pie = parseInt(items[i].pieper, 10) * pieper;
                max = parseInt(items[i].piemax, 10);
                if (pie > max) {
                  pie = max;
                }
              }
              if (pie > 0) {
                $scope.result.push({'item': items[i], 'rank':pie});
              }
            }
          }
          break;
        case 'accuracy':
          var accuracyper = $scope.inputAccuracy / 100;
          if (typeof accuracyper != 'undefined' && accuracyper > 0) {
            for (i = items.length - 1; i>=0; i--) {
              var accuracy = 0;
              if (typeof items[i].accuracy != 'undefined')
                accuracy = parseInt(items[i].accuracy, 10);
              if (typeof items[i].accuracyper != 'undefined') {
                accuracy = parseInt(items[i].accuracyper, 10) * accuracyper;
                max = parseInt(items[i].accuracymax, 10);
                if (accuracy > max) {
                  accuracy = max;
                }
              }
              if (accuracy > 0) {
                $scope.result.push({'item': items[i], 'rank':accuracy});
              }
            }
          }
          break;
        case 'critical':
          var criticalper = $scope.inputCritical / 100;
          if (typeof criticalper != 'undefined' && criticalper > 0) {
            for (i = items.length - 1; i>=0; i--) {
              var critical = 0;
              if (typeof items[i].critical != 'undefined')
                critical = parseInt(items[i].critical, 10);
              if (typeof items[i].criticalper != 'undefined') {
                critical = parseInt(items[i].criticalper, 10) * criticalper;
                max = parseInt(items[i].criticalmax, 10);
                if (critical > max) {
                  critical = max;
                }
              }
              if (critical > 0) {
                $scope.result.push({'item': items[i], 'rank':critical});
              }
            }
          }
          break;
        case 'determination':
          var determinationper = $scope.inputDetermination / 100;
          if (typeof determinationper != 'undefined' && determinationper > 0) {
            for (i = items.length - 1; i>=0; i--) {
              var determination = 0;
              if (typeof items[i].determination != 'undefined')
                determination = parseInt(items[i].determination, 10);
              if (typeof items[i].determinationper != 'undefined') {
                determination = parseInt(items[i].determinationper, 10) * determinationper;
                max = parseInt(items[i].determinationmax, 10);
                if (determination > max) {
                  determination = max;
                }
              }
              if (determination > 0) {
                $scope.result.push({'item': items[i], 'rank':determination});
              }
            }
          }
          break;
        case 'parry':
          var parryper = $scope.inputParry / 100;
          if (typeof parryper != 'undefined' && parryper > 0) {
            for (i = items.length - 1; i>=0; i--) {
              var parry = 0;
              if (typeof items[i].parry != 'undefined')
                parry = parseInt(items[i].parry, 10);
              if (typeof items[i].parryper != 'undefined') {
                parry = parseInt(items[i].parryper, 10) * parryper;
                max = parseInt(items[i].parrymax, 10);
                if (parry > max) {
                  parry = max;
                }
              }
              if (parry > 0) {
                $scope.result.push({'item': items[i], 'rank':parry});
              }
            }
          }
          break;
        case 'skillspeed':
          var skillspeedper = $scope.inputSkillSpeed / 100;
          if (typeof skillspeedper != 'undefined' && skillspeedper > 0) {
            for (i = items.length - 1; i>=0; i--) {
              var skillspeed = 0;
              if (typeof items[i].skillspeed != 'undefined')
                skillspeed = parseInt(items[i].skillspeed, 10);
              if (typeof items[i].skillspeedper != 'undefined') {
                skillspeed = parseInt(items[i].skillspeedper, 10) * skillspeedper;
                max = parseInt(items[i].skillspeedmax, 10);
                if (skillspeed > max) {
                  skillspeed = max;
                }
              }
              if (skillspeed > 0) {
                $scope.result.push({'item': items[i], 'rank':skillspeed});
              }
            }
          }
          break;
        case 'spellspeed':
          var spellspeedper = $scope.inputSpellSpeed / 100;
          if (typeof spellspeedper != 'undefined' && spellspeedper > 0) {
            for (i = items.length - 1; i>=0; i--) {
              var spellspeed = 0;
              if (typeof items[i].spellspeed != 'undefined')
                spellspeed = parseInt(items[i].spellspeed, 10);
              if (typeof items[i].spellspeedper != 'undefined') {
                spellspeed = parseInt(items[i].spellspeedper, 10) * spellspeedper;
                max = parseInt(items[i].spellspeedmax, 10);
                if (spellspeed > max) {
                  spellspeed = max;
                }
              }
              if (spellspeed > 0) {
                $scope.result.push({'item': items[i], 'rank':spellspeed});
              }
            }
          }
          break;
        case 'cp':
          var cpper = $scope.inputCP / 100;
          if (typeof cpper != 'undefined' && cpper > 0) {
            for (i = items.length - 1; i>=0; i--) {
              var cp = 0;
              if (typeof items[i].cp != 'undefined')
                cp = parseInt(items[i].cp, 10);
              if (typeof items[i].cpper != 'undefined') {
                cp = parseInt(items[i].cpper, 10) * cpper;
                max = parseInt(items[i].cpmax, 10);
                if (cp > max) {
                  cp = max;
                }
              }
              if (cp > 0) {
                $scope.result.push({'item': items[i], 'rank':cp});
              }
            }
          }
          break;
        case 'craftsmanship':
          var craftsmanshipper = $scope.inputCraftsmanship / 100;
          if (typeof craftsmanshipper != 'undefined' && craftsmanshipper > 0) {
            for (i = items.length - 1; i>=0; i--) {
              var craftsmanship = 0;
              if (typeof items[i].craftsmanship != 'undefined')
                craftsmanship = parseInt(items[i].craftsmanship, 10);
              if (typeof items[i].craftsmanshipper != 'undefined') {
                craftsmanship = parseInt(items[i].craftsmanshipper, 10) * craftsmanshipper;
                max = parseInt(items[i].craftsmanshipmax, 10);
                if (craftsmanship > max) {
                  craftsmanship = max;
                }
              }
              if (craftsmanship > 0) {
                $scope.result.push({'item': items[i], 'rank':craftsmanship});
              }
            }
          }
          break;
        case 'control':
          var controlper = $scope.inputControl / 100;
          if (typeof controlper != 'undefined' && controlper > 0) {
            for (i = items.length - 1; i>=0; i--) {
              var control = 0;
              if (typeof items[i].control != 'undefined')
                control = parseInt(items[i].control, 10);
              if (typeof items[i].controlper != 'undefined') {
                control = parseInt(items[i].controlper, 10) * controlper;
                max = parseInt(items[i].controlmax, 10);
                if (control > max) {
                  control = max;
                }
              }
              if (control > 0) {
                $scope.result.push({'item': items[i], 'rank':control});
              }
            }
          }
          break;
        case 'gp':
          var gpper = $scope.inputGP / 100;
          if (typeof gpper != 'undefined' && gpper > 0) {
            for (i = items.length - 1; i>=0; i--) {
              var gp = 0;
              if (typeof items[i].gp != 'undefined')
                gp = parseInt(items[i].gp, 10);
              if (typeof items[i].gpper != 'undefined') {
                gp = parseInt(items[i].gpper, 10) * gpper;
                max = parseInt(items[i].gpmax, 10);
                if (gp > max) {
                  gp = max;
                }
              }
              if (gp > 0) {
                $scope.result.push({'item': items[i], 'rank':gp});
              }
            }
          }
          break;
        case 'gathering':
          var gatheringper = $scope.inputGathering / 100;
          if (typeof gatheringper != 'undefined' && gatheringper > 0) {
            for (i = items.length - 1; i>=0; i--) {
              var gathering = 0;
              if (typeof items[i].gathering != 'undefined')
                gathering = parseInt(items[i].gathering, 10);
              if (typeof items[i].gatheringper != 'undefined') {
                gathering = parseInt(items[i].gatheringper, 10) * gatheringper;
                max = parseInt(items[i].gatheringmax, 10);
                if (gathering > max) {
                  gathering = max;
                }
              }
              if (gathering > 0) {
                $scope.result.push({'item': items[i], 'rank':gathering});
              }
            }
          }
          break;
        case 'perception':
          var perceptionper = $scope.inputPerception / 100;
          if (typeof perceptionper != 'undefined' && perceptionper > 0) {
            for (i = items.length - 1; i>=0; i--) {
              var perception = 0;
              if (typeof items[i].perception != 'undefined')
                perception = parseInt(items[i].perception, 10);
              if (typeof items[i].perceptionper != 'undefined') {
                perception = parseInt(items[i].perceptionper, 10) * perceptionper;
                max = parseInt(items[i].perceptionmax, 10);
                if (perception > max) {
                  perception = max;
                }
              }
              if (perception > 0) {
                $scope.result.push({'item': items[i], 'rank':perception});
              }
            }
          }
          break;
      }
      $scope.result = $scope.result.sort(function(a, b){
            var x = a.rank;
            var y = b.rank;
            if (x > y) return -1;
            if (x < y) return 1;
            return 0;
        });
/*       $scope.master = angular.copy(user); */
    };
 
    $scope.reset = function() {
      $scope.user = angular.copy($scope.master);
    };
 
    $scope.reset();
  }]);
  app.controller('AboutController', ['$scope', function($scope) {
      
  }]);
  app.controller('LicenseController', ['$scope', function($scope) {
      
  }]);
  app.controller('Controller', ['$scope', function($scope) {
      
  }]);
  
  var INTEGER_REGEXP = /^\-?\d+$/;
  app.directive('integer', function() {
    return {
      require: 'ngModel',
      link: function(scope, elm, attrs, ctrl) {
        ctrl.$parsers.unshift(function(viewValue) {
          if (INTEGER_REGEXP.test(viewValue)) {
            // it is valid
            ctrl.$setValidity('integer', true);
            return viewValue;
          } else {
            // it is invalid, return undefined (no model update)
            ctrl.$setValidity('integer', false);
            return undefined;
          }
        });
      }
    };
  });

  var FLOAT_REGEXP = /^\-?\d+((\.|\,)\d+)?$/;
  app.directive('smartFloat', function() {
    return {
      require: 'ngModel',
      link: function(scope, elm, attrs, ctrl) {
        ctrl.$parsers.unshift(function(viewValue) {
          if (FLOAT_REGEXP.test(viewValue)) {
            ctrl.$setValidity('float', true);
            return parseFloat(viewValue.replace(',', '.'));
          } else {
            ctrl.$setValidity('float', false);
            return undefined;
          }
        });
      }
    };
  });
