package initializers

import (
	"fmt"
	"os"

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
