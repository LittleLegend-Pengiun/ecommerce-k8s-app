package middlewares

import (
	"authen-ms/initializers"
	"authen-ms/models"
	"fmt"
	"os"
	"time"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/log"
	"github.com/golang-jwt/jwt/v5"
)

func RequireAuth(c *fiber.Ctx) error {
	// Get the cookie of req
	tokenString := c.Cookies("Authorization")
	if tokenString == "" {
		return fiber.ErrUnauthorized
	}

	// Decode/validate it
	token, err := jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) {
		// Don't forget to validate the alg is what you expect:
		if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
			return nil, fmt.Errorf("unexpected signing method: %v", token.Header["alg"])
		}

		// hmacSampleSecret is a []byte containing your secret, e.g. []byte("my_secret_key")
		hmacSampleSecret := []byte(os.Getenv("SECRET"))
		return hmacSampleSecret, nil
	})

	if err != nil {
		log.Error(err)
		return fiber.ErrInternalServerError
	}

	if claims, ok := token.Claims.(jwt.MapClaims); ok {
		// Check the exp compare to time.unix
		if float64(time.Now().Unix()) > claims["exp"].(float64) {
			return fiber.ErrUnauthorized
		}

		// Find the user with token sub
		var user models.User
		initializers.DB.First(&user, claims["sub"])

		if user.ID == 0 {
			return fiber.ErrUnauthorized
		}

		// Attach to req
		c.Locals("user", user)

		// Continue
		return c.Next()

	} else {
		return fiber.ErrUnauthorized
	}
}
