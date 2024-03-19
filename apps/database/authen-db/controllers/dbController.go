package controllers

import (
	"authen-db/initializers"
	"authen-db/models"
	"net/http"

	"github.com/gofiber/fiber/v2"
)

func GetAllUsers(c *fiber.Ctx) error {
	var users []models.User

	tx := initializers.DB.Find(&users)

	if tx.Error != nil {
		c.SendStatus(http.StatusInternalServerError)
		c.JSON(fiber.Map{
			"message": "Cannot fetch user from database",
		})
		return nil
	}

	c.SendStatus(http.StatusOK)
	c.JSON(fiber.Map{
		"users_list": users,
	})

	return nil
}
