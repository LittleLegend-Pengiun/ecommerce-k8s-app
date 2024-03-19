package com.service.catalog;

public class CatalogMessage {
    private String message;
    
    public CatalogMessage(String mess) {
        this.message = mess;
    }

    // Getter

    /**
     * @return String return the message
     */
    public String getMessage() {
        return message;
    }

    /**
     * @param message the message to set
     */
    public void setMessage(String message) {
        this.message = message;
    }

}