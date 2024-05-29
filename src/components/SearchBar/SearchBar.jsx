import toast from 'react-hot-toast';
import css from './SearchBar.module.css';
export default function SearchBar({ onSubmit }) {
  const handleSubmit = e => {
    e.preventDefault();
    const value = e.target.query.value.trim();
    if (!value) {
      toast.error('Enter your query!');
      return;
    }
    onSubmit(value);
    e.target.reset();
  };
  return (
    <header className={css.header}>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.input}
          name="query"
          type="text"
          // autocomplete="off"
          // autofocus
          placeholder="Search images and photos"
        />
        <button className={css.btn} type="submit">
          Search
        </button>
      </form>
    </header>
  );
}
// Якщо під час натискання кнопки відправки форми текстове поле порожнє, покажи користувачеві сповіщення про те, що необхідно ввести текст для пошуку зображень. Ця перевірка виконується в компоненті SearchBar в момент відправки форми. Для сповіщень використовуй бібліотеку React Hot Toast.
// import toast, { Toaster } from 'react-hot-toast';

// const notify = () => toast('Here is your toast.');

// const App = () => {
//   return (
//     <div>
//       <button onClick={notify}>Make me a toast</button>
//       <Toaster />
//     </div>
//   );
// };
