resource "kubernetes_deployment" "catalog-ms-deploy" {
  metadata {
    name = "catalog-ms-deploy"
    labels = { app = "catalog-ms", tier = "backend" }
  }
  spec {
    replicas = 1
    selector {
      match_labels = { app = "catalog-ms-pod", tier = "backend" }
    }
    template {
      metadata {
        name = "catalog-ms-pod"
        labels = { app = "catalog-ms-pod", tier = "backend"}
      }
      spec {
        container {
          name = "catalog-ms"
          image = "hoanganhleboy/catalog-ms"
          port { container_port = 8090 } // This port the same with port in the code.
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

resource "kubernetes_service" "catalog-ms-service" {
  metadata {
    name = "catalog-ms-service"
    labels = { app = "catalog-ms-service", tier = "backend" }
  }
  spec {
    selector = { app = "catalog-ms-pod", tier = "backend"}
    port {
      protocol = "TCP"
      port = 8090 // port expose to outside
      target_port = 80 // This port the same with port in the code.
    }
    type = "LoadBalancer"
  }
}