var LabelEditorApplication;
(function (LabelEditorApplication) {
    var LabelEditor = (function () {
        function LabelEditor() {
        }
        LabelEditor.editorModule = angular.module("editorModule", []);
        return LabelEditor;
    }());
    LabelEditorApplication.LabelEditor = LabelEditor;
})(LabelEditorApplication || (LabelEditorApplication = {}));
//# sourceMappingURL=editorlabel.js.map