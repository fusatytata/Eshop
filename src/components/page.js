import React from "react";
import ArticleItem from "./ArticleItem";

function Page() {
    return (
        <div>
            <h1>E-shop</h1>
            <h2>Cart</h2>
            <p>Add something to your cart, make it from your heart.</p>
            <h2>Article (goods) </h2>
            <ArticleItem />
        </div>
    );
}

export default Page;
