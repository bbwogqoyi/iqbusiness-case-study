package net.iqbusiness.developer.casestudy.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import net.iqbusiness.developer.casestudy.exception.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import net.iqbusiness.developer.casestudy.model.Applicant;
import net.iqbusiness.developer.casestudy.repository.ApplicantRepository;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api")
public class ApplicantController {
  @Autowired
  private ApplicantRepository applicantRepository;

  @GetMapping("/applicants")
  public List<Applicant> getAllApplicants() {
    return applicantRepository.findAll();
  }

  @GetMapping("/applicants/{id}")
  public ResponseEntity<Applicant> getApplicantById(@PathVariable(value = "id") Long applicantId)
    throws ResourceNotFoundException {
    Applicant applicant = applicantRepository.findById(applicantId)
      .orElseThrow(() -> new ResourceNotFoundException("Applicant not found for this id :: " + applicantId));
    return ResponseEntity.ok().body(applicant);
  }

  @PostMapping("/applicants")
  public Applicant createApplicant(@Valid @RequestBody Applicant applicant) {
    return applicantRepository.save(applicant);
  }

  @PutMapping("/applicants/{id}")
  public ResponseEntity<Applicant> updateApplicant(
    @PathVariable(value = "id") Long applicantId,
    @Valid @RequestBody Applicant applicantInfo)
    throws ResourceNotFoundException {
    Applicant applicant = applicantRepository.findById(applicantId)
      .orElseThrow(() -> new ResourceNotFoundException("Applicant not found for this id :: " + applicantId));

    applicant.setFullname(applicantInfo.getFullname());
    applicant.setIdNumber(applicantInfo.getIdNumber());
    applicant.setTelephone(applicantInfo.getTelephone());
    final Applicant updatedApplicant = applicantRepository.save(applicant);
    return ResponseEntity.ok(updatedApplicant);
  }

  @DeleteMapping("/applicants/{id}")
  public Map<String, Boolean> deleteApplicant(@PathVariable(value = "id") Long applicantId)
    throws ResourceNotFoundException {
    Applicant applicant = applicantRepository.findById(applicantId)
      .orElseThrow(() -> new ResourceNotFoundException("Applicant not found for this id :: " + applicantId));

    applicantRepository.delete(applicant);
    Map<String, Boolean> response = new HashMap<>();
    response.put("deleted", Boolean.TRUE);
    return response;
  }
}
