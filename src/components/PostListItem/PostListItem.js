import React from "react";
import "./PostListItem.css";

export default class PostListItem extends React.Component {

  render() {
    const { label, onDelete, important, like, onToggleImportant, onToggleLiked } = this.props;
    let classNames = "app-list-item d-flex justify-content-between";

    if (important) {
      classNames += " important";
    }

    if (like) {
      classNames += " like";
    }
    return (
      <li className={classNames}>
        <span onClick={onToggleLiked} className="app-list-item-label">
          {label}
        </span>

        <div className="d-flex justify-content-center align-items-center">
          <button
            type="button"
            className="btn-star btn-sm"
            onClick={onToggleImportant}
          >
            <i className="fa fa-star"></i>
          </button>
          <button onClick={onDelete} type="button" className="btn-trash btn-sm">
            <i className="fa fa-trash"></i>
          </button>
          <i className="fa fa-heart"></i>
        </div>
      </li>
    );
  }
}
