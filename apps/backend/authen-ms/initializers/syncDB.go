package initializers

import (
	"go-auth-server/models"
)

func SyncDatabase() {
	DB.AutoMigrate(&models.User{})
	// db.AutoMigrate(&models.Post{})
	// db.AutoMigrate(&models.Comment{})
}
