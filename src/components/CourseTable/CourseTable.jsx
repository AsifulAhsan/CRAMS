function CourseTable() {
  return (
    <div className="mx-4 my-2">
      <p className="text-2xl font-medium">All Courses</p>
      <table className="flex gap-12 mt-8 mb-4 bg-white p-8 rounded-xl border-1 border-gray-200">
        <div className="flex-col">
          <div className="gap-2">
            <p className="text-xl mb-8">Course Code</p>
            <p className="mt-4 mb-8">CS101</p>
            <p className=" mb-8">EC101</p>
            <p className=" mb-8">MA101</p>
            <p className=" mb-8">EN101</p>
            <p className=" mb-8">HI101</p>
          </div>
        </div>
        <div className="flex-col">
          <div className="gap-2">
            <p className="text-xl mb-8">Course title</p>
            <p className="mt-4 mb-8">Programming 1</p>
            <p className=" mb-8">Microeconomics</p>
            <p className=" mb-8">Calculus 1</p>
            <p className=" mb-8">Composition 1</p>
            <p className=" mb-8">History Teaching 1</p>
          </div>
        </div>
        <div className="flex-col">
          <div className="gap-2">
            <p className="text-xl mb-8">Instructor</p>
            <p className="mt-4 mb-8">Md. Ali Khan</p>
            <p className=" mb-8">Rina Begum</p>
            <p className=" mb-8">Mohammad Rashedul Islam</p>
            <p className=" mb-8">Jamal Assad</p>
            <p className=" mb-8">Shariar Mohammad Aqib</p>
          </div>
        </div>
        <div className="flex-col">
          <div className="gap-2">
            <p className="text-xl mb-8">Credits</p>
            <p className="mt-4 mb-8">3</p>
            <p className=" mb-8">3</p>
            <p className=" mb-8">4</p>
            <p className=" mb-8">3</p>
            <p className=" mb-8">2</p>
          </div>
        </div>
        <div className="flex-col">
          <div className="gap-2">
            <p className="text-xl mb-8">Seats available</p>
            <p className="mt-4 mb-8">CS101</p>
            <p className=" mb-8">EC101</p>
            <p className=" mb-8">MA101</p>
            <p className=" mb-8">EN101</p>
            <p className=" mb-8">HI101</p>
          </div>
        </div>
        <div className="flex-col">
          <div className="gap-2">
            <p className="text-xl mb-2">Actions</p>
            <button className="mt-4 mb-4 bg-[#222831] text-white px-2 py-2 rounded-md">
              Add to plan
            </button>
          </div>
          <button className="mb-4 bg-[#222831] text-white px-2 py-2 rounded-md">
            Add to plan
          </button>
          <div>
            <button className="mb-4 bg-[#222831] text-white px-2 py-2 rounded-md">
              Add to plan
            </button>
          </div>
          <div>
            <button className="mb-4 bg-[#222831] text-white px-2 py-2 rounded-md">
              Add to plan
            </button>
          </div>
          <div>
            <button className="mb-4 bg-[#222831] text-white px-2 py-2 rounded-md">
              Add to plan
            </button>
          </div>
        </div>
      </table>
    </div>
  );
}

export default CourseTable;
