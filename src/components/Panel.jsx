import { Button } from "./ui/button";

export default function Panel({ setOpenTextEditor }) {
  return (
    <div className="flex justify-end m-2">
      <Button onClick={() => setOpenTextEditor(true)}>Next</Button>
    </div>
  );
}
