resource "kubernetes_deployment" "catalog-fe-deploy" {
  metadata {
    name = "catalog-fe-deploy"
    labels = { app = "catalog-fe", tier = "frontend" }
  }
  spec {
    replicas = 1
    selector {
      match_labels = { app = "catalog-fe-pod", tier = "frontend" }
    }
    template {
      metadata {
        name = "catalog-fe-pod"
        labels = { app = "catalog-fe-pod", tier = "frontend"}
      }
      spec {
        container {
          name = "catalog-fe"
          image = "hoanganhleboy/catalog-fe:latest"
          port { container_port = 80 }
          # env {
          #   name = "MS_URL"
          #   value = ""
          # }
          env {
            name = "CONTENT"
            value = "This is the string from k8s"
          }
          image_pull_policy = "Always"
        }
      }
    }
  }
}

resource "kubernetes_service" "catalog-fe-service" {
  metadata {
    name = "catalog-fe-service"
    labels = { app = "catalog-fe-service", tier = "frontend" }
  }
  spec {
    selector = { app = "catalog-fe-pod", tier = "frontend"}
    port {
      protocol = "TCP"
      port = 80
      target_port = 80
      node_port = 30090
    }
    type = "NodePort"
  }
}