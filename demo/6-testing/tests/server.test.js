import { describe, it, expect } from 'vitest'
import request from 'supertest'
import { app } from '../app.js'

describe('Testing APP', () => {
  describe('Testing GET /', () => {
    it('Should have status code equals to 200', () => {
      return request(app)
      .get('/')
      .expect(200)
    })

    it('Should have JSON content-type', () => {
      return request(app)
      .get('/')
      .expect('Content-Type', /json/)
    })

    it('Body should have a string { "message": "OK" }', () => {
      return request(app)
      .get('/')
      .then((response) => {
        console.debug('response', response.body)
        expect(response.text).toEqual('{ "message": "OK" }')
      })
    })

    it('Body should have objecty { message: "OK" }', () => {
      return request(app)
      .get('/')
      .then((response) => {
        expect(response.body).toEqual({message: "OK"})
      })
    })
  })

  describe('Testing GET /contact', () => {
    it.todo('Should have status code equals to 404', () => {
    })
  })
})