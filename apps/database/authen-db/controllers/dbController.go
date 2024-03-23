package controllers

import (
	"net/http"

	"authen-db/initializers"
	"authen-db/models"

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

func GetUserByUsername(c *fiber.Ctx) error {
	username := c.Query("username", "")
	var user models.User
	initializers.DB.First(&user, "username = ?", username)

	if user.ID == 0 {
		c.SendStatus(http.StatusBadRequest)
		c.JSON(fiber.Map{
			"error": "Invalid username or password",
		})
		return nil
	}

	c.SendStatus(http.StatusOK)
	c.JSON(fiber.Map{
		"user_info": user,
	})

	return nil
}

func AddUsers(c *fiber.Ctx) error {
	type userStruct struct {
		Username string `json:"username"`
		Password string `json:"password"`
	}

	type bodyStruct struct {
		Users_list []userStruct
	}

	body := bodyStruct{}
	if err := c.BodyParser(&body); err != nil {
		c.SendStatus(http.StatusBadRequest)
		c.JSON(fiber.Map{
			"error": "Failed to read body",
		})
		return nil
	}

	for _, user := range body.Users_list {
		newUser := models.User{Username: user.Username, Password: user.Password}
		result := initializers.DB.Create(&newUser) // pass pointer of data to Create
		if result.Error != nil {
			c.SendStatus(http.StatusBadRequest)
			c.JSON(fiber.Map{
				"error": "Failed to create user",
			})
			return nil
		}
	}

	c.SendStatus(http.StatusOK)
	c.JSON(fiber.Map{
		"message": "User created!",
	})

	return nil
}
