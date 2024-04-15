import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Volpress - Transportadora',
  description: 'Transportadora volpress',
  metadataBase: new URL("https://volpress.vercel.app"),
  icons: '/favicon.png',
  openGraph: {
    title: "Volpress - Transportadora",
    description: "Volpress - Transportadora",
    url: "Volpress - Transportadora",
    siteName: "Volpress - Transportadora",
    images: [
      {
        url: "https://opengraph.b-cdn.net/production/documents/55f2a900-dd3a-4794-bbcb-ea57de67c326.jpg?token=3ofuTBWxl8CiUfsbV6OHNNm873VfpdW9r1gWc-P-Rk8&height=1009&width=1200&expires=33249210163",
        width: 800,
        height: 600,
      },
      {
        url: "https://opengraph.b-cdn.net/production/documents/55f2a900-dd3a-4794-bbcb-ea57de67c326.jpg?token=3ofuTBWxl8CiUfsbV6OHNNm873VfpdW9r1gWc-P-Rk8&height=1009&width=1200&expires=33249210163",
        width: 1800,
        height: 1600,
      },
    ],
    locale: "pt_BR",
    type: "website"
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
    },
  },
  keywords: ["transportadora de carga", "logística", "entrega rápida", "transporte de mercadorias",
    "transporte de carga", "transporte terrestre", "transportadora de encomendas", "serviços logísticos",
    "transporte rodoviário", "frete", "logística integrada", "transportadora expressa", "distribuição de cargas",
    "serviços de transporte", "transporte de produtos", "logística eficiente", "logística de distribuição",
    "soluções logísticas", "logística de transporte", "transporte de carga fracionada", "entrega de encomendas",
    "logística de armazenagem", "transporte de carga pesada", "entrega programada", "coleta e entrega de mercadorias",
    "transportadora", "volpress", "volpress transportes"
  ]
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
