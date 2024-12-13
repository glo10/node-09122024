import request from 'supertest'
import app from '/0-exercices/corrections/ex6/src/app.mjs'
import { describe, it, expect } from 'vitest'
describe('Testing exercise 6 Web server with 3 HTML pages', () => {
  describe('Testing GET /', () => {
    it('Should have 200 status', async () => {
      const response = await request(app).get('/')
      expect(response.statusCode).toBe(200)
    })
    it('Should be a HTML content type', async () => {
      const response = await request(app).get('/')
      expect(response.headers['content-type']).toMatch('text/html')
    })
    it('Should have "Connexion"', async () => {
      const response = await request(app).get('/')
      expect(response.text).toContain('Connexion')
    })
  })

  describe('Testing GET /sign-up', () => {
    it('Should have 200 status', async () => {
      const response = await request(app).get('/sign-up')
      expect(response.statusCode).toBe(200)
    })
    it('Should have HTML content', async () => {
      const response = await request(app).get('/sign-up')
      expect(response.headers['content-type']).toMatch('text/html')
    })
    it('Should have "inscription"', async () => {
      const response = await request(app).get('/sign-up')
      expect(response.text).toMatch(/inscription/i)
    })
  })

  describe('Testing GET /news', () => {
    it('Should have 200 status', async () => {
      const response = await request(app).get('/news')
      expect(response.statusCode).toBe(200)
    })
    it('Should have HTML content type', async () => {
      const response = await request(app).get('/news')
      expect(response.headers['content-type']).toMatch('text/html')
    })
    it('Should have "actualités" inside HTML content', async () => {
      const response = await request(app).get('/news')
      expect(response.text).toMatch(/actualités/i)
    })
  })
})