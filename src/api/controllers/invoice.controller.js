import Invoice from "../models/invoice.model";
import Joi from "joi";
import HttpStatus from "http-status-codes";

const dummyInvoices = [
  { _id: "123432", item: "Amazon Product", qty: 10, date: new Date() },
  { _id: "123443", item: "Google Product", qty: 14, date: new Date() },
  { _id: "123421", item: "Ebay Product", qty: 11, date: new Date() }
];

export default {
  findAll(req, res, next) {
    const { page = 1, perPage = 10, filter } = req.query;
    const options = {
      page: parseInt(page, 10),
      limit: parseInt(perPage, 10),
      sort: {
        date: "desc"
      }
    };
    const query = {};
    if (filter) {
      query.item = {
        $regex: filter
      };
    }
    Invoice.paginate(query, options)
      .then(invoices => {
        setTimeout(() => {
          res.json(invoices);
        }, 1000);
      })
      .catch(err => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(err));
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
      return res.status(HttpStatus.BAD_REQUEST).json(error.message);
    }
    Invoice.create(value)
      .then(invoice => {
        res.json(invoice);
      })
      .catch(err => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(err));
  },
  findOne(req, res) {
    let { id } = req.params;
    Invoice.findById(id)
      .then(invoice => {
        if (!invoice) {
          return res
            .status(HttpStatus.NOT_FOUND)
            .json({ err: "invoice id not found" });
        }
        return res.json(invoice);
      })
      .catch(err => {
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(err);
      });
  },
  delete(req, res) {
    const { id } = req.params;
    Invoice.findByIdAndRemove(id)
      .then(invoice => {
        if (!invoice) {
          return res
            .status(HttpStatus.NOT_FOUND)
            .json({ err: "invoice id not found" });
        }
        return res.json(invoice);
      })
      .catch(err => {
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(err);
      });
  },
  update(req, res) {
    const { id } = req.params;
    const schema = Joi.object().keys({
      item: Joi.string().optional(),
      qty: Joi.number()
        .integer()
        .optional(),
      date: Joi.date().optional(),
      due: Joi.date().optional(),
      tax: Joi.number().optional(),
      rate: Joi.number().optional()
    });
    const { error, value } = Joi.validate(req.body, schema);
    if (error && error.details) {
      return res.status(HttpStatus.BAD_REQUEST).json(error.message);
    }
    Invoice.findOneAndUpdate({ _id: id }, value, { new: true })
      .then(invoice => {
        res.json(invoice);
      })
      .catch(err => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(err));
  }
};
