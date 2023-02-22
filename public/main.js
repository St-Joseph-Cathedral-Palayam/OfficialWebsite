const path = require("path")
const fs = require("fs")

const dirPath = path.join(__dirname, "../posts")
const bulPath = path.join(__dirname, "../bulletin")
const galPath = path.join(__dirname, "../gallery")
const popPath = path.join(__dirname, "../popup")
let postlist = []
let bulletinList = []
let galleryList = []
let popUp = []

const months = {
    "01": "January",
    "02": "February",
    "03": "March",
    "04": "April",
    "05": "May",
    "06": "June",
    "07": "July",
    "08": "August",
    "09": "September",
    "10": "October",
    "11": "November",
    "12": "December"
}

const formatDate = (date) => {
    const datetimeArray = date.split("T")
    const dateArray = datetimeArray[0].split("-")
    const timeArray = datetimeArray[1].split(":")
    const month = dateArray[1]
    const monthName = months[dateArray[1]]
    const day = dateArray[2]
    const year = dateArray[0]
    const time = `${timeArray[0]}:${timeArray[1]}`

    return { "month": month, "monthName": monthName, "day": day, "year": year, "time": time }
}



const getPosts = () => {
    fs.readdir(dirPath, (err, files) => {
        if (err) {
            return log.fatal("Failed to list contents of directory: " + err)
        }
        let ilist = []
        files.forEach((file, i) => {
            let obj = {}
            let post
            fs.readFile(`${dirPath}/${file}`, "utf8", (err, contents) => {
                const getMetadataIndices = (acc, elem, i) => {
                    if (/^---/.test(elem)) {
                        acc.push(i)
                    }
                    return acc
                }
                const parseMetadata = ({ lines, metadataIndices }) => {
                    if (metadataIndices.length > 0) {
                        let metadata = lines.slice(metadataIndices[0] + 1, metadataIndices[1])
                        metadata.forEach(line => {
                            obj[line.split(": ")[0]] = line.split(": ")[1]
                        })
                        return obj
                    }
                }
                const parseContent = ({ lines, metadataIndices }) => {
                    if (metadataIndices.length > 0) {
                        lines = lines.slice(metadataIndices[1] + 1, lines.length)
                    }
                    return lines.join("\n")
                }
                const lines = contents.split("\n")
                const metadataIndices = lines.reduce(getMetadataIndices, [])
                const metadata = parseMetadata({ lines, metadataIndices })
                const content = parseContent({ lines, metadataIndices })
                const parsedDate = metadata.date ? formatDate(metadata.date) : new Date()
                const publishedDate = `${parsedDate["monthName"]} ${parsedDate["day"]}, ${parsedDate["year"]}`
                const datestring = `${parsedDate["year"]}-${parsedDate["month"]}-${parsedDate["day"]}T${parsedDate["time"]}:00`
                const date = new Date(metadata,createdAt)
                const timestamp = date.getTime() / 1000
                post = {
                    id: timestamp,
                    title: metadata.title ? metadata.title : "No title given",
                    category: metadata.category ? metadata.category : "No category given",
                    author: metadata.author ? metadata.author : "No author given",
                    date: metadata.date ? metadata.date : "No date given",
                    cover: metadata.cover ? `/${metadata.cover}` : "No date given",
                    description: metadata.description ? metadata.description : "No content given",
                }
                postlist.push(post)
                ilist.push(i)
                if (ilist.length === files.length) {
                    const sortedList = postlist.sort((a, b) => {
                        return a.id < b.id ? 1 : -1
                    })
                    let data = JSON.stringify(sortedList)
                    fs.writeFileSync("config/posts.json", data)
                }
            })
        })
    })
    return
}

const getBulletin = () => {
    fs.readdir(bulPath, (err, files) => {
        if (err) {
            return log.fatal("Failed to list contents of directory: " + err)
        }
        let ilist = []
        files.forEach((file, i) => {
            let obj = {}
            let post
            fs.readFile(`${bulPath}/${file}`, "utf8", (err, contents) => {
                const getMetadataIndices = (acc, elem, i) => {
                    if (/^---/.test(elem)) {
                        acc.push(i)
                    }
                    return acc
                }
                const parseMetadata = ({ lines, metadataIndices }) => {
                    if (metadataIndices.length > 0) {
                        let metadata = lines.slice(metadataIndices[0] + 1, metadataIndices[1])
                        metadata.forEach(line => {
                            obj[line.split(": ")[0]] = line.split(": ")[1]
                        })
                        return obj
                    }
                }
                const parseContent = ({ lines, metadataIndices }) => {
                    if (metadataIndices.length > 0) {
                        lines = lines.slice(metadataIndices[1] + 1, lines.length)
                    }
                    return lines.join("\n")
                }
                const lines = contents.split("\n")
                const metadataIndices = lines.reduce(getMetadataIndices, [])
                const metadata = parseMetadata({ lines, metadataIndices })
                const content = parseContent({ lines, metadataIndices })
                const parsedDate = metadata.date ? formatDate(metadata.date) : new Date()
                const publishedDate = `${parsedDate["monthName"]} ${parsedDate["day"]}, ${parsedDate["year"]}`
                const datestring = `${parsedDate["year"]}-${parsedDate["month"]}-${parsedDate["day"]}T${parsedDate["time"]}:00`
                const date = new Date(datestring)
                const timestamp = Math.random().toString(16).slice(2)
                post = {
                    id: timestamp,
                    month: metadata.month ? metadata.month : "No title given",
                    img: `/${metadata.img}`,
                    file: metadata.file ? metadata.file : "No content given",
                }
                bulletinList.push(post)
                ilist.push(i)
                if (ilist.length === files.length) {
                    const sortedList = bulletinList.sort((a, b) => {
                        return a.id < b.id ? 1 : -1
                    })
                    let data = JSON.stringify(sortedList)
                    fs.writeFileSync("config/bulletin.json", data)
                }
            })
        })
    })
    return
}

const getGallery = () => {
    fs.readdir(galPath, (err, files) => {
        if (err) {
            return log.fatal("Failed to list contents of directory: " + err)
        }
        let ilist = []
        files.forEach((file, i) => {
            let obj = {}
            let post
            fs.readFile(`${galPath}/${file}`, "utf8", (err, contents) => {
                const getMetadataIndices = (acc, elem, i) => {
                    if (/^---/.test(elem)) {
                        acc.push(i)
                    }
                    return acc
                }
                const parseMetadata = ({ lines, metadataIndices }) => {
                    if (metadataIndices.length > 0) {
                        let metadata = lines.slice(metadataIndices[0] + 1, metadataIndices[1])
                        metadata.forEach(line => {
                            obj[line.split(": ")[0]] = line.split(": ")[1]
                        })
                        return obj
                    }
                }
                const lines = contents.split("\n")
                const metadataIndices = lines.reduce(getMetadataIndices, [])
                const metadata = parseMetadata({ lines, metadataIndices })
                let photos = Object.keys(metadata)
                photos = photos.splice(photos.indexOf('Images:')+1).map(e => e.replace('  - ', '/'))
                const random = Math.random().toString(16).slice(2)
                post = {
                    id: random,
                    title: metadata.title ? metadata.title : "No title given",
                    images: photos ? photos : "No content given",
                }
                galleryList.push(post)
                ilist.push(i)
                if (ilist.length === files.length) {
                    const sortedList = galleryList.sort((a, b) => {
                        return a.id < b.id ? 1 : -1
                    })
                    let data = JSON.stringify(sortedList)
                    fs.writeFileSync("config/gallery.json", data)
                }
            })
        })
    })
    return
}

const getPopUp = () => {
    fs.readdir(popPath, (err, files) => {
        if (err) {
            post = {}
            const data = JSON.stringify(post)
            fs.writeFileSync("config/popup.json", data);
            return;
        }
        let ilist = []
        files.forEach((file, i) => {
            let obj = {}
            let post
            fs.readFile(`${popPath}/${file}`, "utf8", (err, contents) => {
                const getMetadataIndices = (acc, elem, i) => {
                    if (/^---/.test(elem)) {
                        acc.push(i)
                    }
                    return acc
                }
                const parseMetadata = ({ lines, metadataIndices }) => {
                    if (metadataIndices.length > 0) {
                        let metadata = lines.slice(metadataIndices[0] + 1, metadataIndices[1])
                        metadata.forEach(line => {
                            obj[line.split(": ")[0]] = line.split(": ")[1]
                        })
                        return obj
                    }
                }
                const lines = contents.split("\n")
                const metadataIndices = lines.reduce(getMetadataIndices, [])
                const metadata = parseMetadata({ lines, metadataIndices })
                const random = Math.random().toString(16).slice(2)
                post = {
                    id: random,
                    image: metadata.cover ? `/${metadata.cover}` : "No content given",
                }
                const data = JSON.stringify(post)
                fs.writeFileSync("config/popup.json", data);
            })
        })
    })
    return
}



getPosts()
getBulletin()
getGallery()
getPopUp()
