import { LightningElement,api,wire } from 'lwc';
import getProductDetails from '@salesforce/apex/ProductController.getProductDetails';


export default class ProductDetails extends LightningElement {
    @api productId;
    
    productName;

    
    // Use a wire service to fetch details based on the selected product's ID
    @wire(getProductDetails, { productId: '$productId' })
    wiredProduct({ error, data }) {
        if (data) {
            // Assign the fetched product details to properties
            this.productName = data.Name;
            console.log('Fetched Product Details:--------------', data);
            console.log('Fetched Product Details:-------------', data.Name);
            console.log('Fetched Product Details:-------------', productName);
        } else if (error) {
            console.log('Error:-------------', error);
        }
    }
}