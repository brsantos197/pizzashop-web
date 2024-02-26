import { Pizza } from 'lucide-react'
import { Outlet } from 'react-router-dom'
export const AuthLayout = () => {
  return (
    <div className="grid h-screen grid-cols-1 grid-rows-[1fr_250px] md:grid-cols-2 md:grid-rows-1">
      <div className="order-2 flex h-full flex-col justify-between border-r border-foreground/5 bg-muted p-10 text-muted-foreground md:order-1">
        <div className="flex items-center gap-3 text-lg font-medium text-foreground">
          <Pizza className="h-5 w-5" />
          <span className="semi-bold">pizza.shop</span>
        </div>
        <footer className="text-sm">
          Painel do parceiro &copy; pizza.shop - {new Date().getFullYear()}
        </footer>
      </div>
      <div className="relative order-1 flex items-center justify-center md:order-2">
        <Outlet />
      </div>
    </div>
  )
}
