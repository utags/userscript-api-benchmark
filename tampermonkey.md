# Userscript API Benchmark Results

- **Manager**: Tampermonkey (5.4.1)
- **Browser**: Chrome 143.0.0.0
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
| getTab / saveTab / getTabs                         |       ✅        |     1/1      |        ✅        |      1/1      |
| cookie                                             |       ✅        |     1/1      |        ✅        |      1/1      |
| audio                                              |       ✅        |     1/1      |        ✅        |      1/1      |
| webRequest (Deprecated)                            |       ✅        |     1/1      |        ✅        |      1/1      |
| unsafeWindow                                       |       ✅        |     1/1      |        -         |       -       |
| window.onurlchange                                 |       ✅        |     1/1      |        -         |       -       |
| window.close                                       |       ✅        |     1/1      |        -         |       -       |
| window.focus                                       |       ✅        |     1/1      |        -         |       -       |
