import { LightningElement,api } from 'lwc';

export default class ProductListItem extends LightningElement {

    //@api decorator to make the product property public so that the parent component
    // can pass the product data to it.
    @api product;
    
    
}