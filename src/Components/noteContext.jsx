import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

const NoteContext = createContext({ note: {}, setNote: () => {} });

export const useNoteContext = () => {
  console.log(useContext(NoteContext));
  return useContext(NoteContext);
};
function NoteContextProvider({ children }) {
  const [note, setNote] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('note'));
    } catch (e) {
      return {};
    }
  });

  const handleSetUser = useCallback((note) => {
    const noteString = JSON.stringify(note);
    localStorage.setItem('note', noteString);
    setNote(note);
  }, []);

  const value = useMemo(
    () => ({ note, setUser: handleSetUser }),
    [note, handleSetUser]
  );
  return <NoteContext.Provider value={value}>{children}</NoteContext.Provider>;
}
export default NoteContextProvider;
