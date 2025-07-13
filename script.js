function crearMalla(malla) {
  const container = document.getElementById('malla-container');

  malla.forEach(sem => {
    const semDiv = document.createElement('div');
    semDiv.className = 'semestre';

    const title = document.createElement('h2');
    title.textContent = sem.semestre;
    semDiv.appendChild(title);

    sem.ramos.forEach(ramo => {
      const ramoDiv = document.createElement('div');
      ramoDiv.className = 'ramo';
      ramoDiv.textContent = ramo.nombre;

      ramoDiv.addEventListener('click', () => {
        alert(`Prerrequisitos de "${ramo.nombre}":\n${ramo.requisitos.length ? ramo.requisitos.join(', ') : 'Ninguno'}`);
      });

      semDiv.appendChild(ramoDiv);
    });

    container.appendChild(semDiv);
  });
}

crearMalla(malla);
