$('.list-group-item').click(function (e) {
  e.preventDefault()
  // 請使用 toggleClass 完成此作業
  $(this).toggleClass('active')
})
