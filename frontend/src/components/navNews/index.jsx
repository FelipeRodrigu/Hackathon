import styles from "./index.module.css";

export default function NavNews({ setSelectedCategory }) {
  const handleCategoryChange = (event) => {
    const newCategory = event.target.id;
    setSelectedCategory(newCategory);
  };

  return (
    <section className={styles.NavNewsContainer}>
      <div className={styles.NavNewsWrapper}>
        <ul>
          <li>
            <input
              type="radio"
              name="categoria"
              id="todos"
              defaultChecked
              onChange={handleCategoryChange}
            />
            <label htmlFor="todos">TODOS</label>
          </li>
          <li>
            <input
              type="radio"
              name="categoria"
              id="tecnologia"
              onChange={handleCategoryChange}
            />
            <label htmlFor="tecnologia">TECNOLOGIA</label>
          </li>
          <li>
            <input
              type="radio"
              name="categoria"
              id="ciência"
              onChange={handleCategoryChange}
            />
            <label htmlFor="ciência">CIÊNCIA</label>
          </li>
          <li>
            <input
              type="radio"
              name="categoria"
              id="espaço"
              onChange={handleCategoryChange}
            />
            <label htmlFor="espaço">ESPAÇO</label>
          </li>
          <li>
            <input
              type="radio"
              name="categoria"
              id="ia"
              onChange={handleCategoryChange}
            />
            <label htmlFor="ia">IA</label>
          </li>
          <li>
            <input
              type="radio"
              name="categoria"
              id="inovação"
              onChange={handleCategoryChange}
            />
            <label htmlFor="inovação">INOVAÇÃO</label>
          </li>
          <li>
            <input
              type="radio"
              name="categoria"
              id="design"
              onChange={handleCategoryChange}
            />
            <label htmlFor="design">DESIGN</label>
          </li>
          <li>
            <input
              type="radio"
              name="categoria"
              id="games"
              onChange={handleCategoryChange}
            />
            <label htmlFor="games">GAMES</label>
          </li>
        </ul>
      </div>
    </section>
  );
}