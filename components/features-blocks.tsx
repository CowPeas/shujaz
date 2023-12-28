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
            <h2 className="h2 mb-4">What We Do</h2>
            <p className="text-xl text-gray-600">Our Services Include:</p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">

            {/* 1st item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <img src="https://c.pxhere.com/photos/05/1b/livingroom_interior_design_furniture_indoors_apartment_decor-678048.jpg!d" alt="Project 1" className="w-lg h-lg p-1 -mt-1 mb-2" />
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Curtains and Curtain Rods</h4>
              <p className="text-gray-600 text-center">Different Colors and sizes</p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <img src="https://c.pxhere.com/photos/6d/b7/living_room_interior_furniture_design_decor_home_sofa_table-758306.jpg!d" alt="Project 1" className="w-lg h-lg p-1 -mt-1 mb-2" />
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Wooden and Tile Flooring</h4>
              <p className="text-gray-600 text-center">Hardwoods, Ceramic and more</p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <img src="https://c.pxhere.com/photos/27/d7/home_real_estate_residential_living_room_residence_house_view_windows-1210556.jpg!d"  alt="Project 1" className="w-lg h-lg p-1 -mt-1 mb-2" />
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Gypsum Works</h4>
              <p className="text-gray-600 text-center">Best marble work</p>
            </div>

            {/* 4th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <img src="https://c.pxhere.com/photos/5f/21/brick_wall_cabinet_chair_decoration_design_furniture_house_indoors-1176275.jpg!d"  alt="Project 1" className="w-lg h-lg p-1 -mt-1 mb-2" />
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Wall Art</h4>
              <p className="text-gray-600 text-center">Pick the best pictures</p>
            </div>

            {/* 5th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <img src="https://c.pxhere.com/photos/eb/d7/apartment_living_room_home_room_living_room_interior_interior_sofa_house-1183357.jpg!d"  alt="Project 1" className="w-lg h-lg p-1 -mt-1 mb-2" />
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Paints and Color Scheming</h4>
              <p className="text-gray-600 text-center">Express your personlity in colors </p>
            </div>

            {/* 6th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <img src="https://c.pxhere.com/images/1f/71/40179c1481d681e615701f624a87-1590901.jpg!d"  alt="Project 1" className="w-lg h-lg p-1 -mt-1 mb-2" />
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Lighting</h4>
              <p className="text-gray-600 text-center">Let there be Light</p>
            </div>

                {/* 7th item */}
              <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <img src="https://c.pxhere.com/photos/1f/a3/table_interior_plate_flower_glass-151614.jpg!d"  alt="Project 1" className="w-lg h-lg p-1 -mt-1 mb-2" />
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Wallpapers</h4>
              <p className="text-gray-600 text-center">No Paints. Fine</p>
            </div>

                        {/* 8th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <img src="https://c.pxhere.com/photos/2b/c0/architecture_render_external_design_photoshop_3d_3dsmax_crown_render-599832.jpg!d"  alt="Project 1" className="w-lg h-lg p-1 -mt-1 mb-2" />
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Furniture Works</h4>
              <p className="text-gray-600 text-center">Best craftmanship around</p>
            </div>

                        {/* 9th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <img src="https://c.pxhere.com/photos/a5/22/window_light_sofa_pillow_store-64269.jpg!d" alt="Project 1" className="w-lg h-lg p-1 -mt-1 mb-2" />
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">UpHolstry</h4>
              <p className="text-gray-600 text-center">Space in every living room</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}