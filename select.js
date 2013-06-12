(function($) {

  $.fn.selectBind = function(selector, options) {

    var parent = $(selector);
    var options = options;
    var selector = selector;

    var listeners = [];

    function getParentVal() {
      return $(selector).val();
    }

    function updateOpts(parentVal, listener) {
      var currentVal = listener.val();
      listener.html('');
      if(options[parentVal]) {
        for(var i=0; i<options[parentVal].length; i++) {
          var opt = $('<option></option>');
          opt.attr('value', options[parentVal][i].value);
          if(currentVal === opt.val()) {
            opt.attr('selected', 'selected');
          }
          opt.text(options[parentVal][i].text);
          listener.append(opt);
        }
      }
    }

    $(selector).change(function() {
      var parentVal = $(this).val();
      for(var i=0; i<listeners.length; i++) {
        updateOpts(parentVal, listeners[i]);
      }
    }); 

    this.each(function() {
      listeners.push($(this));
      updateOpts(getParentVal(), $(this));
      return this;
    });

  }

}(jQuery));