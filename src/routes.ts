import { Router } from 'express';
import { AuthenticateUserController } from './controllers/AuthenticateUserController';
import { CreatePlanetController } from './controllers/CreatePlanetController';
import { GetUsersController } from './controllers/GetUsersController';
import { ListPlanetsController } from './controllers/ListPlanetsController';
import { ensureAuthenticate } from './middleware/ensureAuthenticate';
import { corsOptions } from './corsConfig';
import { PlanetController } from './controllers/PlanetController';
import { GetUserController } from './controllers/GetUserController';

import cors from 'cors';
import { DeletePlanetController } from './controllers/DeletePlanetController';
import { ensureAdmin } from './middleware/ensureAdmin';
import { CreateUserController } from './controllers/CreateUserController';
import { CreateDescriptionController } from './controllers/CreateDescriptionController';

const routes = Router();

routes.get('/', (req, res) => {
    res.send('teste de rota GET')
});

routes.post('/login', new AuthenticateUserController().handle)

// routes.get("/users", new GetUsersController().handle)
routes.post("/users", new CreateUserController().handle)
routes.get("/profile", new GetUserController().handle)

routes.post('/description', ensureAuthenticate, ensureAdmin ,new CreateDescriptionController().handle)

routes.post('/planets', ensureAuthenticate, new CreatePlanetController().handle)
routes.get('/planets', cors(corsOptions), new ListPlanetsController().handle)
routes.get('/planets/:id', new PlanetController().handle)
routes.delete('/planets/:id', ensureAuthenticate, ensureAdmin ,new DeletePlanetController().handle)

export { routes };