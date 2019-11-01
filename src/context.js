import React, { Component } from 'react';
import { storeProducts, detailProduct } from './data'

const PContext = React.createContext();
class ProductProvider extends Component {
    state = {
        productsItems: [],
        productDetail: detailProduct,
        cart: [],
        modelOpen: false,
        modelProduct: detailProduct,
        subTotal: 0,
        tax: 0,
        cartTotal: 0
    };
    componentDidMount() {
        this.setProduct();
    }
    setProduct = () => {
        let tempProduct = [];
        storeProducts.forEach(item => {
            const singleItem = { ...item };
            tempProduct = [...tempProduct, singleItem];


        });
        this.setState(() => {
            return { productsItems: tempProduct };
        });

    };
    //item get by id
    getItem = id => {
        const product = this.state.productsItems.find(item => item.id === id);
        console.log(id);
        return product;

    };
    //for product details page 
    handleDetail = (id) => {
        const product = this.getItem(id);
        console.log(product);
        this.setState(() => {
            return { productDetail: product };
        }

        )
    };
    //items which are added to the cart
    addToCart = (id) => {
        let tempProduct = [...this.state.productsItems];
        const index = tempProduct.indexOf(this.getItem(id));
        const product = tempProduct[index];
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price;
        this.setState(() => {
            return { productsItems: tempProduct, cart: [...this.state.cart, product] };
        }, () => {
            this.addAllTotals();
        })
    }
    //when click on the cart button this method will work
    openModel = (id) => {
        const product = this.getItem(id);
        console.log("hello from open model");
        this.setState(() => {
            return { modelProduct: product, modelOpen: true }
        })
    };
    //just for removing model
    closeModel = () => {
        this.setState(() => {
            return { modelOpen: false }
        })
    };
    //for increament quantity of products
    increament = (id) => {
        console.log("this is increament method");
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item => item.id === id);
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];
        product.count = product.count + 1;
        product.total = product.price * product.count;
        this.setState(() => {
            return {
                cart: [...tempCart]
            }
        }, () => {
            this.addAllTotals();
        })
    };
    //for decreamnt quantity of product
    decreament = (id) => {
        console.log("this is decreament method");
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item => item.id === id);
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];
        product.count = product.count - 1;
        if (product.count == 0) {
            this.removeItem(id);
        }
        else {
            product.total = product.price * product.count;
            this.setState(() => {
                return {
                    cart: [...tempCart]
                }
            }, () => {
                this.addAllTotals();
            })
        }

    };
    //for remove indiviual item
    removeItem = (id) => {
        console.log("this is removeitem method");
        let tempProduct = [...this.state.productsItems];
        let tempCart = [...this.state.cart];
        tempCart = tempCart.filter(item => item.id !== id);
        const index = tempProduct.indexOf(this.getItem(id));
        let removeProduct = tempProduct[index];
        removeProduct.inCart = false;
        removeProduct.count = 0;
        removeProduct.total = 0;
        this.setState(() => {
            return {
                cart: [...tempCart],
                productsItems: [...tempProduct]
            }
        }, () => {
            this.addAllTotals();
        })
    }
    clearCart = () => {
        console.log("this is clearcart method");
        this.setState(() => {
            return {
                cart: []
            }
        }, () => {
            this.setProduct();
            this.addAllTotals();
        })
    }
    addAllTotals = () => {
        let subTotal = 0;
        this.state.cart.map(item => subTotal += item.total);
        const tempTax = 0.2 * subTotal;
        const tax = tempTax;
        const total = subTotal + tax;
        this.setState(() => {
            return {
                subTotal: subTotal,
                tax: tax,
                cartTotal: total

            }
        })
    }
    render() {
        return (
            <PContext.Provider value={{
                ...this.state,
                handleDetail: this.handleDetail,
                addToCart: this.addToCart,
                openModel: this.openModel,
                closeModel: this.closeModel,
                increament: this.increament,
                decreament: this.decreament,
                removeItem: this.removeItem,
                clearCart: this.clearCart
            }}>
                {this.props.children}
            </PContext.Provider>
        );
    }
}
const PConsumer = PContext.Consumer;
export { ProductProvider, PConsumer };