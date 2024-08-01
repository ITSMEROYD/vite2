import * as React from 'react';
import express from 'express';
import { FirstStep } from '../models/tikfirststepModel'; 
/* import bcryptjs from 'bcryptjs'
import jwt from "jsonwebtoken" */

const router = express.Router();

router.post('/tik1', async (request, response) => {
    try {
      if (
        !request.body.project_name ||
        !request.body.director ||
        !request.body.producer ||
        !request.body.photographer ||
        !request.body.editor ||
        !request.body.premis
      ) {
        return response.status(400).send({
          message: 'Send all required fields',
        });
      }
      const newTik = {
        project_name: request.body.project_name,
        director: request.body.director,
        producer: request.body.producer,
        photographer: request.body.photographer,
        editor: request.body.editor,
        premis: request.body.premis,
          };
  
      const tik = await new FirstStep.create(newTik);
  
      return response.status(201).send(tik);
    } catch (error) {
      console.log(error.message);
      response.status(500).send({ message: error.message });
    }
  });

  export default router;
