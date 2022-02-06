import './AppHeader.css'

const AppHeader = ({ allPosts , allLikes}) => {
  return (
    <div className="d-flex app-header">
      <h1>Hamidjon</h1>
      <h2>
        {allPosts} posts, like {allLikes}
      </h2>
    </div>
  );
};

export default AppHeader;