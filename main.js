const preguntas = [
  //Categoria animales
  {
    categoria: "Animales",
    pregunta: "¿Cuál es el mamífero más veloz?",
    opciones: ["Guepardo", "León", "Elefante", "Hiena"],
    respuestaCorrecta: "A",
    respuestaIncorrecta: "El guepardo es el mamífero más veloz del mundo"
  },
  {
    categoria: "Animales",
    pregunta: "¿Cuál es el animal más venenoso del mundo?",
    opciones: ["Serpiente de mar", "Araña de embudo", "Caja de pulpo", "Rana dorada venenosa"],
    respuestaCorrecta: "D",
    respuestaIncorrecta: "La rana dorada venenosa es el animal más venenoso del mundo"
  },
  {
    categoria: "Animales",
    pregunta: "¿Cuál es el mamífero más grande del mundo?",
    opciones: ["Elefante africano", "Ballena azul", "Jirafa", "Elefante asiático"],
    respuestaCorrecta: "B",
    respuestaIncorrecta: "La ballena azul es el mamífero más grande del mundo"
  },
  {
    categoria: "Animales",
    pregunta: "¿Cuál es el único mamífero capaz de volar?",
    opciones: ["Murciélago", "Colibrí", "Pterosaurio", "Águila"],
    respuestaCorrecta: "A",
    respuestaIncorrecta: "El murciélago es el único mamífero capaz de volar"
  },
  {
    categoria: "Animales",
    pregunta: "¿Cuántos corazones tiene un pulpo?",
    opciones: ["1", "2", "3", "4"],
    respuestaCorrecta: "C",
    respuestaIncorrecta: "Un pulpo tiene 3 corazones"
  },
  {
    categoria: "Animales",
    pregunta: "¿Cuál es el animal más lento del mundo?",
    opciones: ["Caracol", "Tortuga", "Koala", "Serpiente"],
    respuestaCorrecta: "A",
    respuestaIncorrecta: "El caracol es el animal más lento del mundo"
  },
  {
    categoria: "Animales",
    pregunta: "¿Qué animal es conocido como el 'Rey de la Selva'?",
    opciones: ["León", "Tigre", "Oso", "Elefante"],
    respuestaCorrecta: "A",
    respuestaIncorrecta: "El león es conocido como el 'Rey de la Selva'"
  },
  {
    categoria: "Animales",
    pregunta: "¿Cuál es el insecto más grande del mundo?",
    opciones: ["Hormiga", "Abeja", "Escarabajo titán", "Libélula"],
    respuestaCorrecta: "C",
    respuestaIncorrecta: "El escarabajo titán es el insecto más grande del mundo"
  },
  {
    categoria: "Animales",
    pregunta: "¿Qué animal es símbolo de la longevidad en la cultura china?",
    opciones: ["Dragón", "Elefante", "Tortuga", "Búho"],
    respuestaCorrecta: "C",
    respuestaIncorrecta: "La tortuga es símbolo de longevidad en la cultura china"
  },
  {
    categoria: "Animales",
    pregunta: "¿Cuál es el único mamífero que puede volar hacia atrás?",
    opciones: ["Murciélago", "Colibrí", "Pterosaurio", "Águila"],
    respuestaCorrecta: "B",
    respuestaIncorrecta: "El colibrí es el único mamífero que puede volar hacia atrás"
  },

  //categoria ciencia 
  {
    categoria: "Ciencia",
    pregunta: "¿Cuál es el tercer planeta del sistema solar?",
    opciones: ["Venus", "Marte", "Tierra", "Júpiter"],
    respuestaCorrecta: "C",
    respuestaIncorrecta: "El tercer planeta del sistema es la Tierra"
  },
  {
    categoria: "Ciencia",
    pregunta: "¿Cuál es el elemento más abundante en la corteza terrestre?",
    opciones: ["Oxígeno", "Silicio", "Aluminio", "Hierro"],
    respuestaCorrecta: "B",
    respuestaIncorrecta: "El silicio es el elemento más abundante en la corteza terrestre"
  },
  {
    categoria: "Ciencia",
    pregunta: "¿Quién formuló la teoría de la relatividad?",
    opciones: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Stephen Hawking"],
    respuestaCorrecta: "B",
    respuestaIncorrecta: "Albert Einstein formuló la teoría de la relatividad"
  },
  {
    categoria: "Ciencia",
    pregunta: "¿Cuál es la unidad básica de la vida?",
    opciones: ["Célula", "Átomo", "Molécula", "Gen"],
    respuestaCorrecta: "A",
    respuestaIncorrecta: "La célula es la unidad básica de la vida"
  },
  {
    categoria: "Ciencia",
    pregunta: "¿Qué gas es esencial para la fotosíntesis?",
    opciones: ["Dióxido de carbono", "Oxígeno", "Hidrógeno", "Nitrógeno"],
    respuestaCorrecta: "A",
    respuestaIncorrecta: "El dióxido de carbono es esencial para la fotosíntesis"
  },
  {
    categoria: "Ciencia",
    pregunta: "¿Cuál es la velocidad de la luz?",
    opciones: ["300,000 km/s", "150,000 km/s", "500,000 km/s", "200,000 km/s"],
    respuestaCorrecta: "A",
    respuestaIncorrecta: "La velocidad de la luz es aproximadamente 300,000 km/s"
  },
  {
    categoria: "Ciencia",
    pregunta: "¿En qué año se descubrió la penicilina?",
    opciones: ["1928", "1935", "1942", "1950"],
    respuestaCorrecta: "A",
    respuestaIncorrecta: "La penicilina fue descubierta en 1928"
  },
  {
    categoria: "Ciencia",
    pregunta: "¿Cuál es el metal más ligero?",
    opciones: ["Aluminio", "Plata", "Oro", "Cobre"],
    respuestaCorrecta: "A",
    respuestaIncorrecta: "El aluminio es el metal más ligero"
  },
  {
    categoria: "Ciencia",
    pregunta: "¿Cuál es el planeta más grande del sistema solar?",
    opciones: ["Marte", "Júpiter", "Saturno", "Urano"],
    respuestaCorrecta: "B",
    respuestaIncorrecta: "Júpiter es el planeta más grande del sistema solar"
  },
  {
    categoria: "Ciencia",
    pregunta: "¿Quién es conocido como el 'padre de la química moderna'?",
    opciones: ["Marie Curie", "Antoine Lavoisier", "Dmitri Mendeléyev", "Robert Boyle"],
    respuestaCorrecta: "B",
    respuestaIncorrecta: "Antoine Lavoisier es conocido como el 'padre de la química moderna'"
  },

  //Categoria geografia 
  {
    categoria: "Geografia",
    pregunta: "¿Cuál es la capital de Francia?",
    opciones: ["Madrid", "Burgos", "Paris", "Oporto"],
    respuestaCorrecta: "C",
    respuestaIncorrecta: "La capital de Francia es París"
  },
  {
    categoria: "Geografia",
    pregunta: "¿Cuál es el río más largo del mundo?",
    opciones: ["Amazonas", "Nilo", "Yangtsé", "Misisipi"],
    respuestaCorrecta: "A",
    respuestaIncorrecta: "El río más largo del mundo es el Amazonas"
  },
  {
    categoria: "Geografia",
    pregunta: "¿Cuál es el país más grande del mundo?",
    opciones: ["China", "Estados Unidos", "Rusia", "Canadá"],
    respuestaCorrecta: "C",
    respuestaIncorrecta: "Rusia es el país más grande del mundo"
  },
  {
    categoria: "Geografia",
    pregunta: "¿En qué continente se encuentra el monte Kilimanjaro?",
    opciones: ["África", "Asia", "Europa", "América"],
    respuestaCorrecta: "A",
    respuestaIncorrecta: "El monte Kilimanjaro se encuentra en África"
  },
  {
    categoria: "Geografia",
    pregunta: "¿Cuál es la capital de Australia?",
    opciones: ["Sídney", "Melbourne", "Canberra", "Brisbane"],
    respuestaCorrecta: "C",
    respuestaIncorrecta: "Canberra es la capital de Australia"
  },
  {
    categoria: "Geografia",
    pregunta: "¿En qué océano se encuentra la isla de Madagascar?",
    opciones: ["Atlántico", "Índico", "Pacífico", "Ártico"],
    respuestaCorrecta: "B",
    respuestaIncorrecta: "La isla de Madagascar se encuentra en el océano Índico"
  },
  {
    categoria: "Geografia",
    pregunta: "¿Cuál es la cordillera más larga del mundo?",
    opciones: ["Andes", "Himalaya", "Alpes", "Montañas Rocosas"],
    respuestaCorrecta: "A",
    respuestaIncorrecta: "Los Andes son la cordillera más larga del mundo"
  },
  {
    categoria: "Geografia",
    pregunta: "¿En qué país se encuentra la Gran Muralla China?",
    opciones: ["India", "China", "Japón", "Corea del Sur"],
    respuestaCorrecta: "B",
    respuestaIncorrecta: "La Gran Muralla China se encuentra en China"
  },
  {
    categoria: "Geografia",
    pregunta: "¿Cuál es el desierto más grande del mundo?",
    opciones: ["Sahara", "Gobi", "Atacama", "Antártico"],
    respuestaCorrecta: "A",
    respuestaIncorrecta: "El Sahara es el desierto más grande del mundo"
  },
  {
    categoria: "Geografia",
    pregunta: "¿En qué país se encuentra el Taj Mahal?",
    opciones: ["India", "Egipto", "Turquía", "Irán"],
    respuestaCorrecta: "A",
    respuestaIncorrecta: "El Taj Mahal se encuentra en India"
  },

  //Categoria musica
  {
    categoria: "Musica",
    pregunta: "¿Cuál de los siguientes instrumentos musicales es de viento?",
    opciones: ["Piano", "Guitarra", "Bateria", "Flauta"],
    respuestaCorrecta: "D",
    respuestaIncorrecta: "La flauta es un instrumento de viento"
  },
  {
    categoria: "Musica",
    pregunta: "¿Quién es conocido como el 'Rey del Pop'?",
    opciones: ["Elvis Presley", "Michael Jackson", "Bob Marley", "Madonna"],
    respuestaCorrecta: "B",
    respuestaIncorrecta: "Michael Jackson es conocido como el 'Rey del Pop'"
  },
  {
    categoria: "Musica",
    pregunta: "¿Cuál es el álbum más vendido de todos los tiempos?",
    opciones: ["Thriller", "The Dark Side of the Moon", "Back in Black", "Abbey Road"],
    respuestaCorrecta: "A",
    respuestaIncorrecta: "Thriller es el álbum más vendido de todos los tiempos"
  },
  {
    categoria: "Musica",
    pregunta: "¿En qué década debutaron los Beatles?",
    opciones: ["1950", "1960", "1970", "1980"],
    respuestaCorrecta: "B",
    respuestaIncorrecta: "Los Beatles debutaron en la década de 1960"
  },
  {
    categoria: "Musica",
    pregunta: "¿Quién es la voz principal de Queen?",
    opciones: ["Freddie Mercury", "John Lennon", "Mick Jagger", "David Bowie"],
    respuestaCorrecta: "A",
    respuestaIncorrecta: "Freddie Mercury es la voz principal de Queen"
  },
  {
    categoria: "Musica",
    pregunta: "¿Qué instrumento tocaba Jimi Hendrix?",
    opciones: ["Guitarra", "Batería", "Bajo", "Teclado"],
    respuestaCorrecta: "A",
    respuestaIncorrecta: "Jimi Hendrix tocaba la guitarra"
  },
  {
    categoria: "Musica",
    pregunta: "¿Cuál es el nombre real de Eminem?",
    opciones: ["Marshall Mathers", "Christopher Wallace", "Shawn Carter", "Curtis Jackson"],
    respuestaCorrecta: "A",
    respuestaIncorrecta: "El nombre real de Eminem es Marshall Mathers"
  },
  {
    categoria: "Musica",
    pregunta: "¿Qué banda británica es conocida como 'The Fab Four'?",
    opciones: ["The Rolling Stones", "The Who", "The Kinks", "The Beatles"],
    respuestaCorrecta: "D",
    respuestaIncorrecta: "The Beatles es conocida como 'The Fab Four'"
  },
  {
    categoria: "Musica",
    pregunta: "¿Quién es la 'Reina del Pop'?",
    opciones: ["Madonna", "Beyoncé", "Rihanna", "Katy Perry"],
    respuestaCorrecta: "A",
    respuestaIncorrecta: "Madonna es la 'Reina del Pop'"
  },
  {
    categoria: "Musica",
    pregunta: "¿Cuál es el instrumento principal de Carlos Santana?",
    opciones: ["Guitarra", "Batería", "Bajo", "Teclado"],
    respuestaCorrecta: "A",
    respuestaIncorrecta: "La guitarra es el instrumento principal de Carlos Santana"
  },


  //Categoria matematicas
  {
    categoria: "Matematicas",
    pregunta: "¿Cuánto es 8 multiplicado por 7?",
    opciones: ["56", "46", "93", "73"],
    respuestaCorrecta: "A",
    respuestaIncorrecta: "El resultado es 56"
  },
  {
    categoria: "Matematicas",
    pregunta: "¿Cuál es el resultado de 15 + 27?",
    opciones: ["32", "42", "52", "62"],
    respuestaCorrecta: "C",
    respuestaIncorrecta: "El resultado de 15 + 27 es 42"
  },
  {
    categoria: "Matematicas",
    pregunta: "¿Cuánto es la raíz cuadrada de 144?",
    opciones: ["10", "12", "14", "16"],
    respuestaCorrecta: "B",
    respuestaIncorrecta: "La raíz cuadrada de 144 es 12"
  },
  {
    categoria: "Matematicas",
    pregunta: "¿Cuánto es 8 multiplicado por 9?",
    opciones: ["64", "72", "80", "88"],
    respuestaCorrecta: "B",
    respuestaIncorrecta: "El resultado de 8 multiplicado por 9 es 72"
  },
  {
    categoria: "Matematicas",
    pregunta: "¿Cuál es el valor de π (pi) redondeado a dos decimales?",
    opciones: ["3.14", "3.24", "3.34", "3.44"],
    respuestaCorrecta: "A",
    respuestaIncorrecta: "El valor de π (pi) redondeado a dos decimales es 3.14"
  },
  {
    categoria: "Matematicas",
    pregunta: "¿Cuánto es 5 al cubo?",
    opciones: ["125", "150", "175", "200"],
    respuestaCorrecta: "A",
    respuestaIncorrecta: "5 al cubo es igual a 125"
  },
  {
    categoria: "Matematicas",
    pregunta: "¿Cuál es el resultado de 18 dividido por 3?",
    opciones: ["4", "6", "8", "10"],
    respuestaCorrecta: "B",
    respuestaIncorrecta: "El resultado de 18 dividido por 3 es 6"
  },
  {
    categoria: "Matematicas",
    pregunta: "¿Cuánto es 3 elevado a la cuarta potencia?",
    opciones: ["27", "81", "243", "729"],
    respuestaCorrecta: "C",
    respuestaIncorrecta: "3 elevado a la cuarta potencia es igual a 243"
  },
  {

    categoria: "Matematicas",
    pregunta: "¿Cuánto es 20 porcento de 150?",
    opciones: ["15", "30", "45", "60"],
    respuestaCorrecta: "B",
    respuestaIncorrecta: "El 20 por ciento de 150 es igual a 30"
  },
  {

    categoria: "Matematicas",
    pregunta: "¿Cuánto es el doble de 40?",
    opciones: ["60", "80", "100", "120"],
    respuestaCorrecta: "C",
    respuestaIncorrecta: "El doble de 40 es igual a 80"
  },

  //Categoria historia
  {
    categoria: "Historia",
    pregunta: "¿En qué año comenzó la Primera Guerra Mundial?",
    opciones: ["1970", "1948", "1914", "1974"],
    respuestaCorrecta: "C",
    respuestaIncorrecta: "La guerra comenzó en 1914"
  },
  {
    categoria: "Historia",
    pregunta: "¿Cuál fue el primer presidente de los Estados Unidos?",
    opciones: ["George Washington", "Thomas Jefferson", "Abraham Lincoln", "Barack Obama"],
    respuestaCorrecta: "A",
    respuestaIncorrecta: "El primer presidente de los Estados Unidos fue George Washington"
  },
  {
    categoria: "Historia",
    pregunta: "¿En qué año se firmó el Tratado de Versalles, que puso fin a la Primera Guerra Mundial?",
    opciones: ["1918", "1919", "1920", "1921"],
    respuestaCorrecta: "B",
    respuestaIncorrecta: "El Tratado de Versalles se firmó en 1919"
  },
  {
    categoria: "Historia",
    pregunta: "¿Quién fue la Reina de Egipto conocida por su relación con Julio César y Marco Antonio?",
    opciones: ["Nefertiti", "Cleopatra", "Reina Isabell", "Hatshepsut"],
    respuestaCorrecta: "B",
    respuestaIncorrecta: "La Reina de Egipto fue Cleopatra"
  },
  {
    categoria: "Historia",
    pregunta: "¿Cuál fue la civilización antigua que se desarrolló a lo largo del río Indo?",
    opciones: ["Mesopotamia", "Egipto", "China", "India"],
    respuestaCorrecta: "D",
    respuestaIncorrecta: "La civilización antigua fue la del río Indo (India)"
  },
  {
    categoria: "Historia",
    pregunta: "¿En qué año se produjo la Revolución Rusa?",
    opciones: ["1905", "1917", "1923", "1930"],
    respuestaCorrecta: "B",
    respuestaIncorrecta: "La Revolución Rusa se produjo en 1917"
  },
  {
    categoria: "Historia",
    pregunta: "¿Cuál fue la primera dinastía china?",
    opciones: ["Han", "Qin", "Ming", "Tang"],
    respuestaCorrecta: "B",
    respuestaIncorrecta: "La primera dinastía fue la Qin"
  },
  {
    categoria: "Historia",
    pregunta: "¿Quién fue el líder político y militar que desempeñó un papel clave en la independencia de la India?",
    opciones: ["Jawaharlal Nehru", "Mahatma Gandhi", "Subhas Chandra Bose", "Sardar Patel"],
    respuestaCorrecta: "B",
    respuestaIncorrecta: "Mahatma Gandhi fue clave en la independencia de la India"
  },
  {
    categoria: "Historia",
    pregunta: "¿Cuál fue la primera guerra mundial conocida también como?",
    opciones: ["Guerra Civil", "Guerra de Trincheras", "Guerra de Movimiento", "Gran Guerra"],
    respuestaCorrecta: "D",
    respuestaIncorrecta: "La Primera Guerra Mundial también se conoce como la Gran Guerra"
  },
  {
    categoria: "Historia",
    pregunta: "¿En qué año llegaron los europeos por primera vez al continente americano?",
    opciones: ["1492", "1500", "1520", "1540"],
    respuestaCorrecta: "A",
    respuestaIncorrecta: "Los europeos llegaron a América por primera vez en 1492"
  },


];

//filtrado por categoria
function filtrarPreguntasPorCategoria(categoria) {
  return preguntas.filter(pregunta => pregunta.categoria.toLowerCase() === categoria.toLowerCase());
}
//preguntas
function realizarPregunta(pregunta) {
  let respuestaUsuario = prompt(`${pregunta.pregunta}\n${pregunta.opciones.join('\n')}`);
  if (respuestaUsuario !== null) {
    respuestaUsuario = respuestaUsuario.toUpperCase();
  }

  if (respuestaUsuario === pregunta.respuestaCorrecta) {
    alert(`¡Correcto!`);
    return true; 
  } else {
    const mensajeIncorrecto = pregunta.respuestaIncorrecta || `Incorrecto. La respuesta correcta era ${pregunta.respuestaCorrecta}`;
    alert(mensajeIncorrecto);
    return false; 
  }
}

do {
  let puntos = 0;

  alert("-BIENVENIDO A LA TRIVIA-");
  alert("Instrucciones: Las preguntas son multiple-choice; recorda que tenes que ingresar la opcion correcta. Por ejemplo: A, B, C.")
  const buscarPorCategoria = confirm("Vamos a arrancar. Puedes medir tus conocimientos en las siguientes categorías: Animales, Ciencia, Geografía, Música, Matemáticas y Historia ");
  if (buscarPorCategoria) {
    const categoriaBuscada = prompt("Ingresa la categoría que deseas buscar: Animales, Ciencia, Geografía, Música, Matemáticas y Historia");
    const preguntasFiltradas = filtrarPreguntasPorCategoria(categoriaBuscada);
    if (preguntasFiltradas.length > 0) {
      for (let i = 0; i < preguntasFiltradas.length; i++) {
        if (realizarPregunta(preguntasFiltradas[i])) {
          puntos++;
        }
      }
    } else {
      alert(`No hay preguntas disponibles para la categoría ${categoriaBuscada}`);
    }
  } else {
    for (let i = 0; i < preguntas.length; i++) {
      if (realizarPregunta(preguntas[i])) {
        puntos++;
      }
    }
  }

  alert(`Terminaste la trivia. Tu puntuación es ${puntos}`);
  //¿jugar de nuevo? 
  const jugarDeNuevo = confirm("¿Quieres jugar de nuevo?");
  if (!jugarDeNuevo) {
    break; 
  }

} while (true);