import Image from "next/image";

export function TheCourse() {
  return (
    <article className="bg-[#1F1755]" id="thecourse">
      <div className="w-full py-8  px-8 lg:px-28  flex justify-between items-center gap-7 max-md:flex-col-reverse">
        <div>
          <Image
            src="/theCourse.png"
            alt="Imagem uma moça pensando nos cálculos"
            width={600}
            height={600}
            quality={100}
          />
        </div>

        <div className="md:max-w-[50%] h-full ">
          <h1 className="text-4xl font-semibold text-gray-200 max-lg:text-2xl">
            Matemática para o Sucesso em sua carreira.
          </h1>
          <p className="text-md font-light mt-9 text-gray-200 max-lg:text-sm">
            Você já se sentiu intimidado pela matemática? Acreditou que era uma
            área reservada apenas para os gênios e especialistas? Chegou a hora
            de mudar essa percepção e abrir as portas para um mundo repleto de
            oportunidades e sucesso. Apresentamos a você nosso incrível curso de
            Matemática, que irá guiá-lo em uma jornada transformadora, desde os
            conceitos mais básicos até os desafios do ensino superior. Com uma
            abordagem didática inovadora e focada no seu aprendizado, nosso
            programa abrange todos os aspectos da matemática, tornando-o
            acessível e envolvente para estudantes de todas as idades e níveis
            de conhecimento.
          </p>
          <p className="text-md font-light mt-4 text-gray-200 max-lg:text-sm">
            Ao adquirir nosso curso, você terá acesso a um conteúdo rico e
            estruturado, repleto de exemplos práticos, exercícios desafiadores e
            explicações claras que irão desvendar os mistérios dos números.
            Nossa equipe de professores altamente qualificados e experientes
            está comprometida em ajudá-lo a superar suas dificuldades e alcançar
            a excelência matemática.
          </p>
          <a
            className="btn btn-secondary mt-6 max-md:btn-sm"
            href="https://pay.hotmart.com/A66293133V"
          >
            QUERO TER SUCESSO EM MINHA CARREIRA
          </a>
        </div>
      </div>
    </article>
  );
}
