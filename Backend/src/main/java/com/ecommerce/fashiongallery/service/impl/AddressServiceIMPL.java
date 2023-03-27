package com.ecommerce.fashiongallery.service.impl;

import com.ecommerce.fashiongallery.dto.DeliveryAddressDTO;
import com.ecommerce.fashiongallery.entity.Address;
import com.ecommerce.fashiongallery.repository.AddressRepository;
import com.ecommerce.fashiongallery.service.AddressService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AddressServiceIMPL implements AddressService {

    @Autowired
    private AddressRepository addressRepository;
    @Override
    public String addAddress(DeliveryAddressDTO deliveryAddressDTO) {

        Address address = new Address(
                deliveryAddressDTO.getAddressLine1(),
                deliveryAddressDTO.getAddressLine2(),
                deliveryAddressDTO.getCity(),
                deliveryAddressDTO.getProvince(),
                deliveryAddressDTO.getZipcode()
        );
        addressRepository.save(address);
        return "Address saved successfully";
    }
}
