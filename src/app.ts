import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
const app: Application = express();
import httpStatus from "http-status";
import globalErrorHandler from "./app/middleware/globalErrorHandler";
import router from "./app/routes";
const SSLCommerzPayment = require("sslcommerz-lts");
import configuration from "./configuration/index";
import { v4 as uuidv4 } from "uuid";
import { Payment } from "./app/modules/payment/payment.model";

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", router);

app.get("/", (req, res) => {
  res.send("server for optometrist is ready to perform...");
});

app.post("/api/v1/payment/create-payment", async (req, res) => {
  const payment = req.body;

  const generateUniqueId = uuidv4();

  const store_id = configuration.store_id;
  const store_passwd = configuration.store_password;
  const is_live = false;

  if (!payment.tran_id) {
    payment.tran_id = generateUniqueId;
  }

  if (
    !payment.tran_id ||
    !payment.total_amount ||
    !payment.currency ||
    !payment.cus_name ||
    !payment.cus_email ||
    !payment.cus_add1 ||
    !payment.cus_city ||
    !payment.cus_postcode ||
    !payment.cus_country ||
    !payment.cus_phone
  ) {
    return res.send({ error: "please provide all informations....." });
  }

  await Payment.create(payment);

  const data = {
    total_amount: payment.total_amount,
    currency: "BDT",
    tran_id: generateUniqueId,
    success_url: `${configuration.server_side_link}/api/v1/payment/success?transectionId=${generateUniqueId}`,
    fail_url: `${configuration.server_side_link}/api/v1/payment/fail?transectionId=${generateUniqueId}`,
    cancel_url: "http://localhost:5000/api/v1/payment/cancel",
    ipn_url: "http://localhost:3030/ipn",
    shipping_method: "Courier",
    product_name: "Computer.",
    product_category: "Electronic",
    product_profile: "general",
    cus_name: payment.cus_name,
    cus_email: payment.cus_email,
    cus_add1: payment.cus_add1,
    cus_add2: "Dhaka",
    cus_city: payment.cus_city,
    cus_state: "Dhaka",
    cus_postcode: payment.cus_postcode,
    cus_country: payment.cus_country,
    cus_phone: payment.cus_phone,
    cus_fax: "01711111111",
    ship_name: "Customer Name",
    ship_add1: "Dhaka",
    ship_add2: "Dhaka",
    ship_city: "Dhaka",
    ship_state: "Dhaka",
    ship_postcode: 1000,
    ship_country: "Bangladesh",
  };

  // console.log(data);

  const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live);
  sslcz.init(data).then((apiResponse: { GatewayPageURL: any }) => {
    // Redirect the user to payment gateway
    let GatewayPageURL = apiResponse.GatewayPageURL;
    res.send({ url: GatewayPageURL });
    // console.log("Redirecting to: ", GatewayPageURL);
  });
});

app.post("/api/v1/payment/success", async (req, res) => {
  const { transectionId } = req.query;

  const result = await Payment.updateOne(
    { tran_id: transectionId },
    { isPaid: true },
    { new: true }
  );

  if (result.modifiedCount > 0) {
    res.redirect(
      `${configuration.client_side_link}/payment/success?transectionId=${transectionId}`
    );
  }
});

app.get("/api/v1/payment/:id", async (req, res) => {
  const { id } = req.params;
  const result = await Payment.findOne({ tran_id: id });
  res.send(result);
});

app.post("/api/v1/payment/fail", async (req, res) => {
  const { transectionId } = req.query;

  const result = await Payment.deleteOne({ tran_id: transectionId });

  if (result.deletedCount) {
    res.redirect(`${configuration.client_side_link}/payment/fail`);
    console.log("deleted");
  }

  console.log("fail");
});
app.post("/api/v1/payment/cancel", (req, res) => {
  console.log("cancel");
});

// global errorHandler
app.use(globalErrorHandler);

// not found route
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: "API not found",
    errorMessages: [
      {
        path: req.originalUrl,
        message: "API not found",
      },
    ],
  });
  next();
});

export default app;
