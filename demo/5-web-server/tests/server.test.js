import { describe, it } from 'vitest'
import request from 'supertest'
import { app } from '../app.js'

describe('Testing APP', () => {
  describe('Testing GET /', () => {
    it('Should have status code equals to 200', () => {
      return request(app)
      .get('/')
      .expect(200)
    })

    // it('Should have JSON content-type', () => {
      
    // })

    // it('Should have OK', () => {
      
    // })
  })

  // describe('Testing GET /contact', () => {
    
  // })
})