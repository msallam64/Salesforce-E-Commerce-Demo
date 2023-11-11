public with sharing class ProductController {
    
    // This Controller For Query Data That will Passed to The Parent LWC (Productlist)
    
    public ProductController() {}


    //This annotation indicates that the Apex method can be invoked from Lightning components.
    // cacheable=true Attribute: This attribute tells the platform to cache the result of the method. 
    @AuraEnabled(cacheable=true)
    public static List<Product2> getProducts() {
        return [SELECT
                 Id, 
                 Name 
                 FROM 
                 Product2
                 ];
    }
}