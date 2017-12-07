angular.module("fourWheels").component("footer", {
  templateUrl: "./app/footer/footer.template.html",
  controller: function() {
    this.email = "";
    this.name = "";
    this.contacted = false;
    this.contact = (name, email) => {
      this.email = email;
      this.name = name;
      this.contacted = true;
      console.log("this.contacted: ", this.contacted);
    };
  },
  controllerAs: "footerCtrl"
});
