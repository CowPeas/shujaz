export default function FeaturesBlocks() {
  return (
    <section className="relative">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gray-900 pointer-events-none" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">What We Sell</h2>
            <p className="text-xl text-gray-600">Chose from our wide Variety</p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">

            {/* 1st item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.bigw.com.au%2Fmedias%2Fsys_master%2Fimages%2Fimages%2Fhe5%2Fh8d%2F26674694258718.jpg&f=1&nofb=1&ipt=945a6c37dbb9a9e174b200dff9f9baf56cae4e887adade77828c197813c8267d&ipo=images" alt="Project 1" className="w-lg h-lg p-1 -mt-1 mb-2" />
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Kindergaten</h4>
              <p className="text-gray-600 text-center">Comfort and style for your little one</p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fn1.sdlcdn.com%2Fimgs%2Fa%2Fd%2F8%2FSDL518037508_1374576766_image5-80694.jpg&f=1&nofb=1&ipt=a0956879155898d557068cb6e505de9a5a4dae8b89c7e1d251225b2f157f023a&ipo=images" alt="Project 1" className="w-lg h-lg p-1 -mt-1 mb-2" />
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Primary School</h4>
              <p className="text-gray-600 text-center">They can last long hours of play</p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fn1.sdlcdn.com%2Fimgs%2Fa%2Fd%2F8%2FSDL518037508_1374576766_image5-80694.jpg&f=1&nofb=1&ipt=a0956879155898d557068cb6e505de9a5a4dae8b89c7e1d251225b2f157f023a&ipo=images"  alt="Project 1" className="w-lg h-lg p-1 -mt-1 mb-2" />
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Highschools</h4>
              <p className="text-gray-600 text-center">They last the whole Term</p>
            </div>

            {/* 4th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fn1.sdlcdn.com%2Fimgs%2Fa%2Fd%2F8%2FSDL518037508_1374576766_image5-80694.jpg&f=1&nofb=1&ipt=a0956879155898d557068cb6e505de9a5a4dae8b89c7e1d251225b2f157f023a&ipo=images"  alt="Project 1" className="w-lg h-lg p-1 -mt-1 mb-2" />
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Fashion</h4>
              <p className="text-gray-600 text-center">Always a Student</p>
            </div>
            </div>



        </div>
      </div>
    </section>
  )
}