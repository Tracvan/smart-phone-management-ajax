package com.codegym.webserviceajax.service;

import com.codegym.webserviceajax.model.Smartphone;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;

import java.util.Optional;

public interface ISmartphoneService {

    Page<Smartphone> findAll(@PageableDefault(size = 5) Pageable pageable);

    //    Iterable<Smartphone> findAll();
    Optional<Smartphone> findById(Long id);
    Smartphone save(Smartphone smartphone);
    void remove(Long id);
}
