import { LightningElement,api,wire,track } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import  getAllProducts from '@salesforce/apex/ApexProduct.getAllProducts';

export default class List extends NavigationMixin(LightningElement) {
    error;
    @track products;
    @wire(getAllProducts)
	getProduct({ error, data }) { 
        if ( data ) { 
            this.products = data; 
        } else if ( error )
            console.log( 'Error is ' + JSON.stringify( error ) );
         
    }
    handleProductView(event) {
		const productId = event.detail.productId;
		this[NavigationMixin.Navigate]({
			type: 'standard__recordPage',
			attributes: {
				recordId: productId,
				objectApiName: 'Product__c',
				actionName: 'view',
			},
		});
	}

}