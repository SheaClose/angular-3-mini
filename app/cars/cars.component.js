angular.module("fourWheels").component("cars", {
  templateUrl: "./app/cars/cars.template.html",
  controller: function(carsSrvc) {
    this.cars = carsSrvc.cars;
    this.buyCar = id => {
      carsSrvc.buyCar(id);
      console.log(
        "add this.cars = carSrvc.cars if thise values don't match",
        this.cars,
        carsSrvc.cars
      );
    };
  },
  bindings: {},
  controllerAs: "carsCtrl"
});
