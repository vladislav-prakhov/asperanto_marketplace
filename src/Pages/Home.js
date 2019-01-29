import React from "react";
import { Link } from "react-router-dom";
import "..\\css\\index.css";

export function Home() {
    return (
        <div>
            <Link to="/category">Категории</Link>
        </div>
    );
}