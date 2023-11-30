import { useNavigate } from "react-router-dom";

function Table({ titles, values, hasLinks }) {
  const navigate = useNavigate();

  const renderTableData = (key, text) => {
    return (
      <td
        key={key}
        scope="col"
        className="text-neutral-200 px-6 py-3 font-normal"
      >
        {text}
      </td>
    );
  };

  return (
    <div className="relative w-full overflow-x-auto h-fit scrollbar-thin scrollbar-thumb-neutral-600 scrollbar-track-neutral-700">
      <table className="w-full text-sm text-left text-neutral-300">
        <thead className="text-xs text-neutral-300 uppercase bg-bg-dark">
          <tr>
            {titles.map((title, index) => {
              return (
                <th key={index} scope="col" className="px-6 py-2">
                  {title}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody className="">
          {hasLinks
            ? values.map((value, index) => {
                const [link, ...row] = value;
                return (
                  <tr
                    key={index}
                    className="bg-bg-layer border-b border-neutral-600 hover:bg-bg-layer-hover cursor-pointer"
                    onClick={() => navigate(link)}
                  >
                    {row.map((text, index2) => {
                      return renderTableData(index2, text);
                    })}
                  </tr>
                );
              })
            : values.map((value, index) => {
                return (
                  <tr
                    key={index}
                    className="bg-bg-layer border-b border-neutral-600 hover:bg-bg-sec"
                  >
                    {value.map((text, index2) => {
                      return renderTableData(index2, text);
                    })}
                  </tr>
                );
              })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
