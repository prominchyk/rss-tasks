import styles from './Preloader.module.css';

const Preloader: React.FC = (): React.ReactElement => {
  return (
    <div className={styles.container}>
      <div className={styles.ring} />
    </div>
  );
};

export default Preloader;
