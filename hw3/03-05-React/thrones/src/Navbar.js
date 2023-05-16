export default function Navbar() {
  return <nav className="nav">
    <a href="/" className="home">Thrones</a>
    <ul>
      <li>
        <a href="/search">Search</a>
      </li>
      <li>
        <a href="/houses">Houses</a>
      </li>
    </ul>
  </nav>
}