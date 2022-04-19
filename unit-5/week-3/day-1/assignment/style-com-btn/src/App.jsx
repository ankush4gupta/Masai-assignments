
import { Button } from "./components/Button";

export default function App() {
  return (
    <div className="App">
      <Button type={"primary"}>Primary Button</Button>
      <Button type={"default"}> Default Button</Button>
      <Button type={"dashed"}> Dashed Button</Button>
      <Button type={"text"}> Text Button</Button>
      <Button type={"link"}> Link Button</Button>
    </div>
  );
  }