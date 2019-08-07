app.controller('linkcontroller', ['$scope', '$filter', function ($scope, $filter) {

    var ctrl = this;
    this.links = [
        {
            links: 'http://www.google.com/',
            title: 'Google'
        },
        {
            links: 'http://www.microsoft.com/',
            title: 'Microsoft'
        }
    ];

    ctrl.addLink = function (link, title) {
        var linkobj = {
            link: link,
            title: title
        };
        ctrl.links.push(linkobj);
        $scope.$apply();
    }
}
]);