import request from 'supertest'
import app from '/0-exercices/corrections/ex7/app.js'
import { describe, it, expect } from 'vitest'
describe('Testing exercise 7 Web server get data from JSON file', () => {
  describe('Testing GET /news', () => {
    it('Should have 200 status from /news', async () => {
      const response = await request(app).get('/news')
      expect(response.statusCode).toBe(200)
    })
    it('Should be HTML content type', async () => {
      const response = await request(app).get('/news/1')
      expect(response.headers['content-type']).toMatch('text/html')
    })
    it('Should have articles', async () => {
      const response = await request(app).get('/news')
      expect(response.body).toMatchInlineSnapshot(`{}`)
    })
  })

  describe('Testing GET /news/:id', () => {
    it('Should have 200 status from /news/1', async () => {
      const response = await request(app).get('/news/1')
      expect(response.statusCode).toBe(200)
    })
    it('Should be HTML content type', async () => {
      const response = await request(app).get('/news/1')
      expect(response.headers['content-type']).toMatch('text/html')
    })
    it('Should have article data', async () => {
      const response = await request(app).get('/news/1')
      expect(response.text).toMatchInlineSnapshot(`"<!DOCTYPE html><html lang="fr"><head><title> En Iran, la police des mœurs revient en force </title><link rel="stylesheet" href="/stylesheets/style.css"></head><body><header><a href="/news">Retour page news</a></header><article class="card"><h2> En Iran, la police des mœurs revient en force </h2><img class="card-img-top" src="https://img.lemde.fr/2024/04/29/0/0/1170/1767/700/0/75/0/aabb8f5_1714404312517-iran.jpg" alt="article cover image"><div class="card-body"><p>Auteur : VAHIDONLINE/TELEGRAM</p><p><small>Date : Tue, 30 Apr 2024 10:00:07 +0200</small></p><div> Les autorités ont lancé une nouvelle opération baptisée « Plan de la lumière » contre les femmes qui refusent de se voiler, une liberté arrachée après la mort en garde à vue, en septembre 2022, de Mahsa Amini. </div><footer><a href="https://www.lemonde.fr/international/article/2024/04/30/en-iran-la-police-des-m-urs-revient-en-force_6230744_3210.html" target="_blank">Lien vers l'article</a></footer></div></article></body></html>"`)
    })
  })
})