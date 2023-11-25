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

    selectedProductId; 

    handleProductSelected(event) {
        // Handle product click, e.g., navigate to product details page
        this.selectedProductId = event.detail;
    }

    // renderedCallback lifecycle hook is used to log the value of this.
    //products to the console after the component has been rendered.
    renderedCallback() {
        console.log('Products:', this.products);
    }
}