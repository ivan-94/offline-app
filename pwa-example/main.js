(function () {
  const $timer = $('.timer')
  let i = 0
  setInterval(() => {
    $timer.html(i++)
  }, 2000)

  setTimeout(() => {
    fetch('/test.js')
  }, 10000)
})()