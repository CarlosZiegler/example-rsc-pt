import Link from "next/link";
import { CardNotas } from "./components/card_notas";
import { CardNotasClient } from "./components/card_notas.client";

export default async function Dashboard() {
  return (
    <div className="flex min-h-screen">
      <div className="w-64 border-r">
        <h2 className="p-4 font-semibold">Menu</h2>
        <nav>
          <ul>
            <li>
              <Link href="/" className="block p-4  transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/dashboard" className="block p-4  transition-colors">
                Dashboard
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="flex-1 p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <CardNotas />
          <CardNotasClient />
          {/* Add other cards here as needed */}
        </div>
      </div>
    </div>
  );
}
