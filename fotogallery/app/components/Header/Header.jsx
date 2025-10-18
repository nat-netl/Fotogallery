import Link from 'next/link';
import "./style.css"

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <Link href="/" className="header-title">
          Фото галлерея
        </Link>
        <nav>
          <ul className="header-nav">
            <li>
              <Link href="/">Главная</Link>
            </li>
            <li>
              <Link href="/gallery">Галлерея</Link>
            </li>
            <li>
              <Link href="/about">О нас</Link>
            </li>
            <li>
              <Link href="/contact">Контакты</Link>
            </li>
            <li>
              <Link href="/form">Обратная связь</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;