angular.module('legal').service('QueryService', function (Restangular) {
   const self = this;
   self.loadQuestions = function () {
       return Restangular.oneUrl('test', 'http://localhost:3009/test/all').get();
   }
});