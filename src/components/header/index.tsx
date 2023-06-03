import Image from "next/image";

export function Header() {
  return (
    <header className="w-full border-b border-gray-300">
      <div className="w-full py-8 px-28 flex items-center justify-between">
        <div className="flex items-center justify-between cursor-pointer">
          <div className="flex items-center justify-center gap-3">
            <Image
              alt="Logo do curso de matemática"
              src="/logo.svg"
              width={60}
              height={60}
              quality={100}
            />
            <p className="font-bold italic text-md text-neutral">
              Matemática do Básico ao Avançando
            </p>
          </div>
        </div>

        <nav className="w-2/5 text-neutral">
          <ul className="flex items-center justify-around w-full">
            <li className="cursor-pointer font-semibold border-b-2 border-alpha  transition-all text-alpha ">
              <a>HOME</a>
            </li>
            <li className="cursor-pointer font-semibold hover:border-b-2 border-alpha transition-all hover:text-alpha ">
              <a>O CURSO</a>
            </li>
            <li className="cursor-pointer font-semibold hover:border-b-2 border-alpha transition-all hover:text-alpha">
              <a>BENEFÍCIOS</a>
            </li>
            <li className="cursor-pointer font-semibold hover:border-b-2 2 border-alpha transition-all hover:text-alpha">
              <a>CONTATO</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
