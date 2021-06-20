const print = console.log
const beasts = ['Centaur', 'Godzilla', 'Mosura', 'Minotaur', 'Hydra', 'Nessie']

print('indexOf = ', beasts.indexOf('Godzilla'))

print('findIndex = ', beasts.findIndex((item) => {
  return item === 'Godzilla'
}))

print('find = ', beasts.find((item) => {
  return item === 'Godzilla'
}))

print('includes = ', beasts.includes('Godzilla'))

// LINEAR SEARCH

// BINARY SEARCH

// DEPTH FIRST SEARCH

// BREADTH FIRST SEARCH