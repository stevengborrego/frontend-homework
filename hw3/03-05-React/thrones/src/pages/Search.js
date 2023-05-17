import { useState, useEffect } from 'react';

const url = 'https://thronesapi.com/api/v2/Characters';

function Search(props) {
  const [post, setPost] = useState('');
  const [data, setData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);



  return (
    <div>search</div>
  );
}

export default Search;