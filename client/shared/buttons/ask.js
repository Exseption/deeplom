angular.module('legal').directive('ask', function (SessionManager, $rootScope) {
    return {
        template: '<button class="simple-button-primary md-button md-ink-ripple type="button" ui-sref="create">Задать вопрос</button>',
        compile: function () {
            return {
                pre: function (scope, elem) {
                if(!angular.isDefined(SessionManager.person)){
                    elem.css('display', 'none');
                }
                },
                post: function (scope, elem) {
                    //TODO настроить появление
                    $rootScope.$on('authenticated', function (e, data) {
                        elem.css('display', 'block')
                        // elem.append('<button class="simple-button-primary md-button md-ink-ripple type="button" ui-sref="create">Задать вопрос</button>');
                    })

                }
            }
        }
    }
});