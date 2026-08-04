//removes nasty html extension from the URL which could interfere with stuff
if(location.pathname.includes("/index.html")) location.replace(location.pathname.replace('/index.html', '/'))

//basic global stuff
//shortcuts
var content = document.querySelector('#content')
var body = document.body
var root = document.documentElement

var space = {
    size: 5,
    plan: `
    00000
    01110
    01210
    01110
    00000
    `
}