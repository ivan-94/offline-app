var version = 'test-cache-v1'

// 安装
this.addEventListener('install', function (event) {
  // waitUntil 让service worker一致处于installing状态，直到promise resolve或者rejected
  // 如果promise rejected 将导致service worker 安装失败, 这个service-worker将被取消
  // 安装成功后， sw就会被激活
  event.waitUntil(caches.open(version).then(function (cache) {
    // 预缓存, sw 会立即预加载这些文件
    return cache.addAll([
      './index.html',
      './jquery.min.js',
      './main.js',
      './test.js'
    ])
  }))
})

// 每次任何被service worker 控制的资源被请求时，都会触发fetch事件
this.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      // 已缓存
      if (response) {
        console.log('match cache:', response)
        return response
      }

      // 向真实服务器发起请求
      var request = event.request.clone()
      return fetch(request).then(function (res) {
        if (!res || res.status !== 200) {
          return res
        }

        var resClone = res.clone()
        // 缓存
        caches.open(version).then(function (cache) {
          cache.put(event.request, resClone)
        })

        return res
      })
    })
  )
})