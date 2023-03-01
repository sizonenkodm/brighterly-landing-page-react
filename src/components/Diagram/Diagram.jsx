import styles from './Diagram.module.scss';

import DiagramRow from 'UI/DiagramRow';

const Diagram = () => {
    return (
        <div className={styles["diagram"]}>
            <DiagramRow
                content='☺️ $100,900/year'
                label='STEM occupation'
                order='first'
            />
            <DiagramRow
                content='😔 $55,260/year'
                label='Non-STEM occupation'
                order='second'
            />
        </div>
    );
};

export default Diagram;