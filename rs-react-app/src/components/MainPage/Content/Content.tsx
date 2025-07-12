import type { ContentProps } from './Content.types';
import styles from './Content.module.css';

const Content: React.FC<ContentProps> = ({
  characters,
}): React.ReactElement => {
  return (
    <div className={styles.contentWrapper}>
      {characters.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Gender</th>
              <th>Status</th>
              <th>Species</th>
            </tr>
          </thead>
          {characters.map((character) => (
            <tbody key={character.id}>
              <tr>
                <td>
                  <img
                    src={character.image}
                    width="100px"
                    alt={character.name}
                  />
                </td>
                <td>{character.name}</td>
                <td>{character.gender}</td>
                <td>{character.status}</td>
                <td>{character.species}</td>
              </tr>
            </tbody>
          ))}
        </table>
      ) : (
        <p className={styles.noContent}>No characters found.</p>
      )}
    </div>
  );
};
export default Content;
