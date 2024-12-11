import { hash, compare, genSalt } from 'bcrypt'
genSalt(10)
.then(data => console.log('data 10', data))
genSalt(100)
.then(data => console.log('data 100', data))
const passwordPlain = 'admi'
const passwordHashed = '$2b$10$9v/1/gxMv3uYZvH95fmCauV.PXLUOkU4/czodgFogMZoBEGxlguXW'
hash(passwordPlain, 10, (err, passwordHashed) => {
  if(!err) {
    console.log('ok', passwordHashed)
  } else {
    console.error('KO', err.message)
  }
})

compare(passwordPlain, passwordHashed)
.then((result) => {
  console.log('result', result)
  if(result) {
    console.log('mots de passe identique', result)
  } else {
    throw new Error('mots de passe incorrect')
  }
})
.catch(error => console.error('erreur dans le catch', error.message))