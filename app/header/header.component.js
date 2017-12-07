angular.module("fourWheels").component("header", {
  templateUrl: "./app/header/header.template.html",
  bindings: {
    title: "@"
  },
  controllerAs: "headerCtrl"
});
