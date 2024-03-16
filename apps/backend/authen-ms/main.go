package main

import (
	"go-auth-server/initializers"
	"os"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/logger"
)

func init() {
	initializers.LoadEnvVariables()
	initializers.ConnectToDB()
	initializers.SyncDatabase()
}

func main() {
	port := ":" + os.Getenv("PORT")

	app := fiber.New()
	logConfig(app)
	router(app)
	app.Listen(port)
}

func logConfig(app *fiber.App) {
	app.Use(logger.New())
}
