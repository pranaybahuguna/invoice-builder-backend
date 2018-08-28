export default {
  async getTotal(invoice) {
    let total = 0;
    let subTotal = 0;

    if (
      typeof invoice.qty !== "undefined" &&
      typeof invoice.rate !== "undefined"
    ) {
      total = invoice.qty * invoice.rate;
    }
    let salesTax = 0;
    if (typeof invoice.tax !== "undefined") {
      salesTax = (total * invoice.tax) / 100;
    }
    subTotal = total + salesTax;
    return { total, subTotal };
  },
  async getTemplateBody(invoice, subTotal, total, user) {
    try {
      const { id } = req.params;
      const invoice = await Invoice.findById(id).populate("client");
      if (!invoice) {
        return res.status(NOT_FOUND).send({ err: "could not find any invice" });
      }
      const { subTotal, total } = invoiceService.getTotal(invoice);
      const user = userService.getUser(req.currentUser);
      const templateBody = invoiceService.getTemplateBody(
        invoice,
        subTotal,
        total,
        user
      );
      const html = invoiceService.getInvoiceTemplate(templateBody);
      res.pdfFromHTML({
        filename: `${invoice.item}.pdf`,
        htmlContent: html
      });
    } catch (err) {
      console.error(err);
      return res.status(500).send(err);
    }
  }
};
