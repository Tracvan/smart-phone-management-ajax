package com.codegym.webserviceajax.service;

import com.codegym.webserviceajax.model.Smartphone;
import com.codegym.webserviceajax.repository.ISmartphoneRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class SmartphoneService implements ISmartphoneService {
    @Autowired
    ISmartphoneRepository smartphoneRepository;

    @Override
    public Page<Smartphone> findAll(@PageableDefault(size = 5) Pageable pageable) {
        return smartphoneRepository.findAll(pageable);
    }

    @Override
    public Optional<Smartphone> findById(Long id) {
        return smartphoneRepository.findById(id);
    }

    @Override
    public Smartphone save(Smartphone smartphone) {
        return smartphoneRepository.save(smartphone);
    }

    @Override
    public void remove(Long id) {
        smartphoneRepository.deleteById(id);
    }
}
