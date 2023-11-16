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
          port { container_port = 80 }
          # env {
          #   name = "MS_URL"
          #   value = ""
          # }
          env {
            name = "CONTENT"
            value = "This is the string from k8s"
          }
        }
      }
    }
  }
}

# resource "kubernetes_horizontal_pod_autoscaler" "catalog-ms-hpa" {
#   metadata {
#     name = "catalog-ms-hpa"
#     labels = { app = "catalog-ms-hpa", tier = "backend" }
#   }

#   spec {
#     min_replicas = 1
#     max_replicas = 3

#     scale_target_ref {
#       kind = "Deployment"
#       name = "catalog-ms-deploy"
#     }

#     metric {
#       type = "Resource"
#       resource {
#         name  = "cpu"
#         target {
#           type               = "Utilization"
#           average_utilization = 10
#         }
#       }
#     }
#   }
# }

resource "kubernetes_service" "catalog-ms-service" {
  metadata {
    name = "catalog-ms-service"
    labels = { app = "catalog-ms-service", tier = "backend" }
  }
  spec {
    selector = { app = "catalog-ms-pod", tier = "backend"}
    port {
      protocol = "TCP"
      port = 80
      target_port = 80
      node_port = 30080
    }
    type = "ClusterIP"
  }
}