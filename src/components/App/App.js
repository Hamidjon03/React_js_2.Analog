import React from "react";
import AppHeader from "../AppHeader";
import PostAddForm from "../PostAddForm";
import PostList from "../PostList";
import PostStatusFilter from "../PostStatusFilter";
import SearchPanel from "../SearchPanel";
import "./App.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { label: "Tutorial ReactJs", important: false, like: false, id: 1 },
        {
          label: "Learn JavaScript in 1 hour ",
          important: false,
          like: false,
          id: 2,
        },
        { label: "Data structures", important: false, like: false, id: 3 },
      ],
      term: "",
      filter: "all",
    };
    this.onDelete = this.onDelete.bind(this);
    this.onAdd = this.onAdd.bind(this);
    this.onToggleLiked = this.onToggleLiked.bind(this);
    this.onToggleImportant = this.onToggleImportant.bind(this);
    this.searchPost = this.searchPost.bind(this);
    this.onFilterSelect = this.onFilterSelect.bind(this);
    this.onUpdateSearch = this.onUpdateSearch.bind(this);

    this.maxId = 4;
  }

  onDelete(id) {
    this.setState(({ data }) => {
      const index = data.findIndex((elem) => elem.id === id);

      const before = data.slice(0, index);
      const after = data.slice(index + 1);

      const newArr = [...before, ...after];

      return {
        data: newArr,
      };
    });
  }

  onAdd(str) {
    const newItem = {
      label: str,
      important: false,
      id: this.maxId++,
    };

    this.setState(({ data }) => {
      const newArr = [...data, newItem];

      return {
        data: newArr,
      };
    });
  }

  onToggleImportant(id) {
    this.setState(({ data }) => {
      const index = data.findIndex((elem) => elem.id === id);

      const oldItem = data[index];
      const newItem = { ...oldItem, important: !oldItem.important };

      const before = data.slice(0, index);
      const after = data.slice(index + 1);

      const newArr = [...before, newItem, ...after];
      return {
        data: newArr,
      };
    });
  }

  onToggleLiked(id) {
    this.setState(({ data }) => {
      const index = data.findIndex((elem) => elem.id === id);

      const oldItem = data[index];
      const newItem = { ...oldItem, like: !oldItem.like };

      const before = data.slice(0, index);
      const after = data.slice(index + 1);

      const newArr = [...before, newItem, ...after];
      return {
        data: newArr,
      };
    });
  }

  searchPost(items, term) {
    if (term.length === 0) {
      return items;
    }

    return items.filter((item) => {
      return item.label.indexOf(term) > -1;
    });
  }

  filterPost(items, filter) {
    if (filter === "like") {
      return items.filter((item) => item.like);
    } else {
      return items;
    }
  }

  onFilterSelect(filter){
    this.setState({filter})
  }

  onUpdateSearch(term) {
    this.setState({ term });
  }

  render() {
    const { data, term, filter } = this.state;
    const allLikes = data.filter((elem) => elem.like).length;
    const allPosts = data.length;

    const visiblePost = this.filterPost(this.searchPost(data, term), filter);
    return (
      <div className="app">
        <AppHeader allPosts={allPosts} allLikes={allLikes} />
        <div className="search-panel d-flex">
          <SearchPanel onUpdateSearch={this.onUpdateSearch} />
          <PostStatusFilter
            filter={filter}
            onFilterSelect={this.onFilterSelect}
          />
        </div>
        <PostList
          onDelete={this.onDelete}
          onToggleImportant={this.onToggleImportant}
          onToggleLiked={this.onToggleLiked}
          posts={visiblePost}
        />
        <PostAddForm onAdd={this.onAdd} />
      </div>
    );
  }
}
