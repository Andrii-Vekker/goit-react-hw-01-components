// import PropTypes from 'prop-types';

export default function Statistics({dataStat}) {
       return (
        <section className="statistics">
            <h2 className="title">Upload stats</h2>
            <ul className="stat-list">
                {dataStat.map(i => (
                    <li className="item" key={i.id}>
                        <span className="label">{i.label}</span>
                        <span className="percentage">{i.percentage}</span>
                    </li>
                ))}
            </ul>
        </section>
    
    );
};