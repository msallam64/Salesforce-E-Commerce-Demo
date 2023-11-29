import { LightningElement,track,wire } from 'lwc';
import getProducts from '@salesforce/apex/ProductController.getProducts';


export default class ProductList extends LightningElement {
    
    // The @wire decorator wires the result of the Apex method to the products property of the LWC
    @wire(getProducts) products;
    wiredProducts({ error, data }) {
        if (data) {
            this.products = data;
        } else if (error) {
            console.error('Error fetching products:', error);
        }
    }

    @track selectedProductId;

    handleProductSelected(event) {
        // Get the selected product's ID from the custom event
        this.selectedProductId = event.detail.productId;
        console.log('Product Selected Event:', this.selectedProductId);
    }

    // renderedCallback lifecycle hook is used to log the value of this.
    //products to the console after the component has been rendered.
    renderedCallback() {
        console.log('Products:', this.products);
    }
}