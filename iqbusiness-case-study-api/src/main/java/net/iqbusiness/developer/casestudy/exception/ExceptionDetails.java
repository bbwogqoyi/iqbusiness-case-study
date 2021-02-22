package net.iqbusiness.developer.casestudy.exception;

import java.util.Date;

public class ExceptionDetails {
  private Date timestamp;
  private String message;
  private String description;

  public ExceptionDetails(Date timestamp, String message, String description) {
    super();
    this.timestamp = timestamp;
    this.message = message;
    this.description = description;
  }

  public Date getTimestamp() {
    return timestamp;
  }

  public String getMessage() {
    return message;
  }

  public String getDescription() {
    return description;
  }
}