const express = require('express');

const router = express.Router();

const { validateBody, isValidId } = require('../../middlewares');

const { addSchema } = require('../../models/contacts');

const {
  getAll,
  getById,
  updateById,
  add,
  deleteById,
} = require('../../controllers/books');

router.get('/', getAll);

router.get('/:contactId', isValidId, getById);

router.post('/', validateBody(addSchema), add);

router.delete('/:contactId', isValidId, deleteById);

router.put('/:contactId', isValidId, validateBody(addSchema), updateById);

module.exports = router;
