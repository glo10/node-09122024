import { describe, it, expect } from 'vitest'
import request from 'supertest'
import app  from '/0-exercices/corrections/ex10/app.js'
describe('Testing exercise 10', () => {
  describe('Testing GET /users', () => {
    it('Should have an email of one user', () => {
      return request(app)
      .get('/users')
      .expect('Content-Type', /html/)
      .expect((res) => {
        expect(res.text).toMatch(/Clementina DuBuque/)
      })
    })
  })

  describe('Testing GET /users/:id', () => {
    it('Should have details info of the user with the ID', () => {
      return request(app)
      .get('/users/1')
      .expect('Content-Type', /html/)
      .expect((res) => {
        expect(res.text).toContain('Romaguera-Crona')
      })
    })
  })
})