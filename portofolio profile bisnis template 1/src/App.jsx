
import './App.css'
import Footer from './layout/Footer'
import Navbar from './layout/Navbar'

function App() {
  return (
    <>
      <Navbar />
      {/* bagian awal */}
      <section
        className="overflow-hidden bg-[url(https://images.unsplash.com/photo-1611242686614-8f49d33ce2cd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-top bg-no-repeat"
      >
        <div className="p-8 md:p-12 lg:px-16 lg:py-42">
          <div className="text-center ltr:sm:text-left rtl:sm:text-right">
            <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-6xl max-w-md">Lorem, ipsum.</h2>

            <p className="hidden max-w-lg text-white/90 md:mt-6 md:block md:text-md md:leading-relaxed">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore officia corporis quasi
              doloribus iure architecto quae
            </p>

            <div className="mt-4 sm:mt-8">
              <a
                href="#"
                className="inline-block bg-blue-500 px-12 py-3 text-lg font-medium text-white transition hover:bg-indigo-700 focus:ring-3 focus:ring-yellow-400 focus:outline-hidden"
              >
                Visit Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* bagain dua */}
      <section>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-32">
          <div className="grid grid-cols-2 row-gap-8 md:grid-cols-4">
            <div className="text-center">
              <h6 className="text-4xl font-bold text-gray--700">
                144K
              </h6>
              <p className="font-bold">Downloads</p>
            </div>
            <div className="text-center">
              <h6 className="text-4xl font-bold text-gray--700">
                32.1K
              </h6>
              <p className="font-bold">Users</p>
            </div>
            <div className="text-center">
              <h6 className="text-4xl font-bold text-gray--700">
                12.9K
              </h6>
              <p className="font-bold">Subscribers</p>
            </div>
            <div className="text-center">
              <h6 className="text-4xl font-bold text-gray--700">
                24.5K
              </h6>
              <p className="font-bold">Cookies</p>
            </div>
          </div>
        </div>
      </section>

      {/* bagisn tiga */}
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <header className="text-center">
            <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">Product Collection</h2>

            <p className="mx-auto mt-4 max-w-md text-gray-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque praesentium cumque iure
              dicta incidunt est ipsam, officia dolor fugit natus?
            </p>
          </header>

          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <li>
              <a href="#" className="group block overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />

                <div className="relative bg-white pt-3">
                  <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                    Basic Tee
                  </h3>

                  <p className="mt-2">
                    <span className="sr-only"> Regular Price </span>

                    <span className="tracking-wider text-gray-900"> £24.00 GBP </span>
                  </p>
                </div>
              </a>
            </li>

            <li>
              <a href="#" className="group block overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1686820740687-426a7b9b2043?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJpY2V8ZW58MHx8MHx8fDA%3D"
                  alt=""
                  className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />

                <div className="relative bg-white pt-3">
                  <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                    Basic Tee
                  </h3>

                  <p className="mt-2">
                    <span className="sr-only"> Regular Price </span>

                    <span className="tracking-wider text-gray-900"> £24.00 GBP </span>
                  </p>
                </div>
              </a>
            </li>

            <li>
              <a href="#" className="group block overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1613758235256-43a7bdc21d82?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmljZXxlbnwwfHwwfHx8MA%3D%3D"
                  alt=""
                  className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />

                <div className="relative bg-white pt-3">
                  <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                    Basic Tee
                  </h3>

                  <p className="mt-2">
                    <span className="sr-only"> Regular Price </span>

                    <span className="tracking-wider text-gray-900"> £24.00 GBP </span>
                  </p>
                </div>
              </a>
            </li>

            <li>
              <a href="#" className="group block overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1646980990815-1e97d5ee932f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHJpY2V8ZW58MHx8MHx8fDA%3D"
                  alt=""
                  className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />

                <div className="relative bg-white pt-3">
                  <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                    Basic Tee
                  </h3>

                  <p className="mt-2">
                    <span className="sr-only"> Regular Price </span>

                    <span className="tracking-wider text-gray-900"> £24.00 GBP </span>
                  </p>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section>
        <div className='px-8 py-24'>
          <div className='flex justify-between items-center'>
            <h1 className='font-bold text-gray-800 text-5xl'>SHOP</h1>
            <a
              className="inline-block border border-indigo-600 px-12 py-3 text-md font-bold text-indigo-600 hover:bg-indigo-600 hover:text-white focus:ring-3 focus:outline-hidden"
              href="#"
            >
              VISIT SHOP
            </a>
          </div>
          <div className='grid grid-cols-2 gap-8 mt-8'>
            <a href="#" className="group relative block">
              <div className="relative h-[350px] sm:h-[450px]">
                <img
                  src="https://images.unsplash.com/photo-1593795899768-947c4929449d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80"
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
                />

                <img
                  src="https://images.unsplash.com/photo-1593795899630-b6033c0fa58d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
                />
              </div>

              <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                <h3 className="text-xl font-medium text-white">Skinny Jeans Blue</h3>

                <p className="mt-1.5 text-xs text-pretty text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sequi dicta impedit
                  aperiam ipsum!
                </p>

                <span
                  className="mt-3 inline-block bg-black px-5 py-3 text-xs font-medium tracking-wide text-white uppercase"
                >
                  Shop Now
                </span>
              </div>
            </a>
            <a href="#" className="group relative block">
              <div className="relative h-[350px] sm:h-[450px]">
                <img
                  src="https://images.unsplash.com/photo-1593795899768-947c4929449d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80"
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
                />

                <img
                  src="https://images.unsplash.com/photo-1593795899630-b6033c0fa58d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
                />
              </div>

              <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                <h3 className="text-xl font-medium text-white">Skinny Jeans Blue</h3>

                <p className="mt-1.5 text-xs text-pretty text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sequi dicta impedit
                  aperiam ipsum!
                </p>

                <span
                  className="mt-3 inline-block bg-black px-5 py-3 text-xs font-medium tracking-wide text-white uppercase"
                >
                  Shop Now
                </span>
              </div>
            </a>

          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default App