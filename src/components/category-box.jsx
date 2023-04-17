import React from "react";
import styles from "./category-box.module.css";
import { Link } from "react-router-dom";

const CategoryBox = ({ item }) => {
  return (
    <div className={`card mb-4 box-shadow ${styles.cardContainer}`}>
      <div className="card-header">
        <h4 className="my-0 font-weight-normal">{item.name}</h4>
      </div>
      <div className="card-body">
        <img className={styles.image} src={item.image} alt="" />
        <Link
          to={`category/details/${item.slug}`}
          type="button"
          className={`${styles.linkBtn} btn btn-lg btn-block btn-primary`}
        >
          Details
        </Link>
      </div>
    </div>
  );
};

export default CategoryBox;
