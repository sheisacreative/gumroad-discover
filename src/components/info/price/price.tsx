import styles from "./price.module.css";

export default async function Price({ price }: { price: number }) {
  return (
    <div className={styles.priceContainer}>
      <div className={`body-large ${styles.price}`}>${price}</div>
      <svg
        width="79"
        height="40"
        viewBox="0 0 79 40"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask id="path-1-inside-1_728_320" fill="white">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M79 0H0V40H79L58.2105 20L79 0Z"
          />
        </mask>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M79 0H0V40H79L58.2105 20L79 0Z"
          fill={price > 0 ? "var(--primary-100)" : "var(  --secondary-yellow)"}
        />
        <path
          d="M0 0V-1H-1V0H0ZM79 0L79.6933 0.720658L81.4819 -1H79V0ZM0 40H-1V41H0V40ZM79 40V41H81.4819L79.6933 39.2793L79 40ZM58.2105 20L57.5172 19.2793L56.7681 20L57.5172 20.7207L58.2105 20ZM0 1H79V-1H0V1ZM1 40V0H-1V40H1ZM79 39H0V41H79V39ZM57.5172 20.7207L78.3067 40.7207L79.6933 39.2793L58.9038 19.2793L57.5172 20.7207ZM78.3067 -0.720658L57.5172 19.2793L58.9038 20.7207L79.6933 0.720658L78.3067 -0.720658Z"
          fill="black"
          mask="url(#path-1-inside-1_728_320)"
        />
      </svg>

      {/* <Image
          src={"/other/flag-corner.svg"}
          width="32"
          height="40"
          alt=""
          className={styles.priceFlagCorner}
          style={{ backgroundColor: "#fff" }}
        /> */}
    </div>
  );
}
