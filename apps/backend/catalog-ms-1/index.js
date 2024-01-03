import express from "express";
import prometheusExporter from '@tailorbrands/node-exporter-prometheus';

const app = express();

const options = {
    appName: "catalog-api",
    collectDefaultMetrics: true,
    ignoredRoutes: ['/metrics']
};
const promExporter = prometheusExporter(options);
app.use(promExporter.middleware);
app.get('/metrics', promExporter.metrics);
app.get("/", (req, res) => { 
    res.send("OK!");
});

app.get("/health", (req, res) => { 
    res.send("OK!");
});

const port = 4000;
app.listen(port, () => {
    console.log(
        `Catalog-node listening at 127.0.0.1:${port}`,
    );
});

