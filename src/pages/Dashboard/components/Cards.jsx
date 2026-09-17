import { Cards as cardsData } from "../../../data/dashboard/cards/Cards";

const Cards = () => {
  return (
    <div className="p-8">

      <h1 className="text-3xl font-bold mb-6">
        Dashboard
      </h1>

      <div className="grid grid-cols-3 gap-5">
        {cardsData.map((item) => (
          <div
            key={item.title}
            className={`bg-white p-6 rounded-xl shadow border-l-4 ${item.css}`}
          >
            <div className="flex justify-between">

              <div>
                <p className="text-gray-500">
                  {item.title}
                </p>

                <h2 className="text-3xl font-bold mt-2">
                  {item.value}
                </h2>

                <p className="text-green-600 mt-4">
                  {item.change}
                </p>
              </div>

              <div className="bg-blue-600 text-white w-12 h-12 rounded-lg flex items-center justify-center font-bold">
                {item.icon}
              </div>

            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Cards;