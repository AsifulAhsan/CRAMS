function CourseTable() {
  return (
    <div className="mx-4 my-2">
      <p className="text-2xl font-medium">All Courses</p>
      <table className="flex gap-12 mt-8">
        <div className="flex-col">
          <div className="gap-2">
            <p className="text-xl">Course Code</p>
            <p className="mt-4 mb-4">CS101</p>
            <p className=" mb-4">EC101</p>
            <p className=" mb-4">MA101</p>
            <p className=" mb-4">EN101</p>
            <p className=" mb-4">HI101</p>
          </div>
        </div>
        <div className="flex-col">
          <div className="gap-2">
            <p className="text-xl">Course title</p>
            <p className="mt-4 mb-4">CS101</p>
            <p className=" mb-4">EC101</p>
            <p className=" mb-4">MA101</p>
            <p className=" mb-4">EN101</p>
            <p className=" mb-4">HI101</p>
          </div>
        </div>
      </table>
    </div>
  );
}

export default CourseTable;
