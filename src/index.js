const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('project wired!')


function arrayify(nodeList) {
  return Array.from(nodeList)
}

function objToArray(obj, key) {
  return Object.entries(obj[key])
}

function textPusher (nodeList, objArr) {
  for (let i=0; i<nodeList.length;i++){
    nodeList[i].textContent= objArr[i][1]
  }
}

function classPusher (nodeList, className) {
  for (let i=0; i<nodeList.length;i++){
    nodeList[i].className= className
  }
}

function attrPusher (nodeList, attr, objArr) {
  for (let i=0; i<nodeList.length; i++){
    nodeList[i].setAttribute(attr, objArr[i][1])
  }
}



const header = document.querySelector("header")
const headerNav = header.querySelector("nav")
const headerLinks = headerNav.querySelectorAll("a")
const navArr = objToArray(siteContent, "nav")

textPusher(headerLinks, navArr)
classPusher(headerLinks, "italic")

const images = document.querySelectorAll("img")
attrPusher(images, "src", objToArray(siteContent, "images"))

const ctaContent = objToArray(siteContent, "cta")
const ctaSite = document.querySelector(".cta-text").querySelectorAll("*")

textPusher(ctaSite, ctaContent)

function searchedObjToArray (obj, key, search) {
  const arr = Object.entries(obj[key])
  const output = arr.filter(element => element[0].includes(search))
  return output
}


const h4Content = searchedObjToArray(siteContent, "main-content", "h4")
const h4Site = document.querySelector(".main-content").querySelectorAll("h4")
textPusher(h4Site, h4Content)

const pContent = searchedObjToArray(siteContent, "main-content", "content")
const pSite = document.querySelector(".main-content").querySelectorAll("p")
textPusher(pSite, pContent)

const contactContent = objToArray(siteContent, "contact")
const contactSite = document.querySelector(".contact").querySelectorAll("*")

textPusher(contactSite, contactContent)

const footerContent = objToArray(siteContent, "footer")
const footerSite = document.querySelector("footer").querySelectorAll("*")

textPusher(footerSite, footerContent)
classPusher(footerSite, "bold")
