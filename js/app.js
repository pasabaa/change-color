AOS.init({
  delay: 200
});

function changeColor(){

  let color = document.getElementById('colorInput').value;
  let nameColor = document.getElementById('nameColor');

  document.body.style.backgroundColor = color;

  nameColor.innerHTML = `<h4 class="my-0 mx-2 fw-bolder p-0" data-aos="fade-left">Choose: <span id="colorNumber">${color}</span></h4>
                        <button id="buttonColor" data-aos="fade-down" onclick="copyColor();" class="mx-2 btn btn-sm"><i id="iconClip" class="bi bi-clipboard fs-4"></i></button>`


  console.log(color);

}

function copyColor(){
  
  let colorNumber = document.getElementById('colorNumber').textContent;

  let iconClip = document.getElementById('iconClip');

  iconClip.classList.remove('bi-clipboard', 'fs-4');

  iconClip.classList.add('bi-clipboard-check', 'color-anim', 'fs-2');


  navigator.clipboard.writeText(colorNumber);


}