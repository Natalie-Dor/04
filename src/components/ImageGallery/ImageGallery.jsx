// Галерея повинна рендеритися лише тоді, коли є які-небудь завантажені зображення. Це добра практика не включати елемент li в компонент карточки, а залишити його частиною компонента галереї.
export default function ImageGallery({ items }) {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <div>
            <img src={item.urls.small} alt={item.alt_description} />
          </div>
        </li>
      ))}
    </ul>
  );
}
//   return (
//     <ul>
//       {items.map(item => (
//         <li key={item.objectID}>
//           <a href={item.url}>{item.title}</a>
//         </li>
//       ))}
//     </ul>
//   );
// }
