function tarzan() {
  document.onclick = () => {
    img = document.createElement('img')
    img.src = '/pngguru.com.png'
    img.className = 'tarzan';
    
    document.body.appendChild(img)
    
    img.style.top = '500px';
  }
}

tarzan()
