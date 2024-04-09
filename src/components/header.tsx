import Image from "next/image";
import Button from "./button";

export default function Header() {
    return (
        <header className="min-h-screen w-full flex justify-center items-center bg-zinc-950 px-4 xl:py-0 py-12">
            <div className="w-full max-w-6xl sm:grid sm:grid-cols-2 flex flex-col items-center gap-12">
                <div className="flex flex-col gap-4">
                    <div className="w-48 sm:w-56">
                        <Image
                            src="/images/logo.webp"
                            alt="Logo A Rota do Amor Restaurad"
                            width={903}
                            height={369}
                        />
                    </div>
                    <h1 className="text-white font-bold text-3xl sm:text-4xl">Restaure o amor do seu relacionamento em apenas 45 dias</h1>
                    <p className="text-zinc-200 sm:text-lg font-medium">Assista o vídeo e descubra como você pode começar hoje a recuperar seu relacionamento com atividades 100% práticas</p>
                    <div className="w-full max-w-sm flex"><Button>Quero salvar meu relacionamento</Button></div>
                </div>
                <div className="radial p-[2px] w-full sm:p-1 rounded-xl my-shadow">
                    <iframe className="w-full h-[256px] sm:h-[364px] rounded-xl" src="https://www.youtube.com/embed/5TprfYmZMnw?si=-ecVvkHSjtncT3eR" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
            </div>
        </header>
    )
}