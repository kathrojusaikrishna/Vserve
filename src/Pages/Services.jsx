import React from "react";
import ServiceCategoryBlog from "../Components/ServiceCategoryBlog";
import "../styles/Services.css";
import { Link } from "react-router-dom";

function Services() {
  return (
    <>
      <section>
        <div>
          <div>
            <h1>Categories</h1>
          </div>
          <div className="service-category-blog">
            <ServiceCategoryBlog />
            <ServiceCategoryBlog />
            <ServiceCategoryBlog />
            <ServiceCategoryBlog />
            <ServiceCategoryBlog />
            <ServiceCategoryBlog />
            <ServiceCategoryBlog />
            <ServiceCategoryBlog />
            <ServiceCategoryBlog />
            <ServiceCategoryBlog />
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
