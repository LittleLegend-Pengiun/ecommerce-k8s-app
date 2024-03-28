package main

import (
	"os"

	"authen-ms/initializers"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/gofiber/fiber/v2/middleware/logger"
)

func init() {
	initializers.LoadEnvVariables()
	// initializers.ConnectToDB()
	// initializers.SyncDatabase()
	// initializers.CreateUsers()
}

func main() {
	port := ":" + os.Getenv("PORT")

	app := fiber.New()
	app.Use(cors.New())
	logConfig(app)
	router(app)
	app.Listen(port)
}

func logConfig(app *fiber.App) {
	app.Use(logger.New())
}
