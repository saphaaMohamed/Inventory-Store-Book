import BestSells from "./BestSells"
import RightSwiper from "./RightSwiper"

const Home = () => {
  return (
    <div>
      {/* hero section  */}
      <div className="flex justify-around items-center mt-10 px-2 py-4 bg-teal-400" >
      <div className="text w-[700px] ">
        <h1 className="text-[49px] font-bold ">Welcome to our Inventory Store</h1>
        <p className="text-lg mb-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est sequi nam eveniet facilis animi repellat sint laborum perspiciatis, blanditiis voluptates ea. </p>
        <div>
            <input type="text" placeholder="Search" className="px-7 py-2" />
            <button className="px-7 py-2 bg-blue-700 text-white outline-0">Search</button>
        </div>
      </div>
      <div className="right">
        <RightSwiper/>
      </div>
      </div>
     <div className="flex flex-col gap-3 items-center mt-7 mb-10">
      <h1 className="text-[30px] font-bold ">Best Seller Books </h1>
      <BestSells/>
     </div>
    
      <div className="flex justify-around items-center">
      <div>
        <img src="/src/assets/books/images.jpeg" className="w-[400px]" alt="" />
      </div>
      <div className="text w-[500px]">
          <h1 className="font-bold text-[40px]">Find Your Favorite  Book Here</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis, placeat ullam deserunt optio adipisci quasi fugit nobis, velit, cum assumenda laudantium quibusdam repudiandae possimus modi eius perspiciatis accusamus quas reprehenderit!</p>
          <div className="flex gap-10 mb-4 mt-8" >
            <div>
              <h2 className="font-bold">800+</h2>
              <p>Book Listing </p>
            </div>
            <div>
              
              <h2 className="font-bold">500+</h2>
           
              <p> Regiter User</p>
            </div>
            <div>
              <h2 className="font-bold">100+</h2>
              
              <p>Pdf Download  </p>
            </div>
          </div>
          <button className="bg-blue-600 text-white py-2 px-4">See More</button>
      </div>

      </div>
    
    
    </div>
  )
}

export default Home
