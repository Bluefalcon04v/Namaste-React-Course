export const Title = () => ( // Naming export
    <a href="/">
      <img
        className="logo"
        src="https://etimg.etb2bimg.com/photo/63298781.cms"
        alt="logo Image"
      />
    </a>
  );
  
export const Header = () => (
    <>
      <div className="listContainer">
        <Title />
        <ul>
          <li>About</li>
          <li>Courses</li>
          <li>Blogs</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </>
  );

