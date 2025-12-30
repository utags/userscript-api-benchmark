# Userscript API Benchmark Results

- **Manager**: Greasemonkey (4.13)
- **Browser**: Firefox 146.0
- **Date**: 2025-12-30

| API                                                | GM.\* (Support) | GM.\* (Pass) | GM\_\* (Support) | GM\_\* (Pass) |
| :------------------------------------------------- | :-------------: | :----------: | :--------------: | :-----------: |
| info                                               |       ✅        |     1/1      |        ✅        |      1/1      |
| log                                                |       ❌        |     0/1      |        ❌        |      0/1      |
| setValue / getValue                                |       ✅        |     3/3      |        ❌        |      0/3      |
| deleteValue                                        |       ✅        |     1/1      |        ❌        |      0/1      |
| listValues                                         |       ✅        |     1/1      |        ❌        |      0/1      |
| setValues / getValues / deleteValues               |       ❌        |     0/1      |        ❌        |      0/1      |
| addValueChangeListener / removeValueChangeListener |       ❌        |     0/5      |        ❌        |      0/5      |
| addStyle                                           |       ❌        |     0/1      |        ❌        |      0/1      |
| addElement                                         |       ❌        |     0/6      |        ❌        |      0/6      |
| registerMenuCommand                                |       ✅        |     1/1      |        ❌        |      0/1      |
| unregisterMenuCommand                              |       ❌        |     0/1      |        ❌        |      0/1      |
| xmlHttpRequest                                     |       ✅        |     1/1      |        ❌        |      0/1      |
| download                                           |       ❌        |     0/1      |        ❌        |      0/1      |
| openInTab                                          |       ✅        |     1/1      |        ❌        |      0/1      |
| setClipboard                                       |       ✅        |     1/1      |        ❌        |      0/1      |
| notification                                       |       ✅        |     1/1      |        ❌        |      0/1      |
| getResourceText                                    |       ❌        |     0/1      |        ❌        |      0/1      |
| getResourceURL                                     |       ✅        |     1/1      |        ❌        |      0/1      |
| getTab / saveTab / getTabs                         |       ❌        |     0/1      |        ❌        |      0/1      |
| cookie                                             |       ❌        |     0/1      |        ❌        |      0/1      |
| audio                                              |       ❌        |     0/1      |        ❌        |      0/1      |
| webRequest (Deprecated)                            |       ❌        |     0/1      |        ❌        |      0/1      |
| unsafeWindow                                       |       ✅        |     1/1      |        -         |       -       |
| window.onurlchange                                 |       ❌        |     0/1      |        -         |       -       |
| window.close                                       |       ✅        |     1/1      |        -         |       -       |
| window.focus                                       |       ✅        |     1/1      |        -         |       -       |
