package br.com.fnc.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.fnc.domain.Paciente;
import br.com.fnc.repositories.PacienteRepository;

@Service
public class PacienteService {

	@Autowired
	private PacienteRepository repository;
	
	public Paciente findById (Integer id) {
		
		//faz a busca da categoria pelo ID
		Optional<Paciente> obj = repository.findById(id);
		return obj.orElse(null);
		
	}
}
