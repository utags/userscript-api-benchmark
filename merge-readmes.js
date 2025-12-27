const fs = require('fs')
const path = require('path')

const baseDir = __dirname
const readmes = ['README.md', 'README.zh-CN.md'].map((p) =>
  path.join(baseDir, p)
)
const sources = [
  { file: 'tampermonkey.md', heading: /^###\s*Tampermonkey\b/ },
  { file: 'violentmonkey.md', heading: /^###\s*Violentmonkey\b/ },
  { file: 'scriptcat.md', heading: /^###\s*ScriptCat\b/ },
  { file: 'greasemonkey.md', heading: /^###\s*Greasemonkey\b/ },
  {
    file: 'quoid-userscripts.md',
    heading: /^###\s*Userscripts\s*\(Safari\)/,
  },
  { file: 'stay-safari.md', heading: /^###\s*Stay\s*\(Safari\)/ },
  { file: 'stay-chrome.md', heading: /^###\s*Stay\s*\(Chrome\)/ },
]

function readBody(filePath) {
  const content = fs.readFileSync(filePath, 'utf8')
  const lines = content.split(/\r?\n/)
  if (lines.length && lines[0].trim().startsWith('#')) lines.shift()
  return lines.join('\n').trim() + '\n'
}

function replaceSection(doc, headingRegex, newBody) {
  const lines = doc.split(/\r?\n/)
  let hIndex = -1
  for (let i = 0; i < lines.length; i++) {
    if (headingRegex.test(lines[i])) {
      hIndex = i
      break
    }
  }
  if (hIndex === -1) return doc
  let end = lines.length
  for (let j = hIndex + 1; j < lines.length; j++) {
    if (/^###\s/.test(lines[j])) {
      end = j
      break
    }
  }
  const prefix = lines.slice(0, hIndex + 1).join('\n')
  const suffix = lines.slice(end).join('\n')
  const body = newBody.replace(/\r?\n$/, '') + '\n'
  return prefix + '\n' + body + suffix
}

function run() {
  const newBodies = {}
  for (const { file, heading } of sources) {
    const srcPath = path.join(baseDir, file)
    if (fs.existsSync(srcPath)) {
      newBodies[file] = { heading, body: readBody(srcPath) }
    }
  }
  for (const readmePath of readmes) {
    let doc = fs.readFileSync(readmePath, 'utf8')
    for (const { file } of sources) {
      const entry = newBodies[file]
      if (entry) {
        doc = replaceSection(doc, entry.heading, entry.body)
      }
    }
    fs.writeFileSync(readmePath, doc, 'utf8')
  }
}

run()
