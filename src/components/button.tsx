import { ReactNode } from "react"

interface ButtonProps {
    children: ReactNode
}

export default function Button({children}: ButtonProps) {
    return (
        <a href="https://pay.kiwify.com.br/yi7rtPT" className="button text-center my-shadow">{children}</a>
    )
}