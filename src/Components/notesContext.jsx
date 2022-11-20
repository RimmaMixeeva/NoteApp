import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

const NotesContext = createContext({ notes: [], setNotes: () => {} });

export const useNotesContext = () => {
  return useContext(NotesContext);
};

function NotesContextProvider({ children }) {
  const [notes, setNotes] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('notes'));
    } catch (e) {
      return {};
    }
  });

  const handleSetNotes = useCallback((notes) => {
    setNotes(notes);
    const userString = JSON.stringify(notes);
    localStorage.setItem('notes', userString);
  }, []);

  const value = useMemo(
    () => ({ notes, setNotes: handleSetNotes }),
    [notes, handleSetNotes]
  );

  return (
    <NotesContext.Provider value={value}>{children}</NotesContext.Provider>
  );
}
export default NotesContextProvider;
