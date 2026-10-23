import { useContext, useEffect, useRef, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/context';

import FeedIcon from '../../assets/feed.svg?react';
import StatsIcon from '../../assets/estatisticas.svg?react';
import AddIcon from '../../assets/adicionar.svg?react';
import LogoutIcon from '../../assets/sair.svg?react';
import UseMediaScreen from '../../Hooks/UseMediaScreen';
import MobileButton from './MobileButton';

// Tailwind styles for navlinks
const base =
  'flex h-10 w-10 items-center justify-center rounded-md border transition motion-safe:hover:-translate-y-1';
const idle =
  'border-transparent bg-neutral-200 hover:border-neutral-300 hover:bg-white hover:outline-none hover:ring hover:ring-neutral-200 focus:border-neutral-300 focus:bg-white focus:outline-none focus:ring focus:ring-neutral-200';
const active =
  'border-brand bg-white ring ring-amber-200 outline-none [&_svg>*]:fill-brand';

// Tailwind styles for the mobile menu button
const menuButton = 'p-0 duration-100 motion-safe:hover:translate-y-0';
// hamburger: one line in ::after, the other two drawn with box-shadow
const menuIcon =
  "after:block after:h-[2px] after:w-5 after:rounded-sm after:bg-current after:shadow-[0_6px_currentColor,0_-6px_currentColor] after:transition-all after:duration-100 after:content-['']";
const menuHighlight =
  'hover:border-brand hover:bg-white hover:text-brand hover:outline-none hover:ring hover:ring-amber-200 focus:border-brand focus:bg-white focus:text-brand focus:outline-none focus:ring focus:ring-amber-200';
// open state: yellow highlight + hamburger turns into three dots
const menuOpen =
  'aria-expanded:border-brand aria-expanded:bg-white aria-expanded:text-brand aria-expanded:outline-none aria-expanded:ring aria-expanded:ring-amber-200 aria-expanded:after:h-1 aria-expanded:after:w-1 aria-expanded:after:rotate-90 aria-expanded:after:shadow-[0_8px_currentColor,0_-8px_currentColor]';

// Tailwind styles for the nav
const navDesktop = 'grid grid-cols-4 gap-4';
const navMobile =
  'absolute right-0 top-16 z-10 block rounded bg-white px-4 shadow transition-all duration-300';
// only one of these two at a time: if both were present, the CSS order would decide
const navMobileClosed = 'invisible -translate-x-2.5 opacity-0';
const navMobileOpen = 'visible translate-x-0 opacity-100';
const mobileItem =
  'flex w-full cursor-pointer items-center border-b border-neutral-200 py-2 last:border-b-0 [&:hover_svg>*]:fill-brand [&_svg]:mr-2';
const mobileItemActive = '[&_svg>*]:fill-brand';

const UserHeaderNav = () => {
  const mobile = UseMediaScreen('(max-width: 40rem)');

  const [mobileMenu, setMobileMenu] = useState(false);
  const menuRef = useRef(null);

  const { userLogout } = useContext(UserContext);
  const navigate = useNavigate();

  // mobile list items or desktop square buttons, each with its active style
  function linkClass({ isActive }) {
    if (mobile) return `${mobileItem} ${isActive ? mobileItemActive : ''}`;
    return `${base} ${isActive ? active : idle}`;
  }

  function handleLogout() {
    userLogout();
    navigate('/login');
  }

  function closeMenu() {
    setMobileMenu(false);
  }

  useEffect(() => {
    if (!mobileMenu) return;

    function handleClickOutside(event) {
      if (!menuRef.current.contains(event.target)) setMobileMenu(false);
    }

    document.addEventListener('pointerdown', handleClickOutside);
    return () =>
      document.removeEventListener('pointerdown', handleClickOutside);
  }, [mobileMenu]);

  return (
    // wraps button + nav so a click on the button doesn't count as "outside"
    <div ref={menuRef}>
      {mobile && (
        <MobileButton
          open={mobileMenu}
          setOpen={setMobileMenu}
          className={`${base} ${idle} ${menuButton} ${menuIcon} ${menuHighlight} ${menuOpen}`}
        />
      )}
      <nav
        className={
          mobile
            ? `${navMobile} ${mobileMenu ? navMobileOpen : navMobileClosed}`
            : navDesktop
        }
      >
        <NavLink
          to='/conta'
          end
          aria-label='Minhas fotos'
          className={linkClass}
          onClick={closeMenu}
        >
          <FeedIcon />
          {mobile && 'Minhas fotos'}
        </NavLink>
        <NavLink
          to='/conta/estatisticas'
          aria-label='Estatísticas'
          className={linkClass}
          onClick={closeMenu}
        >
          <StatsIcon />
          {mobile && 'Estatísticas'}
        </NavLink>
        <NavLink
          to='/conta/postar'
          aria-label='Adicionar foto'
          className={linkClass}
          onClick={closeMenu}
        >
          <AddIcon />
          {mobile && 'Adicionar foto'}
        </NavLink>
        <button
          onClick={handleLogout}
          aria-label='Sair'
          className={mobile ? mobileItem : `${base} ${idle}`}
        >
          <LogoutIcon />
          {mobile && 'Sair'}
        </button>
      </nav>
    </div>
  );
};
export default UserHeaderNav;
