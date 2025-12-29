# Userscript API Benchmark Results

- **Manager**: extensions/stay (0.1)
- **Browser**: Chrome 143.0.0.0
- **Date**: 2025-12-29

| API                                                | GM.\* (Support) | GM.\* (Pass) | GM\_\* (Support) | GM\_\* (Pass) |
| :------------------------------------------------- | :-------------: | :----------: | :--------------: | :-----------: |
| info                                               |       ✅        |     1/1      |        ✅        |      1/1      |
| log                                                |       ✅        |     1/1      |        ✅        |      1/1      |
| setValue / getValue                                |       ✅        |     2/2      |        ✅        |      2/2      |
| deleteValue                                        |       ✅        |     1/1      |        ✅        |      1/1      |
| listValues                                         |       ✅        |     1/1      |        ✅        |      1/1      |
| setValues / getValues / deleteValues               |       ❌        |     0/1      |        ❌        |      0/1      |
| addValueChangeListener / removeValueChangeListener |       ⚠️        |     0/5      |        ⚠️        |      0/5      |
| addStyle                                           |       ✅        |     1/1      |        ✅        |      1/1      |
| addElement                                         |       ⚠️        |     4/6      |        ⚠️        |      4/6      |
| registerMenuCommand                                |       ✅        |     1/1      |        ✅        |      1/1      |
| unregisterMenuCommand                              |       ✅        |     1/1      |        ✅        |      1/1      |
| xmlHttpRequest                                     |       ✅        |     1/1      |        ✅        |      1/1      |
| download                                           |       ❌        |     0/1      |        ✅        |      1/1      |
| openInTab                                          |       ✅        |     1/1      |        ✅        |      1/1      |
| setClipboard                                       |       ✅        |     1/1      |        ✅        |      1/1      |
| notification                                       |       ✅        |     1/1      |        ✅        |      1/1      |
| getResourceText                                    |       ❌        |     0/1      |        ✅        |      1/1      |
| getResourceURL                                     |       ✅        |     1/1      |        ✅        |      1/1      |
| getTab / saveTab / getTabs                         |       ✅        |     1/1      |        ✅        |      1/1      |
| cookie                                             |       ✅        |     1/1      |        ✅        |      1/1      |
| audio                                              |       ❌        |     0/1      |        ❌        |      0/1      |
| webRequest (Deprecated)                            |       ❌        |     0/1      |        ❌        |      0/1      |
| unsafeWindow                                       |       ✅        |     1/1      |        -         |       -       |
| window.onurlchange                                 |       ❌        |     0/1      |        -         |       -       |
| window.close                                       |       ✅        |     1/1      |        -         |       -       |
| window.focus                                       |       ✅        |     1/1      |        -         |       -       |
