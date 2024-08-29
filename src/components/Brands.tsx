export function Brands() {
  return (
    <section className="py-12 bg-stone-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center flex-wrap">
          {[
            "BEAST",
            "CryptoGenie",
            "chatfood",
            "JUCR",
            "Lendflow",
            "NISSAN",
            "Riptide",
          ].map((client) => (
            <div
              key={client}
              className="text-stone-400 text-lg font-semibold py-2"
            >
              {client}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
