import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Фото галлерея
        </Link>
        <nav>
          <ul className="flex space-x-4">
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