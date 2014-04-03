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
/*   function Controller($scope) { */
  app.controller('MainController', ['$scope', function($scope) {
  
    $scope.change = function() {
      $scope.update();
    }
    $scope.items = [
    {
        "name": "マーモットステーキ",
        "description": "スキルスピード +8% (上限 2)　VIT +1　命中力 +1",
        "skillspeedper": 8,
        "skillspeedmax": 2,
        "vit": 1,
        "accuracy": 1
    },
    {
        "name": "マーモットステーキHQ",
        "description": "スキルスピード +10% (上限 3)　VIT +1　命中力 +1",
        "skillspeedper": 10,
        "skillspeedmax": 3,
        "vit": 1,
        "accuracy": 1
    },
    {
        "name": "ドードーのグリル",
        "description": "スキルスピード +8% (上限 4)　VIT +4% (上限 2)　命中力 +2% (上限 2)",
        "skillspeedper": 8,
        "skillspeedmax": 4,
        "vitper": 4,
        "vitmax": 2,
        "accuracyper": 2,
        "accuracymax": 2
    },
    {
        "name": "ドードーのグリルHQ",
        "description": "スキルスピード +10% (上限 5)　VIT +5% (上限 2)　命中力 +2% (上限 2)",
        "skillspeedper": 10,
        "skillspeedmax": 5,
        "vitper": 5,
        "vitmax": 2,
        "accuracyper": 2,
        "accuracymax": 2
    },
    {
        "name": "モールローフ",
        "description": "スキルスピード +8% (上限 4)　VIT +4% (上限 2)　クリティカル発動力 +2% (上限 2)",
        "skillspeedper": 8,
        "skillspeedmax": 4,
        "vitper": 4,
        "vitmax": 2,
        "criticalper": 2,
        "criticalmax": 2
    },
    {
        "name": "モールローフHQ",
        "description": "スキルスピード +10% (上限 5)　VIT +5% (上限 3)　クリティカル発動力 +2% (上限 2)",
        "skillspeedper": 10,
        "skillspeedmax": 5,
        "vitper": 5,
        "vitmax": 3,
        "criticalper": 2,
        "criticalmax": 2
    },
    {
        "name": "ミコッテ風山の幸串焼",
        "description": "スキルスピード +8% (上限 5)　VIT +4% (上限 2)　受け流し発動力 +2% (上限 2)",
        "skillspeedper": 8,
        "skillspeedmax": 5,
        "vitper": 4,
        "vitmax": 2,
        "parryper": 2,
        "parrymax": 2
    },
    {
        "name": "ミコッテ風山の幸串焼HQ",
        "description": "スキルスピード +10% (上限 6)　VIT +5% (上限 3)　受け流し発動力 +2% (上限 2)",
        "skillspeedper": 10,
        "skillspeedmax": 6,
        "vitper": 5,
        "vitmax": 3,
        "parryper": 2,
        "parrymax": 2
    },
    {
        "name": "アンテロープステーキ",
        "description": "スキルスピード +8% (上限 6)　VIT +4% (上限 3)　クリティカル発動力 +2% (上限 2)",
        "skillspeedper": 8,
        "skillspeedmax": 6,
        "vitper": 4,
        "vitmax": 3,
        "criticalper": 2,
        "criticalmax": 2
    },
    {
        "name": "アンテロープステーキHQ",
        "description": "スキルスピード +10% (上限 7)　VIT +5% (上限 4)　クリティカル発動力 +2% (上限 3)",
        "skillspeedper": 10,
        "skillspeedmax": 7,
        "vitper": 5,
        "vitmax": 4,
        "criticalper": 2,
        "criticalmax": 3
    },
    {
        "name": "大山羊ステーキ",
        "description": "スキルスピード +7% (上限 8)　VIT +4% (上限 5)　意思力 +2% (上限 2)",
        "skillspeedper": 7,
        "skillspeedmax": 8,
        "vitper": 4,
        "vitmax": 5,
        "determinationper": 2,
        "determinationmax": 2
    },
    {
        "name": "大山羊ステーキHQ",
        "description": "スキルスピード +9% (上限 10)　VIT +5% (上限 6)　意思力 +2% (上限 2)",
        "skillspeedper": 9,
        "skillspeedmax": 10,
        "vitper": 5,
        "vitmax": 6,
        "determinationper": 2,
        "determinationmax": 2
    },
    {
        "name": "スモークドラプトル",
        "description": "スキルスピード +6% (上限 10)　VIT +4% (上限 6)　命中力 +2% (上限 4)",
        "skillspeedper": 6,
        "skillspeedmax": 10,
        "vitper": 4,
        "vitmax": 6,
        "accuracyper": 2,
        "accuracymax": 4
    },
    {
        "name": "スモークドラプトルHQ",
        "description": "スキルスピード +7% (上限 12)　VIT +5% (上限 8)　命中力 +2% (上限 5)",
        "skillspeedper": 7,
        "skillspeedmax": 12,
        "vitper": 5,
        "vitmax": 8,
        "accuracyper": 2,
        "accuracymax": 5
    },
    {
        "name": "ビーフジャーキー",
        "description": "スキルスピード +4% (上限 14)　VIT +3% (上限 9)　命中力 +2% (上限 6)",
        "skillspeedper": 4,
        "skillspeedmax": 14,
        "vitper": 3,
        "vitmax": 9,
        "accuracyper": 2,
        "accuracymax": 6
    },
    {
        "name": "ビーフジャーキーHQ",
        "description": "スキルスピード +5% (上限 18)　VIT +4% (上限 11)　命中力 +2% (上限 7)",
        "skillspeedper": 5,
        "skillspeedmax": 18,
        "vitper": 4,
        "vitmax": 11,
        "accuracyper": 2,
        "accuracymax": 7
    },
    {
        "name": "エフトステーキ",
        "description": "スキルスピード +4% (上限 21)　VIT +3% (上限 12)　命中力 +2% (上限 8)",
        "skillspeedper": 4,
        "skillspeedmax": 21,
        "vitper": 3,
        "vitmax": 12,
        "accuracyper": 2,
        "accuracymax": 8
    },
    {
        "name": "エフトステーキHQ",
        "description": "スキルスピード +5% (上限 26)　VIT +4% (上限 15)　命中力 +2% (上限 10)",
        "skillspeedper": 5,
        "skillspeedmax": 26,
        "vitper": 4,
        "vitmax": 15,
        "accuracyper": 2,
        "accuracymax": 10
    },
    {
        "name": "クァールのワインソテー",
        "description": "スキルスピード +4% (上限 22)　VIT +4% (上限 15)　命中力 +2% (上限 9)",
        "skillspeedper": 4,
        "skillspeedmax": 22,
        "vitper": 4,
        "vitmax": 15,
        "accuracyper": 2,
        "accuracymax": 9
    },
    {
        "name": "クァールのワインソテーHQ",
        "description": "スキルスピード +5% (上限 27)　VIT +5% (上限 19)　命中力 +2% (上限 11)",
        "skillspeedper": 5,
        "skillspeedmax": 27,
        "vitper": 5,
        "vitmax": 19,
        "accuracyper": 2,
        "accuracymax": 11
    },
    {
        "name": "ローストカナール",
        "description": "スキルスピード +4% (上限 24)　VIT +4% (上限 18)　意思力 +2% (上限 6)",
        "skillspeedper": 4,
        "skillspeedmax": 24,
        "vitper": 4,
        "vitmax": 18,
        "determinationper": 2,
        "determinationmax": 6
    },
    {
        "name": "ローストカナールHQ",
        "description": "スキルスピード +5% (上限 30)　VIT +5% (上限 23)　意思力 +2% (上限 8)",
        "skillspeedper": 5,
        "skillspeedmax": 30,
        "vitper": 5,
        "vitmax": 23,
        "determinationper": 2,
        "determinationmax": 8
    },
    {
        "name": "ローストドードー",
        "description": "スキルスピード +7% (上限 7)　VIT +4% (上限 4)",
        "skillspeedper": 7,
        "skillspeedmax": 7,
        "vitper": 4,
        "vitmax": 4
    },
    {
        "name": "ローストドードーHQ",
        "description": "スキルスピード +9% (上限 9)　VIT +5% (上限 5)",
        "skillspeedper": 9,
        "skillspeedmax": 9,
        "vitper": 5,
        "vitmax": 5
    },
    {
        "name": "ボイルドエッグ",
        "description": "クリティカル発動力 +8% (上限 2)　VIT +1　命中力 +1",
        "criticalper": 8,
        "criticalmax": 2,
        "vit": 1,
        "accuracy": 1
    },
    {
        "name": "ボイルドエッグHQ",
        "description": "クリティカル発動力 +10% (上限 3)　VIT +1　命中力 +1",
        "criticalper": 10,
        "criticalmax": 3,
        "vit": 1,
        "accuracy": 1
    },
    {
        "name": "ドードーオムレツ",
        "description": "クリティカル発動力 +8% (上限 5)　VIT +4% (上限 2)　意思力 +1",
        "criticalper": 8,
        "criticalmax": 5,
        "vitper": 4,
        "vitmax": 2,
        "determination": 1
    },
    {
        "name": "ドードーオムレツHQ",
        "description": "クリティカル発動力 +10% (上限 6)　VIT +5% (上限 3)　意思力 +1",
        "criticalper": 10,
        "criticalmax": 6,
        "vitper": 5,
        "vitmax": 3,
        "determination": 1
    },
    {
        "name": "マスタードエッグズ",
        "description": "クリティカル発動力 +7% (上限 6)　VIT +4% (上限 4)　命中力 +2% (上限 2)",
        "criticalper": 7,
        "criticalmax": 6,
        "vitper": 4,
        "vitmax": 4,
        "accuracyper": 2,
        "accuracymax": 2
    },
    {
        "name": "マスタードエッグズHQ",
        "description": "クリティカル発動力 +9% (上限 8)　VIT +5% (上限 5)　命中力 +2% (上限 3)",
        "criticalper": 9,
        "criticalmax": 8,
        "vitper": 5,
        "vitmax": 5,
        "accuracyper": 2,
        "accuracymax": 3
    },
    {
        "name": "フライドエッグ",
        "description": "クリティカル発動力 +7% (上限 8)　VIT +4% (上限 5)　意思力 +2% (上限 2)",
        "criticalper": 7,
        "criticalmax": 8,
        "vitper": 4,
        "vitmax": 5,
        "determinationper": 2,
        "determinationmax": 2
    },
    {
        "name": "フライドエッグHQ",
        "description": "クリティカル発動力 +9% (上限 10)　VIT +5% (上限 6)　意思力 +2% (上限 2)",
        "criticalper": 9,
        "criticalmax": 10,
        "vitper": 5,
        "vitmax": 6,
        "determinationper": 2,
        "determinationmax": 2
    },
    {
        "name": "スクランブルエッグ",
        "description": "クリティカル発動力 +6% (上限 10)　VIT +4% (上限 6)　命中力 +2% (上限 4)",
        "criticalper": 6,
        "criticalmax": 10,
        "vitper": 4,
        "vitmax": 6,
        "accuracyper": 2,
        "accuracymax": 4
    },
    {
        "name": "スクランブルエッグHQ",
        "description": "クリティカル発動力 +7% (上限 13)　VIT +5% (上限 8)　命中力 +2% (上限 5)",
        "criticalper": 7,
        "criticalmax": 13,
        "vitper": 5,
        "vitmax": 8,
        "accuracyper": 2,
        "accuracymax": 5
    },
    {
        "name": "デビルドエッグズ",
        "description": "クリティカル発動力 +4% (上限 19)　VIT +3% (上限 11)　命中力 +2% (上限 8)",
        "criticalper": 4,
        "criticalmax": 19,
        "vitper": 3,
        "vitmax": 11,
        "accuracyper": 2,
        "accuracymax": 8
    },
    {
        "name": "デビルドエッグズHQ",
        "description": "クリティカル発動力 +5% (上限 24)　VIT +4% (上限 14)　命中力 +2% (上限 10)",
        "criticalper": 5,
        "criticalmax": 24,
        "vitper": 4,
        "vitmax": 14,
        "accuracyper": 2,
        "accuracymax": 10
    },
    {
        "name": "アプカルオムレツ",
        "description": "クリティカル発動力 +4% (上限 22)　VIT +4% (上限 15)　命中力 +2% (上限 9)",
        "criticalper": 4,
        "criticalmax": 22,
        "vitper": 4,
        "vitmax": 15,
        "accuracyper": 2,
        "accuracymax": 9
    },
    {
        "name": "アプカルオムレツHQ",
        "description": "クリティカル発動力 +5% (上限 27)　VIT +5% (上限 19)　命中力 +2% (上限 11)",
        "criticalper": 5,
        "criticalmax": 27,
        "vitper": 5,
        "vitmax": 19,
        "accuracyper": 2,
        "accuracymax": 11
    },
    {
        "name": "ベイクドピピラ",
        "description": "命中力 +8% (上限 3)　VIT +1　スキルスピード +1",
        "accuracyper": 8,
        "accuracymax": 3,
        "vit": 1,
        "skillspeed": 1
    },
    {
        "name": "ベイクドピピラHQ",
        "description": "命中力 +10% (上限 4)　VIT +1　スキルスピード +1",
        "accuracyper": 10,
        "accuracymax": 4,
        "vit": 1,
        "skillspeed": 1
    },
    {
        "name": "ツリートードレッグズ",
        "description": "命中力 +8% (上限 3)　VIT +1　スペルスピード +1",
        "accuracyper": 8,
        "accuracymax": 3,
        "vit": 1,
        "spellspeed": 1
    },
    {
        "name": "ツリートードレッグズHQ",
        "description": "命中力 +10% (上限 4)　VIT +1　スペルスピード +1",
        "accuracyper": 10,
        "accuracymax": 4,
        "vit": 1,
        "spellspeed": 1
    },
    {
        "name": "ボイルドクレイフィッシュ",
        "description": "命中力 +8% (上限 3)　VIT +4% (上限 2)　スペルスピード +1",
        "accuracyper": 8,
        "accuracymax": 3,
        "vitper": 4,
        "vitmax": 2,
        "spellspeed": 1
    },
    {
        "name": "ボイルドクレイフィッシュHQ",
        "description": "命中力 +10% (上限 4)　VIT +5% (上限 2)　スペルスピード +1",
        "accuracyper": 10,
        "accuracymax": 4,
        "vitper": 5,
        "vitmax": 2,
        "spellspeed": 1
    },
    {
        "name": "グリルドトラウト",
        "description": "命中力 +8% (上限 3)　VIT +4% (上限 2)　クリティカル発動力 +1",
        "accuracyper": 8,
        "accuracymax": 3,
        "vitper": 4,
        "vitmax": 2,
        "critical": 1
    },
    {
        "name": "グリルドトラウトHQ",
        "description": "命中力 +10% (上限 4)　VIT +5% (上限 2)　クリティカル発動力 +1",
        "accuracyper": 10,
        "accuracymax": 4,
        "vitper": 5,
        "vitmax": 2,
        "critical": 1
    },
    {
        "name": "グリルドカープ",
        "description": "命中力 +8% (上限 5)　VIT +4% (上限 2)　スキルスピード +2% (上限 2)",
        "accuracyper": 8,
        "accuracymax": 5,
        "vitper": 4,
        "vitmax": 2,
        "skillspeedper": 2,
        "skillspeedmax": 2
    },
    {
        "name": "グリルドカープHQ",
        "description": "命中力 +10% (上限 6)　VIT +5% (上限 3)　スキルスピード +2% (上限 2)",
        "accuracyper": 10,
        "accuracymax": 6,
        "vitper": 5,
        "vitmax": 3,
        "skillspeedper": 2,
        "skillspeedmax": 2
    },
    {
        "name": "グリルドウォームトラウト",
        "description": "命中力 +7% (上限 6)　VIT +4% (上限 3)　スキルスピード +2% (上限 2)",
        "accuracyper": 7,
        "accuracymax": 6,
        "vitper": 4,
        "vitmax": 3,
        "skillspeedper": 2,
        "skillspeedmax": 2
    },
    {
        "name": "グリルドウォームトラウトHQ",
        "description": "命中力 +9% (上限 7)　VIT +5% (上限 4)　スキルスピード +2% (上限 3)",
        "accuracyper": 9,
        "accuracymax": 7,
        "vitper": 5,
        "vitmax": 4,
        "skillspeedper": 2,
        "skillspeedmax": 3
    },
    {
        "name": "サーモンムニエル",
        "description": "命中力 +7% (上限 7)　VIT +4% (上限 4)　クリティカル発動力 +2% (上限 2)",
        "accuracyper": 7,
        "accuracymax": 7,
        "vitper": 4,
        "vitmax": 4,
        "criticalper": 2,
        "criticalmax": 2
    },
    {
        "name": "サーモンムニエルHQ",
        "description": "命中力 +9% (上限 9)　VIT +5% (上限 5)　クリティカル発動力 +2% (上限 3)",
        "accuracyper": 9,
        "accuracymax": 9,
        "vitper": 5,
        "vitmax": 5,
        "criticalper": 2,
        "criticalmax": 3
    },
    {
        "name": "カープ&マグワート",
        "description": "命中力 +6% (上限 13)　VIT +4% (上限 8)　クリティカル発動力 +2% (上限 5)",
        "accuracyper": 6,
        "accuracymax": 13,
        "vitper": 4,
        "vitmax": 8,
        "criticalper": 2,
        "criticalmax": 5
    },
    {
        "name": "カープ&マグワートHQ",
        "description": "命中力 +7% (上限 16)　VIT +5% (上限 10)　クリティカル発動力 +2% (上限 6)",
        "accuracyper": 7,
        "accuracymax": 16,
        "vitper": 5,
        "vitmax": 10,
        "criticalper": 2,
        "criticalmax": 6
    },
    {
        "name": "雨乞魚のグリル",
        "description": "命中力 +5% (上限 14)　VIT +4% (上限 9)　スキルスピード +2% (上限 6)",
        "accuracyper": 5,
        "accuracymax": 14,
        "vitper": 4,
        "vitmax": 9,
        "skillspeedper": 2,
        "skillspeedmax": 6
    },
    {
        "name": "雨乞魚のグリルHQ",
        "description": "命中力 +6% (上限 17)　VIT +5% (上限 11)　スキルスピード +2% (上限 7)",
        "accuracyper": 6,
        "accuracymax": 17,
        "vitper": 5,
        "vitmax": 11,
        "skillspeedper": 2,
        "skillspeedmax": 7
    },
    {
        "name": "パイクのキャベツ巻き",
        "description": "命中力 +4% (上限 17)　VIT +3% (上限 10)　クリティカル発動力 +2% (上限 7)",
        "accuracyper": 4,
        "accuracymax": 17,
        "vitper": 3,
        "vitmax": 10,
        "criticalper": 2,
        "criticalmax": 7
    },
    {
        "name": "パイクのキャベツ巻きHQ",
        "description": "命中力 +5% (上限 21)　VIT +4% (上限 13)　クリティカル発動力 +2% (上限 9)",
        "accuracyper": 5,
        "accuracymax": 21,
        "vitper": 4,
        "vitmax": 13,
        "criticalper": 2,
        "criticalmax": 9
    },
    {
        "name": "ラーヴァトードレッグズ",
        "description": "命中力 +4% (上限 22)　VIT +4% (上限 15)　クリティカル発動力 +2% (上限 9)",
        "accuracyper": 4,
        "accuracymax": 22,
        "vitper": 4,
        "vitmax": 15,
        "criticalper": 2,
        "criticalmax": 9
    },
    {
        "name": "ラーヴァトードレッグズHQ",
        "description": "命中力 +5% (上限 27)　VIT +5% (上限 19)　クリティカル発動力 +2% (上限 11)",
        "accuracyper": 5,
        "accuracymax": 27,
        "vitper": 5,
        "vitmax": 19,
        "criticalper": 2,
        "criticalmax": 11
    },
    {
        "name": "ナマズのワイン蒸",
        "description": "命中力 +4% (上限 24)　VIT +4% (上限 18)　クリティカル発動力 +2% (上限 10)",
        "accuracyper": 4,
        "accuracymax": 24,
        "vitper": 4,
        "vitmax": 18,
        "criticalper": 2,
        "criticalmax": 10
    },
    {
        "name": "ナマズのワイン蒸HQ",
        "description": "命中力 +5% (上限 30)　VIT +5% (上限 23)　クリティカル発動力 +2% (上限 12)",
        "accuracyper": 5,
        "accuracymax": 30,
        "vitper": 5,
        "vitmax": 23,
        "criticalper": 2,
        "criticalmax": 12
    },
    {
        "name": "ソルトコッド",
        "description": "加工精度 +8% (上限 4)",
        "controlper": 8,
        "controlmax": 4
    },
    {
        "name": "ソルトコッドHQ",
        "description": "加工精度 +10% (上限 5)",
        "controlper": 10,
        "controlmax": 5
    },
    {
        "name": "ローオイスター",
        "description": "加工精度 +8% (上限 8)",
        "controlper": 8,
        "controlmax": 8
    },
    {
        "name": "ローオイスターHQ",
        "description": "加工精度 +10% (上限 10)",
        "controlper": 10,
        "controlmax": 10
    },
    {
        "name": "ボイルドブリーム",
        "description": "加工精度 +8% (上限 12)",
        "controlper": 8,
        "controlmax": 12
    },
    {
        "name": "ボイルドブリームHQ",
        "description": "加工精度 +10% (上限 15)",
        "controlper": 10,
        "controlmax": 15
    },
    {
        "name": "ベイクドソール",
        "description": "加工精度 +8% (上限 14)",
        "controlper": 8,
        "controlmax": 14
    },
    {
        "name": "ベイクドソールHQ",
        "description": "加工精度 +10% (上限 17)",
        "controlper": 10,
        "controlmax": 17
    },
    {
        "name": "ミコッテ風海の幸串焼",
        "description": "加工精度 +8% (上限 16)",
        "controlper": 8,
        "controlmax": 16
    },
    {
        "name": "ミコッテ風海の幸串焼HQ",
        "description": "加工精度 +10% (上限 20)",
        "controlper": 10,
        "controlmax": 20
    },
    {
        "name": "ソルトコッドパフ",
        "description": "加工精度 +8% (上限 18)",
        "controlper": 8,
        "controlmax": 18
    },
    {
        "name": "ソルトコッドパフHQ",
        "description": "加工精度 +10% (上限 23)",
        "controlper": 10,
        "controlmax": 23
    },
    {
        "name": "ダガースープ",
        "description": "加工精度 +8% (上限 22)",
        "controlper": 8,
        "controlmax": 22
    },
    {
        "name": "ダガースープHQ",
        "description": "加工精度 +10% (上限 27)",
        "controlper": 10,
        "controlmax": 27
    },
    {
        "name": "マヒマヒの揚げ焼き",
        "description": "加工精度 +8% (上限 25)",
        "controlper": 8,
        "controlmax": 25
    },
    {
        "name": "マヒマヒの揚げ焼きHQ",
        "description": "加工精度 +10% (上限 31)",
        "controlper": 10,
        "controlmax": 31
    },
    {
        "name": "マトンシチュー",
        "description": "GP +6% (上限 19)　獲得力 +2% (上限 2)",
        "gpper": 6,
        "gpmax": 19,
        "gatheringper": 2,
        "gatheringmax": 2
    },
    {
        "name": "マトンシチューHQ",
        "description": "GP +7% (上限 24)　獲得力 +3% (上限 3)",
        "gpper": 7,
        "gpmax": 24,
        "gatheringper": 3,
        "gatheringmax": 3
    },
    {
        "name": "レンティル&チェスナット",
        "description": "GP +6% (上限 20)　識質力 +2% (上限 2)",
        "gpper": 6,
        "gpmax": 20,
        "perceptionper": 2,
        "perceptionmax": 2
    },
    {
        "name": "レンティル&チェスナットHQ",
        "description": "GP +7% (上限 25)　識質力 +3% (上限 3)",
        "gpper": 7,
        "gpmax": 25,
        "perceptionper": 3,
        "perceptionmax": 3
    },
    {
        "name": "アンテロープシチュー",
        "description": "GP +6% (上限 21)　獲得力 +2% (上限 3)",
        "gpper": 6,
        "gpmax": 21,
        "gatheringper": 2,
        "gatheringmax": 3
    },
    {
        "name": "アンテロープシチューHQ",
        "description": "GP +7% (上限 26)　獲得力 +3% (上限 4)",
        "gpper": 7,
        "gpmax": 26,
        "gatheringper": 3,
        "gatheringmax": 4
    },
    {
        "name": "オロボンシチュー",
        "description": "GP +6% (上限 22)　獲得力 +2% (上限 3)",
        "gpper": 6,
        "gpmax": 22,
        "gatheringper": 2,
        "gatheringmax": 3
    },
    {
        "name": "オロボンシチューHQ",
        "description": "GP +7% (上限 27)　獲得力 +3% (上限 4)",
        "gpper": 7,
        "gpmax": 27,
        "gatheringper": 3,
        "gatheringmax": 4
    },
    {
        "name": "ラタトゥイユ",
        "description": "GP +6% (上限 23)　識質力 +2% (上限 5)",
        "gpper": 6,
        "gpmax": 23,
        "perceptionper": 2,
        "perceptionmax": 5
    },
    {
        "name": "ラタトゥイユHQ",
        "description": "GP +7% (上限 29)　識質力 +3% (上限 6)",
        "gpper": 7,
        "gpmax": 29,
        "perceptionper": 3,
        "perceptionmax": 6
    },
    {
        "name": "ビーフシチュー",
        "description": "GP +6% (上限 24)　獲得力 +2% (上限 6)",
        "gpper": 6,
        "gpmax": 24,
        "gatheringper": 2,
        "gatheringmax": 6
    },
    {
        "name": "ビーフシチューHQ",
        "description": "GP +7% (上限 30)　獲得力 +3% (上限 7)",
        "gpper": 7,
        "gpmax": 30,
        "gatheringper": 3,
        "gatheringmax": 7
    },
    {
        "name": "ゼーメル家風グラタン",
        "description": "GP +6% (上限 24)　識質力 +2% (上限 6)",
        "gpper": 6,
        "gpmax": 24,
        "perceptionper": 2,
        "perceptionmax": 6
    },
    {
        "name": "ゼーメル家風グラタンHQ",
        "description": "GP +7% (上限 30)　識質力 +3% (上限 8)",
        "gpper": 7,
        "gpmax": 30,
        "perceptionper": 3,
        "perceptionmax": 8
    },
    {
        "name": "雑煮",
        "description": "GP +6% (上限 19)　識質力 +5",
        "gpper": 6,
        "gpmax": 19,
        "perception": 5
    },
    {
        "name": "雑煮HQ",
        "description": "GP +7% (上限 24)　識質力 +6",
        "gpper": 7,
        "gpmax": 24,
        "perception": 6
    },
    {
        "name": "ジャック・オ・ランタン",
        "description": "識質力 +6% (上限 6)",
        "perceptionper": 6,
        "perceptionmax": 6
    },
    {
        "name": "ジャック・オ・ランタンHQ",
        "description": "識質力 +7% (上限 7)",
        "perceptionper": 7,
        "perceptionmax": 7
    },
    {
        "name": "パースニップサラダ",
        "description": "識質力 +6% (上限 6)　GP +2% (上限 8)",
        "perceptionper": 6,
        "perceptionmax": 6,
        "gpper": 2,
        "gpmax": 8
    },
    {
        "name": "パースニップサラダHQ",
        "description": "識質力 +7% (上限 7)　GP +3% (上限 10)",
        "perceptionper": 7,
        "perceptionmax": 7,
        "gpper": 3,
        "gpmax": 10
    },
    {
        "name": "ローストノパル",
        "description": "識質力 +6% (上限 6)　獲得力 +2% (上限 2)",
        "perceptionper": 6,
        "perceptionmax": 6,
        "gatheringper": 2,
        "gatheringmax": 2
    },
    {
        "name": "ローストノパルHQ",
        "description": "識質力 +7% (上限 8)　獲得力 +3% (上限 3)",
        "perceptionper": 7,
        "perceptionmax": 8,
        "gatheringper": 3,
        "gatheringmax": 3
    },
    {
        "name": "スピナッチソテー",
        "description": "識質力 +6% (上限 8)　獲得力 +2% (上限 3)",
        "perceptionper": 6,
        "perceptionmax": 8,
        "gatheringper": 2,
        "gatheringmax": 3
    },
    {
        "name": "スピナッチソテーHQ",
        "description": "識質力 +7% (上限 10)　獲得力 +3% (上限 4)",
        "perceptionper": 7,
        "perceptionmax": 10,
        "gatheringper": 3,
        "gatheringmax": 4
    },
    {
        "name": "アリゲーターサラダ",
        "description": "識質力 +6% (上限 10)　GP +2% (上限 9)",
        "perceptionper": 6,
        "perceptionmax": 10,
        "gpper": 2,
        "gpmax": 9
    },
    {
        "name": "アリゲーターサラダHQ",
        "description": "識質力 +7% (上限 12)　GP +3% (上限 11)",
        "perceptionper": 7,
        "perceptionmax": 12,
        "gpper": 3,
        "gpmax": 11
    },
    {
        "name": "ザワークラウト",
        "description": "識質力 +6% (上限 11)　GP +2% (上限 9)",
        "perceptionper": 6,
        "perceptionmax": 11,
        "gpper": 2,
        "gpmax": 9
    },
    {
        "name": "ザワークラウトHQ",
        "description": "識質力 +7% (上限 14)　GP +3% (上限 11)",
        "perceptionper": 7,
        "perceptionmax": 14,
        "gpper": 3,
        "gpmax": 11
    },
    {
        "name": "スタッフドアーティチョーク",
        "description": "識質力 +6% (上限 13)　獲得力 +2% (上限 5)",
        "perceptionper": 6,
        "perceptionmax": 13,
        "gatheringper": 2,
        "gatheringmax": 5
    },
    {
        "name": "スタッフドアーティチョークHQ",
        "description": "識質力 +7% (上限 16)　獲得力 +3% (上限 6)",
        "perceptionper": 7,
        "perceptionmax": 16,
        "gatheringper": 3,
        "gatheringmax": 6
    },
    {
        "name": "ランドトラップサラダ",
        "description": "識質力 +6% (上限 15)　GP +2% (上限 10)",
        "perceptionper": 6,
        "perceptionmax": 15,
        "gpper": 2,
        "gpmax": 10
    },
    {
        "name": "ランドトラップサラダHQ",
        "description": "識質力 +7% (上限 19)　GP +3% (上限 12)",
        "perceptionper": 7,
        "perceptionmax": 19,
        "gpper": 3,
        "gpmax": 12
    },
    {
        "name": "キノコのソテー",
        "description": "意思力 +1　VIT +1　命中力 +1",
        "determination": 1,
        "vit": 1,
        "accuracy": 1
    },
    {
        "name": "キノコのソテーHQ",
        "description": "意思力 +1　VIT +1　命中力 +1",
        "determination": 1,
        "vit": 1,
        "accuracy": 1
    },
    {
        "name": "鶏肉キノコ炒め",
        "description": "意思力 +8% (上限 3)　VIT +4% (上限 3)　命中力 +2% (上限 2)",
        "determinationper": 8,
        "determinationmax": 3,
        "vitper": 4,
        "vitmax": 3,
        "accuracyper": 2,
        "accuracymax": 2
    },
    {
        "name": "鶏肉キノコ炒めHQ",
        "description": "意思力 +10% (上限 4)　VIT +5% (上限 4)　命中力 +2% (上限 3)",
        "determinationper": 10,
        "determinationmax": 4,
        "vitper": 5,
        "vitmax": 4,
        "accuracyper": 2,
        "accuracymax": 3
    },
    {
        "name": "ミコッテ風森の幸串焼",
        "description": "意思力 +7% (上限 6)　VIT +4% (上限 6)　命中力 +2% (上限 4)",
        "determinationper": 7,
        "determinationmax": 6,
        "vitper": 4,
        "vitmax": 6,
        "accuracyper": 2,
        "accuracymax": 4
    },
    {
        "name": "ミコッテ風森の幸串焼HQ",
        "description": "意思力 +9% (上限 7)　VIT +5% (上限 7)　命中力 +2% (上限 5)",
        "determinationper": 9,
        "determinationmax": 7,
        "vitper": 5,
        "vitmax": 7,
        "accuracyper": 2,
        "accuracymax": 5
    },
    {
        "name": "ラプトルシチュー",
        "description": "意思力 +6% (上限 8)　VIT +4% (上限 9)　命中力 +2% (上限 6)",
        "determinationper": 6,
        "determinationmax": 8,
        "vitper": 4,
        "vitmax": 9,
        "accuracyper": 2,
        "accuracymax": 6
    },
    {
        "name": "ラプトルシチューHQ",
        "description": "意思力 +7% (上限 10)　VIT +5% (上限 11)　命中力 +2% (上限 7)",
        "determinationper": 7,
        "determinationmax": 10,
        "vitper": 5,
        "vitmax": 11,
        "accuracyper": 2,
        "accuracymax": 7
    },
    {
        "name": "キノコのガーリックソテー",
        "description": "意思力 +4% (上限 10)　VIT +3% (上限 10)　命中力 +2% (上限 6)",
        "determinationper": 4,
        "determinationmax": 10,
        "vitper": 3,
        "vitmax": 10,
        "accuracyper": 2,
        "accuracymax": 6
    },
    {
        "name": "キノコのガーリックソテーHQ",
        "description": "意思力 +5% (上限 13)　VIT +4% (上限 13)　命中力 +2% (上限 8)",
        "determinationper": 5,
        "determinationmax": 13,
        "vitper": 4,
        "vitmax": 13,
        "accuracyper": 2,
        "accuracymax": 8
    },
    {
        "name": "キノコのキャベツ巻き",
        "description": "意思力 +4% (上限 13)　VIT +3% (上限 12)　クリティカル発動力 +2% (上限 8)",
        "determinationper": 4,
        "determinationmax": 13,
        "vitper": 3,
        "vitmax": 12,
        "criticalper": 2,
        "criticalmax": 8
    },
    {
        "name": "キノコのキャベツ巻きHQ",
        "description": "意思力 +5% (上限 16)　VIT +4% (上限 15)　クリティカル発動力 +2% (上限 10)",
        "determinationper": 5,
        "determinationmax": 16,
        "vitper": 4,
        "vitmax": 15,
        "criticalper": 2,
        "criticalmax": 10
    },
    {
        "name": "ブラックトリュフリゾット",
        "description": "意思力 +4% (上限 14)　VIT +4% (上限 15)　クリティカル発動力 +2% (上限 9)",
        "determinationper": 4,
        "determinationmax": 14,
        "vitper": 4,
        "vitmax": 15,
        "criticalper": 2,
        "criticalmax": 9
    },
    {
        "name": "ブラックトリュフリゾットHQ",
        "description": "意思力 +5% (上限 17)　VIT +5% (上限 19)　クリティカル発動力 +2% (上限 11)",
        "determinationper": 5,
        "determinationmax": 17,
        "vitper": 5,
        "vitmax": 19,
        "criticalper": 2,
        "criticalmax": 11
    },
    {
        "name": "フラットブレッド",
        "description": "受け流し発動力 +8% (上限 2)　VIT +1　命中力 +1",
        "parryper": 8,
        "parrymax": 2,
        "vit": 1,
        "accuracy": 1
    },
    {
        "name": "フラットブレッドHQ",
        "description": "受け流し発動力 +10% (上限 3)　VIT +1　命中力 +1",
        "parryper": 10,
        "parrymax": 3,
        "vit": 1,
        "accuracy": 1
    },
    {
        "name": "ウォルナットブレッド",
        "description": "受け流し発動力 +8% (上限 5)　VIT +4% (上限 3)　命中力 +2% (上限 2)",
        "parryper": 8,
        "parrymax": 5,
        "vitper": 4,
        "vitmax": 3,
        "accuracyper": 2,
        "accuracymax": 2
    },
    {
        "name": "ウォルナットブレッドHQ",
        "description": "受け流し発動力 +10% (上限 6)　VIT +5% (上限 4)　命中力 +2% (上限 3)",
        "parryper": 10,
        "parrymax": 6,
        "vitper": 5,
        "vitmax": 4,
        "accuracyper": 2,
        "accuracymax": 3
    },
    {
        "name": "ハニーマフィン",
        "description": "受け流し発動力 +7% (上限 6)　VIT +4% (上限 4)　命中力 +2% (上限 2)",
        "parryper": 7,
        "parrymax": 6,
        "vitper": 4,
        "vitmax": 4,
        "accuracyper": 2,
        "accuracymax": 2
    },
    {
        "name": "ハニーマフィンHQ",
        "description": "受け流し発動力 +9% (上限 8)　VIT +5% (上限 5)　命中力 +2% (上限 3)",
        "parryper": 9,
        "parrymax": 8,
        "vitper": 5,
        "vitmax": 5,
        "accuracyper": 2,
        "accuracymax": 3
    },
    {
        "name": "プレッツェル",
        "description": "受け流し発動力 +7% (上限 7)　VIT +4% (上限 4)　クリティカル発動力 +2% (上限 2)",
        "parryper": 7,
        "parrymax": 7,
        "vitper": 4,
        "vitmax": 4,
        "criticalper": 2,
        "criticalmax": 2
    },
    {
        "name": "プレッツェルHQ",
        "description": "受け流し発動力 +9% (上限 9)　VIT +5% (上限 5)　クリティカル発動力 +2% (上限 3)",
        "parryper": 9,
        "parrymax": 9,
        "vitper": 5,
        "vitmax": 5,
        "criticalper": 2,
        "criticalmax": 3
    },
    {
        "name": "コーンブレッド",
        "description": "受け流し発動力 +7% (上限 10)　VIT +4% (上限 6)　スキルスピード +2% (上限 4)",
        "parryper": 7,
        "parrymax": 10,
        "vitper": 4,
        "vitmax": 6,
        "skillspeedper": 2,
        "skillspeedmax": 4
    },
    {
        "name": "コーンブレッドHQ",
        "description": "受け流し発動力 +9% (上限 12)　VIT +5% (上限 7)　スキルスピード +2% (上限 5)",
        "parryper": 9,
        "parrymax": 12,
        "vitper": 5,
        "vitmax": 7,
        "skillspeedper": 2,
        "skillspeedmax": 5
    },
    {
        "name": "エーコンクッキー",
        "description": "受け流し発動力 +6% (上限 10)　VIT +4% (上限 6)　命中力 +2% (上限 4)",
        "parryper": 6,
        "parrymax": 10,
        "vitper": 4,
        "vitmax": 6,
        "accuracyper": 2,
        "accuracymax": 4
    },
    {
        "name": "エーコンクッキーHQ",
        "description": "受け流し発動力 +7% (上限 13)　VIT +5% (上限 8)　命中力 +2% (上限 5)",
        "parryper": 7,
        "parrymax": 13,
        "vitper": 5,
        "vitmax": 8,
        "accuracyper": 2,
        "accuracymax": 5
    },
    {
        "name": "ナイツブレッド",
        "description": "受け流し発動力 +6% (上限 13)　VIT +4% (上限 8)　スキルスピード +2% (上限 5)",
        "parryper": 6,
        "parrymax": 13,
        "vitper": 4,
        "vitmax": 8,
        "skillspeedper": 2,
        "skillspeedmax": 5
    },
    {
        "name": "ナイツブレッドHQ",
        "description": "受け流し発動力 +7% (上限 16)　VIT +5% (上限 10)　スキルスピード +2% (上限 6)",
        "parryper": 7,
        "parrymax": 16,
        "vitper": 5,
        "vitmax": 10,
        "skillspeedper": 2,
        "skillspeedmax": 6
    },
    {
        "name": "ラノシアトースト",
        "description": "受け流し発動力 +4% (上限 18)　VIT +3% (上限 11)　命中力 +2% (上限 7)",
        "parryper": 4,
        "parrymax": 18,
        "vitper": 3,
        "vitmax": 11,
        "accuracyper": 2,
        "accuracymax": 7
    },
    {
        "name": "ラノシアトーストHQ",
        "description": "受け流し発動力 +5% (上限 23)　VIT +4% (上限 14)　命中力 +2% (上限 9)",
        "parryper": 5,
        "parrymax": 23,
        "vitper": 4,
        "vitmax": 14,
        "accuracyper": 2,
        "accuracymax": 9
    },
    {
        "name": "ビスマルク風エッグサンド",
        "description": "受け流し発動力 +4% (上限 22)　VIT +4% (上限 15)　命中力 +2% (上限 9)",
        "parryper": 4,
        "parrymax": 22,
        "vitper": 4,
        "vitmax": 15,
        "accuracyper": 2,
        "accuracymax": 9
    },
    {
        "name": "ビスマルク風エッグサンドHQ",
        "description": "受け流し発動力 +5% (上限 27)　VIT +5% (上限 19)　命中力 +2% (上限 11)",
        "parryper": 5,
        "parrymax": 27,
        "vitper": 5,
        "vitmax": 19,
        "accuracyper": 2,
        "accuracymax": 11
    },
    {
        "name": "ポポトパンケーキ",
        "description": "受け流し発動力 +4% (上限 24)　VIT +4% (上限 18)　命中力 +2% (上限 10)",
        "parryper": 4,
        "parrymax": 24,
        "vitper": 4,
        "vitmax": 18,
        "accuracyper": 2,
        "accuracymax": 10
    },
    {
        "name": "ポポトパンケーキHQ",
        "description": "受け流し発動力 +5% (上限 30)　VIT +5% (上限 23)　命中力 +2% (上限 12)",
        "parryper": 5,
        "parrymax": 30,
        "vitper": 5,
        "vitmax": 23,
        "accuracyper": 2,
        "accuracymax": 12
    },
    {
        "name": "ミズンマスト印のクッキー",
        "description": "VIT +1",
        "vit": 1
    },
    {
        "name": "とまり木印のクッキー",
        "description": "VIT +1",
        "vit": 1
    },
    {
        "name": "砂時計亭印のクッキー",
        "description": "VIT +1",
        "vit": 1
    },
    {
        "name": "ラビットパイ",
        "description": "獲得力 +6% (上限 6)　識質力 +2% (上限 2)",
        "gatheringper": 6,
        "gatheringmax": 6,
        "perceptionper": 2,
        "perceptionmax": 2
    },
    {
        "name": "ラビットパイHQ",
        "description": "獲得力 +7% (上限 7)　識質力 +3% (上限 3)",
        "gatheringper": 7,
        "gatheringmax": 7,
        "perceptionper": 3,
        "perceptionmax": 3
    },
    {
        "name": "アップルタルト",
        "description": "獲得力 +6% (上限 7)　GP +2% (上限 8)",
        "gatheringper": 6,
        "gatheringmax": 7,
        "gpper": 2,
        "gpmax": 8
    },
    {
        "name": "アップルタルトHQ",
        "description": "獲得力 +7% (上限 9)　GP +3% (上限 10)",
        "gatheringper": 7,
        "gatheringmax": 9,
        "gpper": 3,
        "gpmax": 10
    },
    {
        "name": "シェパードパイ",
        "description": "獲得力 +6% (上限 8)　識質力 +2% (上限 3)",
        "gatheringper": 6,
        "gatheringmax": 8,
        "perceptionper": 2,
        "perceptionmax": 3
    },
    {
        "name": "シェパードパイHQ",
        "description": "獲得力 +7% (上限 10)　識質力 +3% (上限 4)",
        "gatheringper": 7,
        "gatheringmax": 10,
        "perceptionper": 3,
        "perceptionmax": 4
    },
    {
        "name": "イールパイ",
        "description": "獲得力 +6% (上限 9)　識質力 +2% (上限 3)",
        "gatheringper": 6,
        "gatheringmax": 9,
        "perceptionper": 2,
        "perceptionmax": 3
    },
    {
        "name": "イールパイHQ",
        "description": "獲得力 +7% (上限 11)　識質力 +3% (上限 4)",
        "gatheringper": 7,
        "gatheringmax": 11,
        "perceptionper": 3,
        "perceptionmax": 4
    },
    {
        "name": "ブラッドカーラントタルト",
        "description": "獲得力 +6% (上限 10)　GP +2% (上限 9)",
        "gatheringper": 6,
        "gatheringmax": 10,
        "gpper": 2,
        "gpmax": 9
    },
    {
        "name": "ブラッドカーラントタルトHQ",
        "description": "獲得力 +7% (上限 12)　GP +3% (上限 11)",
        "gatheringper": 7,
        "gatheringmax": 12,
        "gpper": 3,
        "gpmax": 11
    },
    {
        "name": "ガレット・デ・ロワ",
        "description": "獲得力 +6% (上限 14)　GP +2% (上限 10)",
        "gatheringper": 6,
        "gatheringmax": 14,
        "gpper": 2,
        "gpmax": 10
    },
    {
        "name": "ガレット・デ・ロワHQ",
        "description": "獲得力 +7% (上限 17)　GP +3% (上限 12)",
        "gatheringper": 7,
        "gatheringmax": 17,
        "gpper": 3,
        "gpmax": 12
    },
    {
        "name": "猟師風エフトキッシュ",
        "description": "獲得力 +6% (上限 14)　識質力 +2% (上限 6)",
        "gatheringper": 6,
        "gatheringmax": 14,
        "perceptionper": 2,
        "perceptionmax": 6
    },
    {
        "name": "猟師風エフトキッシュHQ",
        "description": "獲得力 +7% (上限 17)　識質力 +3% (上限 7)",
        "gatheringper": 7,
        "gatheringmax": 17,
        "perceptionper": 3,
        "perceptionmax": 7
    },
    {
        "name": "トマトパイ",
        "description": "獲得力 +6% (上限 15)　識質力 +2% (上限 6)",
        "gatheringper": 6,
        "gatheringmax": 15,
        "perceptionper": 2,
        "perceptionmax": 6
    },
    {
        "name": "トマトパイHQ",
        "description": "獲得力 +7% (上限 19)　識質力 +3% (上限 8)",
        "gatheringper": 7,
        "gatheringmax": 19,
        "perceptionper": 3,
        "perceptionmax": 8
    },
    {
        "name": "スピナッチキッシュ",
        "description": "獲得力 +6% (上限 19)　識質力 +2% (上限 8)",
        "gatheringper": 6,
        "gatheringmax": 19,
        "perceptionper": 2,
        "perceptionmax": 8
    },
    {
        "name": "スピナッチキッシュHQ",
        "description": "獲得力 +7% (上限 24)　識質力 +3% (上限 10)",
        "gatheringper": 7,
        "gatheringmax": 24,
        "perceptionper": 3,
        "perceptionmax": 10
    },
    {
        "name": "フルメンティ",
        "description": "CP +10% (上限 10)",
        "cpper": 10,
        "cpmax": 10
    },
    {
        "name": "フルメンティHQ",
        "description": "CP +13% (上限 12)",
        "cpper": 13,
        "cpmax": 12
    },
    {
        "name": "ストーンスープ",
        "description": "CP +10% (上限 17)",
        "cpper": 10,
        "cpmax": 17
    },
    {
        "name": "ストーンスープHQ",
        "description": "CP +13% (上限 21)",
        "cpper": 13,
        "cpmax": 21
    },
    {
        "name": "ピースープ",
        "description": "CP +10% (上限 21)",
        "cpper": 10,
        "cpmax": 21
    },
    {
        "name": "ピースープHQ",
        "description": "CP +13% (上限 26)",
        "cpper": 13,
        "cpmax": 26
    },
    {
        "name": "カウルケニン",
        "description": "CP +10% (上限 24)",
        "cpper": 10,
        "cpmax": 24
    },
    {
        "name": "カウルケニンHQ",
        "description": "CP +13% (上限 30)",
        "cpper": 13,
        "cpmax": 30
    },
    {
        "name": "フィッシュスープ",
        "description": "CP +10% (上限 26)",
        "cpper": 10,
        "cpmax": 26
    },
    {
        "name": "フィッシュスープHQ",
        "description": "CP +13% (上限 33)",
        "cpper": 13,
        "cpmax": 33
    },
    {
        "name": "ブイヤベース",
        "description": "CP +10% (上限 34)",
        "cpper": 10,
        "cpmax": 34
    },
    {
        "name": "ブイヤベースHQ",
        "description": "CP +13% (上限 43)",
        "cpper": 13,
        "cpmax": 43
    },
    {
        "name": "冷製ポポトスープ",
        "description": "作業精度 +10% (上限 38)　CP +4% (上限 14)",
        "craftsmanshipper": 10,
        "craftsmanshipmax": 38,
        "cpper": 4,
        "cpmax": 14
    },
    {
        "name": "冷製ポポトスープHQ",
        "description": "作業精度 +12% (上限 47)　CP +5% (上限 17)",
        "craftsmanshipper": 12,
        "craftsmanshipmax": 47,
        "cpper": 5,
        "cpmax": 17
    },
    {
        "name": "マッシュポポト",
        "description": "作業精度 +12% (上限 12)",
        "craftsmanshipper": 12,
        "craftsmanshipmax": 12
    },
    {
        "name": "マッシュポポトHQ",
        "description": "作業精度 +15% (上限 15)",
        "craftsmanshipper": 15,
        "craftsmanshipmax": 15
    },
    {
        "name": "チーズリゾット",
        "description": "作業精度 +12% (上限 16)",
        "craftsmanshipper": 12,
        "craftsmanshipmax": 16
    },
    {
        "name": "チーズリゾットHQ",
        "description": "作業精度 +15% (上限 20)",
        "craftsmanshipper": 15,
        "craftsmanshipmax": 20
    },
    {
        "name": "チーズスフレ",
        "description": "作業精度 +12% (上限 20)",
        "craftsmanshipper": 12,
        "craftsmanshipmax": 20
    },
    {
        "name": "チーズスフレHQ",
        "description": "作業精度 +15% (上限 25)",
        "craftsmanshipper": 15,
        "craftsmanshipmax": 25
    },
    {
        "name": "ロランベリーチーズケーキ",
        "description": "作業精度 +12% (上限 32)",
        "craftsmanshipper": 12,
        "craftsmanshipmax": 32
    },
    {
        "name": "ロランベリーチーズケーキHQ",
        "description": "作業精度 +15% (上限 40)",
        "craftsmanshipper": 15,
        "craftsmanshipmax": 40
    },
    {
        "name": "ミントラッシー",
        "description": "作業精度 +12% (上限 8)",
        "craftsmanshipper": 12,
        "craftsmanshipmax": 8
    },
    {
        "name": "ミントラッシーHQ",
        "description": "作業精度 +15% (上限 10)",
        "craftsmanshipper": 15,
        "craftsmanshipmax": 10
    },
    {
        "name": "ロランベリーラッシー",
        "description": "作業精度 +12% (上限 24)",
        "craftsmanshipper": 12,
        "craftsmanshipmax": 24
    },
    {
        "name": "ロランベリーラッシーHQ",
        "description": "作業精度 +15% (上限 30)",
        "craftsmanshipper": 15,
        "craftsmanshipmax": 30
    },
    {
        "name": "レーズン",
        "description": "スペルスピード +8% (上限 2)　VIT +1　命中力 +1",
        "spellspeedper": 8,
        "spellspeedmax": 2,
        "vit": 1,
        "accuracy": 1
    },
    {
        "name": "レーズンHQ",
        "description": "スペルスピード +10% (上限 3)　VIT +1　命中力 +1",
        "spellspeedper": 10,
        "spellspeedmax": 3,
        "vit": 1,
        "accuracy": 1
    },
    {
        "name": "バブルチョコ",
        "description": "スペルスピード +8% (上限 4)　VIT +4% (上限 2)　命中力 +2% (上限 2)",
        "spellspeedper": 8,
        "spellspeedmax": 4,
        "vitper": 4,
        "vitmax": 2,
        "accuracyper": 2,
        "accuracymax": 2
    },
    {
        "name": "バブルチョコHQ",
        "description": "スペルスピード +10% (上限 5)　VIT +5% (上限 2)　命中力 +2% (上限 2)",
        "spellspeedper": 10,
        "spellspeedmax": 5,
        "vitper": 5,
        "vitmax": 2,
        "accuracyper": 2,
        "accuracymax": 2
    },
    {
        "name": "パールチョコ",
        "description": "スペルスピード +8% (上限 4)　VIT +4% (上限 2)　クリティカル発動力 +2% (上限 2)",
        "spellspeedper": 8,
        "spellspeedmax": 4,
        "vitper": 4,
        "vitmax": 2,
        "criticalper": 2,
        "criticalmax": 2
    },
    {
        "name": "パールチョコHQ",
        "description": "スペルスピード +10% (上限 5)　VIT +5% (上限 3)　クリティカル発動力 +2% (上限 2)",
        "spellspeedper": 10,
        "spellspeedmax": 5,
        "vitper": 5,
        "vitmax": 3,
        "criticalper": 2,
        "criticalmax": 2
    },
    {
        "name": "ドライプルーン",
        "description": "スペルスピード +7% (上限 6)　VIT +4% (上限 4)　命中力 +2% (上限 2)",
        "spellspeedper": 7,
        "spellspeedmax": 6,
        "vitper": 4,
        "vitmax": 4,
        "accuracyper": 2,
        "accuracymax": 2
    },
    {
        "name": "ドライプルーンHQ",
        "description": "スペルスピード +9% (上限 8)　VIT +5% (上限 5)　命中力 +2% (上限 3)",
        "spellspeedper": 9,
        "spellspeedmax": 8,
        "vitper": 5,
        "vitmax": 5,
        "accuracyper": 2,
        "accuracymax": 3
    },
    {
        "name": "ジンジャークッキー",
        "description": "スペルスピード +7% (上限 7)　VIT +4% (上限 5)　意思力 +2% (上限 2)",
        "spellspeedper": 7,
        "spellspeedmax": 7,
        "vitper": 4,
        "vitmax": 5,
        "determinationper": 2,
        "determinationmax": 2
    },
    {
        "name": "ジンジャークッキーHQ",
        "description": "スペルスピード +9% (上限 9)　VIT +5% (上限 6)　意思力 +2% (上限 2)",
        "spellspeedper": 9,
        "spellspeedmax": 9,
        "vitper": 5,
        "vitmax": 6,
        "determinationper": 2,
        "determinationmax": 2
    },
    {
        "name": "クランペット",
        "description": "スペルスピード +7% (上限 9)　VIT +4% (上限 6)　PIE +2% (上限 2)",
        "spellspeedper": 7,
        "spellspeedmax": 9,
        "vitper": 4,
        "vitmax": 6,
        "pieper": 2,
        "piemax": 2
    },
    {
        "name": "クランペットHQ",
        "description": "スペルスピード +9% (上限 11)　VIT +5% (上限 7)　PIE +2% (上限 2)",
        "spellspeedper": 9,
        "spellspeedmax": 11,
        "vitper": 5,
        "vitmax": 7,
        "pieper": 2,
        "piemax": 2
    },
    {
        "name": "ペストリーフィッシュ",
        "description": "スペルスピード +6% (上限 14)　VIT +4% (上限 9)　PIE +2% (上限 3)",
        "spellspeedper": 6,
        "spellspeedmax": 14,
        "vitper": 4,
        "vitmax": 9,
        "pieper": 2,
        "piemax": 3
    },
    {
        "name": "ペストリーフィッシュHQ",
        "description": "スペルスピード +7% (上限 17)　VIT +5% (上限 11)　PIE +2% (上限 4)",
        "spellspeedper": 7,
        "spellspeedmax": 17,
        "vitper": 5,
        "vitmax": 11,
        "pieper": 2,
        "piemax": 4
    },
    {
        "name": "パイナップルケーキ",
        "description": "スペルスピード +4% (上限 22)　VIT +4% (上限 15)　PIE +2% (上限 6)",
        "spellspeedper": 4,
        "spellspeedmax": 22,
        "vitper": 4,
        "vitmax": 15,
        "pieper": 2,
        "piemax": 6
    },
    {
        "name": "パイナップルケーキHQ",
        "description": "スペルスピード +5% (上限 27)　VIT +5% (上限 19)　PIE +2% (上限 7)",
        "spellspeedper": 5,
        "spellspeedmax": 27,
        "vitper": 5,
        "vitmax": 19,
        "pieper": 2,
        "piemax": 7
    },
    {
        "name": "ザッハトルテ",
        "description": "スペルスピード +4% (上限 24)　VIT +4% (上限 18)　意思力 +2% (上限 6)",
        "spellspeedper": 4,
        "spellspeedmax": 24,
        "vitper": 4,
        "vitmax": 18,
        "determinationper": 2,
        "determinationmax": 6
    },
    {
        "name": "ザッハトルテHQ",
        "description": "スペルスピード +5% (上限 30)　VIT +5% (上限 23)　意思力 +2% (上限 8)",
        "spellspeedper": 5,
        "spellspeedmax": 30,
        "vitper": 5,
        "vitmax": 23,
        "determinationper": 2,
        "determinationmax": 8
    },
    {
        "name": "レッドドロップ",
        "description": "スロウ耐性 +3",
        "slow": 3
    },
    {
        "name": "レッドドロップHQ",
        "description": "スロウ耐性 +5",
        "slow": 5
    },
    {
        "name": "ブルードロップ",
        "description": "沈黙耐性 +3",
        "slient": 3
    },
    {
        "name": "ブルードロップHQ",
        "description": "沈黙耐性 +5",
        "slient": 5
    },
    {
        "name": "クリアドロップ",
        "description": "暗闇耐性 +3",
        "darken": 3
    },
    {
        "name": "クリアドロップHQ",
        "description": "暗闇耐性 +5",
        "darken": 5
    },
    {
        "name": "パープルドロップ",
        "description": "毒耐性 +3",
        "poison": 3
    },
    {
        "name": "パープルドロップHQ",
        "description": "毒耐性 +5",
        "poison": 5
    },
    {
        "name": "ホワイトドロップ",
        "description": "スタン耐性 +3",
        "stan": 3
    },
    {
        "name": "ホワイトドロップHQ",
        "description": "スタン耐性 +5",
        "stan": 5
    },
    {
        "name": "ブラックドロップ",
        "description": "睡眠耐性 +3",
        "sleep": 3
    },
    {
        "name": "ブラックドロップHQ",
        "description": "睡眠耐性 +5",
        "sleep": 5
    },
    {
        "name": "イエロードロップ",
        "description": "バインド耐性 +3",
        "bind": 3
    },
    {
        "name": "イエロードロップHQ",
        "description": "バインド耐性 +5",
        "bind": 5
    },
    {
        "name": "グリーンドロップ",
        "description": "ヘヴィ耐性 +3",
        "heavy": 3
    },
    {
        "name": "グリーンドロップHQ",
        "description": "ヘヴィ耐性 +5",
        "heavy": 5
    },
    {
        "name": "ホワイトチョコ",
        "description": "VIT +8% (上限 2)",
        "vitper": 8,
        "vitmax": 2
    },
    {
        "name": "ホワイトチョコHQ",
        "description": "VIT +10% (上限 3)",
        "vitper": 10,
        "vitmax": 3
    },
    {
        "name": "ハートチョコ",
        "description": "VIT +8% (上限 2)",
        "vitper": 8,
        "vitmax": 2
    },
    {
        "name": "ハートチョコHQ",
        "description": "VIT +10% (上限 3)",
        "vitper": 10,
        "vitmax": 3
    },
    {
        "name": "ブレスドハートチョコ",
        "description": "VIT +8% (上限 2)",
        "vitper": 8,
        "vitmax": 2
    },
    {
        "name": "ブレスドハートチョコHQ",
        "description": "VIT +10% (上限 2)",
        "vitper": 10,
        "vitmax": 2
    },
    {
        "name": "プリンセスプリン",
        "description": "VIT +1",
        "vit": 1
    },
    {
        "name": "プリンセスプリンHQ",
        "description": "VIT +1",
        "vit": 1
    },
    {
        "name": "ブッシュ・オ・ショコラ",
        "description": "VIT +6% (上限 6)",
        "vitper": 6,
        "vitmax": 6
    },
    {
        "name": "ブッシュ・オ・ショコラHQ",
        "description": "VIT +7% (上限 8)",
        "vitper": 7,
        "vitmax": 8
    },
    {
        "name": "シュトレン",
        "description": "VIT +8% (上限 2)",
        "vitper": 8,
        "vitmax": 2
    },
    {
        "name": "シュトレンHQ",
        "description": "VIT +10% (上限 2)",
        "vitper": 10,
        "vitmax": 2
    },
    {
        "name": "ガトー・オ・フレーズ",
        "description": "VIT +8% (上限 2)",
        "vitper": 8,
        "vitmax": 2
    },
    {
        "name": "ガトー・オ・フレーズHQ",
        "description": "VIT +10% (上限 3)",
        "vitper": 10,
        "vitmax": 3
    },
    {
        "name": "菱餅",
        "description": "VIT +8% (上限 2)",
        "vitper": 8,
        "vitmax": 2
    },
    {
        "name": "菱餅HQ",
        "description": "VIT +10% (上限 3)",
        "vitper": 10,
        "vitmax": 3
    },
    {
        "name": "パンプキンクッキー",
        "description": "VIT +1",
        "vit": 1
    },
    {
        "name": "オレンジジュース",
        "description": "PIE +1　VIT +1　命中力 +1",
        "pie": 1,
        "vit": 1,
        "accuracy": 1
    },
    {
        "name": "オレンジジュースHQ",
        "description": "PIE +1　VIT +1　命中力 +1",
        "pie": 1,
        "vit": 1,
        "accuracy": 1
    },
    {
        "name": "グレープジュース",
        "description": "PIE +8% (上限 3)　VIT +4% (上限 3)　スペルスピード +2% (上限 2)",
        "pieper": 8,
        "piemax": 3,
        "vitper": 4,
        "vitmax": 3,
        "spellspeedper": 2,
        "spellspeedmax": 2
    },
    {
        "name": "グレープジュースHQ",
        "description": "PIE +10% (上限 4)　VIT +5% (上限 4)　スペルスピード +2% (上限 3)",
        "pieper": 10,
        "piemax": 4,
        "vitper": 5,
        "vitmax": 4,
        "spellspeedper": 2,
        "spellspeedmax": 3
    },
    {
        "name": "アップルジュース",
        "description": "PIE +6% (上限 8)　VIT +4% (上限 9)　スペルスピード +2% (上限 6)",
        "pieper": 6,
        "piemax": 8,
        "vitper": 4,
        "vitmax": 9,
        "spellspeedper": 2,
        "spellspeedmax": 6
    },
    {
        "name": "アップルジュースHQ",
        "description": "PIE +7% (上限 10)　VIT +5% (上限 11)　スペルスピード +2% (上限 7)",
        "pieper": 7,
        "piemax": 10,
        "vitper": 5,
        "vitmax": 11,
        "spellspeedper": 2,
        "spellspeedmax": 7
    },
    {
        "name": "パインジュース",
        "description": "PIE +4% (上限 14)　VIT +4% (上限 15)　スペルスピード +2% (上限 9)",
        "pieper": 4,
        "piemax": 14,
        "vitper": 4,
        "vitmax": 15,
        "spellspeedper": 2,
        "spellspeedmax": 9
    },
    {
        "name": "パインジュースHQ",
        "description": "PIE +5% (上限 17)　VIT +5% (上限 19)　スペルスピード +2% (上限 11)",
        "pieper": 5,
        "piemax": 17,
        "vitper": 5,
        "vitmax": 19,
        "spellspeedper": 2,
        "spellspeedmax": 11
    },
    {
        "name": "カモミールティー",
        "description": "PIE +7% (上限 4)　VIT +4% (上限 4)　スペルスピード +2% (上限 3)",
        "pieper": 7,
        "piemax": 4,
        "vitper": 4,
        "vitmax": 4,
        "spellspeedper": 2,
        "spellspeedmax": 3
    },
    {
        "name": "カモミールティーHQ",
        "description": "PIE +9% (上限 5)　VIT +5% (上限 5)　スペルスピード +2% (上限 4)",
        "pieper": 9,
        "piemax": 5,
        "vitper": 5,
        "vitmax": 5,
        "spellspeedper": 2,
        "spellspeedmax": 4
    },
    {
        "name": "マルドティー",
        "description": "PIE +4% (上限 11)　VIT +3% (上限 12)　スペルスピード +2% (上限 8)",
        "pieper": 4,
        "piemax": 11,
        "vitper": 3,
        "vitmax": 12,
        "spellspeedper": 2,
        "spellspeedmax": 8
    },
    {
        "name": "マルドティーHQ",
        "description": "PIE +5% (上限 14)　VIT +4% (上限 15)　スペルスピード +2% (上限 10)",
        "pieper": 5,
        "piemax": 14,
        "vitper": 4,
        "vitmax": 15,
        "spellspeedper": 2,
        "spellspeedmax": 10
    }
];
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
