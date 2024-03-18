package main

import (
	"authen-ms/controllers"
	"authen-ms/middlewares"
	"net/http"

	"github.com/gofiber/fiber/v2"
)

func router(app *fiber.App) {
	// Apply middleware before binding route
	app.Use("/validation", middlewares.RequireAuth)

	app.Get("/", Hello)
	app.Get("/users", controllers.GetAllUsers)
	app.Get("/validation", controllers.Validate)

	app.Post("/signup", controllers.SignUp)
	app.Post("/login", controllers.Login)
}

func Hello(c *fiber.Ctx) error {
	c.SendStatus(http.StatusOK)
	c.JSON(fiber.Map{
		"message": "Hello World",
	})

	return nil
}
