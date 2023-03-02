 let newGen = document.getElementById('newgen')
  let _color = document.getElementById('color')


  const setBg = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    console.log(randomColor);
     document.querySelector('main').style.background = "#" + randomColor;
       
     _color.innerHTML= "#" + randomColor
  }
  newGen.addEventListener('click' , setBg)
  setBg()