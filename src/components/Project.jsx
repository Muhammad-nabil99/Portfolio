import Skills from "./Skills";

function Project() {
  return (
    <div className=" flex flex-wrap justify-center h-fit gap-3 w-full ">
      <div className="hover:border-2 hover:border-[#faad1b]  max-w-80 border-2 p-2 rounded-md">
        <div className="relative -z-10  dark:z-20">
          <img
            src="./image/fluent.png"
            className="h-40 w-full object-cover rounded-md"
            alt="fluent"
          />
          <div className="place-self-start absolute bottom-0   w-full h-10 flex items-center p-2  ">
            <Skills type="sm" teckStacks={["react", "tailwind", "supabase"]} />
          </div>
        </div>
        <h2 className="font-bold my-2 text-center capitalize ">Fluent</h2>
        <span className="text-sm ">
          Helps students to master multiple languages, by providing
          comprehensive and interactive learning. Students can choose languages
          such as English, French, Korean and others.
        </span>
      </div>

      <div className=" hover:border-2 hover:border-[#faad1b]  max-w-80 border-2 p-2 rounded-md">
        <div className="relative -z-10 dark:z-0 ">
          <img
            src="./image/trakel.png"
            className="h-40 w-full object-cover rounded-md"
            alt="trakel"
          />
          <div className="place-self-start absolute bottom-0   w-full h-10 flex items-center p-2">
            <Skills
              type="sm"
              teckStacks={["javascript", "bootstrap", "firebase"]}
            />
          </div>
        </div>
        <h2 className="font-bold my-2 text-center capitalize">Trakel</h2>
        <span className="text-sm ">
          An application that helps travelers in Pekalongan to find the right
          tourist destination, in this application we provide several choices
          such as places, culinary, and hotel lodging
        </span>
      </div>
      <div className=" hover:border-2 hover:border-[#faad1b]  max-w-80 border-2 p-2 rounded-md">
        <div className="relative -z-10 dark:z-0 ">
          <img
            src="./image/the-wild-oasis.png"
            className="h-40 w-full object-cover rounded-md"
            alt="the_wild_oasis"
          />
          <div className="place-self-start absolute bottom-0   w-full h-10 flex items-center p-2">
            <Skills
              type="sm"
              teckStacks={[
                "react",
                "supabase",
                "reactQuery",
                "redux",
                "reactRouter",
              ]}
            />
          </div>
        </div>
        <h2 className="font-bold my-2 text-center capitalize ">
          World wide oasis
        </h2>
        <span className="text-sm ">
          Hotel, cabin and villa booking platform with fast and easy online
          reservation features. Enjoy a practical, secure, and flexible booking
          experience according to customer needs.
        </span>
      </div>
    </div>
  );
}
export default Project;
