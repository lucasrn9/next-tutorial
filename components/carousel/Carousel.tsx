import Image from "next/image";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import arrowRight from "../../assets/vectors/arrow-right.svg";
import arrowLeft from "../../assets/vectors/arrow-left.svg";
import styles from "../../styles/Carousel.module.css";
import ProductCard from "../productCard/ProductCard";
import CarouselProps from "../../types/props/CarouselProps";

function SwiperPrevSlideButton() {
  const swiper = useSwiper();
  return (
    <button
      type="button"
      className={styles.swiperPrevSlideButton}
      onClick={() => swiper.slidePrev()}
    >
      <Image src={arrowLeft} />
    </button>
  );
}

function SwiperNextSlideButton() {
  const swiper = useSwiper();
  return (
    <button
      type="button"
      className={styles.swiperNextSlideButton}
      onClick={() => swiper.slideNext()}
    >
      <Image src={arrowRight} />
    </button>
  );
}

function Carousel({ title, products }: CarouselProps) {
  return (
    <div>
      <h2 className={styles.carouselTitle}>{title}</h2>
      <div className={styles.swipperWrapper}>
        <Swiper
          className={styles.mySwiper}
          modules={[Navigation, Pagination]}
          spaceBetween={0}
          pagination={{
            clickable: false,
            bulletActiveClass: styles.SwipperPaginationBulletActive,
          }}
          slidesPerView="auto"
          breakpoints={{
            290: { pagination: false },
            640: { slidesPerView: 2, pagination: false },
            820: { slidesPerView: 3, pagination: false },
          }}
          loop
        >
          <SwiperPrevSlideButton />
          {products.map((product) => (
            <SwiperSlide key={product.id} className={styles.centerSlide}>
              <ProductCard
                id={product.id}
                title={product.title}
                price={`$${product.price}`}
                imgSrc={product.image}
                imgAlt={product.title}
              />
            </SwiperSlide>
          ))}
          <SwiperNextSlideButton />
        </Swiper>
      </div>
    </div>
  );
}

export default Carousel;
