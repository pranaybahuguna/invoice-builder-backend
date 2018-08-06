import clientService from "./client.service";
import Client from "./client.model";
import HttpStatus from "http-status-codes";

export default {
  async create(req, res) {
    try {
      const { value, error } = clientService.validateCreateSchema(req.body);
      if (error && error.details) {
        return res.status(HttpStatus.BAD_REQUEST).json(error.message);
      }
      const client = await Client.create(value);
      return res.json(client);
    } catch (err) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(error.message);
    }
  },
  async findAll(req, res) {
    try {
      const clients = await Client.find();
      if (!clients) {
        return res.status(HttpStatus.NOT_FOUND).json(error.message);
      }
      return res.json(clients);
    } catch (err) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(error.message);
    }
  },
  async findOne(req, res) {
    try {
      const client = await Client.findById(req.params.id);
      if (!client) {
        return res
          .status(HttpStatus.NOT_FOUND)
          .json({ err: "client id not found" });
      }
      return res.json(client);
    } catch (err) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(error.message);
    }
  },
  async delete(req, res) {
    try {
      const client = await Client.findByIdAndRemove(req.params.id);
      if (!client) {
        return res
          .status(HttpStatus.NOT_FOUND)
          .json({ err: "client id not found" });
      }
      return res.json(client);
    } catch (err) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(error.message);
    }
  },
  async update(req, res) {
    try {
      const { value, error } = clientService.validateCreateSchema(req.body);
      if (error && error.details) {
        return res.status(HttpStatus.BAD_REQUEST).json(error.message);
      }
      const client = await Client.create(value);
      return res.json(client);
    } catch (err) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(error.message);
    }
  }
};
