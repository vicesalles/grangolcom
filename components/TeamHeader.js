import styles from '../styles/TeamHeader.module.scss';

const TeamHeader = ({ name, mainColor, secondColor, textColor }) => {
    const effectiveTextColor = textColor || secondColor;

    return (
      <header
        className={styles.teamHeader}
        style={{ backgroundColor: mainColor, color: effectiveTextColor }}
      >
        <div
          className={styles.teamBadge}
          style={{ backgroundColor: secondColor, color: mainColor }}
          aria-hidden="true"
        >
          <span>{name.charAt(0)}</span>
        </div>
        <h1 className={styles.teamName}>{name}</h1>
      </header>
    );
  };

  export default TeamHeader;
