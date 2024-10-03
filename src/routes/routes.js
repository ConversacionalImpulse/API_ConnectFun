import express from 'express'
const routes = express.Router()

import {home} from '../controllers/controller_api.js'
import { createMessage } from '../controllers/controller_briefing.js'

routes.get('/', home)
routes.post('/sendbriefing', createMessage) 

export default routes;