# Clases en JavaScript

Este repositorio propone una práctica guiada para trabajar la sintaxis de clases en JavaScript a partir de tests. La idea es ir implementando el código necesario hasta que cada prueba pase, sin tocar el esquema de los ejercicios.

## Introducción a las clases en JavaScript

Las clases en JavaScript son una forma de definir objetos con estado y comportamiento de manera más clara y estructurada. En estos ejercicios se trabajan los conceptos básicos que suelen aparecer en código real:

- `constructor`: inicializa cada instancia y permite recibir parámetros de entrada.
- Parámetros por defecto: facilitan que una clase tenga valores iniciales cuando no se pasa ningún argumento.
- Métodos de instancia: describen el comportamiento de cada objeto creado con la clase.
- Métodos estáticos: pertenecen a la propia clase y no a una instancia concreta.
- Herencia: permite crear una clase nueva a partir de otra existente y reutilizar su comportamiento.
- Getters y setters: exponen propiedades calculadas o controladas sin cambiar la forma de uso desde fuera.

Los tests de este repositorio recorren precisamente esa progresión: primero una clase `Animal` con constructor, después valores por defecto, luego métodos de instancia y estáticos, más tarde herencia con `Dog`, y finalmente acceso a propiedades mediante getter y setter.

## Guía de trabajo

### 1. Clonar el repositorio

Clona el repositorio y entra en la carpeta del ejercicio:

```bash
git clone https://github.com/factoriaf5-cpn2/basics-js.git
cd basics-js
```

### 2. Resolver los ejercicios

Trabaja test a test. La recomendación es resolver primero el test más simple, ejecutarlo, y seguir con el siguiente solo cuando el anterior esté verde.

Ejecuta los tests con:

```bash
node --test class.test.js
```

Ten en cuenta estas directrices:

- No modifiques los tests para hacerlos pasar.
- Mantén los cambios pequeños y centrados en un único test cada vez.
- Si un test exige una clase, método o getter/setter concreto, implementa solo lo necesario para satisfacerlo.

### 3. Hacer commits atómicos

Después de resolver cada test, crea un commit atómico. Eso significa que cada commit debe incluir solo el cambio necesario para dejar un test en verde, sin mezclar varios ejercicios distintos.

Usa mensajes siguiendo Conventional Commits. Algunos ejemplos adecuados son:

```bash
git add .
git commit -m "feat: add Animal constructor"
git commit -m "feat: add default name value"
git commit -m "feat: add instance sayName method"
git commit -m "feat: add static create method"
git commit -m "feat: add Dog inheritance"
git commit -m "feat: add name getter and setter"
```

La idea es que el historial refleje el progreso real del aprendizaje y permita revisar cada paso con facilidad.
