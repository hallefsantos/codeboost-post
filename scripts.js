import html2canvas from 'html2canvas';

const postContainer = document.querySelector('.post-container')
const form = document.querySelector('form')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  html2canvas(postContainer, { 
    useCORS: true,
    scrollX: -window.scrollX,
    scrollY: -window.scrollY,
    windowWidth: document.documentElement.offsetWidth,
    windowHeight: document.documentElement.offsetHeight,
  }).then(canvas => {
    download(canvas)
  })
})

var download = function(canvas){
  var link = document.createElement('a');
  link.download = 'codeboost-post.png';
  link.href = canvas.toDataURL()
  link.click();
}
