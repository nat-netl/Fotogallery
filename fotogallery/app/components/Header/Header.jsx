import Link from 'next/link';
import "./style.css"
import Image from 'next/image';
import Icon from '../../icons/menu-button_icon-icons.com_72989.svg'

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
            <Image className='icon' src={Icon} width={20} height={20} />
        </nav>
      </div>
    </header>
  );
};

export default Header;