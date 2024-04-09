import Button from "@/components/button";
import Dropdown from "@/components/dropdown";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Icon from "@/components/icon";
import ListItem from "@/components/listItem";
import Payment from "@/components/payment";
import Section from "@/components/section";
import { ArrowDownCircleIcon, CheckBadgeIcon, CheckCircleIcon, LockClosedIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { ComputerDesktopIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export default function Page() {
  return (
    <div>
      <Header />
      <main>
        <Section
          classNameS="bg-zinc-950 pt-6 sm:pt-24"
          className="pb-12 sm:pb-24 px-4"
        >
          <div className="flex items-center flex-col gap-4">
            <h2 className="title">Veja o que acontece com quem aplica o ARAR</h2>
            <div className="max-w-6xl sm:grid sm:grid-cols-2 flex flex-col gap-4">
              <div className="">
                <Image
                  src="/images/test/1.png"
                  alt="Depoimento"
                  width={381}
                  height={588}
                  // layout="fill"
                  className="rounded-xl"
                />
              </div>
              <div className="">
                <Image
                  src="/images/test/2.png"
                  alt="Depoimento"
                  width={381}
                  height={588}
                  // layout="fill"
                  className="rounded-xl"
                />
              </div>
            </div>
          </div>
        </Section>
        <Section classNameS="radial-2 pt-12 sm:pt-24 pb-6 sm:pb-12 px-4">
          <div className="flex items-center flex-col gap-12">
            <div className="flex flex-col sm:items-center gap-4">
              {/* <h2 className="title text-xl sm:text-2xl">Clique no </h2> */}
              <p className="flex items-center flex-col gap-2 text-xl font-medium text-white max-w-2xl text-center">
                <span>Clique no botão abaixo e dê o primeiro passo para acabar com o sofrimento, as brigas e desonras e transformar a sua relação em um casamento restaurado e cheio de amor</span>
                <ArrowDownCircleIcon className="h-6 w-6" />
              </p>
              <div className="w-full max-w-sm flex"><Button>Quero salvar meu relacionameto</Button></div>
            </div>
            {/* <div className="flex flex-row gap-8">
              <Icon
                Icone={ComputerDesktopIcon}
                text="Acesso imediato"
              />
              <Icon
                Icone={CheckBadgeIcon}
                text="Garantia de 7 dias"
              />
              <Icon
                Icone={LockClosedIcon}
                text="Compra segura"
              />
            </div> */}
          </div>
        </Section>
        <Section classNameS="radial-2 pt-12 pb-12 sm:pb-24 px-4">
          <div className="flex flex-col items-center gap-12">
            <div className="text-left sm:text-center flex flex-col items-center gap-4 sm:max-w-4xl">
              <h2 className="text-3xl font-bold text-white">Quem está com um relacionamento abalado não pode procrastinar, precisa tomar uma atitude antes que seja tarde demais.</h2>
              <p className="text-white sm:text-xl sm:mt-0 mt-4">Por isso, em cada vídeo nós vamos direto ao ponto, sem enrolação com uma atividade prática para você aplicar e assim trazer de volta o carinho, o amor e o respeito que um dia existiu entre vocês.</p>
            </div>
            <div className="w-full max-w-2xl">
              <Image
                src="/images/bg.png"
                alt="Imagem ilustrativa"
                width={1024}
                height={378}
              />
            </div>
          </div>
        </Section>
        <Section classNameS="bg-zinc-950 py-12 sm:py-24">
          <div className="flex flex-col gap-6 sm:gap-12 text-center items-center">
            {/* <div className="flex flex-col gap-2 text-left sm:text-center max-w-2xl px-4">
              <h2 className="title">Como é e como funciona o curso?</h2>
              <p className="text-zinc-200 sm:text-xl">É um programa onde você terá 45 vídeos explicando cada passo prático que você vai precisar aplicar diariamente para salvar o seu casamento e reacender o amor.</p>
            </div> */}
            <div className="flex flex-col gap-8 bg-zinc-800 py-12 px-4 sm:px-8 rounded-2xl sm:rounded-xl w-full max-w-2xl">
              <h3 className="text-2xl sm:text-3xl text-white font-semibold">A Rota do Amor Restaurado é para você que:</h3>
              <ul className="text-left flex flex-col gap-4">
                <ListItem
                  Icon={CheckCircleIcon}
                  translate={true}
                  IconColor="text-emerald-500 translate-y-0"
                >
                  Está há tempos tentando restaurar a sua relação mas não consegue
                </ListItem>
                <ListItem
                  Icon={CheckCircleIcon}
                  translate={true}
                  IconColor="text-emerald-500 translate-y-0"
                >
                  Quer se sentir priorizada e valorizada na relação
                </ListItem>
                <ListItem
                  Icon={CheckCircleIcon}
                  translate={true}
                  IconColor="text-emerald-500 translate-y-0"
                >
                  Está com a relação desgastada
                </ListItem>
                <ListItem
                  Icon={CheckCircleIcon}
                  translate={true}
                  IconColor="text-emerald-500 translate-y-0"
                >
                  Não sabe mais como salvar a relação
                </ListItem>
                <ListItem
                  Icon={CheckCircleIcon}
                  translate={true}
                  IconColor="text-emerald-500 translate-y-0"
                >
                  Se sente sozinha lutando pelo relacionamento
                </ListItem>
                <ListItem
                  Icon={CheckCircleIcon}
                  translate={true}
                  IconColor="text-emerald-500 translate-y-0"
                >
                  Já tentou de tudo para mudar a realidade do relacionamento e não conseguiu
                </ListItem>
                <ListItem
                  Icon={CheckCircleIcon}
                  translate={true}
                  IconColor="text-emerald-500 translate-y-0"
                >
                  Quer viver uma relação digna, honrosa, leve e cheia de amor.
                </ListItem>
                <ListItem
                  Icon={CheckCircleIcon}
                  translate={true}
                  IconColor="text-emerald-500 translate-y-0"
                >
                  Não quer deixar a relação acabar porque ainda o ama
                </ListItem>
              </ul>
            </div>
            
            <div className="flex flex-col sm:items-center gap-4 px-4">
              <p className="flex items-center flex-col gap-2 text-xl font-medium text-white">
                <span>Clique no link abaixo e comece agora mesmo a restauração do seu casamento.</span>
                <ArrowDownCircleIcon className="h-6 w-6" />
              </p>
              <div className="w-full max-w-sm flex"><Button>Quero salvar meu relacionameto</Button></div>
            </div>
          </div>
        </Section>
        <Section classNameS="bg-zinc-950 pb-12 sm:pb-24">
          <div className="flex flex-col gap-12 sm:gap-20 text-center items-center">
            <h2 className="title px-4">Conheça a Tríade da Restauração usada no <strong>Método ARAR</strong></h2>
            <div className="w-full max-w-xl px-4">
              <Image
                src="/images/bg2.png"
                alt="Imagem da Tríde do Método: Deus, Resiliência e Amor"
                width={767}
                height={722}
              />
            </div>
            <div className="flex flex-col gap-8 bg-zinc-800 py-12 px-4 sm:px-8 rounded-2xl sm:rounded-xl w-full max-w-2xl">
              <h3 className="text-xl sm:text-2xl text-white font-semibold">É um programa onde você terá 45 vídeos explicando cada passo prático que você vai precisar aplicar diariamente para salvar o seu casamento e reacender o amor</h3>
              <ul className="text-left flex flex-col gap-4">
                <ListItem
                  Icon={XMarkIcon}
                  IconColor="text-red-500"
                >
                  Não é um curso sobre comunicação, mas vocês serão muito mais doces e amorosos ao conversar um com o outro
                </ListItem>
                <ListItem
                  Icon={XMarkIcon}
                  IconColor="text-red-500"
                >
                  Não é terapia de casal, mas a cada atividade diária, vocês se sentirão mais amados um pelo outro.
                </ListItem>
                <ListItem
                  Icon={XMarkIcon}
                  IconColor="text-red-500"
                >
                  Não é um curso sobre atração, mas você vai se sentir desejada por ele de novo.
                </ListItem>
                <ListItem
                  Icon={XMarkIcon}
                  IconColor="text-red-500"
                >
                  Não é uma fórmula para a felicidade, mas será muito mais feliz ao ver seu casamento sendo restaurado dia após dia.
                </ListItem>
              </ul>
            </div>
          </div>
        </Section>
        <Section classNameS="radial-2 py-12 sm:py-24">
          <div className="">
            <Payment />
          </div>
        </Section>
        <Section classNameS="radial-2 pb-12 sm:pb-24 px-4">
          <div className="flex flex-col items-center gap-6">
            <h2 className="title">Perguntas frequentes</h2>
            <div className="flex flex-col gap-2 sm:gap-4 w-full max-w-5xl">
            <Dropdown
              title="Meu cônjugue não quer restaurar a relação, funcionará para mim?"
            >
              <p>O método ARAR foi desenvolvido exatamente para pessoas que estão desesperançosas com o cônjuge, porque já sabem que ele(a) não irá querer tentar salvar a relação. Através do passo a passo, você conseguirá mudar a imagem mental que o seu cônjuge tem de você e consequentemente influencia-lo para construir uma relação extraordinária. </p>
            </Dropdown>
            <Dropdown
              title="Consigo aplicar o método mesmo se não morarmos juntos?"
            >
              <p>Sim, o método ARAR é feito tanto para casais que moram juntos, quanto para casais que moram separados. O método foi desenvolvido pensando em todos os tipos de casais, e que estejam em qualquer situação. Além disso, caso você não consiga aplicar o desafio, você terá um grupo de apoio e uma plataforma para tirar dúvidas para conseguir aplicar todos os passos.</p>
            </Dropdown>
            <Dropdown
              title="Já tentei de tudo, funciona para mim?"
            >
              <p>Sim. O método funciona porque ele é diferente de TUDO o que você já viu ou ousar tentar em sua vida. O que você vai ver dentro do método é algo extremamente prático e diferente de qualquer curso online que você já tenha assistido. O que você irá assistir e aplicar não tem disponível em nenhum outro lugar. </p>
            </Dropdown>
            <Dropdown
              title="Não tenho tempo, conseguirei aplicar?"
            >
              <p>Com certeza. Cada passo do método que você assistirá tem no máximo 15 minutos de duração. Você deverá assistir uma vídeoaula por dia, e aplicar um passo por dia. Portanto sim, você conseguirá aplicar. Além disso, você terá um ano de acesso ao método para ver e rever quantas vezes quiser. </p>
            </Dropdown>
            <Dropdown
              title="Estou separado, mas ainda mantenho contato. É possível voltar com o método?"
            >
              <p>Se vocês ainda mantém contato sim, é possível e temos inúmeros alunos que voltaram após aplicarem os 45 passos do método ARAR. O término acontece por conta da imagem mental negativa que foi construída na mente de cada um e através do método ARAR você conseguirá reverter essa imagem mental para reconquistar a pessoa que você ama. </p>
            </Dropdown>
          </div>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  )
}