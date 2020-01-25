const fetch = require('node-fetch')
const cheerio = require('cheerio')
const https = require('https')
const fs = require('fs')

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

const download = async () => {
  try {
    const links = await findLinks()
    links.forEach((link, i) => {
      const linkArr = link.split('/')
      const name = linkArr[linkArr.length - 1]
      if (!name.includes('Not Audited')) {
        const file = fs.createWriteStream(`./PDFs/${name}`)
        const request = https.get(link, (response) => response.pipe(file))
      }
    })
  } catch (error) {
    console.log('Error:', error)
  }
}

download()
