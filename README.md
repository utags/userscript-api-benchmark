# Userscript API Benchmark

[![Install](https://img.shields.io/badge/Install-Userscript-brightgreen?style=flat-square)](https://github.com/utags/userscript-api-benchmark/raw/refs/heads/main/userscript-api-benchmark.user.js)

## Purpose

This script is a comprehensive benchmark tool designed to test the compatibility and accuracy of Userscript Manager APIs. It verifies whether the APIs (both `GM_*` and `GM.*`) are correctly implemented according to the standards (e.g., Tampermonkey documentation).

It is particularly useful for:

- **Developers**: To verify if their userscript manager supports required APIs.
- **Users**: To check the capabilities of their installed userscript manager.
- **Maintainers**: To audit compliance with GM standards, especially for newer asynchronous `GM.*` APIs.

## Features

- **Dual API Support**: Tests both legacy synchronous `GM_*` APIs and modern asynchronous `GM.*` APIs.
- **Type Verification**: Checks if synchronous APIs return values directly and asynchronous APIs return Promises.
- **Functional Testing**: Executes actual API calls (e.g., storage read/write, value change listeners) to verify functionality, not just existence.
- **Isolated Execution**: Ensures that a failure in one API test does not block the execution of others.
- **Visual Reporting**: Displays a clear, color-coded table of results (Pass/Fail/N/A) directly on the page.

## Usage

1. Install the script in your Userscript Manager (Tampermonkey, Violentmonkey, etc.).
2. Visit any webpage.
3. Open the Userscript Manager menu.
4. Click on **"Run Benchmark"**.
5. A table will appear overlaying the page with the test results.

## Benchmark Results (Screenshots)

### Tampermonkey (v5.4.1)

![screencapture](https://wsrv.nl/?w=600&url=https://raw.githubusercontent.com/utags/userscript-api-benchmark/main/screencapture/screenshot-2025-12-27-01-12-07.png)

### Violentmonkey (v2.31.0)

![screencapture](https://wsrv.nl/?w=600&url=https://raw.githubusercontent.com/utags/userscript-api-benchmark/main/screencapture/screenshot-2025-12-27-01-14-04.png)

### ScriptCat (v1.2.2)

![screencapture](https://wsrv.nl/?w=600&url=https://raw.githubusercontent.com/utags/userscript-api-benchmark/main/screencapture/screenshot-2025-12-27-01-22-55.png)

### Userscripts (Safari) (v4.8.2)

![screencapture](https://wsrv.nl/?w=600&url=https://raw.githubusercontent.com/utags/userscript-api-benchmark/main/screencapture/screenshot-2025-12-27-01-12-49.png)

### Greasemonkey (v4.13.0)

![screencapture](https://wsrv.nl/?w=600&url=https://raw.githubusercontent.com/utags/userscript-api-benchmark/main/screencapture/screenshot-2025-12-27-01-13-20.png)

## Project Info

- **Repository**: [https://github.com/utags/userscripts](https://github.com/utags/userscripts)
- **Issues**: [https://github.com/utags/userscripts/issues](https://github.com/utags/userscripts/issues)
- **License**: MIT

## Changelog

### 0.1.1

- Initial release.
- Support for `GM.*` (Promise) and `GM_*` (Callback/Sync) APIs.
- Comprehensive test coverage including storage, values, tabs, and window operations.
