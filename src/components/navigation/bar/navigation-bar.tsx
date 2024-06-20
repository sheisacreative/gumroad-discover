import ButtonOutline from "@/components/action/button/outline";
import ButtonPrimaryBlack from "@/components/action/button/primary-black";
import ButtonPrimaryPink from "@/components/action/button/primary-pink";

export default async function NavigationBar() {
  return (
    <header>
      <h1>Bar</h1>
      <ButtonPrimaryBlack text="Start Selling" href="#" />
      <ButtonPrimaryPink text="Start Selling" href="#" />
      <ButtonOutline text="Start Selling" href="#" />
    </header>
  );
}
