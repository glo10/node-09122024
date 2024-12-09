export const sum = (nb1, nb2) => {
  return `Addition : ${nb1} + ${nb2} = ${nb1 + nb2}`
}

export function minus (nb1, nb2) {
  return `Soustraction : ${nb1} - ${nb2} = ${nb1 - nb2}`
}

export function multiply (nb1, nb2) {
  return `Multiplication : ${nb1} x ${nb2} = ${nb1 * nb2}`
}

export function divide (nb1, nb2) {
  return (nb2 !== 0) ? `Division : ${nb1} / ${nb2} = ${nb1 / nb2}` : 'Division par 0 impossible'
}

export function all(nb1, nb2) {
  console.log(
    `${sum(nb1, nb2)}\n`,
    `${minus(nb1, nb2)}\n`,
    `${multiply(nb1, nb2)}\n`,
    `${divide(nb1, nb2)}\n`
  )
}

export function randomNumber(max) {
  return Math.ceil(Math.random()*max)
}