import VueRouter from "vue-router";
import Vue from "vue";
import ProductTopListPage from "@/views/product/ProductTopListPage.vue";



Vue.use(VueRouter)
const ProductRouter = [
    {
        path: "/product-top-list-page",
        name: "ProductTopListPage",
        component: ProductTopListPage
    }
]

export default ProductRouter