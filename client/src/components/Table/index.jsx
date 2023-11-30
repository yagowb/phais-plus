import { useNavigate } from "react-router-dom";

function Table({ titles, values, hasLinks }) {
  const navigate = useNavigate();

  const renderTableData = (key, text) => {
    return (
      <td
        key={key}
        scope="col"
        className={`font-normal px-6 py-3 ${
          key === 0 ? "text-green-light" : ""
        }`}
      >
        {text ?? "-"}
      </td>
    );
  };

  return (
    <div className="relative w-full overflow-x-auto h-fit scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-700">
      <table className="w-full text-sm text-left text-neutral-300">
        <thead className="text-neutral-300 ">
          <tr>
            {titles.map((title, index) => {
              return (
                <th key={index} scope="col" className="px-6 py-3">
                  {title}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {hasLinks
            ? values.map((value, rowIndex) => {
                const [link, ...row] = value;
                return (
                  <tr
                    key={rowIndex}
                    className="bg-bg-layer border-bg-main border-y-2 hover:bg-bg-sec cursor-pointer"
                    onClick={() => navigate(link)}
                  >
                    {row.map((text, columnIndex) =>
                      renderTableData(columnIndex, text)
                    )}
                  </tr>
                );
              })
            : values.map((value, rowIndex) => {
                return (
                  <tr
                    key={rowIndex}
                    className="bg-bg-layer border-bg-main border-y-2 hover:bg-bg-sec cursor-pointer"
                  >
                    {value.map((text, columnIndex) =>
                      renderTableData(columnIndex, text)
                    )}
                  </tr>
                );
              })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
