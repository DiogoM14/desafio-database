import { Router } from 'express';
import { parseISO } from 'date-fns';

import TransactionsRepository from '../repositories/TransactionsRepository';
import CreateTransactionService from '../services/CreateTransactionService';
import DeleteTransactionService from '../services/DeleteTransactionService';
import ImportTransactionsService from '../services/ImportTransactionsService';

const transactionsRouter = Router();

transactionsRouter.get('/', async (request, response) => {
  // TODO
});

transactionsRouter.post('/', async (request, response) => {
  const { title, value, type, category, date } = request.body;

  const parsedDate = parseISO(date);

  // const createTransaction = new CreateTransactionService();

  // const transaction = await createTransaction.execute({
  //   date: parsedDate,
  //   id,
  // });

  return response.json(title, value, type, category, parsedDate);
});

transactionsRouter.delete('/:id', async (request, response) => {
  // TODO
});

transactionsRouter.post('/import', async (request, response) => {
  // TODO
});

export default transactionsRouter;
