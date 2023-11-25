import { LightningElement,api,wire } from 'lwc';
import getProductDetails from '@salesforce/apex/ProductController.getProductDetails';


export default class ProductDetails extends LightningElement {
    @api selectedProductId;
    selectedProduct;

    @wire(getProductDetails, { productId: '$selectedProductId' })
    wiredProduct({ error, data }) {
        if (data) {
            this.selectedProduct = data;
        } else if (error) {
            console.error('Error fetching product details:', error);
        }
    }
}