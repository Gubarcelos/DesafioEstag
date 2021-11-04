package br.com.fnc.resources;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.fnc.domain.Paciente;
import br.com.fnc.dtos.PacienteDTO;
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
	//localhost:8080/pacientes/id	
	
	@GetMapping
	public ResponseEntity<List<PacienteDTO>> findAll(){
		
		List<Paciente> list = service.findAll();	
		List<PacienteDTO> listDTO = list.stream().map(obj -> new PacienteDTO(obj)).collect(Collectors.toList());
		return ResponseEntity.ok(listDTO);
	}
	
}
