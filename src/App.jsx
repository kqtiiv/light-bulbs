import Navbar from "./components/navbar";

function App() {
  return (
    <div>
      <Navbar />
      <main className="pt-20">
        <section id="hero" className="text-center py-20 px-6 bg-white">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            美しさに米知多世界
            <br />
            KQ470 の光が、すべてを照らす。
          </h1>
          <p className="text-lg md:text-xl mb-10">
            Buy now. Illuminate your room with warm light.
          </p>
          <img
            src="hero.jpg"
            alt="KQ470 Bulb"
            className="mx-auto rounded-xl shadow-xl"
          />
        </section>

        <section id="about" className="py-16 px-6">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 items-center justify-center">
            <img
              src="light_bulb_sticker_1.png"
              alt="lamp"
              className="rotate-20"
            />
            <div>
              <h2 className="text-2xl font-bold mb-4">Why KQ470?</h2>
              <ul className="list-disc list-inside space-y-2 text-lg">
                <li>470 bulbs = 470 more reasons to live.</li>
                <li>A brighter room = brighter future.</li>
                <li>Eco-friendly, so will increase your life span.</li>
                <li>... and will keep your energy bills down.</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="purchase" className="py-16 px-6 text-center bg-white">
          <h2 className="text-2xl font-bold mb-8">How to Use Your Bulb</h2>
          <div className="flex flex-wrap justify-center gap-10 text-sm md:text-base">
            <div>
              <img
                src="fairylight2.jpg"
                className="w-28 h-28 object-cover rounded-full mx-auto mb-2"
              />
              <p>Aesthetic max your room</p>
            </div>
            <div>
              <img
                src="fairylight.png"
                className="w-28 h-28 object-cover rounded-full mx-auto mb-2"
              />
              <p>Make your own fairylights</p>
            </div>
            <div>
              <img
                src="lamps.jpg"
                className="w-28 h-28 object-cover rounded-full mx-auto mb-2"
              />
              <p>Fake a full moon indoors</p>
            </div>
          </div>
        </section>
        <section className="py-16 bg-[#FFF9BF] px-6 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Now Available for MORE THAN HALF PRICE
          </h2>
          <p className="mb-6 text-lg">Limited time offer - 0 regrets.</p>
          <button
            className="bg-[#CB9DF0] hover:bg-[#F0C1E1] text-white px-6 py-3 rounded-full font-semibold shadow-lg transition"
            onClick={() =>
              (window.location.href =
                "https://www.ebay.co.uk/sch/i.html?item=135571668106&rt=nc&_trksid=p4429486.m3561.l161211&_ssn=kqtiiv")
            }
          >
            Buy the Light
          </button>
        </section>

        <footer className="text-center text-sm py-5 text-[#CB9DF0] bg-[#FFF9BF]">
          &copy; 2025 Copyright. All rights reseved. No eyes harmed in testing.
        </footer>
      </main>
    </div>
  );
}

export default App;
