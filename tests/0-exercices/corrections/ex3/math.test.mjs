import {describe, it, expect } from 'vitest'
import { minus, sum, multiply, divide } from '/0-exercices/corrections/ex3/math.mjs'

describe('Testing math.mjs functions', () => {
  describe('Testing minus', () => {
    it.each([
      /**
       * expected, first number (nb1) and second number (nb2)
       * operation : nb1 - nb2
       */ 
      [5, 10, 5],
      [0, 2, 2],
      [4, 10, 6],
      [-4, -10, -6]
    ])('Should be %s when nb1 = %s and nb2 = %s', (expected, nb1, nb2) =>{
      // Act
      const result = minus(nb1, nb2)
      // Assert
      expect(result).toEqual(`Soustraction : ${nb1} - ${nb2} = ${expected}`)
    })
    it('should not be 4 when 12-9  ', () => {
      expect( minus(12, 9)).not.toBe(4)
    })
  })

  describe('Testing sum', () => {
    it.each([
      /**
       * expected, first number (nb1) and second number (nb2)
       * operation : nb1 + nb2
       */ 
      [15, 10, 5],
      [4, 2, 2],
      [16, 10, 6],
      [-16, -10, -6]
    ])('Should be %s when nb1 = %s and nb2 = %s', (expected, nb1, nb2) =>{
      expect(sum(nb1, nb2)).toEqual(`Addition : ${nb1} + ${nb2} = ${expected}`)
    })
    it('should not be 20 when 12+9  ', () => {
      expect(sum(12, 9)).not.toBe(20)
    })
  })

  describe('Testing multiply', () => {
    it.each([
      /**
       * expected, first number (nb1) and second number (nb2)
       * operation : nb1 * nb2
       */ 
      [50, 10, 5],
      [4, 2, 2],
      [60, 10, 6],
      [60, -10, -6]
    ])('Should be %s when nb1 = %s and nb2 = %s', (expected, nb1, nb2) =>{
      expect(multiply(nb1, nb2)).toEqual(`Multiplication : ${nb1} x ${nb2} = ${expected}`)
    })
    it('should not be 120 when 12*9  ', () => {
      expect(multiply(12, 9)).not.toBe(120)
    })
  })

  describe('Testing multiply', () => {
    it.each([
      /**
       * expected, first number (nb1) and second number (nb2)
       * operation : nb1 / nb2
       */ 
      [2, 10, 5],
      [1, 2, 2],
      [2.5, 10, 4],
      [2.5, -10, -4]
    ])('Should be %s when nb1 = %s and nb2 = %s', (expected, nb1, nb2) =>{
      expect(divide(nb1, nb2)).toEqual(`Division : ${nb1} / ${nb2} = ${expected}`)
    })
    it('should have divide by zero impossible', () => {
      expect(divide(12, 0)).toBe('Division par 0 impossible')
    })
  })
})