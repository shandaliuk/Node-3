const express = require('express');

const router = express.Router();

const { validateBody } = require('../../middlewares');

const { addSchema } = require('../../schemas');

const {
  listContacts,
  getContactById,
  updateById,
  addContact,
  removeContact,
} = require('../../controllers/books');

router.get('/', listContacts);

router.get('/:contactId', getContactById);

router.post('/', validateBody(addSchema), addContact);

router.delete('/:contactId', removeContact);

router.put('/:contactId', validateBody(addSchema), updateById);

module.exports = router;
