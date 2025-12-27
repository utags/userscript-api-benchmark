# Userscript API Benchmark Results

- **Manager**: Violentmonkey (2.31.0)
- **Browser**: Firefox 146.0
- **Date**: 2025-12-27

| API                                                | GM.\* (Support) | GM.\* (Pass) | GM\_\* (Support) | GM\_\* (Pass) |
| :------------------------------------------------- | :-------------: | :----------: | :--------------: | :-----------: |
| info                                               |       ✅        |     1/1      |        ✅        |      1/1      |
| log                                                |       ✅        |     1/1      |        ✅        |      1/1      |
| setValue / getValue                                |       ✅        |     2/2      |        ✅        |      2/2      |
| deleteValue                                        |       ✅        |     1/1      |        ✅        |      1/1      |
| listValues                                         |       ✅        |     1/1      |        ✅        |      1/1      |
| setValues / getValues / deleteValues               |       ✅        |     1/1      |        ✅        |      1/1      |
| addValueChangeListener / removeValueChangeListener |       ✅        |     5/5      |        ✅        |      5/5      |
| addStyle                                           |       ✅        |     1/1      |        ✅        |      1/1      |
| addElement                                         |       ✅        |     1/1      |        ✅        |      1/1      |
| registerMenuCommand                                |       ✅        |     1/1      |        ✅        |      1/1      |
| unregisterMenuCommand                              |       ✅        |     1/1      |        ✅        |      1/1      |
| xmlHttpRequest                                     |       ✅        |     1/1      |        ✅        |      1/1      |
| download                                           |       ✅        |     1/1      |        ✅        |      1/1      |
| openInTab                                          |       ✅        |     1/1      |        ✅        |      1/1      |
| setClipboard                                       |       ✅        |     1/1      |        ✅        |      1/1      |
| notification                                       |       ✅        |     1/1      |        ✅        |      1/1      |
| getResourceText                                    |       ✅        |     1/1      |        ✅        |      1/1      |
| getResourceURL                                     |       ✅        |     1/1      |        ✅        |      1/1      |
| getTab / saveTab / getTabs                         |       ❌        |     0/1      |        ❌        |      0/1      |
| cookie                                             |       ❌        |     0/1      |        ❌        |      0/1      |
| audio                                              |       ❌        |     0/1      |        ❌        |      0/1      |
| webRequest (Deprecated)                            |       ❌        |     0/1      |        ❌        |      0/1      |
| unsafeWindow                                       |       ✅        |     1/1      |        -         |       -       |
| window.onurlchange                                 |       ❌        |     0/1      |        -         |       -       |
| window.close                                       |       ✅        |     1/1      |        -         |       -       |
| window.focus                                       |       ✅        |     1/1      |        -         |       -       |
