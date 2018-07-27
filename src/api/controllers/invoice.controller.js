import Invoice from "../models/invoice.model";
import Joi from "joi";

const invoices = [
  { _id: "123432", item: "Amazon Product", qty: 10, date: new Date() },
  { _id: "123443", item: "Google Product", qty: 14, date: new Date() },
  { _id: "123421", item: "Ebay Product", qty: 11, date: new Date() }
];

export default {
  findAll(req, res, next) {
    res.json(invoices);
  },
  create(req, res) {
    const schema = Joi.object().keys({
      item: Joi.string().required(),
      qty: Joi.number()
        .integer()
        .required(),
      date: Joi.date().required(),
      due: Joi.date().required(),
      tax: Joi.number().optional(),
      rate: Joi.number().optional()
    });
    const { error, value } = Joi.validate(req.body, schema);
    if (error && error.details) {
      return res.status(400).json(error.message);
    }
    Invoice.create(value)
      .then(invoice => {
        res.json(invoice);
      })
      .catch(err => res.status(500).json(err));
  }
};
