import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

const NoteContext = createContext({ note: {}, setNote: () => {} });

export const useNoteContext = () => {
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

  const handleSetNote = useCallback((note) => {
    setNote(note);
    const userString = JSON.stringify(note);
    localStorage.setItem('note', userString);
  }, []);

  const value = useMemo(
    () => ({ note, setNote: handleSetNote }),
    [note, handleSetNote]
  );

  return <NoteContext.Provider value={value}>{children}</NoteContext.Provider>;
}
export default NoteContextProvider;
