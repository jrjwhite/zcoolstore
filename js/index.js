(function (window) {
  //鼠标滑动
  var content = document.querySelector('#content')
  var header = document.querySelector('#header')
  var list = document.querySelector('#content  ul')

  move(2)
  function move(index) {
    list.style.top = -index * (document.documentElement.clientHeight - header.offsetHeight) + "px"
  }

})(window)
