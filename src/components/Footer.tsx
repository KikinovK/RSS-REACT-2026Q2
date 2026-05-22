import ErrorSimulator from './ErrorSimulator';

const Footer = () => {
  return (
    <footer className="mt-auto border-t border-stardust/10 bg-opacity-90 backdrop-blur-md py-6">
      <div className="px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <p className="text-stardust text-sm">© 2026 Pokémon Search App. All rights reserved.</p>
        <ErrorSimulator />
      </div>
    </footer>
  );
};

export default Footer;
