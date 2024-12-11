import express  from 'express'
import { join } from 'path'
import { 
  renderHomePage,
  renderSignUp,
  renderNews,
  src
} from './controllers/index-controller.js'
const app = express()
// Routes static sur le dossier public/css = tous les fichiers dans public/css/* seront accessibles
app.use(express.static(join(src, 'public')))
app.get('/', renderHomePage)
app.get('/sign-up', renderSignUp)
app.get('/news', renderNews)
export default app