let roo = document.getElementById("root");

let root = ReactDOM.createRoot(roo);

const Header = () => {
  return (
    <header className="header">
      <nav className="nav-left">
        <a href="#" id="bestSell">
          Бестселлеры
        </a>
        <a href="#" id="catalog">
          Каталог
        </a>
      </nav>

      <a href="/" className="logo">
        <img
          src="https://oc.kg/templates/mobile/img/logooc_autumn.png?1763148844"
          alt="Logo"
        />
      </a>

      <form className="search-form">
        <input type="text" placeholder="Искать фильм..." />
        <button type="submit">Поиск</button>
      </form>
    </header>
  );
};

const MovieCard = (props) => {
  return (
    <div className="movie-card">
      <div className="poster">
        <img src={props.src} alt={props.title} />
      </div>

      <div className="info">
        <h1 className="title">{props.title}</h1>

        <div className="meta">
          <span>{props.year}</span>
          <span>{props.category}</span>
          <span>{props.duration} мин.</span>
          <span>{props.country}</span>
        </div>

        <div className="details">
          <span>
            <strong>Режиссёр:</strong> {props.producer}
          </span>
          <span>
            <strong>Студия:</strong> {props.studio}
          </span>
        </div>
      </div>
    </div>
  );
};

const movies = [
  {
    src: "https://kinogo.ec/uploads/mini/minifull/391/1731374197-neproschennyj.webp",
    title: "Непрошенный",
    year: "2018",
    category: "Игровое",
    duration: "106",
    country: "Россия",
    producer: "Сарик Андреасян",
    studio: "Кинокомпания Большое кино",
  },
  {
    src: "https://kinogo.online/uploads/mini/fullstory/a10/3923fd866203ef1b9f62386f7d77c.webp",
    title: "Матрица",
    year: "1999",
    category: "Фантастика",
    duration: "136",
    country: "США",
    producer: "Лана и Лилли Вачовски",
    studio: "Warner Bros",
  },
  {
    src: "https://kinogo.online/uploads/mini/fullstory/baa/bece55b612d40928fbec06a1bcfed.webp",
    title: "Аватар",
    year: "2009",
    category: "Фантастика",
    duration: "162",
    country: "США",
    producer: "Джеймс Камерон",
    studio: "20th Century Fox",
  },
  {
    src: "https://kinogo.online/uploads/mini/fullstory/aad/ee6b593d39121a90400c9e551a1d9.webp",
    title: "Начало",
    year: "2010",
    category: "Фантастика",
    duration: "148",
    country: "США",
    producer: "Кристофер Нолан",
    studio: "Warner Bros.",
  },
];

const SideBar = () => {
  return (
    <div className="sideBar">
      <h2 className="side-title">🎬 Категории</h2>

      <ul className="side-menu">
        <li>
          <a href="#">Бестселлеры</a>
        </li>
        <li>
          <a href="#">Драмы</a>
        </li>
        <li>
          <a href="#">Комедии</a>
        </li>
        <li>
          <a href="#">Документальные</a>
        </li>
        <li>
          <a href="#">Шоу</a>
        </li>
        <li>
          <a href="#">Истории</a>
        </li>
      </ul>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>Категории</h3>
        <a href="#">Фантастика</a>
        <a href="#">Драмы</a>
        <a href="#">Комедии</a>
        <a href="#">Документальные</a>
      </div>

      <div className="footer-section">
        <h3>О проекте</h3>
        <a href="#">О нас</a>
        <a href="#">Контакты</a>
        <a href="#">Реклама</a>
      </div>

      <div className="footer-section">
        <h3>Мы в соцсетях</h3>
        <a href="#">Instagram</a>
        <a href="#">YouTube</a>
        <a href="#">Telegram</a>
      </div>
    </footer>
  );
};

root.render(
  <>
    <Header />
    <SideBar />
    <div className="container">
      <div className="movies-list">
        {movies.map((movie) => (
          <MovieCard
            src={movie.src}
            title={movie.title}
            year={movie.year}
            category={movie.category}
            duration={movie.duration}
            country={movie.country}
            producer={movie.producer}
            studio={movie.studio}
          />
        ))}
      </div>
    </div>
    <Footer />
  </>
);
