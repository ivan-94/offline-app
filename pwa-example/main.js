(function () {
  const $timer = $('.timer')
  const $infos = $('.infos')

  let i = 0
  setInterval(() => {
    $timer.html(i++)
  }, 2000)

  // 测试异步加载
  setTimeout(() => {
    fetch('./test.js')
  }, 10000)

  function addField(key, value) {
    const el = $('<li>' + key + ' : ' + value + '</li>')
    el.appendTo($infos)
  }

  addField("supported", 'serviceWorker' in navigator)
  addField("user-agent", navigator.userAgent)
})()