import { useEffect } from "react";

function useDocumentTitle(count) {
  useEffect(() => {
    document.title = `Your Count times- ${count}`;
  }, [count]);
}

export default useDocumentTitle;
