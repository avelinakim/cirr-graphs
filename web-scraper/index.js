const fetch = require('node-fetch')
const cheerio = require('cheerio')
const https = require('https')
const fs = require('fs')
const tabula = require('tabula-js')
const { exec } = require('child_process')

console.log('runnin')

const getData = async () => {
  try {
    const response = await fetch('https://cirr.org/data', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'same-origin',
    })
    const text = await response.text()
    return text
  } catch (error) {
    console.log('Error:', error)
  }
}

const findLinks = async () => {
  try {
    const html = await getData()
    const $ = cheerio.load(html)
    let aTags = $('.pdf > a')
    let links = []
    aTags.each(function(i, aTag) {
      links.push($(aTag).attr('href'))
    })
    return links
  } catch (error) {
    console.log('Error:', error)
  }
}

const downloadPDFs = async () => {
  try {
    const links = await findLinks()
    const paths = []
    for (let link of links) {
      const linkArr = link.split('/')
      const name = linkArr[linkArr.length - 1]
      if (!name.includes('Not Audited')) {
        await downloadFile(link, `./PDFs/${name}`)
        paths.push(`./PDFs/${name}`)
      }
    }
    return paths
  } catch (error) {
    console.log('Error:', error)
  }
}

const downloadFile = async (link, path) => {
  const res = await fetch(link)
  const fileStream = fs.createWriteStream(path)
  return new Promise((resolve, reject) => {
    res.body.pipe(fileStream)
    res.body.on('error', (err) => {
      reject(err)
    })
    fileStream.on('finish', function() {
      resolve()
    })
  })
}

const asyncExec = async (cmd) => {
  return new Promise((resolve, reject) => {
    const child = exec(cmd, (err, stdout, stderr) => {
      if (err) reject(err)
      else {
        console.log('stderr', stderr)
        resolve(stdout)
      }
    })
  })
}

const formatSchool = (school) => {
  let name = school.script
  let start = name
}

const scrapePDFs = async () => {
  // let sources = await downloadPDFs()
  const script = './PDFs/Hack Reactor San Francisco H1 2018.pdf'
  const cmd = 'java -jar ./node_modules/tabula-js/lib/tabula-java.jar "' + script + '" --format JSON --pages 2'
  let rawJSON = await asyncExec(cmd)
  const JSONObj = await JSON.parse(rawJSON)

  let data
  // console.log(JSONObj[1])
  if (JSONObj.length > 1) {
    data = JSONObj[1].data
  } else data = JSONObj[0].data

  const schoolName = data[1][1].text
  const location = data[2][1].text
  const median = data[26][2].text
  const salaryData = []

  for (let i = 27; i < 33; i++) {
    const dataArr = data[i]
    let salaryRange = dataArr[0].text
    let percentage = dataArr[1].text
    salaryData.push({ salaryRange, percentage })
  }
  // const school = { script, median, salaryData }
  console.log(location)
  console.log(salaryData)
  // console.log('Child', child)
}

scrapePDFs()

// java -jar ./node_modules/tabula-js/lib/tabula-java.jar ./PDFs/Hack\ Reactor\ San\ Francisco\ H1\ 2018.pdf --format JSON --pages 2 >> example.json

const filePaths = fs.readdirSync('./filtered-PDFs').map((name) => `./filtered-PDFs/${name}`)
console.log(filePaths)
