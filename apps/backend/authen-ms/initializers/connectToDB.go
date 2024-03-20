package initializers

import (
	"authen-ms/models"
	"fmt"
	"os"

	"golang.org/x/crypto/bcrypt"
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

var DB *gorm.DB

// connect to sqllite
func ConnectToDB() {
	var err error
	dsb := os.Getenv("DB")
	DB, err = gorm.Open(sqlite.Open(dsb), &gorm.Config{})
	// connect to db
	// defer db.Close()
	// db, err := gorm.Open("sqlite3", "./database.db")
	if err != nil {
		panic("Failed to connect database")
	}

	fmt.Println("Connection Opened to Database")
	// fmt.Println("Database Migrated")
	// return db
}

func CreateUsers() {
	createUser("admin", "1")
	createUser("user", "1")
}

func createUser(username string, password string) {
	hash, err := bcrypt.GenerateFromPassword([]byte(password), 10)

	if err != nil {
		panic("Cannot create user!")
	}
	// Create user
	user := models.User{Username: username, Password: string(hash)}

	result := DB.Create(&user) // pass pointer of data to Create
	if result.Error != nil {
		panic("Cannot create user!")
	}
}
