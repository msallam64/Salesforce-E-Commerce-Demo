import { LightningElement,api } from 'lwc';

export default class ProductListItem extends LightningElement {

    //@api decorator to make the product property public so that the parent component
    // can pass the product data to it.
    @api product;
    
    handleItemClick() {
        // Dispatch a custom event to notify the parent component with the selected product's ID
        const selectEvent = new CustomEvent('productselected', {
            detail: { productId: this.product.Id }
        });
        this.dispatchEvent(selectEvent);
        console.log('Item Clicked - Product ID:', this.product.Id);
    }
}