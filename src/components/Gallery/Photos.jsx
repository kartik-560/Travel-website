import './Photos.css'
const Photos = () => {
  return (

    <div className="">
      <h2 className="text-2xl sm:text-3xl flex justify-center gap-2 text-center font-semibold mb-5">
        Photo Gallery <span className="flex items-center">(Better Backpacking)</span>
      </h2>


      <div className="hidden sm:block">
        <div className="box overflow-x-scroll scrollbar-hide space-x-1 px-4">
          <img src={"/assest/Group/G1.jpeg"} alt='' />
          <img src={"/assest/Group/G2.jpeg"} alt='' />
          <img src={"/assest/Group/G3.jpeg"} alt='' />
          <img src={"/assest/Group/G4.jpeg"} alt='' />
          <img src={"/assest/Group/G5.jpeg"} alt='' />
          <img src={"/assest/Group/G6.jpeg"} alt='' />
          <img src={"/assest/Group/G7.jpeg"} alt='' />
          <img src={"/assest/Group/G8.jpeg"} alt='' />
          <img src={"/assest/Group/G9.jpeg"} alt='' />
          <img src={"/assest/Group/G10.jpeg"} alt='' />
          <img src={"/assest/Group/G11.jpeg"} alt='' />
          <img src={"/assest/Group/G12.jpeg"} alt='' />
          <img src={"/assest/Group/G13.jpeg"} alt='' />
          <img src={"/assest/Group/G14.jpeg"} alt='' />
          <img src={"/assest/Group/G15.jpeg"} alt='' />
          <img src={"/assest/Group/G16.jpeg"} alt='' />
          <img src={"/assest/Group/G17.jpeg"} alt='' />
          <img src={"/assest/Group/G18.jpeg"} alt='' />
          <img src={"/assest/Group/G19.jpeg"} alt='' />
          <img src={"/assest/Group/G20.jpeg"} alt='' />
          <img src={"/assest/Group/G21.jpeg"} alt='' />
          <img src={"/assest/Group/G22.jpeg"} alt='' />
          <img src={"/assest/Group/G23.jpeg"} alt='' />
          <img src={"/assest/Group/G24.jpeg"} alt='' />
          <img src={"/assest/Group/G25.jpeg"} alt='' />
          <img src={"/assest/Group/G26.jpeg"} alt='' />
          <img src={"/assest/Group/G27.jpeg"} alt='' />
          <img src={"/assest/Group/G28.jpeg"} alt='' />
          <img src={"/assest/Group/G29.jpeg"} alt='' />
        </div>
      </div>

      {/* ✅ Mobile View - only on small screens */}
      <div className="block sm:hidden overflow-x-auto px-4 mt-4">
        <div className="flex space-x-4 pb-4">
          {Array.from({ length: 29 }, (_, i) => i + 1).map((n) => (
            <img
              key={n}
              src={`/assest/Group/G${n}.jpeg`}
              className="w-60 h-40 object-cover rounded-lg shadow-md"
              alt=''
            />
          ))}
        </div>
      </div>
    </div>



  )

}
export default Photos


