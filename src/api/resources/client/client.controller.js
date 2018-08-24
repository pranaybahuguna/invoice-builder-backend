import clientService from "./client.service";
import Client from "./client.model";
import HttpStatus from "http-status-codes";

export default {
  create(req, res) {
    const { value, error } = clientService.validateCreateSchema(req.body);
    if (error && error.details) {
      return res.status(HttpStatus.BAD_REQUEST).json(error.message);
    }
    Client.create(value)
      .then(client => {
        res.json(client);
      })
      .catch(err => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(err));
  },
  findAll(req, res) {
    Client.find()
      .then(clients => {
        res.json(clients);
      })
      .catch(err => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(err));
  },
  findOne(req, res) {
    let { id } = req.params;
    Client.findById(id)
      .then(client => {
        if (!client) {
          return res
            .status(HttpStatus.NOT_FOUND)
            .json({ err: "client id not found" });
        }
        return res.json(client);
      })
      .catch(err => {
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(err);
      });
  },
  delete(req, res) {
    const { id } = req.params;
    Client.findByIdAndRemove(id)
      .then(client => {
        if (!client) {
          return res
            .status(HttpStatus.NOT_FOUND)
            .json({ err: "client id not found" });
        }
        return res.json(client);
      })
      .catch(err => {
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(err);
      });
  },
  update(req, res) {
    const { id } = req.params;
    const { value, error } = clientService.validateUpdateSchema(req.body);
    if (error && error.details) {
      return res.status(HttpStatus.BAD_REQUEST).json(error.message);
    }
    Client.findOneAndUpdate({ _id: id }, value, { new: true })
      .then(client => {
        if (!client) {
          return res
            .status(HttpStatus.NOT_FOUND)
            .json({ err: "Update Unsuccessful" });
        }
        res.json(client);
      })
      .catch(err => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(err));
  }
};
