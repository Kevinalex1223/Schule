function tarzan() {
  img = document.createElement('img')
  img.src = '/pngguru.com.png'
  img.className = 'tarzan';

  document.body.appendChild(img)
  
  document.onclick = () => {
    img.style.top = '500px';
  }
}

tarzan()
