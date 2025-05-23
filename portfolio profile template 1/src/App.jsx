import './App.css'
import Footer from './layout/Footer'
import Navbar from './layout/Navbar'

function App() {
  return (
    <>
      <Navbar />

      <section className="overflow-hidden bg-white lg:grid lg:place-content-center">
        <div className="mx-auto w-screen max-w-screen-xl px-4 py-12 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-prose text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              Lorem ipsum <strong className="text-indigo-600">dolor</strong> sit amet consectetur
            </h1>
            <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, nisi. Natus, provident
              accusamus impedit minima harum corporis iusto.
            </p>

            <div className="mt-4 flex justify-center gap-4 sm:mt-6">
              <a
                className="inline-block rounded-full border border-indigo-600 bg-indigo-600 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-indigo-700"
                href="#"
              >
                Buy Now
              </a>

              <a
                className="inline-block rounded-full border border-gray-200 px-5 py-3 font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900"
                href="#"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="flex justify-center px-4 sm:px-6 lg:px-8">
          <img
            src="public/beautiful.png"
          />
        </div>
      </section>

      <section>
        <div className='overflow-hidden mx-auto max-w-screen-xl px-4 py-8 sm:py-16 sm:px-6 lg:px-8 bg-slate-100'>
          <div className='flex my-4 items-center justify-center sm:text-4xl font-bold'>
            <span>Lorem, ipsum dolor</span>
            <img
              alt=""
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="w-25 h-10 sm:w-30 sm:h-17 mx-4 rounded-full object-cover"
            />
            <span>sit amet consectetur adipisicin</span>
          </div>
          <div className='flex my-4 items-center justify-center sm:text-4xl font-bold'>
            <span>elit. Facere fugit inventore</span>
            <img
              alt=""
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="w-25 h-10 sm:w-30 sm:h-17 mx-4 rounded-full object-cover"
            />
            <span>nesciunt officiis aspernatur</span>
          </div>
        </div>

      </section>

      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="space-y-4 md:space-y-8">
            <img
              src="https://images.unsplash.com/photo-1731690415686-e68f78e2b5bd?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="rounded-4xl w-full"
              alt=""
            />
            <div className="max-w-xl">
              <span className='text-xs'>Lorem ipsum dolor sit</span>
              <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
                Lorem ipsum dolor sit amet consectetur
              </h2>

              <p className="mt-4 text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur doloremque saepe
                architecto maiores
              </p>
              <a
                className="mt-4 group relative inline-flex items-center overflow-hidden rounded-full border border-current px-8 py-3 text-indigo-600 focus:ring-3 focus:outline-hidden"
                href="#"
              >
                <span className="absolute -end-full transition-all group-hover:end-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                  </svg>
                </span>
                <span className="text-sm font-medium transition-all group-hover:me-4"> Buy Now </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="space-y-4 md:space-y-8">
            <img
              src="https://images.unsplash.com/photo-1731690415686-e68f78e2b5bd?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="rounded-4xl"
              alt=""
            />
            <div className="max-w-xl">
              <span className='text-xs'>Lorem ipsum dolor sit</span>
              <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
                Lorem ipsum dolor sit amet consectetur
              </h2>

              <p className="mt-4 text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur doloremque saepe
                architecto maiores
              </p>
              <a
                className="mt-4 group relative inline-flex items-center overflow-hidden rounded-full border border-current px-8 py-3 text-indigo-600 focus:ring-3 focus:outline-hidden"
                href="#"
              >
                <span className="absolute -end-full transition-all group-hover:end-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                  </svg>
                </span>

                <span className="text-sm font-medium transition-all group-hover:me-4"> Buy Now </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <header>
            <h2 class="text-xl font-bold text-gray-900 sm:text-3xl">Product Collection</h2>
            <p class="mt-4 max-w-md text-gray-500">
              Our premium selection of products designed for your lifestyle.
            </p>
          </header>

          <div class="mt-8 relative">
            <div class="flex space-x-6 overflow-x-scroll pb-6 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
              <div class="flex-shrink-0 w-64">
                <a href="#" class="group block">
                  <div class="relative h-64 sm:h-80 rounded-lg overflow-hidden bg-gray-100">
                    <img
                      src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1450&q=80"
                      alt="Product"
                      class="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1450&q=80"
                      alt="Product alternate view"
                      class="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    />
                  </div>
                  <div class="mt-3">
                    <h3 class="text-sm font-medium text-gray-900">Premium Speaker</h3>
                    <p class="mt-1 text-sm text-gray-700">$189.99</p>
                  </div>
                </a>
              </div>

              <div class="flex-shrink-0 w-64">
                <a href="#" class="group block">
                  <div class="relative h-64 sm:h-80 rounded-lg overflow-hidden bg-gray-100">
                    <img
                      src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1450&q=80"
                      alt="Product"
                      class="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1450&q=80"
                      alt="Product alternate view"
                      class="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    />
                  </div>
                  <div class="mt-3">
                    <h3 class="text-sm font-medium text-gray-900">Wireless Headphones</h3>
                    <p class="mt-1 text-sm text-gray-700">$149.99</p>
                  </div>
                </a>
              </div>

              <div class="flex-shrink-0 w-64">
                <a href="#" class="group block">
                  <div class="relative h-64 sm:h-80 rounded-lg overflow-hidden bg-gray-100">
                    <img
                      src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1450&q=80"
                      alt="Product"
                      class="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1450&q=80"
                      alt="Product alternate view"
                      class="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    />
                  </div>
                  <div class="mt-3">
                    <h3 class="text-sm font-medium text-gray-900">Sport Shoes</h3>
                    <p class="mt-1 text-sm text-gray-700">$129.99</p>
                  </div>
                </a>
              </div>

              <div class="flex-shrink-0 w-64">
                <a href="#" class="group block">
                  <div class="relative h-64 sm:h-80 rounded-lg overflow-hidden bg-gray-100">
                    <img
                      src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1450&q=80"
                      alt="Product"
                      class="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1520390138845-fd2d229dd553?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1450&q=80"
                      alt="Product alternate view"
                      class="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    />
                  </div>
                  <div class="mt-3">
                    <h3 class="text-sm font-medium text-gray-900">Smart Watch</h3>
                    <p class="mt-1 text-sm text-gray-700">$199.99</p>
                  </div>
                </a>
              </div>

              <div class="flex-shrink-0 w-64">
                <a href="#" class="group block">
                  <div class="relative h-64 sm:h-80 rounded-lg overflow-hidden bg-gray-100">
                    <img
                      src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1450&q=80"
                      alt="Product"
                      class="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1450&q=80"
                      alt="Product alternate view"
                      class="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    />
                  </div>
                  <div class="mt-3">
                    <h3 class="text-sm font-medium text-gray-900">Premium Speaker</h3>
                    <p class="mt-1 text-sm text-gray-700">$189.99</p>
                  </div>
                </a>
              </div>

              <div class="flex-shrink-0 w-64">
                <a href="#" class="group block">
                  <div class="relative h-64 sm:h-80 rounded-lg overflow-hidden bg-gray-100">
                    <img
                      src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1450&q=80"
                      alt="Product"
                      class="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1450&q=80"
                      alt="Product alternate view"
                      class="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    />
                  </div>
                  <div class="mt-3">
                    <h3 class="text-sm font-medium text-gray-900">Wireless Headphones</h3>
                    <p class="mt-1 text-sm text-gray-700">$149.99</p>
                  </div>
                </a>
              </div>

              <div class="flex-shrink-0 w-64">
                <a href="#" class="group block">
                  <div class="relative h-64 sm:h-80 rounded-lg overflow-hidden bg-gray-100">
                    <img
                      src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1450&q=80"
                      alt="Product"
                      class="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1450&q=80"
                      alt="Product alternate view"
                      class="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    />
                  </div>
                  <div class="mt-3">
                    <h3 class="text-sm font-medium text-gray-900">Sport Shoes</h3>
                    <p class="mt-1 text-sm text-gray-700">$129.99</p>
                  </div>
                </a>
              </div>

              <div class="flex-shrink-0 w-64">
                <a href="#" class="group block">
                  <div class="relative h-64 sm:h-80 rounded-lg overflow-hidden bg-gray-100">
                    <img
                      src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1450&q=80"
                      alt="Product"
                      class="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1520390138845-fd2d229dd553?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1450&q=80"
                      alt="Product alternate view"
                      class="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    />
                  </div>
                  <div class="mt-3">
                    <h3 class="text-sm font-medium text-gray-900">Smart Watch</h3>
                    <p class="mt-1 text-sm text-gray-700">$199.99</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="px-4 py-16 mx-auto max-w-screen-xl">
        <div class="grid gap-8 sm:grid-cols-3">
          <div class="text-center">
            <h6 class="text-5xl font-bold text-purple-600">144K</h6>
            <p class="font-bold text-gray-700">Downloads</p>
          </div>
          <div class="text-center">
            <h6 class="text-5xl font-bold text-purple-600">12.9K</h6>
            <p class="font-bold text-gray-700">Subscribers</p>
          </div>
          <div class="text-center">
            <h6 class="text-5xl font-bold text-purple-600">27.3K</h6>
            <p class="font-bold text-gray-700">Users</p>
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-12 mx-auto max-w-7xl">
          <div className="text-center">
            <h1 className="text-2xl font-semibold text-gray-800 lg:text-3xl dark:text-white">
              Have any Questions?
            </h1>
            <p className="mt-2 text-gray-500 dark:text-gray-400">We're here to help</p>
          </div>

          <div className="mt-12 lg:flex lg:gap-12 xl:gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-lg font-medium text-gray-600 dark:text-gray-300">About us</h2>
              <h1 className="mt-4 text-3xl font-semibold text-gray-800 dark:text-white md:text-4xl">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </h1>
              <p className="mt-4 text-gray-500 dark:text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            <div className="mt-12 lg:w-1/2 lg:mt-0">
              <div className="space-y-4">
                {[
                  {
                    question: "How can I pay for my appointment?",
                    answer: "You can pay using credit card, bank transfer, or other digital payments. We accept most major payment methods."
                  },
                  {
                    question: "What can I expect at my first consultation?",
                    answer: "During your first consultation, we will discuss your needs, evaluate your situation, and propose the best solutions."
                  },
                  {
                    question: "What are your opening hours?",
                    answer: "We are open Monday to Friday, 08:00 AM - 05:00 PM."
                  },
                  {
                    question: "Do I need a referral?",
                    answer: "No referral is necessary. You can book directly."
                  },
                  {
                    question: "Is the cost covered by private health insurance?",
                    answer: "Some health insurance may cover the cost, please check with your provider."
                  }
                ].map((item, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg dark:border-gray-700">
                    <button
                      className="flex items-center justify-between w-full p-4 text-left"
                      onClick={(e) => {
                        const content = e.currentTarget.nextElementSibling;
                        const icon = e.currentTarget.querySelector('svg');
                        content.classList.toggle('hidden');
                        icon.classList.toggle('rotate-45');
                      }}
                    >
                      <h3 className="font-medium text-gray-700 dark:text-white">
                        {item.question}
                      </h3>
                      <svg
                        className="flex-shrink-0 w-5 h-5 text-blue-500 transition-transform duration-200"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                      </svg>
                    </button>

                    <div className="hidden p-4 pt-0 text-gray-500 dark:text-gray-400">
                      <p>{item.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default App
