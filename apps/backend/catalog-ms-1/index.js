import express from "express";
import prometheusExporter from '@tailorbrands/node-exporter-prometheus';
import { router as catalogRouter } from "./router/catalog.js";
import cors from "cors";
import initConsumer from "./rabbitMQ/consumer.js";
import initProducer from "./rabbitMQ/producer.js";

const app = express();

const options = {
    appName: "catalog-api",
    collectDefaultMetrics: true,
    ignoredRoutes: ['/metrics']
};
const promExporter = prometheusExporter(options);
app.use(promExporter.middleware);
app.use(cors());
app.get('/metrics', promExporter.metrics);
app.get("/", (req, res) => { 
    res.send("Hello from Catalog microservice!");
});

app.get("/health", (req, res) => { 
    res.send("Health check: OK!");
});

app.use("/products", catalogRouter);

initConsumer();
initProducer();

const port = 4000;
app.listen(port, () => {
    console.log(
        `Catalog-node listening at 127.0.0.1:${port}`,
    );
});

