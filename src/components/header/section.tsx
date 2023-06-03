import Image from "next/image";

export function HeaderSection() {
  return (
    <section>
      <div className="w-full py-8 px-28 flex justify-between items-center gap-7 text-neutral">
        <div className="max-w-[50%] h-full ">
          <h1 className="text-4xl font-bold text-alpha ">
            Matemática <br /> do Básico ao Avançado
          </h1>
          <p className="text-lg font-light mt-9">
            Venha aprender matemática sem enrolação, pra quem tem extrema
            dificuldade em aprender exatas.
          </p>
          <p className="text-lg font-light mt-2">
            Venha descobrir o poder da nossa metodologia aplicada! A solução
            perfeita para aqueles que enfrentam desafios em exatas.
          </p>
          <a
            className="btn btn-neutral mt-6"
            href="https://pay.hotmart.com/A66293133V"
          >
            QUERO APRENDER AGORA
          </a>
        </div>
        <div>
          <Image
            src="/headerSection.png"
            alt="Imagem de dois professores em um quadro fazendo cálculos avançados"
            width={500}
            height={500}
            quality={100}
          />
        </div>
      </div>
    </section>
  );
}
