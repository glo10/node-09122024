import { describe, it, expect } from 'vitest'
import request from 'supertest'
import app from '/0-exercices/corrections/ex4/app.mjs'
describe('Testing exercise 4 Web Server witj JSON', () => {
  describe('Testing GET /', () => {
    it('Should have status 200', () => {
      return request(app)
        .get('/')
        .expect(200)
    })
    it('Should have status json content', () => {
      return request(app)
        .get('/')
        .expect('Content-Type', 'application/json; charset=utf-8')
    })
    it('Should have {"message": "success"}', () => {
      return request(app)
        .get('/')
        .then(response => {
          expect(response.text).toBe('{"message":"success"}')
        })
    })
  })

  describe('Testing GET /contact', () => {
    it('Should have status 404', () => {
      return request(app)
        .get('/contact')
        .expect(404)
    })
    it('Should have status json content', () => {
      return request(app)
        .get('/contact')
        .expect('Content-Type', 'application/json; charset=utf-8')
    })
    it('Should have {"message": "not found"}', () => {
      return request(app)
        .get('/contact')
        .then(response => {
          expect(response.text).toBe('{"message":"not found"}')
        })
    })
  })
})