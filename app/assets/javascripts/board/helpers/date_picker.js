var moment = require("../vendor/bootstrap-datepicker");
App.ApplicationController = Ember.Controller.extend({
    today: new Date()
  });

  App.DatePicker = Ember.TextField.extend({
    classNames: ['date-picker'],
    format: "yyyy-mm-dd",
    size: 8,
    didInsertElement: function() {
      return this.$().datepicker({
        format: this.get('format'),
        autoclose: true,
        todayHighlight: true,
        keyboardNavigation: false
      }).on('changeDate', (function(_this) {
        return function(ev) {
          return _this.$().trigger("change");
        };
      })(this));
    },
    close: function() {
      return this.$().datepicker('hide');
    }
  });