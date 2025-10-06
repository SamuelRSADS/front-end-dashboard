function Header({
  name = 'Parque Estadual da Serra do Mar',
  subtitle = 'Núcleo Caraguatatuba',
  logo = 'logo.svg',
}: {
  name?: string;
  subtitle?: string;
  logo?: string;
}) {
  return (
    <header
      className="flex w-full h-auto md:h-1/4 flex-col md:flex-row rounded-3xl justify-center items-center
        bg-gradient-to-t from-[#D9D9D959] to-[#FAFAFAE0] text-primary-dark p-4 md:p-10"
    >
      <div className="mt-4 md:mt-10 text-center md:text-left">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">{name}</h1>
        <h2 className="text-xl md:text-2xl">{subtitle}</h2>
      </div>
      <img
        src={logo}
        alt=""
        className="bg-white m-4 md:m-6"
        height={80}
        width={80}
      />
    </header>
  );
}

export default Header;
