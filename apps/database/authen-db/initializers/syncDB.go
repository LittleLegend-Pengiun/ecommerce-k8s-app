package initializers

import (
	"authen-ms/models"
)

func SyncDatabase() {
	DB.AutoMigrate(&models.User{})
	// db.AutoMigrate(&models.Post{})
	// db.AutoMigrate(&models.Comment{})
}
