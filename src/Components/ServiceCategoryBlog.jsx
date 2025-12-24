import React from "react";
import "../styles/ServiceCategoryBlog.css";
import { Link } from "react-router-dom";

export default function ServiceCategoryBlog() {
  return (
    <Link to={"/category/:id"}>
      <div className="category-blog"> hii</div>
    </Link>
  );
}
