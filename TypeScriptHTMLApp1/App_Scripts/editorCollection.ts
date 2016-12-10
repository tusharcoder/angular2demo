/// <reference path="../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="editorlabel.ts" />

module LabelEditorApplication {
    export class LabelCollectionController {
        constructor(private $scope: ng.IScope) {
        }
        sequence = [
            {
                'id': 0,
                "Text": "All Good",
                'color' : "Green"
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
        ]
    }
    LabelEditor.editorModule.controller("labelCollectionController", (['$scope', LabelCollectionController]));
}
