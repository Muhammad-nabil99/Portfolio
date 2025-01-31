function Experience() {
  return (
    <div className=" flex flex-wrap flex-col sm:flex-row  justify-center items-center sm:items-stretch gap-3 ">
      <div className=" max-w-80 border-2 p-2 rounded-md hover:border-2 hover:border-[#faad1b]">
        <img
          src="./image/studi-independen-img.png"
          className="h-52 w-full object-cover  rounded-md"
          alt="studi_independen"
        />
        <h2 className="font-bold my-2 text-center">Studi Independen</h2>
        <p className="text-sm p-1">
          Joined <span className="font-bold"><span className="text-yellow-400"> SIB Studi Independen x Dicoding </span></span> by taking concentration on
          Front-End & Back-End Developer
        </p>
      </div>
      <div className=" max-w-80 border-2 p-2 rounded-md hover:border-2 hover:border-[#faad1b]">
        <img
          src="./image/udemy.png"
          className="h-52 w-full object-cover rounded-md"
          alt="udemy-bootcamp"
        />
        <h2 className="font-bold my-2 text-center">Bootcamp</h2>
        <p className="text-sm p-1">
          Joined <span className="font-bold text-violet-700">Udemy</span> by taking concentration on
          Front-End 
        </p>
      </div>
      <div className="max-w-80 hover:border-2 hover:border-[#faad1b] snap-center border-2 p-2 rounded-md">
        <img
          src="./image/freelance-v2.jpeg"
          className="h-52 w-full object-cover rounded-md"
          alt="freelance"
        />
        <h2 className="font-bold my-2 text-center">Freelance</h2>
        <p className="text-sm p-1">
          Working on various web development projects as Front-End & Back-End
          Developer, including the creation of websites and application systems.
          Focused on efficiency, performance, and optimal user experience.
          
        </p>
      </div>
    </div>
  );
}
export default Experience;
