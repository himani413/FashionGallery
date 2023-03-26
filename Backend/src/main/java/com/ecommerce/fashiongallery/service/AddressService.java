package com.ecommerce.fashiongallery.service;

import com.ecommerce.fashiongallery.entity.Address;
import com.ecommerce.fashiongallery.model.DeliveryAddressBody;
import org.springframework.stereotype.Service;

@Service
public class AddressService {

    public Address addNewAddress(DeliveryAddressBody deliveryAddressBody){

        Address address = new Address();
        address.setAddressLine1(deliveryAddressBody.getAddressLine1());
        address.setAddressLine2(deliveryAddressBody.getAddressLine2());
        address.setCity(deliveryAddressBody.getCity());
        address.setProvince(deliveryAddressBody.getProvince());
        address.setZipcode(Integer.parseInt(deliveryAddressBody.getZipCode()));
    }
}
