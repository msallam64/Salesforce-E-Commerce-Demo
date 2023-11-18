public with sharing class ProductController {
    
    // This Controller For Query Data That will Passed to The Parent LWC (Productlist)
    public ProductController() {}

    //This annotation indicates that the Apex method can be invoked from Lightning components.
    // cacheable=true Attribute: This attribute tells the platform to cache the result of the method. 
    @AuraEnabled(cacheable=true)
    public static List<Product2> getProducts() {
        List<Product2> products = [SELECT
                 Id, 
                 Name,
                 Product_Image__c,
                 Description,
                 Product_Price__c,
                 Stock_Quantity__c FROM Product2
                 ];

        System.debug('Products ' + products);
        return products;
    }

    /*
    // Inner class to represent a product wrapper with processed records
    public class ProductWrapper {
        @AuraEnabled public Id Id;
        @AuraEnabled public String name;
        @AuraEnabled public String description;
        @AuraEnabled public Decimal productPrice;
        @AuraEnabled public Decimal stockQuantity;
        // @AuraEnabled public String productImage;
        @AuraEnabled public List<String> imageUrls;
    }*/
}