import { CAROUSEL_SLIDES, CAROUSEL_INTERVAL } from "@/constants";

export function Carousel() {
  return (
    <section className="container mx-auto px-4 py-6">
      <div
        className="relative overflow-hidden rounded-xl bg-gray-900 border border-gray-700"
        style={{ height: "280px" }}
        {...{
          "x-data": `{
            currentSlide: 0,
            slides: [${CAROUSEL_SLIDES.join(",")}],
            autoplay: null,
            init() {
              this.startAutoplay();
            },
            startAutoplay() {
              this.autoplay = setInterval(() => {
                this.next();
              }, ${CAROUSEL_INTERVAL});
            },
            stopAutoplay() {
              clearInterval(this.autoplay);
            },
            next() {
              this.currentSlide = (this.currentSlide + 1) % this.slides.length;
            },
            prev() {
              this.currentSlide = this.currentSlide === 0 ? this.slides.length - 1 : this.currentSlide - 1;
            }
          }`,
          "x-init": "init()",
        }}
      >
        <div className="relative h-full">
          {CAROUSEL_SLIDES.map((num) => (
            <div
              key={num}
              {...{
                "x-show": `currentSlide === ${num - 1}`,
                "x-transition:enter": "transition ease-out duration-300",
                "x-transition:enter-start": "opacity-0",
                "x-transition:enter-end": "opacity-100",
                "x-transition:leave": "transition ease-in duration-300",
                "x-transition:leave-start": "opacity-100",
                "x-transition:leave-end": "opacity-0",
              }}
              className="absolute inset-0"
              style={{ display: "none" }}
            >
              <img
                src={`https://picsum.photos/1200/280?random=${num}`}
                alt={`Slide ${num}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent flex items-end">
                <div className="p-6 sm:p-8 text-white w-full">
                  <div className="max-w-2xl">
                    <span className="inline-block px-3 py-1 bg-primary-500 text-white text-xs font-medium rounded-full mb-3">
                      Featured
                    </span>
                    <h2 className="text-xl sm:text-3xl font-bold mb-2">
                      Innovation Slide {num}
                    </h2>
                    <p className="text-sm sm:text-base text-gray-200">
                      Discover cutting-edge solutions for modern enterprises
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          {...{ "x-on:click": "stopAutoplay(); prev();" }}
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-white text-gray-900 p-2 rounded-lg hover:bg-gray-100 transition-colors z-10"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          {...{ "x-on:click": "stopAutoplay(); next();" }}
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-white text-gray-900 p-2 rounded-lg hover:bg-gray-100 transition-colors z-10"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {CAROUSEL_SLIDES.map((_, idx) => (
            <button
              key={idx}
              {...{
                "x-on:click": `stopAutoplay(); currentSlide = ${idx};`,
                "x-bind:class": `currentSlide === ${idx} ? 'w-8 bg-white' : 'w-2 bg-white/50'`,
              }}
              className="transition-all rounded-full"
              style={{ height: "8px" }}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}
