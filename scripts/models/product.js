// objects of pizza

class Product{
    constructor(id , name , descr , price , url){

        this.id= id;
        this.name= name;
        this.descr= descr;
        this.price= price;
        this.url = url;
        this.isAddedInCart = false;
    }
}
export default Product;  