import { CiLogout } from 'react-icons/ci';
import { IoAnalyticsOutline, IoTrailSignOutline } from 'react-icons/io5';
import { MdManageAccounts } from 'react-icons/md';
import { TbHome, TbSettings2 } from 'react-icons/tb';
import { NavItem } from '../dashboard/NavItem';

function NavBar() {
  return (
    <nav className="flex flex-col bg-white p-4 md:p-6 h-full lg:p-10 items-center rounded-2xl border border-primary-medium/25 w-full">
      <div className="flex flex-row w-full items-center justify-center lg:justify-start">
        <img
          src="logo.svg"
          alt="Logo do Sistema parecido com uma bussola"
          className="mr-2"
          width={60}
          height={60}
        />
        <h1 className="font-bold text-lg">Trilhas Interativas</h1>
      </div>

      <ul className="flex flex-row lg:flex-col flex-wrap justify-center gap-3 md:gap-5 mt-5 lg:mt-10 mb-5 lg:mb-10 w-full">
        <NavItem text="Inicio" icon={<TbHome />} />
        <NavItem text="Gerenciar Trilhas" icon={<IoTrailSignOutline />} />
        <NavItem
          text="Gerenciar Pontos de Interesse"
          icon={<IoAnalyticsOutline />}
        />
        <NavItem text="Perfil da Instituição" icon={<MdManageAccounts />} />

        <hr className="hidden lg:block my-4 border-gray-300 w-full" />

        <NavItem text="Configurarações de acesso" icon={<TbSettings2 />} />
        <NavItem
          text="Encerrar Sessão"
          icon={<CiLogout className="rotate-180 text-red-500" />}
        />
      </ul>
    </nav>
  );
}
export default NavBar;
