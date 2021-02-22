package net.iqbusiness.developer.casestudy.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name= "applicants")
public class Applicant {
  private long id;
  private String fullname;
  private String idNumber;
  private String telephone;

  public Applicant() {

  }

  public Applicant(String fullname, String idNumber, String telephone) {
    this.fullname = fullname;
    this.idNumber = idNumber;
    this.telephone = telephone;
  }

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  public long getId() {
    return id;
  }

  public void setId(long id) {
    this.id = id;
  }

  @Column(name= "fullname", nullable = false)
  public String getFullname() {
    return fullname;
  }

  public void setFullname(String fullname) {
    this.fullname = fullname;
  }

  @Column(name = "idNumber", nullable = false)
  public String getIdNumber() {
    return idNumber;
  }

  public void setIdNumber(String idNumber) {
    this.idNumber = idNumber;
  }

  @Column(name = "telephone", nullable = false)
  public String getTelephone() {
    return telephone;
  }

  public void setTelephone(String telephone) {
    this.telephone = telephone;
  }
}