/*Adapted from github oRRs/mdl-jquery-modal-dialog*/

$(document).ready(function(){
  $('#show-email-footer').click(function() {
    $.ajax({
      url: '/_get_email_form',
      success: function (data) {
         showDialog({
            title: 'Send me a message',
            html: data,
            positive: {
              title: 'Send'
            },
          });

         $('#send-button').click(function (e) {
                e.preventDefault();
                var form = $('#email-form').serialize();
                var dialog = $('#modal-dialog');
                $.post('/_send_email', $('#email-form').serialize())
                hideDialog(dialog)
            });
        },
      });     
  });

  $('#show-email-drawer').click(function() {
    $.ajax({
      url: '/_get_email_form',
      success: function (data) {
         showDialog({
            title: 'Send me a message',
            html: data,
            positive: {
              title: 'Send'
            },
          });

         $('#send-button').click(function (e) {
                e.preventDefault();
                var form = $('#email-form').serialize();
                var dialog = $('#modal-dialog');
                $.post('/_send_email', $('#email-form').serialize())
                hideDialog(dialog)
            });
        },
      });     
  });
});


function showDialog(options) {
  options = $.extend({
    id: "modal-dialog",
    title: null,
    html: null,
    negative: false,
    positive: false,
    cancelable: true,
    contentStyle: null,
    onLoaded: false
  }, options);

  // remove existing dialogs
  $('.dialog-container').remove();
  $(document).unbind("keyup.dialog");


  $("body").append(options.html)
  var dialog = $('#modal-dialog');
  var content = dialog.find('.mdl-card');
  componentHandler.upgradeDom();
  if (options.cancelable) {
    dialog.click(function() {
      hideDialog(dialog);
    });
    $(document).bind("keyup.dialog", function(e) {
      if (e.which == 27)
        hideDialog(dialog);
    });
    content.click(function(e) {
      e.stopPropagation();
    });
  }
  setTimeout(function() {
    dialog.css({
      opacity: 1
    });
    if (options.onLoaded)
      options.onLoaded();
  }, 1);
}

function hideDialog(dialog) {
  $(document).unbind("keyup.dialog");
  dialog.css({
    opacity: 0
  });
  setTimeout(function() {
    dialog.remove();
  }, 400);
}
