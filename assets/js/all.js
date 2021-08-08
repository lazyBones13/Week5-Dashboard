"use strict";

$('.list-group-item').click(function (e) {
  e.preventDefault();
  $(this).toggleClass('active');
});
$('.reply-btn').click(function (e) {
  e.preventDefault();
  $('.message-reply').addClass('active');
});
$('.cancel-btn').click(function (e) {
  e.preventDefault();
  $('.message-reply').removeClass('active');
}); // $('.expandMore').click(function (event) {
//   $('.expandMore').toggleClass('expandLess')
// })
//# sourceMappingURL=all.js.map
