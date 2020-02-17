function tarzan() {
  document.onclick = () => {
    img = document.createElement('img')
    img.src = '/pngguru.com.png'
    
    document.body.appendChild(img)
  }
}

tarzan()
