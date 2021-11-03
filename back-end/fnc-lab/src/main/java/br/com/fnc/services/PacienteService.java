package br.com.fnc.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.fnc.domain.Paciente;
import br.com.fnc.repositories.PacienteRepository;
import br.com.fnc.services.exceptions.ObjectNotFoundException;

@Service
public class PacienteService {

	@Autowired
	private PacienteRepository repository;

	public Paciente findById(Integer id) {

		// faz a busca da categoria pelo ID
		Optional<Paciente> obj = repository.findById(id); // passa menssagem de erro quando não encontra o objeto
		return obj.orElseThrow(() -> new ObjectNotFoundException(
				"Objeto não encontrado! " + id + ",tipo: " + Paciente.class.getName()));

	}
}
