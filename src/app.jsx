import * as React from 'react';

const App = () => {
  const stories = [
    {
      title: 'React',
      url: 'https://reactjs.org',
      author: 'Jordan Walke',
      num_comments: 3,
      points: 4,
      objectID: 0
    },
    {
      title: 'Redux',
      url: 'https://redux.js.org',
      author: 'Dan Abramov, Andrew Clark',
      num_comments: 2,
      points: 5,
      objectID: 1
    }
  ];

  const [searchTerm, setSearchTerm] = React.useState('React');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value)
  }

  const searchedStories = stories.filter((story) =>
    story.title.toLowerCase().includes(searchTerm.toLocaleLowerCase())
  )

  return (
    <div>
      <h1>My Hacker Stories</h1>
      <Search onSearch={handleSearch} search={searchTerm} />

      <hr />
      <List list={searchedStories} />
    </div>
  )
}


const Search = ({ search, onSearch }) => {
  return (
    <div>
      <label htmlFor="search">ค้นหา: </label>
      <input
        type="text"
        id='search'
        value={search}
        onChange={onSearch}
      />


    </div>
  )
}

const List = ({ list }) => {

  return (
    <ul>
      {list.map(
        (item) => <Item key={item.objectID} {...item} />
      )
      }
    </ul>
  )

}

const Item = ( {
  title,
  url,
  author,
  num_comments,
  points,
}
) => {


  return (
    <li>
      <span>
        <a href={url}>{title} </a>
      </span>
      <span>{author}</span>
      <span>{num_comments}</span>
      <span>{points}</span>
    </li>
  )

}


export default App
