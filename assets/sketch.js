// Función para cambiar entre pantallas
function cambiarPantalla(numPantalla) {
  // Ocultamos todas las pantallas
  document.querySelectorAll('.pantalla').forEach(pantalla => {
    pantalla.classList.remove('visible');
  });

  // Mostramos solo la pantalla seleccionada
  document.getElementById(`pantalla${numPantalla}`).classList.add('visible');
}

/*let d = 40;

function setup() {
  let canvas = createCanvas(1290, 300);
  canvas.parent('sketch-holder'); 
  background(0);
}

function draw() {
  if (mouseIsPressed) {
    stroke(255);
    fill(0);
    circle(mouseX, mouseY, random(10, d));
  }
}

function keyPressed() { 
  if (key === ' ') { 
    background(0); 
  } else {
    save("image.png");
  }
}
*/

function setup() {
  let canvas = createCanvas(1290, 1000);
  canvas.parent('pisarra');
  background(0); // Fondo negro
  
}

function draw() {
  if (mouseIsPressed) {
    line(pmouseX, pmouseY, mouseX, mouseY); 
    stroke(255); 
    strokeWeight(2); 
  }
}
/*
function keyPressed() {
  if (key === ' ') {
    background(0); // Borra el canvas y restaura el fondo negro
  } else {
    save("image.png"); // Guarda la imagen en formato PNG
  }
}
*/

function clearCanvas() {
  background(0); 
}
