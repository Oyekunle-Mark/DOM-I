const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
const logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// update the nav items
const nav = document.querySelectorAll('nav a');
nav.forEach((a, i) => {
  a.textContent = siteContent.nav[`nav-item-${i+1}`];
  a.style.color = 'green';
});

// add two more items to the nav
const firstAnchor = document.createElement('a');
const lastAnchor = document.createElement('a');
firstAnchor.textContent = 'First';
lastAnchor.textContent = 'Last';
firstAnchor.style.color = 'green';
lastAnchor.style.color = 'green';
document.querySelector('header nav').appendChild(lastAnchor);
document.querySelector('header nav').prepend(firstAnchor);

// updates the cta
document.querySelector('button').textContent = siteContent.cta["button"];
document.querySelector('.cta-text h1').innerHTML = 'DOM<br> Is<br> Awesome';
document.querySelector('#cta-img').src = siteContent.cta["img-src"];

// features
const features = document.querySelectorAll('.top-content .text-content')[0];
features.children[0].textContent = siteContent["main-content"]["features-h4"];
features.children[1].textContent = siteContent["main-content"]["features-content"];

// about
const about = document.querySelectorAll('.top-content .text-content')[1];
about.children[0].textContent = siteContent["main-content"]["about-h4"];
about.children[1].textContent = siteContent["main-content"]["about-content"]

// main content middle image
document.querySelector('.middle-img').setAttribute('src', siteContent["main-content"]["middle-img-src"]);

// services product and vision
const services = document.querySelectorAll('.bottom-content .text-content')[0];
services.children[0].textContent = siteContent["main-content"]["services-h4"];
services.children[1].textContent = siteContent["main-content"]["services-content"];

const product = document.querySelectorAll('.bottom-content .text-content')[1];
product.children[0].textContent = siteContent["main-content"]["product-h4"];
product.children[1].textContent = siteContent["main-content"]["product-content"];

const vision = document.querySelectorAll('.bottom-content .text-content')[2];
vision.children[0].textContent = siteContent["main-content"]["vision-h4"];
vision.children[1].textContent = siteContent["main-content"]["vision-content"];

// contact
document.querySelector('.contact h4').textContent = siteContent["contact"]["contact-h4"];
document.querySelectorAll('.contact p')[0].textContent = siteContent["contact"]["address"];
document.querySelectorAll('.contact p')[1].textContent = siteContent["contact"]["phone"];
document.querySelectorAll('.contact p')[2].textContent = siteContent["contact"]["email"];

// copyright
document.querySelector('footer p').textContent = siteContent["footer"]["copyright"];

// add more styles to the page
document.querySelectorAll('h4').forEach(item => item.style.color = 'green');
document.querySelector('footer p').style.fontWeight = 'bold';

document.querySelector('button').addEventListener('click', () => {
    const message = document.createElement('p');
    message.innerHTML = 'Thank you<br> for showing interest.'
    message.style.fontSize = '12px';
    message.style.color = 'red';
    message.style.marginTop = '10px';
    document.querySelector('.cta-text').appendChild(message);
    document.querySelector('button').disabled = true;
});
