import { Button } from "./ui/button";

export default function Panel({ setOpenTextEditor, openTextEditor }) {
  return (
    <div className="flex m-2 justify-between">
      <div className={`flex-1 ${openTextEditor ? "block" : "hidden"}`}>
        <Button onClick={() => setOpenTextEditor(false)}>Previous</Button>
      </div>

      <div className="ml-auto ">
        <Button onClick={() => setOpenTextEditor(true)}>
          {openTextEditor ? "Post" : "Next"}
        </Button>
      </div>
    </div>
  );
}
