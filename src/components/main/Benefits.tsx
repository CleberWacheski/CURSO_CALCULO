import Image from "next/image";

export function Benefits() {
  return (
    <main>
      <div className="w-full py-8 px-28 flex justify-center items-center gap-8">
        <div className="card shadow-xl px-10 bg-base-300">
          <div className="card-body">
            <h2 className="card-title text-primary text-3xl">Conteúdos!</h2>
            <p className="italic">14 Aulas + 14 Listas de Exercícios</p>
            <section>
              <ul>
                <li className="flex items-center gap-2 text-md font-medium my-2 italic ">
                  {" "}
                  <Image
                    alt="icone de checkbox"
                    src="/checkbox.svg"
                    width={20}
                    height={20}
                  />
                  Operações Elementares
                </li>
                <li className="flex items-center gap-2 text-md font-medium my-2 italic">
                  {" "}
                  <Image
                    alt="icone de checkbox"
                    src="/checkbox.svg"
                    width={20}
                    height={20}
                  />
                  Equações{" "}
                </li>
                <li className="flex items-center gap-2 text-md font-medium my-2 italic">
                  {" "}
                  <Image
                    alt="icone de checkbox"
                    src="/checkbox.svg"
                    width={20}
                    height={20}
                  />
                  Inequações{" "}
                </li>
                <li className="flex items-center gap-2 text-md font-medium my-2 italic">
                  {" "}
                  <Image
                    alt="icone de checkbox"
                    src="/checkbox.svg"
                    width={20}
                    height={20}
                  />
                  Trigonometria
                </li>
                <li className="flex items-center gap-2 text-md font-medium my-2 italic">
                  {" "}
                  <Image
                    alt="icone de checkbox"
                    src="/checkbox.svg"
                    width={20}
                    height={20}
                  />
                  Polinômios{" "}
                </li>
                <li className="flex items-center gap-2 text-md font-medium my-2 italic">
                  {" "}
                  <Image
                    alt="icone de checkbox"
                    src="/checkbox.svg"
                    width={20}
                    height={20}
                  />
                  Geometria Plana
                </li>
                <li className="flex items-center gap-2 text-md font-medium my-2 italic">
                  {" "}
                  <Image
                    alt="icone de checkbox"
                    src="/checkbox.svg"
                    width={20}
                    height={20}
                  />
                  Sistemas Lineares
                </li>
                <li className="flex items-center gap-2 text-md font-medium my-2 italic">
                  {" "}
                  <Image
                    alt="icone de checkbox"
                    src="/checkbox.svg"
                    width={20}
                    height={20}
                  />
                  Matrizes{" "}
                </li>
                <li className="flex items-center gap-2 text-md font-medium my-2 italic">
                  {" "}
                  <Image
                    alt="icone de checkbox"
                    src="/checkbox.svg"
                    width={20}
                    height={20}
                  />
                  Geometria Analítica
                </li>
                <li className="flex items-center gap-2 text-md font-medium my-2 italic">
                  {" "}
                  <Image
                    alt="icone de checkbox"
                    src="/checkbox.svg"
                    width={20}
                    height={20}
                  />
                  Cônicas{" "}
                </li>
                <li className="flex items-center gap-2 text-md font-medium my-2 italic">
                  {" "}
                  <Image
                    alt="icone de checkbox"
                    src="/checkbox.svg"
                    width={20}
                    height={20}
                  />
                  Funções{" "}
                </li>
                <li className="flex items-center gap-2 text-md font-medium my-2 italic">
                  {" "}
                  <Image
                    alt="icone de checkbox"
                    src="/checkbox.svg"
                    width={20}
                    height={20}
                  />
                  Limites{" "}
                </li>
                <li className="flex items-center gap-2 text-md font-medium my-2 italic">
                  {" "}
                  <Image
                    alt="icone de checkbox"
                    src="/checkbox.svg"
                    width={20}
                    height={20}
                  />
                  Derivadas{" "}
                </li>
                <li className="flex items-center gap-2 text-md font-medium my-2 italic">
                  {" "}
                  <Image
                    alt="icone de checkbox"
                    src="/checkbox.svg"
                    width={20}
                    height={20}
                  />
                  Integrais
                </li>
              </ul>
            </section>
          </div>
          <div className="card-actions justify-center pb-4">
            <a
              className="btn btn-primary"
              href="https://pay.hotmart.com/A66293133V"
            >
              EU QUERO APRENDER
            </a>
          </div>
        </div>

        <div className="max-w-[50%]">
          <h2 className="text-alpha text-2xl font-bold">
            BENEFÍCIOS E METODOLOGIA DE ENSINO
          </h2>
          <p className="py-6">
            A prática de listas de exercícios em conjunto com as aulas é uma
            abordagem fundamental para maximizar seu aprendizado e domínio da
            matemática. Essa combinação poderosa proporciona uma base sólida,
            consolidando os conceitos teóricos e desenvolvendo habilidades
            práticas que são essenciais para enfrentar desafios matemáticos. As
            aulas fornecem a você o conhecimento teórico necessário,
            apresentando os conceitos, explicando as fórmulas e demonstrando os
            passos para solução de problemas. Elas oferecem uma estrutura clara
            e uma explicação detalhada dos tópicos, guiando você por cada etapa
            do processo de aprendizagem. No entanto, a verdadeira maestria na
            matemática só é alcançada com a prática. As listas de exercícios são
            projetadas para consolidar o que foi aprendido nas aulas, permitindo
            que você aplique os conceitos teóricos de maneira prática.
          </p>
          <p>
            Elas oferecem uma oportunidade valiosa para você se envolver
            ativamente com a matéria, identificar áreas que precisam ser
            reforçadas e aprimorar suas habilidades de resolução de problemas.
            Ao praticar as listas de exercícios, você ganha confiança em sua
            capacidade de aplicar os conhecimentos adquiridos. Isso fortalece
            sua compreensão e ajuda a identificar qualquer lacuna de
            conhecimento que precise ser preenchida. Além disso, as listas de
            exercícios desafiam você a pensar de forma crítica e criativa,
            encontrando diferentes abordagens para resolver problemas, o que
            melhora sua capacidade de raciocínio lógico.
          </p>
        </div>
      </div>
    </main>
  );
}
