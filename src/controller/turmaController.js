import * as crud from "../repository/turmaRepository.js"

import { Router } from "express"

const endpoints = Router();

endpoints.post('/turma', async (req, resp) => {
    let turma = req.body;
    let id = await crud.insert(turma);

    resp.send({id});
});

endpoints.get('/turma', async (req, resp) => {
    let turmas = await crud.findAll();

    resp.send(turmas);
});

endpoints.get('/turma/busca/ano', async (req, resp) => {
    let ano = req.query.ano;
    let turmas = await crud.findByYear(ano);

    resp.send(turmas);
});

endpoints.put('/turma/:id', async (req, resp) =>{
    let id = req.params.id;
    let turma = req.body;

    let affectedRows = await crud.update(id, turma);

    resp.send({affectedRows});
});

endpoints.delete('/turma/:id', async (req, resp) => {
    let id = req.params.id;
    
    let affectedRows = await crud.deleteById(id);
    resp.send({affectedRows});
});

export default endpoints;