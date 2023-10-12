import styles from "./cards.module.scss";

export default function AppBadge({ label }) {
    let badgeStyles = {
        backgroundColor: '#E9EFFD', 
        color: '#2563EB',          
      };
    
      if (label === 'completed') {
        badgeStyles.backgroundColor = '#E9FAEF';
        badgeStyles.color = '#24D164'; 
      } else if (label === 'canceled') {
        badgeStyles.backgroundColor = '#FDEDF5';
        badgeStyles.color = '#ED4F9D'; 
      }

  return (
    <div style={badgeStyles} className={styles.badge}>
    <span>{label}</span>
  </div>
  );
}
