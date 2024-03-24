package main

import (
	"net/http"

	"authen-db/controllers"

	"github.com/gofiber/fiber/v2"
)

func router(app *fiber.App) {
	app.Get("/", Hello)
	app.Get("/users", controllers.GetAllUsers)
	app.Get("/user", controllers.GetUserByUsername)

	app.Post("/users", controllers.AddUsers)
}

func Hello(c *fiber.Ctx) error {
	c.SendStatus(http.StatusOK)
	c.JSON(fiber.Map{
		"message": "Hello World",
	})

	return nil
}
