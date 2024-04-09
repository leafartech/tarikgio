import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "A Rota do Amor Restaurado",
  description: "A Rota do Amor Restaurado | Restaure o amor do seu relacionmento em 45 dias",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <script dangerouslySetInnerHTML={{
          __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-MW385TR7')
        `}} />
      </head>
      <body className={montserrat.className}>
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MW385TR7"
          height="0" width="0"></iframe></noscript>
        {children}
      </body>
    </html>
  );
}
