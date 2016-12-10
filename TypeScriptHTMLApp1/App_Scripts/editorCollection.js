/// <reference path="../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="editorlabel.ts" />
var LabelEditorApplication;
(function (LabelEditorApplication) {
    var LabelCollectionController = (function () {
        function LabelCollectionController($scope) {
            this.$scope = $scope;
            this.sequence = [
                {
                    'id': 0,
                    "Text": "All Good",
                    'color': "Green"
                },
                {
                    'id': 1,
                    "Text": "Warning",
                    'color': "Red"
                },
                {
                    'id': 2,
                    "Text": "Purple",
                    'color': "Green"
                },
                {
                    'id': 3,
                    "Text": "Megenta",
                    'color': "Magenta"
                }
            ];
        }
        return LabelCollectionController;
    }());
    LabelEditorApplication.LabelCollectionController = LabelCollectionController;
    LabelEditorApplication.LabelEditor.editorModule.controller("labelCollectionController", (['$scope', LabelCollectionController]));
})(LabelEditorApplication || (LabelEditorApplication = {}));
//# sourceMappingURL=editorCollection.js.map