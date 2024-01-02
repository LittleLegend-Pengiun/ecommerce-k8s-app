resource "kubernetes_deployment" "catalog-ms-1-deploy" {
  metadata {
    name = "catalog-ms-1-deploy"
    labels = { app = "catalog-ms-1", tier = "backend" }
  }
  spec {
    replicas = 1
    selector {
      match_labels = { app = "catalog-ms-1-pod", tier = "backend" }
    }
    template {
      metadata {
        name = "catalog-ms-1-pod"
        labels = { app = "catalog-ms-1-pod", tier = "backend"}
      }
      spec {
        container {
          name = "catalog-ms-1"
          image = "hoanganhleboy/catalog-ms-1"
          port { container_port = 4000 } // This port the same with port in the code.
          resources {
            requests = {
              cpu = "256m"
              memory = "128Mi"
            }
            limits = {
              cpu = "256m"
              memory = "128Mi"
            }
          }
        }
      }
    }
  }
}

resource "kubernetes_service" "catalog-ms-1-service" {
  metadata {
    name = "catalog-ms-1-service"
    labels = { app = "catalog-ms-1-service", tier = "backend" }
    annotations = {
      "prometheus.io/scrape": "true"
      "prometheus.io/port": "4000"
      "prometheus.io/path": "/metrics"
    }
  }
  spec {
    selector = { app = "catalog-ms-1-pod", tier = "backend"}
    port {
      protocol = "TCP"
      port = 4000 // port expose to outside
      target_port = 4000 // This port the same with port in the code.
    }
    type = "NodePort"
  }
}