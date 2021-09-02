let projects = [
  {
    name: 'project one',
    tags: '#vuejs',
    image: 'project01.png'
  },
]

// creating dynamic project card

const projectContainer = document.querySelector('.project-container')

projects.forEach(p => projectContainer.innerHTML += `
  <div class="project-card" data-tags="#all, ${p.tags}">
    <img src="img/${p.image}" alt=""/>
    <div class="content">
      <h1 class="project-name">${p.name}</h1>
      <span class="tags">${p.tags}</span>
    </div>
  </div>
`)