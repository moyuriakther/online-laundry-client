import React, { useState } from 'react';
import './SelectionArea.css';

const SelectionArea = ({selected, setSelected}) => {
    const [isActive, setIsActive] = useState(false);
    const option = ['react', 'vue', 'angular', 'php'];
    return (
        <div className="selection-area">
            <div className="selection-btn" onClick={e => setIsActive(!isActive)}>{selected}
                <span className="fas fa-caret-down"></span>
            </div>
           {isActive && (
            <div className="selection-content">
                {option.map(option => (
                    <div onClick={e => {
                    setSelected(option)
                    setIsActive(false)
                    }}
                    className="selection-item">
                    {option}</div>
                ))}
            </div>
           ) }
        </div>
    );
};

export default SelectionArea;