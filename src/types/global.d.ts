export {}
declare global { 

  interface IBook {
    id: number;
    title: string;
  }

  interface BookEditProps {
    book: {
      id: number;
      title: string;
    };
    onSubmit: () => void;
  }

  interface IBooksContext {
    books: Array<IBooks>;
    fetchBook: () => Promise<void>;
    editBookById: (id: number, newTitle: string) => Promise<void>;
    deleteBookById: (id: number) => Promise<void>;
    createBook: (title: string) => Promise<void>;
  }
  
  interface IProviderProps {
    children: React.ReactNode;
  }

  interface IItems{
    id: number;
    label: string;
    content: string;
  };
  interface AccordingItems {
    items: Array<IItems>
  }

  interface IOptions { label: string; value: string; }
  interface OptionsItems {
    options: Array<IOptions>
    onChange: (option: boolean | ((prevState: boolean) => boolean)) => void
    value:{ label: string; value: string; } | null;
  }
  interface IPanel {
    children: React.ReactNode;
    className: ReactDOM
    onClick: () => void

  }
  interface ILink {
    to: string | { path: string; params: { [key: string]: string } };
    children: React.ReactNode;
  }
  interface IRout{
    children: React.ReactNode;
    path?: string | { path: string; params: { [key: string]: string } };
  }
}