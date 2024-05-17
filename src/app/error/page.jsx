export default function BrokenPage() {
    throw new Error(
      "Uh-oh, it looks like we have cat-napped this page! Purr-haps you took a wrong turn?"
    );
  
    return (
      <div>
        <h4>Purr-sistence pays off! Enjoy your visit.</h4>
      </div>
    );
  }