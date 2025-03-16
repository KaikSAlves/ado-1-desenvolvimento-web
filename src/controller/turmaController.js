import * as crud from "../repository/turmaRepository.js"

import { Router } from "express"

const endpoints = Router();

endpoints.post('/turma', async (req, resp) => {
    let turma = req.body;
    let id = await crud.insert(turma);

    resp.send({id});
});

export default endpoints;