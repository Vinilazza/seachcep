import styles from "./Home.module.css";
import { useState } from "react";
import { PaperClipIcon } from "@heroicons/react/20/solid";
import { toast } from "react-toastify";
import "./Home.css";
const Home = () => {
  const [cep, setCep] = useState("");
  const [results, setResults] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    let cepAlterado = cep.replace(/[^\w\s]/gi, "");

    if (cepAlterado.length === 8) {
      const res = await fetch(`https://viacep.com.br/ws/${cepAlterado}/json/`)
        .then((res) => res.json())
        .catch((err) => console.log(err));

      toast.success("Consulta de cep concluida com sucesso!");
      setResults(res);
      console.log(res);
    }

    setCep("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="wrapper bg-cover flex align-center justify-center	bg-center  h-96	">
          <div className="flex items-center justify-center		">
            <div className=" wrap    p-7  rounded-xl">
              <div className="opacity-100">
                <h1 className="mb-4 text-gray-900">
                  Encontre o seu cep com facilidade!{" "}
                </h1>
                <div className="flex items-center">
                  <label
                    htmlFor="cep"
                    className="block text-sm font-medium leading-6 text-gray-900 me-3"
                  >
                    Digite o cep
                  </label>
                  <div className="me-3">
                    <input
                      name="cep"
                      type="text"
                      autoComplete="cep"
                      onChange={(e) => setCep(e.target.value)}
                      value={cep}
                      className="block w-full rounded-md border-0 py-1.5 pl-3  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                  <button
                    type="submit"
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Buscar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
      <div className="container mx-auto mb-5">
        {results && (
          <div key={results.cep} className={styles.results}>
            <div>
              <div className="px-4 sm:px-0">
                <h3 className="text-base font-semibold leading-7 text-gray-900 mt-4 ">
                  Informações sobre o cep
                </h3>
              </div>
              <div className="mt-6 border-t border-gray-100">
                <dl className="divide-y divide-gray-100">
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">
                      Cep
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      {results.cep}
                    </dd>
                  </div>
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">
                      Estado
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      {results.estado} | {results.regiao}
                    </dd>
                  </div>
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">
                      Bairro
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      {results.bairro}
                    </dd>
                  </div>
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">
                      Cidade
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      {results.localidade}
                    </dd>
                  </div>
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">
                      Logradouro
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      {results.logradouro}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
