import test from 'node:test'
import assert from 'node:assert/strict'

test('class-1: has a constructor for initialization', () => {
  // Crea una clase Animal
  // Añade un constructor que reciba un parámetro, el nombre.
  // Asigna this.name al nombre pasado como parámetro

  const animal = new Animal()
  const dog = new Animal('Dog')

  assert.equal(animal.name, undefined)
  assert.equal(dog.name, 'Dog')
})

test('class-2: constructor can have default param values', () => {
  // Crea una clase Animal con un constructor
  // Haz que la clase tenga un valor por defecto (utilizando parámetros por defecto) para el nombre: 'Honey Badger'

  const animal = new Animal()
  const dog = new Animal('Dog')

  assert.equal(animal.name, 'Honey Badger')
  assert.equal(dog.name, 'Dog')
})

test('class-3: can have instance methods', () => {
  // Crea una clase Animal, pasa el nombre al constructor y añade una función sayName a la definición de la clase

  const animal = new Animal()

  assert.notEqual(animal.sayName, undefined)
  assert.equal(Animal.sayName, undefined)
  assert.equal(animal.sayName(), 'My name is: Honey Badger')
})

test('class-4: can have static methods', () => {
  // Crea una clase Animal, pasa el nombre al constructor,
  // y añade un método estático create que reciba un nombre y devuelva una instancia

  const animal = new Animal()

  assert.equal(animal.create, undefined)
  assert.notEqual(Animal.create, undefined)
})

test('class-5: can extend another class', () => {
  // Crea una clase Animal
  // Crea una clase Dog que extienda Animal
  // Añade el método sayName a Dog

  const dog = new Dog('Fido')

  assert.equal(dog instanceof Dog, true)
  assert.equal(dog instanceof Animal, true)
  assert.equal(Animal.prototype.sayName, undefined)
  assert.notEqual(Dog.prototype.sayName, undefined)
})

test('class-6: can use property setters and getters', () => {
  // Crea una clase Animal (no pases el nombre al constructor)
  // Añade un setter para la propiedad name
  // Añade un getter para la propiedad name

  const animal = new Animal()
  animal.name = 'Dog'
  assert.equal(animal.name, 'Dog type of animal')
  animal.name = 'Cat'
  assert.equal(animal.name, 'Cat type of animal')
})


