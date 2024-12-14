export default function Icon({ setOpenBrowser }) {
  return (
    <div className="fixed" onClick={() => setOpenBrowser(true)}>
      Icon
    </div>
  );
}
