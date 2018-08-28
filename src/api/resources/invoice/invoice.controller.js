import Invoice from "./invoice.model";
import Joi from "joi";
import HttpStatus from "http-status-codes";

const dummyInvoices = [
  { _id: "123432", item: "Amazon Product", qty: 10, date: new Date() },
  { _id: "123443", item: "Google Product", qty: 14, date: new Date() },
  { _id: "123421", item: "Ebay Product", qty: 11, date: new Date() }
];

export default {
  findAll(req, res, next) {
    const { page = 1, perPage = 10, filter, sortField, sortDir } = req.query;
    const options = {
      page: parseInt(page, 10),
      limit: parseInt(perPage, 10),
      populate: "client"
    };
    const query = {};
    if (filter) {
      query.item = {
        $regex: filter
      };
    }
    if (sortField && sortDir) {
      options.sort = {
        [sortField]: sortDir
      };
    }

    Invoice.paginate(query, options)
      .then(invoices => {
        res.json(invoices);
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
      client: Joi.string().required(),
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
      .populate("client")
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
      client: Joi.string().optional(),
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
  },
  async download(req, res) {
    const { id } = req.params;
    const invoice = await Invoice.findById(id).populate("client");
    const templateBody = `<div class="container">
                <div class="row">
                    <div class="col-xs-6">
                    </div>
                    <div class="col-xs-6 text-right">
                        <h1>INVOICE</h1>
                        <h1>
                            <small>${invoice.item}</small>
                        </h1>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-5">
                        <div class="panel panel-default">
                            <div class="panel-heading">
                                <h4>From:
                                    <a>Jane</a>
                                </h4>
                            </div>
                            <div class="panel-body">
                                <p>
                                    jane_doe@gmail.com
                                    <br>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-5 col-xs-offset-2 text-right">
                        <div class="panel panel-default">
                            <div class="panel-heading">
                                <h4>To :
                                    <a>Malik</a>
                                </h4>
                            </div>
                            <div class="panel-body">
                                <p>
                                    malik@gmail.com
                                    <br>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>
                                <h4>Qty</h4>
                            </th>
                            <th>
                                <h4>Rate</h4>
                            </th>
                            <th>
                                <h4>Tax</h4>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>10</td>
                            <td>10</td>
                            <td>
                                1
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div class="row text-right">
                    <div class="col-xs-2 col-xs-offset-8">
                        <p>
                            <strong>
                                Sub Total :
                                <br> TAX :
                                <br> Total :
                                <br>
                            </strong>
                        </p>
                    </div>
                    <div class="col-xs-2">
                        <strong>
                            $100
                            <br> $200
                            <br> $300
                            <br>
                        </strong>
                    </div>
                </div>
            </div>`;
    return res.pdfFromHTML({
      filename: "hello-mean-stack.pdf",
      htmlContent: templateBody
    });
  }
};
