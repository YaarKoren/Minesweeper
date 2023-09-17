import Select from 'react-select';
import '../styles.css';
import { useState, useEffect } from 'react';

export default function SizeSelector( { onSizeSelect } ) {

    const options = [
        { value: 'Beginner', label: 'Beginner (9x9)' },
        { value: 'Intermediate', label: 'Intermediate (16x16)' },
        { value: 'Expert', label: 'Expert(16X30)' }
    ]

    return (
        <h3> Select game level:
            <Select name="selectedLevel"
                    defaultValue={options[0]}
                    options={options}
                    onChange={onSizeSelect} />
        </h3>  
          
        
      );

    
}