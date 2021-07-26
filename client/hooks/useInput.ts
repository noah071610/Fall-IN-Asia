import { useState, useCallback } from "react";

export default function useInput<T>(initialValue: T): any {
  const [Value, setValue] = useState(initialValue);
  const handler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue((e.target as any).value);
  }, []);
  return [Value, handler, setValue];
}
