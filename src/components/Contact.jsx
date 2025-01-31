function Contact() {
  return (
    <form action="" className="flex flex-col gap-3 my-10 max-w-[34rem] m-auto">
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="font-normal">Name :</label>
        <input required  name="name" id="name" className="ring-1 ring-[#faad1b] rounded-sm p-1 dark:bg-slate-800"  type="text" placeholder="Name" />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="Email" className="font-normal">Email :</label>
        <input required  name="Email" id="Email" className="ring-1 ring-[#faad1b] rounded-sm p-1 dark:bg-slate-800"  type="text" placeholder="Email" />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="Description" className="font-normal">Description :</label>
        <textarea required  name="Description" id="Description" className="ring-1 ring-[#faad1b] rounded-sm p-1 h-40 dark:bg-slate-800"  type="text" placeholder="Description" />
      
      </div>
      <button className="border-2 w-fit py-1 px-4 m-auto bg-[#faad1b] text-white font-bold rounded-md ">Submit</button>
    </form>
  );
}
export default Contact;
