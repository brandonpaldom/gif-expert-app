import giphyLogo from '../assets/giphy-logo.png';

export function Header() {
  return (
    <header className="flex h-16 items-center bg-black px-4">
      <img src={giphyLogo} alt="" />
    </header>
  );
}
