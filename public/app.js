// aux functions

let CLa = (element, what) => element.classList.add(what)
let CLr = (element, what) => element.classList.remove(what)
let gAtr = (element, attribute) => element.getAttribute(attribute)

// links

const links = document.querySelectorAll('.link')

links.forEach(link => link.addEventListener('click', () => {
  links.forEach(e => CLr(e, 'active'))
  CLa(link, 'active')
}))

// filters

const filters = document.querySelectorAll('.filter-btn')

filters.forEach(f => f.addEventListener('click', () => {
  let id = gAtr(f, 'id')
  let card = document.querySelectorAll('.project-card')

  let dataTags = c => gAtr(c, 'data-tags').includes(id)

  card.forEach(c => dataTags(c) ? CLr(c, 'hide') : CLa(c, 'hide'))

  filters.forEach(btn => CLr(btn, 'active'))
  CLa(f, 'active')
}))

// contact form

const contactBtn = document.querySelector('.contact-btn')

contactBtn.addEventListener('click', () => {
  const resp = {
    firstname: document.querySelector('.first-name').value,
    lastname: document.querySelector('.last-name').value,
    email: document.querySelector('.email').value,
    msg: document.querySelector('.message').value
  }

  if( resp.firstname.length && resp.lastname.length && resp.email.length && resp.msg.length ) {
   fetch('/mail', {
     method: 'post',
     headers: new Headers({'Content-Type': 'application/json'}),
     body: JSON.stringify({...resp})
   })
   .then(res => res.json())
   .then(info => alert(info))
  }
})