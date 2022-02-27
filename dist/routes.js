"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
const AuthenticateUserController_1 = require("./controllers/AuthenticateUserController");
const CreatePlanetController_1 = require("./controllers/CreatePlanetController");
const ListPlanetsController_1 = require("./controllers/ListPlanetsController");
const ensureAuthenticate_1 = require("./middleware/ensureAuthenticate");
const corsConfig_1 = require("./corsConfig");
const PlanetController_1 = require("./controllers/PlanetController");
const GetUserController_1 = require("./controllers/GetUserController");
const cors_1 = __importDefault(require("cors"));
const DeletePlanetController_1 = require("./controllers/DeletePlanetController");
const ensureAdmin_1 = require("./middleware/ensureAdmin");
const CreateUserController_1 = require("./controllers/CreateUserController");
const CreateDescriptionController_1 = require("./controllers/CreateDescriptionController");
const routes = (0, express_1.Router)();
exports.routes = routes;
routes.get('/', (req, res) => {
    res.send('teste de rota GET');
});
routes.post('/login', new AuthenticateUserController_1.AuthenticateUserController().handle);
// routes.get("/users", new GetUsersController().handle)
routes.post("/users", new CreateUserController_1.CreateUserController().handle);
routes.get("/profile", new GetUserController_1.GetUserController().handle);
routes.post('/description', ensureAuthenticate_1.ensureAuthenticate, ensureAdmin_1.ensureAdmin, new CreateDescriptionController_1.CreateDescriptionController().handle);
routes.post('/planets', ensureAuthenticate_1.ensureAuthenticate, new CreatePlanetController_1.CreatePlanetController().handle);
routes.get('/planets', (0, cors_1.default)(corsConfig_1.corsOptions), new ListPlanetsController_1.ListPlanetsController().handle);
routes.get('/planets/:id', new PlanetController_1.PlanetController().handle);
routes.delete('/planets/:id', ensureAuthenticate_1.ensureAuthenticate, ensureAdmin_1.ensureAdmin, new DeletePlanetController_1.DeletePlanetController().handle);
