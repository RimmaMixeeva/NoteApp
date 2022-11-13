function CreateNote() {
  return (
    <div className=" mt-20 flex flex-col justify-center max-w-sm mx-auto">
      <div className="text-black pb-5 flex flex-row justify-center pt-5 text-3xl">
        <button className="bg-gray-300 pt-3 pb-3 pl-9 pr-9 ">Back</button>
        <div className="pt-3 flex justify-center font-semibold">
          Create new note
        </div>
      </div>
      <form
        action=""
        method="get"
        className="text-black pb-5 pt-5 mt-3 text-3xl  "
      >
        <div>
          <textarea
            className="bg-gray-300 pt-3 pl-3 mt-5"
            type="text"
            placeholder="Name"
            required
          />
        </div>
        <div>
          <textarea
            className="bg-gray-300 pt-3 pb-3 pl-3 mt-5"
            type="text"
            placeholder="Node text..."
            required
          />
        </div>
        <div>
          <input
            type="submit"
            value="Create"
            className="bg-gray-300 pt-3 pb-3 pl-3 pr-3 mt-5 flex justify-center mx-auto w-60"
          />
        </div>
      </form>
    </div>
  );
}

export default CreateNote;
