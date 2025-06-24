import express from 'express'
import { getUser, getUserCredits, updateUser, userCreate, userLogin } from '../controllers/userControllers.js'
import userAuth from '../middlewares/userAuth.js'

const userRoutes = express.Router()
userRoutes.post('/registerUser',userCreate)
userRoutes.post('/login',userLogin)
userRoutes.post('/user',userAuth,getUser)
userRoutes.post('/credits',userAuth,getUserCredits)
userRoutes.post('/update',userAuth,updateUser)

export default userRoutes