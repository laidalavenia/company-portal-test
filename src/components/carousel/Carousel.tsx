import { CAROUSEL_SLIDES, CAROUSEL_INTERVAL } from "@/constants";

export function Carousel() {
  return (
    <section className="container mx-auto px-4 py-6 sm:py-8">
      <div
        className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-2xl bg-gray-900"
        style={{ height: "250px" }}
        x-data={`{
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
        }`}
        x-init="init()"
      >
        <div className="relative h-full">
          {CAROUSEL_SLIDES.map((num) => (
            <div
              key={num}
              x-show={`currentSlide === ${num - 1}`}
              x-transition-enter="transition ease-out duration-500"
              x-transition-enter-start="opacity-0 transform translate-x-full"
              x-transition-enter-end="opacity-100 transform translate-x-0"
              x-transition-leave="transition ease-in duration-500"
              x-transition-leave-start="opacity-100 transform translate-x-0"
              x-transition-leave-end="opacity-0 transform -translate-x-full"
              className="absolute inset-0"
              style={{ display: "none" }}
            >
              <img
                src={`https://picsum.photos/1200/300?random=${num}`}
                alt={`Slide ${num}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
                <div className="px-6 sm:px-12 text-white max-w-2xl">
                  <h2 className="text-2xl sm:text-4xl font-bold mb-2 sm:mb-4">
                    Innovation Slide {num}
                  </h2>
                  <p className="text-sm sm:text-lg text-gray-200">
                    Discover cutting-edge solutions for modern enterprises
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          x-on-click="stopAutoplay(); prev();"
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 backdrop-blur-sm text-white p-2 sm:p-3 rounded-full transition-all z-10"
        >
          <svg
            className="w-4 h-4 sm:w-6 sm:h-6"
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
          x-on-click="stopAutoplay(); next();"
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 backdrop-blur-sm text-white p-2 sm:p-3 rounded-full transition-all z-10"
        >
          <svg
            className="w-4 h-4 sm:w-6 sm:h-6"
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

        <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-1 sm:gap-2 z-10">
          {CAROUSEL_SLIDES.map((_, idx) => (
            <button
              key={idx}
              x-on-click={`stopAutoplay(); currentSlide = ${idx};`}
              className="transition-all"
              x-bind-class={`currentSlide === ${idx} ? 'w-6 sm:w-8 bg-white' : 'w-2 sm:w-3 bg-white/50'`}
              style={{ height: "8px", borderRadius: "4px" }}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}
