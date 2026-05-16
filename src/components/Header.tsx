import { Link } from '@tanstack/react-router';

const Header = () => {
  return (
    <header className="bg-opacity-90 backdrop-blur-md border-b border-stardust/10 sticky top-0 z-50">
      <nav className="px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between gap-8">
          <h1 className="text-2xl font-bold text-guidepost-green">Pokémon Search</h1>
          <div className="mx-auto flex items-center gap-6">
            <Link
              to="/"
              activeProps={{
                className: 'text-guidepost-green font-semibold',
              }}
              inactiveProps={{
                className: 'text-stardust hover:text-guidepost-green transition-colors',
              }}
            >
              Home
            </Link>
            <Link
              to="/about"
              activeProps={{
                className: 'text-guidepost-green font-semibold',
              }}
              inactiveProps={{
                className: 'text-stardust hover:text-guidepost-green transition-colors',
              }}
            >
              About
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header
