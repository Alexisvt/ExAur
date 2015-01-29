System.register([], function (_export) {
  "use strict";

  var _prototypeProperties, Welcome;
  return {
    setters: [],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) {
        if (staticProps) Object.defineProperties(child, staticProps);
        if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
      };

      Welcome = (function () {
        function Welcome() {
          this.heading = "Bienvenido a mi primer app con Aurelia";
          this.firstName = "Alexis";
          this.lastName = "Villegas";
        }

        _prototypeProperties(Welcome, null, {
          fullName: {
            get: function () {
              return "" + this.firstName + " " + this.lastName;
            },
            enumerable: true,
            configurable: true
          },
          welcome: {
            value: function welcome() {
              alert("Bievenido, " + this.fullName + "!");
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        });

        return Welcome;
      })();
      _export("Welcome", Welcome);
    }
  };
});
