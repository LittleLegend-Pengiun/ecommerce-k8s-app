package controllers

import (
	"authen-ms/initializers"
	"authen-ms/models"
	"net/http"
	"os"
	"time"

	"github.com/gofiber/fiber/v2"
	"github.com/golang-jwt/jwt/v5"
	"golang.org/x/crypto/bcrypt"
)

type bodyStruct struct {
	Username string `json:"username"`
	Password string `json:"password"`
}

func SignUp(c *fiber.Ctx) error {
	// Get the username and password of req body
	body := new(bodyStruct)

	if err := c.BodyParser(body); err != nil {
		c.SendStatus(http.StatusBadRequest)
		c.JSON(fiber.Map{
			"error": "Failed to read body",
		})
		return nil
	}

	// Hash the password
	hash, err := bcrypt.GenerateFromPassword([]byte(body.Password), 10)

	if err != nil {
		c.SendStatus(http.StatusBadRequest)
		c.JSON(fiber.Map{
			"error": "Failed to hash password",
		})
		return nil
	}

	// Create user
	user := models.User{Username: body.Username, Password: string(hash)}

	result := initializers.DB.Create(&user) // pass pointer of data to Create
	if result.Error != nil {
		c.SendStatus(http.StatusBadRequest)
		c.JSON(fiber.Map{
			"error": "Failed to create user",
		})
		return nil
	}
	// Response

	c.SendStatus(http.StatusOK)
	c.JSON(fiber.Map{
		"message": "SignUp",
	})

	return nil
}

func Login(c *fiber.Ctx) error {
	// Get the username/pass from req body
	body := new(bodyStruct)

	if err := c.BodyParser(body); err != nil {
		c.SendStatus(http.StatusBadRequest)
		c.JSON(fiber.Map{
			"error": "Failed to read body",
		})
		return nil
	}

	// Look up requested user
	var user models.User
	initializers.DB.First(&user, "username = ?", body.Username)

	if user.ID == 0 {
		c.SendStatus(http.StatusBadRequest)
		c.JSON(fiber.Map{
			"error": "Invalid username or password",
		})
		return nil
	}

	// Compare sent in pass with saved user pass hash
	err := bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(body.Password))

	if err != nil {
		c.SendStatus(http.StatusBadRequest)
		c.JSON(fiber.Map{
			"error": "Invalid username or password",
		})
		return nil
	}

	// Generate a jwt token
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
		"sub":      user.ID,
		"username": user.Username,
		"exp":      time.Now().Add(time.Hour * 24 * 30).Unix(),
	})

	// Sign and get the complete encoded token as a string using the secret
	secret := os.Getenv("SECRET")
	tokenString, err := token.SignedString([]byte(secret))

	if err != nil {

		c.SendStatus(http.StatusBadRequest)
		c.JSON(fiber.Map{
			"error": "Failed to create token",
		})
		// log.Fatal("Secret is::", os.Getenv("SECRET"))
		return nil
	}

	// Send it back as cookies
	cookie := fiber.Cookie{
		Name:     "Authorization",
		Value:    tokenString,
		Expires:  time.Now().Add(24 * time.Hour),
		Path:     "",
		Domain:   "",
		Secure:   false,
		HTTPOnly: true,
		SameSite: "lax",
	}

	// Set cookie
	c.Cookie(&cookie)

	// Send it back as request
	c.SendStatus(http.StatusOK)
	c.JSON(fiber.Map{
		"token": tokenString,
	})

	return nil
}

func Validate(c *fiber.Ctx) error {
	user := c.Locals("user")

	c.SendStatus(http.StatusOK)
	c.JSON(fiber.Map{
		"user_info": user,
	})

	return nil
}
