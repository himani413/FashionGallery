package com.ecommerce.fashiongallery.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class ResponseOrderDTO {
    private float amount;
    private int invoiceNumber;
    private String date;
    private String OrderDescription;
    private int orderId;
    private List<CustomerOrdersJoinResultsDTO> customerOrders;

}
