import { describe, it, expect} from 'vitest'
import { sum } from './math.mjs'

/**
 * Permet de regrouper les tests par thématique par exemple
 */
describe('Testing Math functions', () => {
  describe('Testing sum', () => {
    /**
     * Méthodologie redaction des tests
     * Acronyme 3A ou AAA
     * Arrange
     *  Préparer le terrain par exemple avec l'initiation des variables nécessaires
     * Act
     *  Appeler la fonction
     * Assert
     *  Vérifications entre le résultat de la fonction ou modification de votre programme
     *  avec le résultat ou comportement attendu
     * 
     * Bonne pratique : on teste une seule chose à la fois
     */
    it('Should have "Addition"', () => {
      // Arrange (par exemple initialiser les données en entrée)
      const nb1 = 10
      const nb2 = 25
      // Act
      const result = sum(nb1, nb2)
      // Assert
      expect(result).toContain('Addition')
    })

    it('Should have "45" when nb1 equals 10 and nb2 equals 35', () => {
      expect(sum(10, 35)).toContain('45')
    })

    it('Should have "33" when nb1 equals 33', () => {
      expect(sum(33, 5)).toContain('33')
    })

    it('Should have "51" when nb2 equals 51', () => {
      expect(sum(3, 51)).toContain('51')
    })
  })

  // describe('Testing minus', () => {})
  // describe('Testing multiply', () => {})
  // describe('Testing divide', () => {})
})