package br.com.fnc.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.fnc.domain.Exame;
import br.com.fnc.repositories.ExameRepository;
import br.com.fnc.services.exceptions.ObjectNotFoundException;

@Service
public class ExameService {

	@Autowired
	private ExameRepository repository;
	// faz a busca da categoria pelo ID
		public Exame findById(Integer id) {

			
			Optional<Exame> obj = repository.findById(id); // passa menssagem de erro quando não encontra o objeto
			return obj.orElseThrow(() -> new ObjectNotFoundException(
					"Objeto não encontrado! " + id + ",tipo: " + Exame.class.getName()));

		}
}