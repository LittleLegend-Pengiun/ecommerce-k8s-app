// package com.service.order;

public class OrderMessage {
    private String message;
    
    public OrderMessage(String mess) {
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