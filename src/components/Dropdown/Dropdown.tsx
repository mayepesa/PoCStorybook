import styles from './Dropdown.module.css'


const Dropdown = () => {


  return (
    <div className={styles.dropdown}>
      <a href="#">
        Explore
      </a>
      <div className={styles.menu}>
        <a href="#">Discover</a>
        <a href="#">Popular</a>
        <a href="#">LeaderBoard</a>
        <a href="#">Challenges</a>
        <a href="#">Videos</a>
        <a href="#">Blog</a>
      </div>
    </div>
  );
};

export default Dropdown;
