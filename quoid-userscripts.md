# Userscript API Benchmark Results

- **Manager**: Userscripts (4.8.2)
- **Browser**: Safari 605.1.15
- **Date**: 2025-12-29

| API                                                | GM.\* (Support) | GM.\* (Pass) | GM\_\* (Support) | GM\_\* (Pass) |
| :------------------------------------------------- | :-------------: | :----------: | :--------------: | :-----------: |
| info                                               |       ✅        |     1/1      |        ✅        |      1/1      |
| log                                                |       ❌        |     0/1      |        ❌        |      0/1      |
| setValue / getValue                                |       ✅        |     2/2      |        ❌        |      0/2      |
| deleteValue                                        |       ✅        |     1/1      |        ❌        |      0/1      |
| listValues                                         |       ✅        |     1/1      |        ❌        |      0/1      |
| setValues / getValues / deleteValues               |       ❌        |     0/1      |        ❌        |      0/1      |
| addValueChangeListener / removeValueChangeListener |       ❌        |     0/5      |        ❌        |      0/5      |
| addStyle                                           |       ⚠️        |     0/1      |        ❌        |      0/1      |
| addElement                                         |       ❌        |     0/6      |        ❌        |      0/6      |
| registerMenuCommand                                |       ❌        |     0/1      |        ❌        |      0/1      |
| unregisterMenuCommand                              |       ❌        |     0/1      |        ❌        |      0/1      |
| xmlHttpRequest                                     |       ✅        |     1/1      |        ✅        |      1/1      |
| download                                           |       ❌        |     0/1      |        ❌        |      0/1      |
| openInTab                                          |       ✅        |     1/1      |        ❌        |      0/1      |
| setClipboard                                       |       ✅        |     1/1      |        ❌        |      0/1      |
| notification                                       |       ❌        |     0/1      |        ❌        |      0/1      |
| getResourceText                                    |       ❌        |     0/1      |        ❌        |      0/1      |
| getResourceURL                                     |       ❌        |     0/1      |        ❌        |      0/1      |
| getTab / saveTab / getTabs                         |       ❌        |     0/1      |        ❌        |      0/1      |
| cookie                                             |       ❌        |     0/1      |        ❌        |      0/1      |
| audio                                              |       ❌        |     0/1      |        ❌        |      0/1      |
| webRequest (Deprecated)                            |       ❌        |     0/1      |        ❌        |      0/1      |
| unsafeWindow                                       |       ❌        |     0/1      |        -         |       -       |
| window.onurlchange                                 |       ❌        |     0/1      |        -         |       -       |
| window.close                                       |       ✅        |     1/1      |        -         |       -       |
| window.focus                                       |       ✅        |     1/1      |        -         |       -       |
