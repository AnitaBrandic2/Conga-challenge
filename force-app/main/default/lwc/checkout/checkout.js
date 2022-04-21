import { LightningElement,api } from 'lwc';

export default class Checkout extends LightningElement {
    @api product;
    areDetailsVisible = false;
    productId = undefined;
    productName='';
    productDesc='';
    getProduct(event)
    {
        this.productId=event.detail.productId;
        this.productName=event.detail.Name;
        this.productDesc=event.detail.Desc;
        this.areDetailsVisible = true;
    }
}