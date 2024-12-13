import request from 'supertest'
import app   from '/0-exercices/corrections/ex7/app.js'
import { describe, it, expect, beforeEach, afterEach, beforeAll } from 'vitest'
describe('Testing exercise 8 middleware checking ID parameter', () => {
  let response
  describe('Testing GET /news/:param_id_not_numeric', () => {
    beforeAll(async () => {
      response = await request(app).get('/news/:not_numeric')
    })
    it('Should have 404 status from ', async () => {
      expect(response.statusCode).toBe(404)
    })
    it('Should have error message not a numeric', async () => {
      expect(response.text).toContain('not_numeric doit être numérique')
    })
  })

  describe('Testing GET /news/:id_not_exists', () => {
    beforeAll(async () => {
      response = await request(app).get('/news/1000')
    })

    it('Should have 404 status from /news/1000', async () => {
      expect(response.statusCode).toBe(404)
    })
    it('Should have error message not found article', async () => {
      expect(response.text).toContain("Aucun article avec l'ID 1000")
    })
  })
})