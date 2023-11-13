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
          image = "hoanganhleboy/catalog-fe"
          port { container_port = 3090 }
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

# resource "kubernetes_horizontal_pod_autoscaler" "catalog-fe-hpa" {
#   metadata {
#     name = "catalog-fe-hpa"
#     labels = { app = "catalog-fe-hpa", tier = "frontend" }
#   }

#   spec {
#     min_replicas = 1
#     max_replicas = 3

#     scale_target_ref {
#       kind = "Deployment"
#       name = "catalog-fe-deploy"
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