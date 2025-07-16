import { SetStateAction, useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import escritorio from "./assets/aplicacion.jpg";
import basico from "./assets/basico.jpg";
import intermedio from "./assets/intermedio.jpg";
import { IoCodeOutline } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import dashboard from "./assets/dashboard.png";
import celu from "./assets/celu.png";
import micro from "./assets/micro.png";
import foto from "./assets/foto.png";

function App() {
  const text = ["Desarrollador web", "Desarrollador App Móvil", "Apasionado por la tecnología"];
  const [cambio, setCambio] = useState<string>(text[0]);
  let index = 1;

  useEffect(() => {
    const interval = setInterval(() => {
      index = (index + 1) % text.length; // Cambia al siguiente texto
      setCambio(text[index]);
    }, 2000); // Cambia cada 2 segundos

    return () => clearInterval(interval); // Limpia el intervalo al desmontar
  }, [text]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const [selectedCategory, setSelectedCategory] = useState("All");

  const portafolio = [
    {
      id: 1,
      categoria: "web",
      titulo: "Sistemas Pos (En proceso)",
      descripcion: "AxiomaPos es un sistema POS desarrollado de manera colaborativa junto con mi equipo. Este proyecto tiene como objetivo optimizar la gestión de ventas e inventarios en restaurantes, tiendas y hoteles. y una integración multiplataforma (web y Android).",
      git: "https://github.com/Organizacion-AxiomaGest/AxiomaPos",
      icon: <FaGithub size={36} />,
      image: dashboard,
    },
  ]

  const filteredPortfolio = selectedCategory === "All"
    ? portafolio
    : portafolio.filter((item) =>
      selectedCategory === "" && item.categoria === "" ||
      selectedCategory === "" && item.categoria === ""
    );


  const handleCategoryClick = (category: SetStateAction<string>) => {
    setSelectedCategory(category);
  };

  return (

    <div className="flex">
      <div className="w-1/5 h-screen fixed flex flex-col justify-between p-8 bg-white shadow-xl">
        <h1 className="text-4xl font-bold">
          Mi portafolio<span className="text-blue-500"></span>
        </h1>
        <nav className="flex flex-col mt-10 space-y-10">
          <a href="#inicio" className="text-sm font-medium text-gray-900 hover:text-blue-500">
            Inicio
          </a>
          <a href="#quien-soy" className="text-sm font-medium text-gray-900 hover:text-blue-500">
            Quién soy
          </a>
          <a href="#portafolio" className="text-sm font-medium text-gray-900 hover:text-blue-500">
            Portafolio
          </a>
          <a href="#certificados" className="text-sm font-medium text-gray-900 hover:text-blue-500">
            Certificaciones
          </a>
          <a href="#contactos" className="text-sm font-medium text-gray-900 hover:text-blue-500">
            Contacto
          </a>
        </nav>
        <footer className="text-sm text-gray-500 mt-10">
          Copyright © 2024 by{" "}
          <a href="#" className="text-blue-500 hover:underline">
            CV
          </a>
        </footer>
      </div>

      <div id="inicio" className="ml-[20%] w-[80%] h-screen shadow-2xl border">
        <div className="bg-cover bg-center bg-[url('./assets/new113.jpg')] h-screen flex">
          <div className="ml-40 my-auto">
            <h1 className="text-5xl font-bold">cristian vergara perez</h1>
            <p className="text-lg mt-4">Soy un Desarrollador {cambio}</p>
            <br />
            <a href="#contactos"><button type="submit" className="block rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm
              hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              contactos
            </button></a>
          </div>
        </div>

        <div id="quien-soy" className="flex bg-[url('./assets/5723102.jpg')] gap-4 h-screen items-center justify-center p-8 shadow-2xl border">
          <img src={escritorio} alt="" className="rounded-lg bg-cover bg-center w-[50%] h-[50%] ml-10" p-2 shadow-xl />
          <div className="p-8 bg-white shadow-xl rounded-xl">
            <h2 className="text-3xl font-bold">¿Quién soy?</h2>
            <p className="mt-4 text-gray-600">
              soy Técnico en Análisis de Software  He desarrollado proyectos personales y colaborativos utilizando Html ,css ,React y React Native, aplicando metodologías ágiles como Scrum. 
              Tambien se de hadware y software, y Excel avanzado.
            </p> 
          </div>
        </div>

        <div id="portafolio" className="p-50 bg-[url('./assets/rm222-mind-24.jpg')] shadow-2xl border">
          <h2 className="text-3xl font-bold text-center">Portafolio</h2>
          <br />
          

          <div className="grid grid-cols-1  xs:grid-cols-2 sm:grid-cols-2 gap-10 p-8">
            {filteredPortfolio.map((row) => (
              <div className="bg-white shadow-xl rounded-lg p-8">
                <IoCodeOutline size={36} color="primary" />
                <br />
                <h2 className="text-3xl font-bold">{row.titulo}</h2>
                <p className="mt-4 text-gray-600">
                  {row.descripcion}
                </p><br />
                <img src={row.image} alt="" className="cursor-pointer" onClick={() => setSelectedImage(row.image)} />
                <br />
                <a className="flex justify-center" href={row.git}>
                  <FaGithub size={36} />
                </a>
              </div>
            ))}
          </div>
        </div>

        <div id="certificados" className="p-30 bg-gray-100">
          <h2 className="text-3xl font-bold text-center">Certificados</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-8">
            <div className="bg-white shadow-xl rounded-lg p-8">
              <img src={basico} alt="Certificado Ultimate Python" className="rounded-md mb-4 cursor-pointer" onClick={() => setSelectedImage(basico)} />
              <h3 className="text-xl font-bold">Excel Basico</h3>
              <p className="mt-2 text-gray-600">
                Certificado obtenido por completar el curso <b>Excel Basico</b>, otorgado por <b>Ramon Antonio Zapata</b>. Emitido el <b>6 de noviembre de 2022</b>.
              </p>
            </div>
            <div className="bg-white shadow-xl rounded-lg p-8">
              <img src={intermedio} alt="Certificado React" className="rounded-md mb-4 cursor-pointer" onClick={() => setSelectedImage(intermedio)} />
              <h3 className="text-xl font-bold">Excel intermedio</h3>
              <p className="mt-2 text-gray-600">
                Certificado obtenido por completar el curso <b>Excel Intermedio</b>, otorgado por <b>Ramon Antonio Zapata</b>. Emitido el <b>18 de junio de 2023</b>.
              </p>
            </div>
          </div>
        </div>

        {selectedImage && (
          <div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
            onClick={() => setSelectedImage(null)}
          >
            <img src={selectedImage} alt="Certificado Ampliado" className="rounded-lg max-w-6xl max-h-full" />
          </div>
        )}


        <div id="contactos" className="bg-cover bg-center h-screen flex bg-[url('./assets/5594016.jpg')]">
          <div className="ml-40 my-auto">
            <h1 className="text-5xl font-bold">Contacto</h1>
            <p className="text-lg mt-4">Número de teléfono: 3193382042</p>
            <br /><br />
            <div className="flex gap-6">
              <a href="https://github.com/crisgamox" className="text-blue-550">
                <FaGithub size={36} />
              </a>
              <a href="mailto:vrgrcristian@gmail.com" className="text-blue-550">
                <MdEmail size={36} />
              </a>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
