// ==UserScript==
// @name                 Userscript API Benchmark
// @name:zh-CN           用户脚本 API 基准测试
// @namespace            https://github.com/utags/userscripts
// @version              0.1.1
// @description          Comprehensive benchmark tool for UserScript Manager APIs (GM.* and GM_*)
// @description:zh-CN    用户脚本管理器 API (GM.* 和 GM_*) 的综合基准测试工具，用于检查兼容性与准确性
// @author               Pipecraft
// @noframes
// @match                *://*/*
// @grant                unsafeWindow
// @grant                window.close
// @grant                window.focus
// @grant                window.onurlchange
// @grant                GM_info
// @grant                GM.info
// @grant                GM_log
// @grant                GM.log
// @grant                GM_setValue
// @grant                GM_getValue
// @grant                GM_deleteValue
// @grant                GM.setValue
// @grant                GM.getValue
// @grant                GM.deleteValue
// @grant                GM_listValues
// @grant                GM.listValues
// @grant                GM_setValues
// @grant                GM_getValues
// @grant                GM_deleteValues
// @grant                GM.setValues
// @grant                GM.getValues
// @grant                GM.deleteValues
// @grant                GM_addValueChangeListener
// @grant                GM_removeValueChangeListener
// @grant                GM.addValueChangeListener
// @grant                GM.removeValueChangeListener
// @grant                GM_addStyle
// @grant                GM.addStyle
// @grant                GM_addElement
// @grant                GM.addElement
// @grant                GM_registerMenuCommand
// @grant                GM.registerMenuCommand
// @grant                GM_unregisterMenuCommand
// @grant                GM.unregisterMenuCommand
// @grant                GM_xmlhttpRequest
// @grant                GM.xmlHttpRequest
// @grant                GM_download
// @grant                GM.download
// @grant                GM_openInTab
// @grant                GM.openInTab
// @grant                GM_setClipboard
// @grant                GM.setClipboard
// @grant                GM_notification
// @grant                GM.notification
// @grant                GM_getResourceText
// @grant                GM.getResourceText
// @grant                GM_getResourceURL
// @grant                GM.getResourceUrl
// @grant                GM_getTab
// @grant                GM_saveTab
// @grant                GM_getTabs
// @grant                GM.getTab
// @grant                GM.saveTab
// @grant                GM.getTabs
// @grant                GM_cookie
// @grant                GM.cookie
// @grant                GM_audio
// @grant                GM.audio
// @grant                GM_webRequest
// @grant                GM.webRequest
// ==/UserScript==
//
;(() => {
  'use strict'
  var tests = []
  var g = globalThis
  if (typeof GM === 'undefined') {
    g.GM = {}
  }
  function registerTest(name, gmRun, gmDotRun) {
    tests.push({ name, gmRun, gmDotRun })
  }
  var isDefined = (fn) => fn !== void 0
  var isFunction = (fn) => typeof fn === 'function'
  var isPromise = (value) =>
    value &&
    typeof value.then === 'function' &&
    Object.prototype.toString.call(value) === '[object Promise]'
  registerTest(
    'info',
    () => {
      const supported = isDefined(g.GM_info)
      return { supported, passed: supported ? 1 : 0, total: 1 }
    },
    async () => {
      const supported = isDefined(GM) && isDefined(GM.info)
      return { supported, passed: supported ? 1 : 0, total: 1 }
    }
  )
  registerTest(
    'log',
    () => {
      const supported = isFunction(g.GM_log)
      if (supported) {
        GM_log('Benchmark log test')
      }
      return { supported, passed: supported ? 1 : 0, total: 1 }
    },
    async () => {
      const supported = isDefined(GM) && isFunction(GM.log)
      if (supported) {
        GM.log('Benchmark log test')
      }
      return { supported, passed: supported ? 1 : 0, total: 1 }
    }
  )
  registerTest(
    'setValue / getValue',
    async () => {
      if (!isFunction(g.GM_setValue) || !isFunction(g.GM_getValue)) {
        return { supported: false, passed: 0, total: 2 }
      }
      const key = 'benchmark_gm_key'
      const val = 'test-' + Math.random()
      GM_setValue(key, val)
      const retrievedRaw = GM_getValue(key)
      let passed = 0
      if (!isPromise(retrievedRaw)) {
        passed++
      }
      const retrieved = await retrievedRaw
      if (retrieved === val) {
        passed++
      }
      GM_deleteValue(key)
      return { supported: true, passed, total: 2 }
    },
    async () => {
      if (
        !isDefined(GM) ||
        !isFunction(GM.setValue) ||
        !isFunction(GM.getValue)
      ) {
        return { supported: false, passed: 0, total: 2 }
      }
      const key = 'benchmark_gm4_key'
      const val = 'gm4-' + Math.random()
      await GM.setValue(key, val)
      const retrievedRaw = GM.getValue(key)
      let passed = 0
      if (isPromise(retrievedRaw)) {
        passed++
      }
      const retrieved = await retrievedRaw
      if (retrieved === val) {
        passed++
      }
      await GM.deleteValue(key)
      return { supported: true, passed, total: 2 }
    }
  )
  registerTest(
    'deleteValue',
    async () => {
      if (!isFunction(g.GM_deleteValue))
        return { supported: false, passed: 0, total: 1 }
      const key = 'benchmark_del_key'
      await GM_setValue(key, '1')
      await GM_deleteValue(key)
      const val = await GM_getValue(key)
      return {
        supported: true,
        passed: val === void 0 ? 1 : 0,
        total: 1,
      }
    },
    async () => {
      if (!isDefined(GM) || !isFunction(GM.deleteValue))
        return { supported: false, passed: 0, total: 1 }
      const key = 'benchmark_gm4_del_key'
      await GM.setValue(key, '1')
      await GM.deleteValue(key)
      const val = await GM.getValue(key)
      return {
        supported: true,
        passed: val === void 0 ? 1 : 0,
        total: 1,
      }
    }
  )
  registerTest(
    'listValues',
    async () => {
      if (!isFunction(g.GM_listValues))
        return { supported: false, passed: 0, total: 1 }
      const key = 'benchmark_list_key'
      await GM_setValue(key, '1')
      const list = await GM_listValues()
      await GM_deleteValue(key)
      return { supported: true, passed: list.includes(key) ? 1 : 0, total: 1 }
    },
    async () => {
      if (!isDefined(GM) || !isFunction(GM.listValues))
        return { supported: false, passed: 0, total: 1 }
      const key = 'benchmark_gm4_list_key'
      await GM.setValue(key, '1')
      const list = await GM.listValues()
      await GM.deleteValue(key)
      return { supported: true, passed: list.includes(key) ? 1 : 0, total: 1 }
    }
  )
  registerTest(
    'setValues / getValues / deleteValues',
    async () => {
      if (
        !isFunction(g.GM_setValues) ||
        !isFunction(g.GM_getValues) ||
        !isFunction(g.GM_deleteValues)
      ) {
        return { supported: false, passed: 0, total: 1 }
      }
      const data = {
        benchmark_gm_key1: 'val1-' + Math.random(),
        benchmark_gm_key2: 12345,
      }
      await GM_setValues(data)
      const retrieved = await GM_getValues(Object.keys(data))
      await GM_deleteValues(Object.keys(data))
      const passed =
        retrieved.benchmark_gm_key1 === data.benchmark_gm_key1 &&
        retrieved.benchmark_gm_key2 === data.benchmark_gm_key2
      return { supported: true, passed: passed ? 1 : 0, total: 1 }
    },
    async () => {
      if (
        !isDefined(GM) ||
        !isFunction(GM.setValues) ||
        !isFunction(GM.getValues) ||
        !isFunction(GM.deleteValues)
      ) {
        return { supported: false, passed: 0, total: 1 }
      }
      const data = {
        benchmark_gm_key1: 'val1-' + Math.random(),
        benchmark_gm_key2: 12345,
      }
      await GM.setValues(data)
      const retrieved = await GM.getValues(Object.keys(data))
      await GM.deleteValues(Object.keys(data))
      const passed =
        retrieved.benchmark_gm_key1 === data.benchmark_gm_key1 &&
        retrieved.benchmark_gm_key2 === data.benchmark_gm_key2
      return { supported: true, passed: passed ? 1 : 0, total: 1 }
    }
  )
  registerTest(
    'addValueChangeListener / removeValueChangeListener',
    async () => {
      if (
        !isFunction(g.GM_addValueChangeListener) ||
        !isFunction(g.GM_removeValueChangeListener) ||
        !isFunction(g.GM_setValue)
      ) {
        return { supported: false, passed: 0, total: 1 }
      }
      const key = 'benchmark_listener_key'
      let triggered = false
      const id = GM_addValueChangeListener(
        key,
        (name, oldVal, newVal, remote) => {
          if (name === key && newVal === 'changed') {
            triggered = true
          }
        }
      )
      await GM_setValue(key, 'changed')
      await new Promise((resolve) => {
        setTimeout(resolve, 200)
      })
      GM_removeValueChangeListener(id)
      await GM_deleteValue(key)
      return { supported: true, passed: triggered ? 1 : 0, total: 1 }
    },
    async () => {
      if (
        !isDefined(GM) ||
        !isFunction(GM.addValueChangeListener) ||
        !isFunction(GM.removeValueChangeListener) ||
        !isFunction(GM.setValue)
      ) {
        return { supported: false, passed: 0, total: 1 }
      }
      const key = 'benchmark_listener_key'
      let triggered = false
      const id = await GM.addValueChangeListener(
        key,
        (name, oldVal, newVal, remote) => {
          if (name === key && newVal === 'changed') {
            triggered = true
          }
        }
      )
      await GM.setValue(key, 'changed')
      await new Promise((resolve) => {
        setTimeout(resolve, 200)
      })
      await GM.removeValueChangeListener(id)
      await GM.deleteValue(key)
      return { supported: true, passed: triggered ? 1 : 0, total: 1 }
    }
  )
  registerTest(
    'addStyle',
    () => {
      if (!isFunction(g.GM_addStyle))
        return { supported: false, passed: 0, total: 1 }
      try {
        const el = GM_addStyle('.gm-test-style { display: none; }')
        return { supported: true, passed: 1, total: 1 }
      } catch (e) {
        return { supported: true, passed: 0, total: 1 }
      }
    },
    async () => {
      if (!isDefined(GM) || !isFunction(GM.addStyle))
        return { supported: false, passed: 0, total: 1 }
      try {
        const el = await GM.addStyle('.gm4-test-style { display: none; }')
        return { supported: true, passed: 1, total: 1 }
      } catch (e) {
        return { supported: true, passed: 0, total: 1 }
      }
    }
  )
  registerTest(
    'addElement',
    () => {
      if (!isFunction(g.GM_addElement))
        return { supported: false, passed: 0, total: 1 }
      try {
        const el = GM_addElement('div', { id: 'gm-add-element-test' })
        const passed = el && el.tagName === 'DIV' ? 1 : 0
        return { supported: true, passed, total: 1 }
      } catch (e) {
        return { supported: true, passed: 0, total: 1 }
      }
    },
    async () => {
      if (!isDefined(GM) || !isFunction(GM.addElement))
        return { supported: false, passed: 0, total: 1 }
      try {
        const el = await GM.addElement('div', { id: 'gm4-add-element-test' })
        const passed = el && el.tagName === 'DIV' ? 1 : 0
        return { supported: true, passed, total: 1 }
      } catch (e) {
        return { supported: true, passed: 0, total: 1 }
      }
    }
  )
  registerTest(
    'registerMenuCommand',
    () => {
      if (!isFunction(g.GM_registerMenuCommand))
        return { supported: false, passed: 0, total: 1 }
      return { supported: true, passed: 1, total: 1 }
    },
    async () => {
      if (!isDefined(GM) || !isFunction(GM.registerMenuCommand))
        return { supported: false, passed: 0, total: 1 }
      return { supported: true, passed: 1, total: 1 }
    }
  )
  registerTest(
    'unregisterMenuCommand',
    () => {
      if (!isFunction(g.GM_unregisterMenuCommand))
        return { supported: false, passed: 0, total: 1 }
      return { supported: true, passed: 1, total: 1 }
    },
    async () => {
      if (!isDefined(GM) || !isFunction(GM.unregisterMenuCommand))
        return { supported: false, passed: 0, total: 1 }
      return { supported: true, passed: 1, total: 1 }
    }
  )
  registerTest(
    'xmlHttpRequest',
    () => {
      if (!isFunction(g.GM_xmlhttpRequest))
        return { supported: false, passed: 0, total: 1 }
      return { supported: true, passed: 1, total: 1 }
    },
    async () => {
      const supported = isDefined(GM) && isFunction(GM.xmlHttpRequest)
      return { supported, passed: supported ? 1 : 0, total: 1 }
    }
  )
  registerTest(
    'download',
    () => {
      if (!isFunction(g.GM_download))
        return { supported: false, passed: 0, total: 1 }
      return { supported: true, passed: 1, total: 1 }
    },
    async () => {
      if (!isDefined(GM) || !isFunction(GM.download))
        return { supported: false, passed: 0, total: 1 }
      return { supported: true, passed: 1, total: 1 }
    }
  )
  registerTest(
    'openInTab',
    () => {
      if (!isFunction(g.GM_openInTab))
        return { supported: false, passed: 0, total: 1 }
      return { supported: true, passed: 1, total: 1 }
    },
    async () => {
      if (!isDefined(GM) || !isFunction(GM.openInTab))
        return { supported: false, passed: 0, total: 1 }
      return { supported: true, passed: 1, total: 1 }
    }
  )
  registerTest(
    'setClipboard',
    () => {
      if (!isFunction(g.GM_setClipboard))
        return { supported: false, passed: 0, total: 1 }
      return { supported: true, passed: 1, total: 1 }
    },
    async () => {
      if (!isDefined(GM) || !isFunction(GM.setClipboard))
        return { supported: false, passed: 0, total: 1 }
      return { supported: true, passed: 1, total: 1 }
    }
  )
  registerTest(
    'notification',
    () => {
      if (!isFunction(g.GM_notification))
        return { supported: false, passed: 0, total: 1 }
      return { supported: true, passed: 1, total: 1 }
    },
    async () => {
      if (!isDefined(GM) || !isFunction(GM.notification))
        return { supported: false, passed: 0, total: 1 }
      return { supported: true, passed: 1, total: 1 }
    }
  )
  registerTest(
    'getResourceText',
    () => {
      if (!isFunction(g.GM_getResourceText))
        return { supported: false, passed: 0, total: 1 }
      return { supported: true, passed: 1, total: 1 }
    },
    async () => {
      if (!isDefined(GM) || !isFunction(GM.getResourceText))
        return { supported: false, passed: 0, total: 1 }
      return { supported: true, passed: 1, total: 1 }
    }
  )
  registerTest(
    'getResourceURL',
    () => {
      if (!isFunction(g.GM_getResourceURL))
        return { supported: false, passed: 0, total: 1 }
      return { supported: true, passed: 1, total: 1 }
    },
    async () => {
      if (!isDefined(GM) || !isFunction(GM.getResourceUrl))
        return { supported: false, passed: 0, total: 1 }
      return { supported: true, passed: 1, total: 1 }
    }
  )
  registerTest(
    'getTab / saveTab / getTabs',
    () => {
      const s1 = isFunction(g.GM_getTab)
      const s2 = isFunction(g.GM_saveTab)
      const s3 = isFunction(g.GM_getTabs)
      const supported = s1 && s2 && s3
      return { supported, passed: supported ? 1 : 0, total: 1 }
    },
    async () => {
      if (
        !isDefined(GM) ||
        !isFunction(GM.getTab) ||
        !isFunction(GM.saveTab) ||
        !isFunction(GM.getTabs)
      )
        return { supported: false, passed: 0, total: 1 }
      return { supported: true, passed: 1, total: 1 }
    }
  )
  registerTest(
    'cookie',
    () => {
      const supported =
        isDefined(g.GM_cookie) &&
        (isFunction(g.GM_cookie.list) || isFunction(g.GM_cookie))
      return { supported, passed: supported ? 1 : 0, total: 1 }
    },
    async () => {
      if (!isDefined(GM) || !isDefined(GM.cookie))
        return { supported: false, passed: 0, total: 1 }
      return { supported: true, passed: 1, total: 1 }
    }
  )
  registerTest(
    'audio',
    () => {
      const supported = isDefined(g.GM_audio)
      return { supported, passed: supported ? 1 : 0, total: 1 }
    },
    async () => {
      const supported = isDefined(GM) && isDefined(GM.audio)
      return { supported, passed: supported ? 1 : 0, total: 1 }
    }
  )
  registerTest(
    'webRequest (Deprecated)',
    () => {
      const supported = isFunction(g.GM_webRequest)
      return { supported, passed: supported ? 1 : 0, total: 1 }
    },
    async () => {
      if (!isDefined(GM) || !isFunction(GM.webRequest))
        return { supported: false, passed: 0, total: 1 }
      return { supported: true, passed: 1, total: 1 }
    }
  )
  registerTest('unsafeWindow', () => {
    const supported = isDefined(globalThis.unsafeWindow)
    return { supported, passed: supported ? 1 : 0, total: 1 }
  })
  registerTest('window.onurlchange', () => {
    const supported =
      'onurlchange' in globalThis && globalThis.onurlchange === null
    return { supported, passed: supported ? 1 : 0, total: 1 }
  })
  registerTest('window.close', () => {
    const supported = isFunction(window.close)
    return { supported, passed: supported ? 1 : 0, total: 1 }
  })
  registerTest('window.focus', () => {
    const supported = isFunction(window.focus)
    return { supported, passed: supported ? 1 : 0, total: 1 }
  })
  async function render() {
    var _a
    const hostId = 'data-benchmark-host'
    const existing = document.querySelector(
      '['.concat(hostId, '="userscript-compatibility"]')
    )
    if (existing) existing.remove()
    const host = document.createElement('div')
    host.setAttribute(hostId, 'userscript-compatibility')
    const shadow = host.attachShadow({ mode: 'open' })
    const style = document.createElement('style')
    style.textContent =
      '\n    :host {\n      position: fixed; top: 20px; right: 20px; z-index: 2147483647;\n      background: #fff; color: #333; padding: 16px; border-radius: 8px;\n      box-shadow: 0 4px 12px rgba(0,0,0,0.2); font-family: sans-serif;\n      max-height: 90vh; overflow-y: auto; width: 600px;\n      font-size: 13px;\n    }\n    table { width: 100%; border-collapse: collapse; margin-top: 10px; }\n    th, td { border: 1px solid #eee; padding: 6px 8px; text-align: left; }\n    th { background: #f9f9f9; font-weight: 600; }\n    .pass { color: #2ecc71; font-weight: bold; }\n    .fail { color: #e74c3c; font-weight: bold; }\n    .na { color: #f59e0b; font-weight: bold; }\n    .header h3 { margin: 0 0 8px 0; font-size: 16px; }\n    .close { position: absolute; top: 10px; right: 10px; cursor: pointer; font-size: 16px; color: #999; }\n    .close:hover { color: #333; }\n  '
    shadow.append(style)
    const wrapper = document.createElement('div')
    let handler = 'Unknown'
    let version = 'Unknown'
    if (GM_info !== void 0) {
      handler = GM_info.scriptHandler || handler
      version = GM_info.version || version
    }
    const ua = navigator.userAgent
    let browser = 'Unknown'
    if (ua.includes('Chrome')) browser = 'Chrome'
    else if (ua.includes('Firefox')) browser = 'Firefox'
    else if (ua.includes('Safari')) browser = 'Safari'
    wrapper.innerHTML =
      '\n    <div class="close">\xD7</div>\n    <div class="header">\n      <h3>Userscript API Benchmark</h3>\n      <div><strong>Manager:</strong> '
        .concat(handler, ' (')
        .concat(version, ')</div>\n      <div><strong>Browser:</strong> ')
        .concat(browser, ' ')
        .concat(
          ((_a = /(Chrome|Firefox|Safari)\/([\d.]+)/.exec(ua)) == null
            ? void 0
            : _a[2]) || '',
          '</div>\n    </div>\n    <table>\n      <thead>\n        <tr>\n          <th rowspan="2">API</th>\n          <th colspan="2">GM.* (Promise)</th>\n          <th colspan="2">GM_* (Callback/Sync)</th>\n        </tr>\n        <tr>\n          <th>Support</th>\n          <th>Pass Rate</th>\n          <th>Support</th>\n          <th>Pass Rate</th>\n        </tr>\n      </thead>\n      <tbody id="benchmark-results-body"></tbody>\n    </table>\n  '
        )
    shadow.append(wrapper)
    document.documentElement.append(host)
    wrapper.querySelector('.close').addEventListener('click', () => {
      host.remove()
    })
    const tbody = wrapper.querySelector('#benchmark-results-body')
    tbody.innerHTML = ''
    const totalPassed = 0
    const totalTests = 0
    for (const t of tests) {
      const tr = document.createElement('tr')
      tr.innerHTML = '<td>'.concat(
        t.name,
        '</td><td>...</td><td>...</td><td>...</td><td>...</td>'
      )
      tbody.append(tr)
      let gmRes = { supported: false, passed: 0, total: 0 }
      let gmDotRes = { supported: false, passed: 0, total: 0 }
      try {
        gmRes = await t.gmRun()
      } catch (error) {
        console.error(''.concat(t.name, ' GM_ Error:'), error)
        gmRes = { supported: false, passed: 0, total: 0, error }
      }
      if (t.gmDotRun) {
        try {
          gmDotRes = await t.gmDotRun()
        } catch (error) {
          console.error(''.concat(t.name, ' GM. Error:'), error)
          gmDotRes = { supported: false, passed: 0, total: 0, error }
        }
      } else {
        gmDotRes = { supported: false, passed: 0, total: 1, message: 'N/A' }
      }
      const renderCell = (res) => {
        if (res.error) {
          return '<td class="fail">Error</td><td class="fail" title="'.concat(
            String(res.error),
            '">-</td>'
          )
        }
        if (res.message === 'N/A') {
          return '<td class="na">-</td><td class="na">-</td>'
        }
        const passClass = res.supported ? 'pass' : 'fail'
        const passRateClass = res.passed === res.total ? 'pass' : 'fail'
        return '\n        <td class="'
          .concat(passClass, '">')
          .concat(res.supported ? 'Yes' : 'No', '</td>\n        <td class="')
          .concat(passRateClass, '">')
          .concat(res.passed, '/')
          .concat(res.total, '</td>\n      ')
      }
      let rowContent = '<td>'.concat(t.name, '</td>')
      const isWindowApi = [
        'unsafeWindow',
        'window.onurlchange',
        'window.close',
        'window.focus',
      ].includes(t.name)
      if (isWindowApi) {
        rowContent += renderCell(gmRes) + renderCell(gmDotRes)
      } else {
        rowContent += renderCell(gmDotRes) + renderCell(gmRes)
      }
      tr.innerHTML = rowContent
    }
  }
  function start() {
    void render()
  }
  if (typeof GM_registerMenuCommand === 'function') {
    GM_registerMenuCommand('Run Benchmark', start)
  } else {
    start()
  }
})()
