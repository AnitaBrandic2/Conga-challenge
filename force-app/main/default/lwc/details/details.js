import { LightningElement,api,wire } from 'lwc';
import { getRecord} from 'lightning/uiRecordApi';
import  getProduct from '@salesforce/apex/ApexProduct.getProduct';

export default class Details extends LightningElement {
    @api product;

    selectProduct() {

        const productselect = new CustomEvent("productselect", {
            detail: {
                productId: this.product.Id
            }
        });
        this.dispatchEvent(productselect);
    }
    selectProduct1()
    {

        const productselect = new CustomEvent("productselect1", {
            detail: {
                productId: this.product.Id,
                Name:this.product.Name,
                Desc:this.product.Description__c
            }
        });
        this.dispatchEvent(productselect);
    }
}