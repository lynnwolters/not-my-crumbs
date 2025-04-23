// STYLES //
import { Title, Span } from "./Greeting.css.js";

// COMPONENT //
function Greeting({ title, span }) {
  return (
    <Title>
      {title}
      <Span>{span}</Span>
    </Title>
  );
}

export default Greeting;
