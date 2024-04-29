import Image from "next/image";
import Button from "./button";

export default function Payment() {
    return (
        <div className="px-8 py-16 rounded-2xl sm:rounded-xl bg-zinc-800 flex flex-col gap-6 sm:gap-8 w-full max-w-lg">
            <h2 className="title text-4xl sm:text-5xl text-left">Oferta exclusiva</h2>
            <div className="flex flex-col gap-0 items-start text-white">
                <h5 className="flex gap-2 items-end">
                    <span className="text-zinc-200 font-medium text-lg">de R$ </span>
                    <span className="line-through text-3xl sm:text-4xl font-bold">797,00</span>
                </h5>
                <h5 className="flex gap-2 items-end">
                    <span className="text-zinc-200 font-medium text-lg">12x de R$ </span>
                    <span className="text-3xl sm:text-4xl font-bold">34,84</span>
                </h5>
                <h5 className="mt-2">ou R$ 347 à vista</h5>
                {/* <h5 className="text-3xl">por <strong>12x de 34,84</strong></h5> */}
            </div>
            <div className="py-2 border-y border-white">
                <p className="text-white">Clique no botão abaixo para entrar no grupo VIP onde será anunciado o valor promocional.</p>
            </div>
            <div className="flex">
                <Button checkout={true}>Fazer inscrição</Button>
            </div>
            <div className="flex justify-center">
                <Image
                    src="/images/pay.png"
                    alt="Métodos de pagamento"
                    width={610}
                    height={56}
                />
            </div>
        </div>
    )
}