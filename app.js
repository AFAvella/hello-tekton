/**
* Copyright 2014 IBM
*
*   Licensed under the Apache License, Version 2.0 (the "License");
*   you may not use this file except in compliance with the License.
*   You may obtain a copy of the License at
*
*     http://www.apache.org/licenses/LICENSE-2.0
*
*   Unless required by applicable law or agreed to in writing, software
*   distributed under the License is distributed on an "AS IS" BASIS,
*   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
*   See the License for the specific language governing permissions and
*   limitations under the License.
**/

var express = require('express');

var PORT;
if (process.env.PORT) {
  PORT = process.env.PORT;
} else {
  PORT = 80;
}

// Lista de nombres para cada género
const maleNames = ['Carlos', 'Juan', 'Miguel', 'Alejandro', 'José'];
const femaleNames = ['María', 'Ana', 'Laura', 'Isabel', 'Sofía'];

// Función para generar un número aleatorio en un rango
function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

// Función para generar nombres aleatorios
function generateRandomName() {
  const isMale = Boolean(getRandomNumber(2)); // Genera 0 o 1 (falso o verdadero)
  const randomName = isMale ? maleNames[getRandomNumber(maleNames.length)] : femaleNames[getRandomNumber(femaleNames.length)];
  
  // Mostrar el nombre generado en el elemento con id="randomName"
  document.getElementById('randomName').innerText = randomName;
}

