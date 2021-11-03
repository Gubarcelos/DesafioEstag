package br.com.fnc.resources;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.fnc.domain.Paciente;
import br.com.fnc.services.PacienteService;

@RestController
@RequestMapping(value = "/pacientes")  //classe para busca GET de pacientes
public class PacienteResource {
	
	@Autowired
	private PacienteService service;
	
	@GetMapping(value = "/{id}")	
	public ResponseEntity<Paciente> findById(@PathVariable Integer id){
		Paciente obj = service.findById(id);
		return ResponseEntity.ok().body(obj);
		
	}
	
}
//localhost:8080/pacientes/id