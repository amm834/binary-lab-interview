import Link from "next/link";

const navItems = [
  { name: "Hero", path: "/" },
  { name: "Home", path: "/" },
  { name: "Patners", path: "/" },
];

export default function Navbar() {
  return (
    <nav className="py-6 bg-zinc-900">
      <ul className="flex items-center justify-center gap-x-8">
        {navItems.map((item, index) => {
          return (
            <li key={index}>
              <Link
                href={item.path}
                className="text-lg font-bold text-zinc-100"
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
