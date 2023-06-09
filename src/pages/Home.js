import { Header } from "../components/Header";
import { Counter } from "../components/Counter";

export function HomePage() {
  return (
    <main>
      <div className="container">
        <Header
          heading="Countit Word Counter"
          subHeading="Simple tool to count words and characters in your paragraph"
        />
        <Counter />
      </div>
    </main>
  );
}
