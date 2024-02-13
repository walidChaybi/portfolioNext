import React from "react";

const Table = ({ data, name = "index" }) => {
  return (
    <>
      <div className="flex flex-col ">
        <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
          <div className="">
            <div className="overflow-hidden ">
              <table className="min-w-full ">
                <thead className="bg-indigo-400 border-b hover:bg-indigo-600">
                  <tr className="items-start">
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      {name}
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Type
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left "
                    >
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((tr) => (
                    <tr className="bg-gray-100 border-b ">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {tr.index}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 ">
                        {tr.type}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 ">
                        {tr.description}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Table;
