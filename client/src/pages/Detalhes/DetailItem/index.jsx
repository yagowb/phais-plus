function InfoItem({ title, content }) {
  return (
    <section>
      <div className="text-neutral-main text-sm">{title}</div>
      {typeof content === "object" ? InfoListFormat(content) : <div>{content}</div>}
    </section>
  );
}

function InfoListFormat(list) {
  return (
    <div className="px-4">
      <ul className="list-disc pl-3">
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function PresentationItem({ data }){
  return (
    <div>
      {data.map((item, index) => (
        <section key={index}>
          <h2 className="text-lg">
            {item.titulo}
          </h2>
          {PresentationListFormat(item.detalhes)}
          <section className="pl-4">
            <h3 className="text-neutral-300">Dosagem</h3>
            {PresentationListFormat(item.dosagem)}
          </section>
        </section>
        )
      )}
    </div>
  )
}

function PresentationListFormat(list) {
  return (
    <ul className="list-disc pl-8 text-neutral-main">
      {Object.entries(list).map(([index, item]) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

function ContainerItem({ title, data }) {
  return (
    <section className="space-y-1 flex-1 w-full">
      <div className="text-sm w-full text-neutral-main">{title}</div>
      <ul className="bg-bg-layer w-full rounded-lg divide-y divide-custom-divide">
        {data.map((item, index) => (
          <li key={index} className="p-4">
            <h1>{item.nome}</h1>{" "}
            <p className="font-thin text-sm">{item.fabricante}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export {InfoItem, PresentationItem, ContainerItem};
